# Architecture

## Runtime data flow

```text
EuRoC replay (today) / dual IMX219 capture (later)
                 │
                 ▼
         rectification + timestamps
                 │
                 ├── JPEG preview ───────────────┐
                 │                               │
                 ▼                               ▼
        pluggable pose engine             MJPEG endpoints
        ├── stereo_vo (MVP)                      │
        ├── ORB-SLAM3 adapter (planned)          │
        └── VINS-Fusion adapter (planned)        │
                 │                               │
                 ▼                               ▼
      pose + sparse map + metrics ─────── WebSocket
                                                 │ Wi-Fi
                                                 ▼
                                  React + Three.js dashboard
```

The first engine is deliberately labelled **Stereo VO front end**. It estimates motion
from stereo depth and temporal ORB matches with PnP-RANSAC. It does not claim loop
closure or global bundle adjustment. The transport protocol keeps the engine name in
every telemetry packet so a later ORB-SLAM3 or VINS-Fusion process can replace it
without redesigning the UI.

## Interface boundary for the real cameras

Only the replay source knows about EuRoC paths. A real source will provide the same
tuple: `(timestamp_ns, rectified_left, rectified_right)`. The odometry engine, JPEG
preview, telemetry protocol and dashboard remain unchanged.

## Inspiration

- VINS-Fusion: separate estimator, loop-fusion and global-fusion responsibilities.
- ORB-SLAM3: explicit tracking state, camera trajectory and sparse map products.
- Foxglove-style debugging: synchronized visual panels, 3D world view and telemetry.
