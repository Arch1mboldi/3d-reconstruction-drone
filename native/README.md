# Native transport milestone

This directory is the first **working transport slice** of the new architecture.
It is not yet the complete SLAM application. The existing Python/React prototype
is still deployed on the board. The programs here do not run Python or Node.

`drone_sender` reads timestamp-matched EuRoC `cam0`/`cam1` images, combines each
pair side by side, and sends one JPEG/RTP/UDP stream. It performs no SLAM.
`drone_receiver` decodes that stream on the laptop and records reception intervals
to `receive.csv`, plus sample left/right JPEGs. When built with stella_vslam and
given its EuRoC configuration and ORB vocabulary, it also rectifies the stereo
images, runs SLAM on the laptop, and writes `poses.csv` and `trajectory_tum.txt`.
It does not infer source packet
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
native/build/drone_sender data/EuRoC/V1_01_easy/mav0 192.168.1.134 5600 10 200
```

For a ten-second local transport test with synthetic images:

```bash
native/build/drone_sender synthetic 127.0.0.1 5600 30
```

The synthetic source diagnoses the transport only; it is not a SLAM benchmark.
`receive.csv` reports receive intervals rather than true decode time. The
receiver currently ends when `max-frames` is reached. Omitting it listens until
interrupted. RTP over UDP has no authentication; use a trusted local network.

Next implementation gates: GStreamer sequence/timestamp inspection; full
session recording; local browser UI; validated dual camera capture. Do not
replace the deployed service or claim a complete migration until these pass.

On the first Windows/WSL mirrored-network Wi-Fi test, the board sent 300
synthetic frames but the WSL receiver received none. The active Hyper-V
firewall default inbound action was `Block`. Creating a rule restricted to
UDP 5600 returned `Access denied` in the current non-administrator session.
Run the receiver test again after an administrator permits this one inbound
port; do not interpret a successful board-side `write()` as proof of delivery.

After permitting UDP 5600 inbound, the actual board-to-laptop test received 30
EuRoC stereo pairs over Wi-Fi. The images decoded to two 752×480 pictures and
`receive.csv` contained 30 rows. The first board test also revealed CRLF in the
EuRoC CSV filenames; the sender now strips the trailing carriage return. This
test demonstrates image delivery, not source-frame loss accounting or SLAM.

## Laptop SLAM build and run

The tested laptop is Ubuntu under WSL, with C++17, CMake, OpenCV 4.6 built
with GStreamer, GStreamer RTP/JPEG plugins, Eigen3, yaml-cpp, SQLite3,
spdlog, and SuiteSparse. stella_vslam and g2o run **only on the laptop**;
the Orange Pi sender needs only OpenCV/GStreamer. The Ubuntu `libg2o-dev`
package in this test did not provide the CMake package needed by stella_vslam,
so g2o was built from its maintained upstream source. Use a persistent prefix
instead of `/tmp` for a permanent installation.

```bash
sudo apt install build-essential cmake git libopencv-dev \
  libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev \
  gstreamer1.0-plugins-good gstreamer1.0-plugins-base \
  libeigen3-dev libyaml-cpp-dev libsqlite3-dev libspdlog-dev libsuitesparse-dev
git clone https://github.com/RainerKuemmerle/g2o.git /tmp/drone-g2o-upstream
git -C /tmp/drone-g2o-upstream checkout e8df2004e07ea8f5b8e6a8b9f2dc067b45b45036
cmake -S /tmp/drone-g2o-upstream -B /tmp/drone-g2o-build \
  -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/tmp/drone-native-deps \
  -DG2O_BUILD_APPS=OFF -DG2O_BUILD_EXAMPLES=OFF -DG2O_USE_OPENGL=OFF
cmake --build /tmp/drone-g2o-build --target install -j4
git clone --recursive https://github.com/stella-cv/stella_vslam.git /tmp/drone-stella-upstream
git -C /tmp/drone-stella-upstream checkout e445b5452535e781fdf6777ec33a06f5f8f5e416
git -C /tmp/drone-stella-upstream submodule update --init --recursive
cmake -S /tmp/drone-stella-upstream -B /tmp/drone-stella-build \
  -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/tmp/drone-native-deps \
  -DCMAKE_PREFIX_PATH=/tmp/drone-native-deps -DUSE_ARUCO=OFF
cmake --build /tmp/drone-stella-build --target install -j4
cmake -S native -B native/build -DCMAKE_BUILD_TYPE=Release \
  -DCMAKE_PREFIX_PATH=/tmp/drone-native-deps
cmake --build native/build -j2
```

Download `orb_vocab.fbow` from the [stella-cv vocabulary repository](https://github.com/stella-cv/FBoW_orb_vocab)
and verify SHA-256 `310cdf3581b5dd5becfabd75823606e315b1f049f70e51fa23be05021dc4b107`.
Use the [upstream EuRoC stereo configuration](https://github.com/stella-cv/stella_vslam/blob/main/example/euroc/EuRoC_stereo.yaml)
for this dataset. Start the laptop receiver before the board sender:

```bash
LD_LIBRARY_PATH=/tmp/drone-native-deps/lib native/build/drone_receiver \
  sessions/euroc-slam 5600 100 \
  /tmp/drone-stella-upstream/example/euroc/EuRoC_stereo.yaml \
  /path/to/orb_vocab.fbow
# On the Orange Pi, substitute the laptop's current Wi-Fi IP:
native/build/drone_sender data/EuRoC/V1_01_easy/mav0 192.168.1.134 5600 2 120
```

`poses.csv` contains the camera's estimated position in the SLAM world frame,
with timestamps measured by the receiver's monotonic clock. It is **not**
aligned to EuRoC ground truth. The TUM trajectory is saved after a bounded
run reaches `max-frames`; synthetic circles cannot initialize SLAM. The
current OpenCV video interface does not expose source capture timestamps or
RTP sequence numbers, so trajectory timing and packet-loss accounting remain
incomplete. Check the current IP addresses before starting: a previous
successful Wi-Fi test used laptop `192.168.1.134` and board `192.168.1.105`,
but these are DHCP addresses and can change. WSL must be reachable from the
board, and UDP 5600 must be permitted by the host firewall.
