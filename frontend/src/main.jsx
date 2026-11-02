import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import "./styles.css";

const DEFAULT_BACKEND = "http://192.168.1.105:8000";
const MDNS_BACKEND = "http://orangepizero3w.local:8000";
const emptyState = {
  playing: false,
  frame: 0,
  frame_count: 0,
  trajectory: [],
  ground_truth: [],
  map_points: [],
  logs: [],
  device: {},
  transport: {},
};

const normalizeBackend = (value) => {
  const withScheme = /^https?:\/\//i.test(value.trim()) ? value.trim() : `http://${value.trim()}`;
  return withScheme.replace(/\/+$/, "");
};

const initialBackend = () => {
  const query = new URLSearchParams(window.location.search).get("backend");
  return normalizeBackend(query || localStorage.getItem("orangepi-backend") || DEFAULT_BACKEND);
};

function useBackend(endpoint) {
  const [state, setState] = useState(emptyState);
  const [connected, setConnected] = useState(false);
  const [network, setNetwork] = useState({ rtt_ms: null, telemetry_kbps: 0, message_hz: 0, disconnects: 0 });
  const socketRef = useRef(null);

  useEffect(() => {
    let stopped = false;
    let retry;
    let pingTimer;
    let metricTimer;
    let byteCount = 0;
    let messageCount = 0;
    let disconnects = 0;

    setConnected(false);
    setState(emptyState);
    setNetwork({ rtt_ms: null, telemetry_kbps: 0, message_hz: 0, disconnects: 0 });

    const connect = () => {
      const socket = new WebSocket(endpoint.replace(/^http/i, "ws") + "/ws");
      socketRef.current = socket;
      socket.onopen = () => {
        setConnected(true);
        pingTimer = setInterval(() => {
          if (socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify({ type: "ping", client_time_ms: performance.now() }));
          }
        }, 1000);
      };
      socket.onmessage = (event) => {
        byteCount += new Blob([event.data]).size;
        messageCount += 1;
        try {
          const packet = JSON.parse(event.data);
          if (packet.type === "pong") {
            const rtt = Math.max(0, performance.now() - Number(packet.client_time_ms));
            setNetwork((current) => ({ ...current, rtt_ms: rtt }));
          } else if (packet.type === "state") {
            setState(packet);
          }
        } catch {
          // Ignore one malformed packet without taking down the dashboard.
        }
      };
      socket.onclose = () => {
        clearInterval(pingTimer);
        setConnected(false);
        if (!stopped) {
          disconnects += 1;
          setNetwork((current) => ({ ...current, disconnects }));
          retry = setTimeout(connect, 1200);
        }
      };
      socket.onerror = () => socket.close();
    };

    metricTimer = setInterval(() => {
      setNetwork((current) => ({
        ...current,
        telemetry_kbps: (byteCount * 8) / 1000,
        message_hz: messageCount,
      }));
      byteCount = 0;
      messageCount = 0;
    }, 1000);
    connect();
    return () => {
      stopped = true;
      clearTimeout(retry);
      clearInterval(pingTimer);
      clearInterval(metricTimer);
      socketRef.current?.close();
    };
  }, [endpoint]);

  const command = (action, value) => {
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify({ type: "control", action, value }));
    }
  };
  return { state, connected, network, command };
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

    scene.add(new THREE.GridHelper(30, 30, 0x24475b, 0x122631));
    scene.add(new THREE.AxesHelper(1.2));
    const estimated = new THREE.Line(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({ color: 0x31e6a1 }));
    const truth = new THREE.Line(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({ color: 0xffb24a }));
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
  return <div className="metric"><span>{label}</span><strong className={accent || ""}>{value}</strong></div>;
}

function CameraCard({ side, label, endpoint }) {
  return (
    <section className="camera-card panel">
      <div className="panel-title"><span>{label}</span><small>WIFI MJPEG · 752×480 · 10 FPS</small></div>
      <div className="camera-frame">
        <img key={`${endpoint}-${side}`} src={`${endpoint}/stream/${side}.mjpg`} alt={`${label} camera stream`} />
        <div className="reticle" />
      </div>
    </section>
  );
}

function App() {
  const [endpoint, setEndpoint] = useState(initialBackend);
  const [endpointDraft, setEndpointDraft] = useState(endpoint);
  const { state, connected, network, command } = useBackend(endpoint);
  const progress = state.frame_count ? (100 * state.frame) / state.frame_count : 0;
  const trackingClass = state.tracking === "tracking" ? "good" : state.tracking === "lost" ? "bad" : "warn";
  const applyEndpoint = (value = endpointDraft) => {
    const normalized = normalizeBackend(value);
    localStorage.setItem("orangepi-backend", normalized);
    setEndpointDraft(normalized);
    setEndpoint(normalized);
  };

  return (
    <main>
      <header>
        <div><div className="eyebrow">EECS 159A · LAPTOP DEBUG CONSOLE</div><h1>3D Reconstruction Drone</h1></div>
        <div className={`connection ${connected ? "online" : "offline"}`}><i />{connected ? "ORANGE PI CONNECTED" : "RECONNECTING"}</div>
      </header>

      <section className="status-strip panel">
        <Metric label="ENGINE" value={state.engine_label || "Waiting"} />
        <Metric label="TRACKING" value={(state.tracking || "idle").toUpperCase()} accent={trackingClass} />
        <Metric label="PROCESS" value={fmt(state.processing_fps, " FPS")} />
        <Metric label="RTT" value={fmt(network.rtt_ms, " ms")} />
        <Metric label="CPU" value={fmt(state.device?.cpu_percent, "%")} />
        <Metric label="TEMP" value={fmt(state.device?.temperature_c, "°C")} accent={(state.device?.temperature_c || 0) > 75 ? "bad" : ""} />
      </section>

      <section className="workspace">
        <div className="left-column">
          <div className="camera-grid">
            <CameraCard side="left" label="CAMERA 0 · LEFT" endpoint={endpoint} />
            <CameraCard side="right" label="CAMERA 1 · RIGHT" endpoint={endpoint} />
          </div>
          <section className="panel viewport-panel">
            <div className="panel-title"><span>WORLD VIEW</span><div className="legend"><b className="estimate" />Estimated <b className="truth" />Aligned ground truth <b className="points" />Map points</div></div>
            <Scene3D state={state} />
          </section>
        </div>

        <aside>
          <section className="panel endpoint-panel">
            <div className="panel-title"><span>ORANGE PI ENDPOINT</span><small>Wi‑Fi 6 LAN</small></div>
            <div className="endpoint-form"><input value={endpointDraft} onChange={(event) => setEndpointDraft(event.target.value)} onKeyDown={(event) => event.key === "Enter" && applyEndpoint()} /><button onClick={() => applyEndpoint()}>CONNECT</button></div>
            <div className="endpoint-presets"><button onClick={() => applyEndpoint(DEFAULT_BACKEND)}>192.168.1.105</button><button onClick={() => applyEndpoint(MDNS_BACKEND)}>mDNS</button></div>
          </section>

          <section className="panel control-panel">
            <div className="panel-title"><span>REPLAY CONTROL</span><small>{state.dataset || "EuRoC"}</small></div>
            <div className="button-row"><button className="primary" onClick={() => command(state.playing ? "pause" : "play")}>{state.playing ? "PAUSE" : "PLAY"}</button><button onClick={() => command("reset")}>RESET</button></div>
            <label className="speed">SPEED<select value={state.speed || 1} onChange={(e) => command("speed", Number(e.target.value))}>{[0.25, 0.5, 1, 2, 4].map((v) => <option key={v} value={v}>{v}×</option>)}</select></label>
            <div className="progress"><i style={{ width: `${progress}%` }} /></div>
            <div className="frame-count">FRAME {state.frame || 0} / {state.frame_count || 0}</div>
          </section>

          <section className="panel telemetry-panel">
            <div className="panel-title"><span>SLAM TELEMETRY</span></div>
            <Metric label="ORB features" value={state.features ?? "—"} />
            <Metric label="Stereo depths" value={state.stereo_points ?? "—"} />
            <Metric label="PnP inliers" value={state.inliers ?? "—"} />
            <Metric label="Map points" value={state.map_points?.length ?? 0} />
            <Metric label="Position error" value={fmt(state.position_error_m, " m")} />
            <Metric label="ATE RMSE" value={fmt(state.ate_rmse_m, " m")} />
            <div className="pose"><span>POSITION · METRES</span><code>{state.position ? state.position.map((v) => Number(v).toFixed(3)).join("   ") : "—   —   —"}</code></div>
          </section>

          <section className="panel telemetry-panel">
            <div className="panel-title"><span>WIFI TRANSPORT</span><small>SSH NOT IN DATA PATH</small></div>
            <Metric label="Round trip" value={fmt(network.rtt_ms, " ms")} />
            <Metric label="Telemetry" value={fmt(network.telemetry_kbps, " kbps")} />
            <Metric label="Messages" value={fmt(network.message_hz, " Hz")} />
            <Metric label="Video estimate" value={fmt(state.transport?.video_estimated_kbps, " kbps")} />
            <Metric label="Disconnects" value={network.disconnects} />
          </section>

          <section className="panel logs-panel">
            <div className="panel-title"><span>EVENT LOG</span><small>LIVE</small></div>
            <div className="logs">{(state.logs || []).slice().reverse().map((entry, i) => <div className="log" key={`${entry.time}-${i}`}><time>{entry.time}</time><span>{entry.message}</span></div>)}</div>
          </section>
        </aside>
      </section>
      <footer>LAPTOP UI · WIFI DATA PLANE · ORANGE PI ON-BOARD STEREO VO · EuRoC V1_01_easy</footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
