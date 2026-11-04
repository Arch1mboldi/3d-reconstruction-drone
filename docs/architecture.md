# Architecture review and replacement plan (2026-11-04)

This is a **target design**, not a description of deployed software. The current prototype still runs Python stereo VO on the Orange Pi and React/Vite on the laptop.

## Runtime boundary

```text
Two IMX219 -> V4L2 -> Orange Pi capture/packetizer -> one stereo RTP/UDP stream
  -> ordinary Wi-Fi/IP -> laptop receiver -> OpenCV rectification -> stereo SLAM
  -> trajectory/map + recordings -> localhost HTML/JS/Three.js dashboard
```

The board only acquires, timestamps, pairs and transmits images. It runs no SLAM, rectification, feature extraction or mapping. The laptop runs one C++ process for receive, SLAM, recording and a local HTTP/WebSocket server. Use C++17, CMake, V4L2, GStreamer, OpenCV, Boost.Beast for localhost HTTP/WebSocket, and a maintained stereo SLAM library. stella_vslam is the leading candidate because its current repository supports stereo and has recent maintenance. Pin and test exact versions during implementation. Its IMU integration remains in development; the first version is camera-only. Use native browser modules and a pinned Three.js file. No Python, ROS, React, Vite, Node or database is required by the target runtime.

A separate flight controller must stabilize the aircraft and provide failsafe. SLAM crashing cannot be allowed to stop flight control. The initial dashboard sends no flight commands. Add MAVLink UDP only when a real flight controller is selected and integrated; MAVLink does not carry images. 3DGS is a later offline laptop job based on high-quality keyframes and calibrated poses, not the sparse SLAM map.

## Transport and resource policy

Use a single side-by-side stereo frame with one capture timestamp and pair ID, carried by standard GStreamer RTP/UDP over the board's ordinary Wi-Fi. This makes pair identity explicit. Test independently decodable JPEG first. Use hardware H.264 only after verifying that the actual board image exposes a working encoder, lowers CPU, and preserves enough visual detail. A codec choice is provisional until measured. SSH is for deployment and diagnosis only.

The laptop uses a bounded queue of one or two pairs and drops stale input rather than accumulating delay. It checks frame IDs, gaps and decode failures. One-way delay requires synchronized clocks; otherwise display receive age and round-trip time separately. Keep image format, dimensions, FPS and quality in one configuration file. Save original-quality keyframe pairs independently of the preview encoding when later 3DGS is in scope.

## Dual IMX219 hardware gate

Public material disagrees about the Zero 3W's exposed CSI connectors. SoC capability, connector count and working dual capture are different claims. Before buying two sensors or promising live stereo:

1. Inspect the exact board revision, schematic, connector pinout, cable orientation, power and clock.
2. Confirm the running kernel's IMX219 driver and **both** device-tree endpoints with `media-ctl -p` and `v4l2-ctl --list-devices`.
3. Capture both cameras simultaneously for ten minutes. Record kernel timestamps, dropped frames and exposure settings.
4. Measure exposure offset and drift with a flashing LED. Nearest-timestamp pairing is not hardware synchronization.
5. Calibrate the mounted rig and measure reprojection and epipolar error. IMX219 rolling shutter can degrade fast drone motion.

If the gate fails, use a Linux V4L2-compatible synchronized stereo module or bridge. Avoid a bespoke unmaintained kernel driver.

## Recording and debugging

Each run creates one session directory with a manifest (software revision, board/OS, camera, calibration checksum, settings), board and laptop logs, structured events, per-frame CSV metrics, TUM-format estimated trajectory, optional EuRoC truth, and high-quality paired keyframes. Full video recording is opt-in. Explicitly record errors from camera, link, decoder and SLAM. The board systemd journal remains the source for process crashes. Track free disk space and never silently delete experiment data.

The browser is read-only at first: synchronized left/right images, actual tracking state, trajectory/map, link counters, processing times and recent events. It connects to `127.0.0.1` on the laptop. The laptop has one start/stop command. On the board, `drone-restart`, `drone-status`, and `drone-logs` wrap systemd. A command run through board SSH cannot directly restart the laptop process.

## Acceptance sequence

1. Run EuRoC directly on the laptop for a reproducible SLAM baseline.
2. Replay EuRoC on the board through the real Wi-Fi receive path and compare pair IDs, poses and resource use.
3. Verify each physical camera, then dual capture and synchronization.
4. Bench-test stationary and slow motion. Measure board CPU, encoding cost, Wi-Fi throughput, drops, queue age, tracking rate and recording integrity. Choose resolution/FPS from those measurements.
5. Fly only after separate flight-control and failsafe commissioning. Treat SLAM pose as advisory until validated.

## Review of the existing prototype

Board-side ORB/PnP consumes CPU needed for capture and transmission. The algorithm is VO, without loop closure or global optimization. Two independent MJPEG URLs and a WebSocket create three timing paths and do not prove the displayed pair matches the tracked pair. React/Vite/Node add start-up steps to a fixed dashboard. Dataset ground truth is a benchmark reference, not live camera telemetry. ORB-SLAM3 and VINS-Fusion were previously listed without integration or maintenance verification.

## Primary references

- [Linux V4L2 camera API](https://docs.kernel.org/userspace-api/media/v4l/v4l2.html)
- [GStreamer RTP](https://gstreamer.freedesktop.org/documentation/rtp/index.html)
- [QGroundControl video receiver](https://github.com/mavlink/qgroundcontrol/blob/master/src/VideoManager/VideoReceiver/GStreamer/README.md)
- [stella_vslam](https://github.com/stella-cv/stella_vslam)
- [OpenCV](https://docs.opencv.org/4.x/)
- [Boost.Beast](https://www.boost.org/library/latest/beast/)
- [Three.js ES modules](https://threejs.org/manual/pages/fundamentals.html)
- [mavlink-router](https://github.com/mavlink-router/mavlink-router)
- [EuRoC dataset](https://projects.asl.ethz.ch/datasets/doku.php?id=kmavvisualinertialdatasets)
