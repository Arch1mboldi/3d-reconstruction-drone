import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import "./styles.css";

const emptyState = {
  playing: false,
  frame: 0,
  frame_count: 0,
  trajectory: [],
  ground_truth: [],
  map_points: [],
  logs: [],
  device: {},
};

function useBackend() {
  const [state, setState] = useState(emptyState);
  const [connected, setConnected] = useState(false);
  const socketRef = useRef(null);

  useEffect(() => {
    let stopped = false;
    let retry;
    const connect = () => {
      const scheme = location.protocol === "https:" ? "wss" : "ws";
      const socket = new WebSocket(`${scheme}://${location.host}/ws`);
      socketRef.current = socket;
      socket.onopen = () => setConnected(true);
      socket.onmessage = (event) => {
        try {
          setState(JSON.parse(event.data));
        } catch {
          // A malformed telemetry packet should not take down the dashboard.
        }
      };
      socket.onclose = () => {
        setConnected(false);
        if (!stopped) retry = setTimeout(connect, 1200);
      };
      socket.onerror = () => socket.close();
    };
    connect();
    return () => {
      stopped = true;
      clearTimeout(retry);
      socketRef.current?.close();
    };
  }, []);

  const command = (action, value) => {
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify({ type: "control", action, value }));
    }
  };
  return { state, connected, command };
}

function setLine(line, points, color) {
  const geometry = new THREE.BufferGeometry().setFromPoints(
    points.map(([x, y, z]) => new THREE.Vector3(x, z, -y)),
  );
  line.geometry.dispose();
  line.geometry = geometry;
  line.material.color.set(color);
}

function Scene3D({ state }) {
  const host = useRef(null);
  const sceneApi = useRef(null);

  useEffect(() => {
    const element = host.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x071017);
    scene.fog = new THREE.FogExp2(0x071017, 0.016);
    const camera = new THREE.PerspectiveCamera(55, 1, 0.01, 500);
    camera.position.set(7, 6, 8);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    element.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.target.set(0, 0, 0);

    scene.add(new THREE.GridHelper(30, 30, 0x24475b, 0x122631));
    scene.add(new THREE.AxesHelper(1.2));
    const estimated = new THREE.Line(
      new THREE.BufferGeometry(),
      new THREE.LineBasicMaterial({ color: 0x31e6a1 }),
    );
    const truth = new THREE.Line(
      new THREE.BufferGeometry(),
      new THREE.LineBasicMaterial({ color: 0xffb24a, transparent: true, opacity: 0.85 }),
    );
    const cloud = new THREE.Points(
      new THREE.BufferGeometry(),
      new THREE.PointsMaterial({ color: 0x5cb9ff, size: 0.025, sizeAttenuation: true }),
    );
    const body = new THREE.Group();
    const cone = new THREE.Mesh(
      new THREE.ConeGeometry(0.14, 0.38, 4),
      new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true }),
    );
    cone.rotation.x = Math.PI / 2;
    body.add(cone);
    scene.add(estimated, truth, cloud, body);
    sceneApi.current = { estimated, truth, cloud, body };

    const resize = () => {
      const { clientWidth, clientHeight } = element;
      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / Math.max(clientHeight, 1);
      camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(element);
    resize();

    let frame;
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      renderer.dispose();
      element.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    const api = sceneApi.current;
    if (!api) return;
    setLine(api.estimated, state.trajectory || [], 0x31e6a1);
    setLine(api.truth, state.ground_truth || [], 0xffb24a);
    const pointGeometry = new THREE.BufferGeometry().setFromPoints(
      (state.map_points || []).map(([x, y, z]) => new THREE.Vector3(x, z, -y)),
    );
    api.cloud.geometry.dispose();
    api.cloud.geometry = pointGeometry;
    if (state.position) {
      const [x, y, z] = state.position;
      api.body.position.set(x, z, -y);
    }
  }, [state.trajectory, state.ground_truth, state.map_points, state.position]);

  return <div className="scene" ref={host} />;
}

const fmt = (value, unit = "") =>
  value === null || value === undefined ? "—" : `${typeof value === "number" ? value.toFixed(1) : value}${unit}`;

function Metric({ label, value, accent }) {
  return (
    <div className="metric">
      <span>{label}</span>
      <strong className={accent || ""}>{value}</strong>
    </div>
  );
}

function CameraCard({ side, label }) {
  return (
    <section className="camera-card panel">
      <div className="panel-title"><span>{label}</span><small>RECTIFIED · 752×480</small></div>
      <div className="camera-frame">
        <img src={`/stream/${side}.mjpg`} alt={`${label} camera stream`} />
        <div className="reticle" />
      </div>
    </section>
  );
}

function App() {
  const { state, connected, command } = useBackend();
  const progress = state.frame_count ? (100 * state.frame) / state.frame_count : 0;
  const trackingClass = state.tracking === "tracking" ? "good" : state.tracking === "lost" ? "bad" : "warn";

  return (
    <main>
      <header>
        <div>
          <div className="eyebrow">EECS 159A · LIVE DEBUG CONSOLE</div>
          <h1>3D Reconstruction Drone</h1>
        </div>
        <div className={`connection ${connected ? "online" : "offline"}`}>
          <i /> {connected ? "ORANGE PI CONNECTED" : "RECONNECTING"}
        </div>
      </header>

      <section className="status-strip panel">
        <Metric label="ENGINE" value={state.engine_label || "Waiting"} />
        <Metric label="TRACKING" value={(state.tracking || "idle").toUpperCase()} accent={trackingClass} />
        <Metric label="PROCESS" value={fmt(state.processing_fps, " FPS")} />
        <Metric label="LATENCY" value={fmt(state.processing_ms, " ms")} />
        <Metric label="CPU" value={fmt(state.device?.cpu_percent, "%")} />
        <Metric label="TEMP" value={fmt(state.device?.temperature_c, "°C")} accent={(state.device?.temperature_c || 0) > 75 ? "bad" : ""} />
      </section>

      <section className="workspace">
        <div className="left-column">
          <div className="camera-grid">
            <CameraCard side="left" label="CAMERA 0 · LEFT" />
            <CameraCard side="right" label="CAMERA 1 · RIGHT" />
          </div>
          <section className="panel viewport-panel">
            <div className="panel-title">
              <span>WORLD VIEW</span>
              <div className="legend"><b className="estimate" />Estimated <b className="truth" />Ground truth <b className="points" />Map points</div>
            </div>
            <Scene3D state={state} />
          </section>
        </div>

        <aside>
          <section className="panel control-panel">
            <div className="panel-title"><span>REPLAY CONTROL</span><small>{state.dataset || "EuRoC"}</small></div>
            <div className="button-row">
              <button className="primary" onClick={() => command(state.playing ? "pause" : "play")}>{state.playing ? "PAUSE" : "PLAY"}</button>
              <button onClick={() => command("reset")}>RESET</button>
            </div>
            <label className="speed">SPEED
              <select value={state.speed || 1} onChange={(e) => command("speed", Number(e.target.value))}>
                {[0.25, 0.5, 1, 2, 4].map((v) => <option key={v} value={v}>{v}×</option>)}
              </select>
            </label>
            <div className="progress"><i style={{ width: `${progress}%` }} /></div>
            <div className="frame-count">FRAME {state.frame || 0} / {state.frame_count || 0}</div>
          </section>

          <section className="panel telemetry-panel">
            <div className="panel-title"><span>SLAM TELEMETRY</span></div>
            <Metric label="ORB features" value={state.features ?? "—"} />
            <Metric label="Stereo depths" value={state.stereo_points ?? "—"} />
            <Metric label="PnP inliers" value={state.inliers ?? "—"} />
            <Metric label="Map points" value={state.map_points?.length ?? 0} />
            <Metric label="Baseline" value={state.baseline_m ? `${(state.baseline_m * 100).toFixed(2)} cm` : "—"} />
            <Metric label="Memory" value={fmt(state.device?.memory_percent, "%")} />
            <div className="pose">
              <span>POSITION · METRES</span>
              <code>{state.position ? state.position.map((v) => Number(v).toFixed(3)).join("   ") : "—   —   —"}</code>
            </div>
          </section>

          <section className="panel logs-panel">
            <div className="panel-title"><span>EVENT LOG</span><small>LIVE</small></div>
            <div className="logs">
              {(state.logs || []).slice().reverse().map((entry, i) => (
                <div className="log" key={`${entry.time}-${i}`}><time>{entry.time}</time><span>{entry.message}</span></div>
              ))}
            </div>
          </section>
        </aside>
      </section>
      <footer>SIMULATION SOURCE: EuRoC MAV · ESTIMATE: ON-BOARD STEREO VO · REFERENCE: DATASET GROUND TRUTH</footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
