# Architecture

## Runtime data flow

```text
EuRoC replay (today) / dual IMX219 capture (later)
                 │
                 ▼
         rectification + timestamps
                 │
        Orange Pi Zero 3W
                 │
        ┌────────┴─────────┐
        ▼                  ▼
pluggable pose engine   JPEG encoder
├── stereo_vo (MVP)     left/right, quality 72
├── ORB-SLAM3 (planned)        │
└── VINS-Fusion (planned)      │
        │                       │
        ▼                       ▼
WebSocket /ws, 5 Hz      HTTP MJPEG, 10 FPS
pose/map/control/ping     /stream/left + right
        │                       │
        └──────────┬────────────┘
                   │ Wi-Fi 6 LAN
                   │ SSH is not in this path
                   ▼
        Windows laptop local frontend
          http://127.0.0.1:5173
             React + Three.js
```

The first engine is deliberately labelled **Stereo VO front end**. It estimates motion
from stereo depth and temporal ORB matches with PnP-RANSAC. It does not claim loop
closure or global bundle adjustment. The transport protocol keeps the engine name in
every telemetry packet so a later ORB-SLAM3 or VINS-Fusion process can replace it
without redesigning the UI.

The laptop owns and serves the UI. The Orange Pi root endpoint returns backend
identity JSON and never serves the React bundle. The two runtime channels are
independent so a slow video reader cannot block pose/control telemetry. WebSocket
ping/pong supplies round-trip time; client-side byte and message counters report
telemetry load, while the board reports estimated JPEG bitrate.

The board backend is managed by `3d-reconstruction-drone.service`. It starts at
boot, binds `0.0.0.0:8000`, and waits in a paused replay state. The laptop launcher
binds only `127.0.0.1:5173`. Disconnecting SSH has no effect on either data channel.

## Interface boundary for the real cameras

Only the replay source knows about EuRoC paths. A real source will provide the same
tuple: `(timestamp_ns, rectified_left, rectified_right)`. The odometry engine, JPEG
preview, telemetry protocol and dashboard remain unchanged.

## Inspiration

- VINS-Fusion: separate estimator, loop-fusion and global-fusion responsibilities.
- ORB-SLAM3: explicit tracking state, camera trajectory and sparse map products.
- Foxglove-style debugging: synchronized visual panels, 3D world view and telemetry.
