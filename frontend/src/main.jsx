import { LiveDashboard } from "./LiveDashboard.jsx";
import { Scene3D } from "./Scene3D.jsx";
import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const DEFAULT_BACKEND = "http://192.168.1.105:8000";
const MDNS_BACKEND = "http://orangepizero3w.local:8000";
const DASHBOARD_BUILD = "camera-ui-2026.11.04";
const emptyState = {
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
  const [connectionRevision, setConnectionRevision] = useState(0);
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
        setConnectionRevision((revision) => revision + 1);
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

  return { state, connected, connectionRevision, network };
}

const fmt = (value, unit = "") =>
  value === null || value === undefined ? "—" : `${typeof value === "number" ? value.toFixed(1) : value}${unit}`;

function Metric({ label, value, accent }) {
  return <div className="metric"><span>{label}</span><strong className={accent || ""}>{value}</strong></div>;
}

function CameraCard({ side, label, endpoint, connectionRevision }) {
  const [attempt, setAttempt] = useState(0);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    setVideoReady(false);
    setAttempt((value) => value + 1);
  }, [endpoint, connectionRevision]);

  const retry = () => {
    setVideoReady(false);
    window.setTimeout(() => setAttempt((value) => value + 1), 1200);
  };

  return (
    <section className="camera-card panel">
      <div className="panel-title"><span>{label}</span><small>WIFI MJPEG · LIVE</small></div>
      <div className="camera-frame">
        <img
          key={`${endpoint}-${side}-${attempt}`}
          src={`${endpoint}/stream/${side}.mjpg?session=${connectionRevision}-${attempt}`}
          alt={`${label} camera stream`}
          onLoad={() => setVideoReady(true)}
          onError={retry}
        />
        {!videoReady && <div className="stream-status">VIDEO RECONNECTING</div>}
        <div className="reticle" />
      </div>
    </section>
  );
}

function App() {
  const [endpoint, setEndpoint] = useState(initialBackend);
  const [endpointDraft, setEndpointDraft] = useState(endpoint);
  const { state, connected, connectionRevision, network } = useBackend(endpoint);
  const hasGroundTruth = (state.ground_truth?.length || 0) > 1;
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
        <div><div className="eyebrow">EECS 159A · LAPTOP DEBUG CONSOLE · {DASHBOARD_BUILD}</div><h1>3D Reconstruction Drone</h1></div>
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
            <CameraCard side="left" label="CAMERA 0 · LEFT" endpoint={endpoint} connectionRevision={connectionRevision} />
            <CameraCard side="right" label="CAMERA 1 · RIGHT" endpoint={endpoint} connectionRevision={connectionRevision} />
          </div>
          <section className="panel viewport-panel">
            <div className="panel-title"><span>WORLD VIEW</span><div className="legend"><b className="estimate" />Estimated {hasGroundTruth && <><b className="truth" />Aligned ground truth</>} <b className="points" />Map points</div></div>
            <Scene3D state={state} />
          </section>
        </div>

        <aside>
          <section className="panel endpoint-panel">
            <div className="panel-title"><span>ORANGE PI ENDPOINT</span><small>Wi‑Fi 6 LAN</small></div>
            <div className="endpoint-form"><input value={endpointDraft} onChange={(event) => setEndpointDraft(event.target.value)} onKeyDown={(event) => event.key === "Enter" && applyEndpoint()} /><button onClick={() => applyEndpoint()}>CONNECT</button></div>
            <div className="endpoint-presets"><button onClick={() => applyEndpoint(DEFAULT_BACKEND)}>192.168.1.105</button><button onClick={() => applyEndpoint(MDNS_BACKEND)}>mDNS</button></div>
          </section>

          <section className="panel telemetry-panel">
            <div className="panel-title"><span>SLAM TELEMETRY</span></div>
            <Metric label="ORB features" value={state.features ?? "—"} />
            <Metric label="Stereo depths" value={state.stereo_points ?? "—"} />
            <Metric label="PnP inliers" value={state.inliers ?? "—"} />
            <Metric label="Map points" value={state.map_points?.length ?? 0} />
            {hasGroundTruth && <Metric label="Position error" value={fmt(state.position_error_m, " m")} />}
            {hasGroundTruth && <Metric label="ATE RMSE" value={fmt(state.ate_rmse_m, " m")} />}
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
      <footer>LAPTOP UI · WIFI DATA PLANE · ORANGE PI ON-BOARD STEREO VO · LIVE STEREO INPUT</footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(new URLSearchParams(location.search).has("legacy") ? <App /> : <LiveDashboard Scene={Scene3D} Metric={Metric} />);
