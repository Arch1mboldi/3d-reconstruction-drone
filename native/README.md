# Native transport milestone

This directory is the first **working transport slice** of the new architecture.
It is not yet the complete SLAM application. The existing Python/React prototype
is still deployed on the board. The programs here do not run Python or Node.

`drone_sender` reads timestamp-matched EuRoC `cam0`/`cam1` images, combines each
pair side by side, and sends one JPEG/RTP/UDP stream. It performs no SLAM.
`drone_receiver` decodes that stream on the laptop and records reception intervals
to `receive.csv`, plus sample left/right JPEGs. It does not infer source packet
loss or one-way latency because OpenCV's video API does not expose RTP sequence
numbers or original capture timestamps. These fields must be added at the
GStreamer API boundary before the stream is used for calibrated SLAM logging.

Build on Linux with CMake, a C++17 compiler, OpenCV development headers built
with GStreamer support, and GStreamer's `jpegenc`, `rtpjpegpay`, `rtpjpegdepay`,
`jpegdec`, `videoconvert`, `appsrc`, `appsink`, and UDP plugins:

```bash
cmake -S native -B native/build
cmake --build native/build -j2
```

Start the receiver on the laptop first:

```bash
native/build/drone_receiver sessions/wifi-smoke 5600 200
```

Then start the sender on the Orange Pi, replacing the laptop IP:

```bash
native/build/drone_sender data/EuRoC/V1_01_easy/mav0 192.168.1.134 5600 10
```

For a ten-second local transport test with synthetic images:

```bash
native/build/drone_sender synthetic 127.0.0.1 5600 30
```

The synthetic source diagnoses the transport only; it is not a SLAM benchmark.
`receive.csv` reports receive intervals rather than true decode time. The
receiver currently ends when `max-frames` is reached. Omitting it listens until
interrupted. RTP over UDP has no authentication; use a trusted local network.

Next implementation gates: board build and actual Wi-Fi test; GStreamer
sequence/timestamp inspection; laptop rectification and stella_vslam integration;
session recording; local browser UI; validated dual camera capture. Do not
replace the deployed service or claim a complete migration until these pass.

On the first Windows/WSL mirrored-network Wi-Fi test, the board sent 300
synthetic frames but the WSL receiver received none. The active Hyper-V
firewall default inbound action was `Block`. Creating a rule restricted to
UDP 5600 returned `Access denied` in the current non-administrator session.
Run the receiver test again after an administrator permits this one inbound
port; do not interpret a successful board-side `write()` as proof of delivery.
