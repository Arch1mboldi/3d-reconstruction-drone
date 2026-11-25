import React, { useEffect, useState } from "react";

const empty = () => ({ trajectory: [], ground_truth: [], map_points: [] });

function useLiveState() {
  const [state, setState] = useState(empty);
  useEffect(() => {
    const abort = new AbortController();
    let data = empty(),
      session = "",
      timer;
    async function poll() {
      const params = new URLSearchParams({
        session,
        points: data.map_points.length,
        poses: data.trajectory.length,
      });
      try {
        const response = await fetch("/live/state?" + params, {
          signal: abort.signal,
          cache: "no-store",
        });
        if (!response.ok) throw new Error("Dashboard HTTP " + response.status);
        const packet = await response.json();
        if (session !== packet.session) {
          data = empty();
          session = packet.session;
        }
        if (
          packet.pointStart !== data.map_points.length ||
          packet.poseStart !== data.trajectory.length
        ) {
          data = empty();
          session = "";
          throw new Error("Resynchronizing map");
        }
        for (const [estimate, truth] of packet.poses) {
          data.trajectory.push(estimate);
          data.ground_truth.push(truth);
        }
        for (const point of packet.points) data.map_points.push(point);
        setState({ ...packet, ...data });
      } catch (error) {
        if (!abort.signal.aborted)
          setState((old) => ({
            ...old,
            tracking: "offline",
            message: error.message,
          }));
      } finally {
        if (!abort.signal.aborted) timer = setTimeout(poll, 180);
      }
    }
    poll();
    return () => {
      abort.abort();
      clearTimeout(timer);
    };
  }, []);
  return state;
}

const fmt = (value, digits = 2) =>
  Number.isFinite(value) ? value.toFixed(digits) : "—";

export function LiveDashboard({ Scene, Metric }) {
  const state = useLiveState();
  const online = ["tracking", "lost", "initializing"].includes(state.tracking);
  const [videoAttempt, setVideoAttempt] = useState(0);
  const [fit, setFit] = useState(0);
  return (
    <main>
      <header>
        <h1>3D Reconstruction Drone</h1>
        <div className={"connection " + (online ? "online" : "offline")}>
          <i />
          {online ? "ORANGE PI CONNECTED" : state.message || "CONNECTING"}
        </div>
      </header>
      <section className="status-strip panel">
        <Metric label="ENGINE" value="Laptop stereo VO" />
        <Metric label="TRACKING" value={state.tracking || "waiting"} />
        <Metric label="STEREO PAIRS / S" value={fmt(state.fps, 1)} />
        <Metric label="VO TIME" value={fmt(state.processing_ms, 1) + " ms"} />
        <Metric label="FRAME" value={state.frame ?? "—"} />
        <Metric label="SOURCE RATE" value="20 Hz" />
      </section>
      <section className="workspace">
        <div className="left-column">
          <section className="panel">
            <div className="panel-title">
              <span>CAMERA 0 · LEFT</span>
              <span>CAMERA 1 · RIGHT</span>
            </div>
            <img
              className="stereo-pair"
              src={"/live/stereo.mjpg?v=" + videoAttempt}
              alt="Rectified stereo pair"
              onError={() =>
                setTimeout(() => setVideoAttempt((n) => n + 1), 1200)
              }
            />
          </section>
          <section className="panel viewport-panel">
            <div className="panel-title">
              <span>WORLD VIEW</span>
              <div className="legend">
                <b className="estimate" />
                Estimated <b className="truth" />
                Aligned ground truth
                <b className="points" />
                Map points{" "}
                <button onClick={() => setFit((n) => n + 1)}>Fit map</button>
              </div>
            </div>
            <Scene state={state} fit={fit} />
          </section>
        </div>
        <aside>
          <section className="panel telemetry-panel">
            <div className="panel-title">SLAM TELEMETRY</div>
            <Metric label="Map points" value={state.map_points.length} />
            <Metric label="Tracked features" value={state.features ?? "—"} />
            <Metric label="PnP inliers" value={state.inliers ?? "—"} />
            <Metric
              label="Position error (m)"
              value={fmt(state.position_error_m, 3)}
            />
            <Metric
              label="Trajectory RMSE (m)"
              value={fmt(state.ate_rmse_m, 3)}
            />
            <Metric label="Compared poses" value={state.compared ?? 0} />
            <Metric
              label="Position (m)"
              value={state.position?.map((v) => fmt(v, 2)).join("  ") || "—"}
            />
          </section>
          <section className="panel telemetry-panel">
            <div className="panel-title">EUROC V1_01_EASY</div>
            <Metric label="Wi-Fi image source" value={state.source || "—"} />
          </section>
        </aside>
      </section>
    </main>
  );
}
