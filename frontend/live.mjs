import { spawn } from "node:child_process";

import { createInterface } from "node:readline";
import { mkdirSync, createWriteStream } from "node:fs";
import { randomUUID } from "node:crypto";
import { setTimeout as sleep } from "node:timers/promises";
import { Matrix4 } from "three";
import { Reference } from "./ground-truth.mjs";

const source = process.env.DRONE_FEED || "http://192.168.1.105:8001";
const clients = new Set();
let session, poses, points, status, latest;
function reset() {
  session = randomUUID();
  poses = [];
  points = [];
  latest = null;
  status = { tracking: "waiting", source, target_hz: 20 };
}
reset();

async function get(path) {
  const response = await fetch(source + "/" + path, {
    signal: AbortSignal.timeout(12000),
  });
  if (!response.ok) throw new Error(path + ": HTTP " + response.status);
  return response;
}

function startWorker(config) {
  const k = config.K.data;
  const args = [k[0], k[4], k[2], k[5], config.baseline].map(String);
  if (process.platform === "win32")
    return spawn(
      "wsl.exe",
      [
        "-e",
        "sh",
        "-c",
        'exec "$HOME/.local/bin/drone-dashboard-vo" "$@"',
        "vo",
        ...args,
      ],
      { stdio: ["pipe", "pipe", "inherit"], windowsHide: true },
    );
  return spawn("drone-dashboard-vo", args, {
    stdio: ["pipe", "pipe", "inherit"],
  });
}

function publishImage(jpeg) {
  latest = Buffer.concat([
    Buffer.from(
      "--pair\r\nContent-Type: image/jpeg\r\nContent-Length: " +
        jpeg.length +
        "\r\n\r\n",
    ),
    jpeg,
    Buffer.from("\r\n"),
  ]);
  for (const client of clients)
    if (!client.writableNeedDrain) client.write(latest);
}

// A small bounded lookahead absorbs Wi-Fi latency. Return frames in capture order.
async function* images(stamps) {
  const pending = [];
  let index = 0;
  while (index < stamps.length || pending.length) {
    while (index < stamps.length && pending.length < 8) {
      const name = stamps[index++] + ".jpg";
      pending.push(
        get(name)
          .then((r) => r.arrayBuffer())
          .then((bytes) => Buffer.from(bytes))
          .catch((error) => ({ error })),
      );
    }
    const frame = await pending.shift();
    if (frame.error) throw frame.error;
    yield frame;
  }
}

async function run(stamps, config, csv) {
  reset();
  const reference = new Reference(csv, config.body_from_rect.data);
  const worker = startWorker(config);
  let workerError;
  worker.on("error", (error) => {
    workerError = error;
  });
  worker.stdin.on("error", (error) => {
    workerError = error;
  });
  const output = createInterface({ input: worker.stdout })[
    Symbol.asyncIterator
  ]();
  mkdirSync("sessions", { recursive: true });
  const log = createWriteStream("sessions/" + session + ".csv");
  log.write(
    "frame,timestamp_ns,tracking,x,y,z,gt_x,gt_y,gt_z,error_m,rmse_m,map_points,worker_ms,publish_ms\n",
  );
  const recent = [];
  let index = 0,
    nextTime = performance.now();
  try {
    for await (const jpeg of images(stamps)) {
      if (workerError) throw workerError;
      const length = Buffer.alloc(4);
      length.writeUInt32LE(jpeg.length);
      const start = performance.now();
      worker.stdin.write(length);
      worker.stdin.write(jpeg);
      const result = await output.next();
      if (result.done)
        throw (
          workerError ||
          new Error("Laptop VO exited; check the dashboard console")
        );
      const frame = JSON.parse(result.value);
      const processing = performance.now() - start;
      const tracked = frame.tracking !== "lost";
      const [x, y, z] = frame.position;
      const r = frame.rotation;
      const pose = new Matrix4().set(
        r[0],
        r[1],
        r[2],
        x,
        r[3],
        r[4],
        r[5],
        y,
        r[6],
        r[7],
        r[8],
        z,
        0,
        0,
        0,
        1,
      );
      const comparison = reference.compare(
        stamps[index],
        tracked ? pose : null,
      );
      // Preserve the capture clock across short scheduling delays. Rebase after a long stall.
      if (index) {
        const gap =
          Number(BigInt(stamps[index]) - BigInt(stamps[index - 1])) / 1e6;
        nextTime += gap;
        if (performance.now() - nextTime > 4 * gap) nextTime = performance.now();
        const wait = nextTime - performance.now();
        if (wait > 0) await sleep(wait);
      } else nextTime = performance.now();
      const now = performance.now();
      recent.push(now);
      if (recent.length > 101) recent.shift();
      poses.push([tracked ? frame.position : null, comparison.truth || null]);
      points.push(...frame.points);
      status = {
        source,
        frame: index + 1,
        frame_count: stamps.length,
        tracking: frame.tracking,
        position: tracked ? frame.position : null,
        features: frame.features,
        inliers: frame.inliers,
        processing_ms: processing,
        fps:
          recent.length > 1
            ? (1000 * (recent.length - 1)) / (now - recent[0])
            : null,
        position_error_m: comparison.error,
        ate_rmse_m: reference.count
          ? Math.sqrt(reference.squaredError / reference.count)
          : null,
        compared: reference.count,
      };
      publishImage(jpeg);
      log.write(
        [
          index,
          stamps[index],
          frame.tracking,
          ...(tracked ? frame.position : ["", "", ""]),
          ...(comparison.truth || ["", "", ""]),
          comparison.error,
          comparison.rmse,
          points.length,
          processing,
          now,
        ].join(",") + "\n",
      );
      index++;
    }
  } finally {
    worker.stdin.end();
    worker.kill();
    log.end();
  }
}

export async function startFeed() {
  while (true) {
    try {
      const [index, config, csv] = await Promise.all([
        get("frames.txt").then((r) => r.text()),
        get("calibration.json").then((r) => r.json()),
        get("truth.csv").then((r) => r.text()),
      ]);
      const stamps = index.trim().split(/\s+/);
      if (stamps.some((t) => !/^\d+$/.test(t)))
        throw new Error("Invalid frame index");
      await run(stamps, config, csv);
    } catch (error) {
      status = { ...status, tracking: "offline", message: error.message };
      console.error(error.message);
      await sleep(3000);
    }
  }
}

export function liveRoute(url, request, response) {
  if (url.pathname === "/live/stereo.mjpg") {
    response.writeHead(200, {
      "Content-Type": "multipart/x-mixed-replace; boundary=pair",
      "Cache-Control": "no-store",
    });
    response.flushHeaders();
    clients.add(response);
    if (latest) response.write(latest);
    response.on("close", () => clients.delete(response));
    return true;
  }
  if (url.pathname !== "/live/state") return false;
  const same = url.searchParams.get("session") === session;
  const cursor = (name, total) => {
    const n = Number(url.searchParams.get(name));
    return same && Number.isInteger(n) && n >= 0 && n <= total ? n : 0;
  };
  const pointStart = cursor("points", points.length),
    poseStart = cursor("poses", poses.length);
  response.writeHead(200, {
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
  });
  response.end(
    JSON.stringify({
      ...status,
      session,
      pointStart,
      poseStart,
      pointCount: points.length,
      poseCount: poses.length,
      points: points.slice(pointStart),
      poses: poses.slice(poseStart),
    }),
  );
  return true;
}
