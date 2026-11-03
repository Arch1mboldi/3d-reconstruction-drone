# 3D Reconstruction Drone

Orange Pi Zero 3W 双目视觉定位与三维重建调试平台，面向 UCI EECS 159A 项目。
在 IMX219 到货前，开发板按真实时间重放 EuRoC 双目数据；相机到货后只替换输入源，
继续使用相同的位姿引擎、Wi-Fi协议和浏览器调试界面。

## 1. 当前完成范围

开发板负责：

1. 读取并校正左右灰度图；
2. 提取 ORB 特征，利用双目视差恢复局部三维点；
3. 用相邻帧匹配和 PnP-RANSAC 估计相机位姿；
4. 以 MJPEG 发送左右预览；
5. 以 WebSocket 发送位姿、轨迹、稀疏点、跟踪状态及设备遥测；
6. 接收浏览器的播放、暂停、重置和倍速控制。

笔记本本地前端负责：

- 左右校正画面；
- Three.js三维轨迹、当前相机和稀疏点；
- 绿色图像估计轨迹与橙色数据集真值的独立显示；
- FPS、处理时间、特征数、PnP内点、CPU、内存、温度和事件日志；
- Wi-Fi往返时间、遥测吞吐、消息频率、视频码率估计和断线次数；
- 从本机 `127.0.0.1:5173` 启动，前端代码不由开发板托管。

SSH仅用于安装、维护和查看日志。运行时图像、控制和SLAM数据均通过Orange Pi自带
Wi-Fi 6模块与天线传输，SSH不在数据路径中。

## 2. 必须明确的算法边界

当前 `stereo_vo` 是真实的板载**双目视觉里程计前端**，位姿由图像计算，绝不是从
EuRoC真值复制。EuRoC真值仅作为单独的橙色参考轨迹显示。

它目前没有回环检测、位姿图优化和全局 Bundle Adjustment，因此不能冒充完整SLAM。
代码在每个遥测包中携带引擎名称，后续可以接入ORB-SLAM3或VINS-Fusion，而无需重写
前端和网络协议。

## 3. 实际开发板环境

本项目已在以下实机环境部署：

| 项目 | 实际值 |
|---|---|
| 开发板 | Orange Pi Zero 3W |
| 主机名 | `orangepizero3w` |
| 架构 | ARM64 / AArch64 |
| CPU | 2 × Cortex-A76（最高约2.0 GHz）+ 6 × Cortex-A55（最高约1.8 GHz） |
| 内存 | 5.7 GiB，另有约2.9 GiB swap |
| 存储 | 29 GiB microSD文件系统 |
| 系统 | Orange Pi Ubuntu 1.0.0 Jammy |
| 内核 | Linux `5.15.147-sun60iw2` |
| Python | 3.10.12 |
| OpenCV | Ubuntu ARM64包，4.5.4 |
| NumPy | Ubuntu ARM64包，1.21.5 |
| Web后端 | FastAPI 0.115.6 + Uvicorn 0.34.0 |
| WebSocket | websockets 14.1 |
| 系统遥测 | psutil 6.1.1 |
| 测试框架 | pytest 8.3.4 |
| 网络 | `wlan0`，当前局域网地址 `192.168.1.105` |
| 服务端口 | TCP 8000 |
| 项目路径 | `/home/orangepi/3d-reconstruction-drone` |

板上存在 `/dev/cedar_dev` 和 `sunxi_ve`，表明硬件视频引擎驱动存在，但当前MVP使用
JPEG/MJPEG，尚未宣称H.264/H.265硬编码已经验证。当前没有 `/dev/video*`，这是因为
IMX219尚未安装；`vin_v4l2`内核模块和 `/opt/v4l2_opencv_demo` 官方示例已经存在。

开发板轻载温度曾测得约64°C。首次900特征实测约95 ms/帧、10.3 FPS，CPU最高约75.2°C。
按照当前开发调试策略，代码默认保持900特征并优先保证跟踪点数量；WebSocket状态刷新为
5 Hz，避免浏览器刷新反过来挤占视觉里程计。温度只做记录和告警，不自动降载或停止。
正式飞行前仍建议安装散热片和风扇，并完成持续负载与热稳定性测试。

## 4. 笔记本构建环境

首次前端构建使用：

| 项目 | 版本/用途 |
|---|---|
| Windows | 开发和浏览器调试主机 |
| Node.js | 20.17.0 |
| npm | 10.8.2 |
| React | 19.0.0 |
| Three.js | 0.173.0 |
| Vite | 6.4.5 |

前端依赖已经过 `npm audit`，构建时为0个已知漏洞。生产文件由Vite生成到笔记本上的
`frontend/dist/`，再由Node内置HTTP服务器只绑定 `127.0.0.1:5173`。Orange Pi不托管
前端，也不需要安装Node.js。CSS只使用系统字体，安装完成后不依赖互联网字体或CDN。

## 5. 数据集

### 5.1 EuRoC MAV

EuRoC是微型无人机视觉惯性基准，提供：

- 两路硬件同步的全局快门灰度相机，752 × 480，20 FPS；
- 约11 cm双目基线；
- 200 Hz IMU；
- 相机内参、畸变和传感器外参；
- 高精度位置/姿态真值。

规范来源：

- 项目主页：<https://projects.asl.ethz.ch/datasets/euroc-mav/>
- ETH Research Collection：<https://www.research-collection.ethz.ch/entities/researchdata/bcaf173e-5dac-484b-bc37-faf97a594f1f>

2026年旧的逐序列ETH下载链接已经失效，新ETH合集约12.7 GB，并可能返回HTTP 429。
本项目当前使用 `V1_01_easy`，它是室内房间场景，比Machine Hall更接近手持扫描。
完整镜像为约1.15 GB的单一ZIP：

<https://huggingface.co/datasets/pepijn223/euroc-mirror>

下载来源和原因会写入数据目录的 `SOURCE.json`。数据结构为：

```text
data/EuRoC/V1_01_easy/
  mav0/
    cam0/                         左相机图像、索引和标定
    cam1/                         右相机图像、索引和标定
    imu0/                         IMU（当前算法暂未使用）
    state_groundtruth_estimate0/  真值轨迹
```

数据、ZIP、rosbag和派生会话均被 `.gitignore` 排除，不会推送到GitHub。

### 5.2 模拟真实相机的方式

重放器按EuRoC时间顺序读取同步左右帧，目标周期为 `0.05 s / speed`，即1×时模拟
20 FPS。每个数据包同时保留：

- 原始数据集纳秒时间戳；
- 当前重放帧号；
- 实际处理时间和处理FPS；
- 当前播放、暂停、循环与倍速状态。

因此它测试的不只是离线算法，也覆盖真实系统将面对的节拍、编码、Wi-Fi传输和前端刷新。

## 6. 视觉里程计原理

### 6.1 双目标定和校正

`sensor.yaml` 提供左右相机内参 `K`、畸变参数 `D` 和相机到机体的刚体变换 `T_BS`。
程序计算相机间变换，并使用OpenCV `stereoRectify` 生成校正映射。校正后，同一个物理点
应出现在左右图像的同一行，使匹配从二维搜索降为一维搜索。

### 6.2 双目深度

左右图像中同一点的水平像素差为视差 `d`。深度为：

```text
Z = fx × baseline / disparity
X = (u - cx) × Z / fx
Y = (v - cy) × Z / fy
```

视差越小，距离越远，深度误差增长越快。程序只接受满足行对齐、正视差和合理距离范围的
匹配点。

### 6.3 ORB特征

ORB用FAST检测角点，并用旋转不变的二进制BRIEF描述子表示局部图像。二进制描述子可通过
Hamming距离快速匹配，适合ARM CPU。程序同时执行：

- 当前左图与当前右图的匹配，用于三角测量；
- 上一左图与当前左图的时间匹配，用于运动估计；
- Lowe比率测试，排除不明确的近邻匹配。

### 6.4 PnP-RANSAC

上一帧中已知三维坐标的点与当前帧二维像素构成3D–2D对应。`solvePnPRansac`反复抽样，
寻找能解释最多内点的相机旋转和平移，并排除动态物体或错误匹配。内点足够时再进行迭代
细化。

### 6.5 位姿累积

PnP给出从上一相机坐标系到当前相机坐标系的相对变换。程序取逆并累积到世界坐标系：

```text
T_world_current = T_world_previous × inverse(T_current_previous)
```

由于当前没有回环和全局优化，长轨迹必然累积漂移。这正是后续接入完整SLAM的理由。

### 6.6 在线误差

EuRoC真值与视觉里程计使用不同坐标系。前端显示前，后端用不带尺度因子的刚体变换
（SVD/Umeyama的SE(3)部分）将真值轨迹对齐到估计轨迹，再计算当前位置误差和ATE RMSE。
双目尺度是可观测的，因此这里不允许用缩放因子掩盖尺度漂移。指标用于实时调试，正式
报告仍应使用完整轨迹和标准离线评估工具。

## 7. 系统架构与通信

```text
EuRoC replay（现在）/ 双IMX219（以后）
                 │
        时间戳 + 双目校正
                 │
       ┌─────────┴──────────┐
       │                    │
  Stereo VO引擎         JPEG编码
  位姿/轨迹/稀疏点       左右MJPEG
       │                    │
  WebSocket :8000/ws      HTTP MJPEG :8000/stream/*
       │                    │
       └────────┬───────────┘  Orange Pi后端
                │ Wi-Fi 6局域网（非SSH）
                ▼
     笔记本本地前端 http://127.0.0.1:5173
              React + Three.js
```

| 接口 | 内容 |
|---|---|
| `GET /api/health` | 数据集路径、帧数和服务状态 |
| `GET /api/state` | 单次完整遥测快照 |
| `POST /api/control/{action}` | `play`、`pause`、`reset`、`speed`、`loop` |
| `GET /stream/left.mjpg` | 左路校正预览 |
| `GET /stream/right.mjpg` | 右路校正预览 |
| `WS /ws` | 5 Hz位姿、轨迹、地图点、设备遥测和控制 |

WebSocket与视频是两条独立连接：视频拥塞不会堵塞位姿和控制。第一版固定发送两路
752×480、JPEG质量72、最高10 FPS的MJPEG，暂不加入动态码率、延迟、抖动或丢包模拟。
真实飞行版本应评估H.264/H.265硬编码或WebRTC。

## 8. 安装与部署

### 8.1 笔记本构建前端

```bash
cd frontend
npm install
npm audit
npm run build
```

当前工作区位于同步盘，Windows上的Vite若遇到 `realpath EPERM`，可把前端源码复制到普通
临时目录构建，再把 `dist/` 复制回来。该问题与源码无关。

构建完成后，在项目根目录双击 `start-dashboard.cmd`，或运行：

```powershell
powershell -ExecutionPolicy Bypass -File .\start-dashboard.ps1
```

它只在笔记本监听 `127.0.0.1:5173`，并自动打开：

```text
http://127.0.0.1:5173/?backend=http://192.168.1.105:8000
```

前端右侧可在固定IP和 `orangepizero3w.local` 之间切换。停止笔记本前端只需在启动窗口
按 `Ctrl+C`；这不会关闭Orange Pi后端。

新版顶部应显示 `LAPTOP DEBUG CONSOLE · wifi-split-2026.11.02`。若仍显示旧的
`LIVE DEBUG CONSOLE`，说明浏览器保留了旧页面：关闭旧标签页、停止旧前端进程，再重新
运行 `start-dashboard.cmd`。视频元素会在WebSocket重连和图像错误后自动建立新MJPEG连接。
启动器会自动替换占用5173端口的本项目旧Node/Vite进程；如果端口属于其他程序，则停止并
显示占用进程，不会自动结束无关程序。

Three.js画布同时设置逻辑CSS尺寸和设备像素比，避免Windows高DPI缩放时画布按物理像素
放大后被面板裁切。若视频和遥测正常但World View完全空白，先使用 `Ctrl+F5`加载最新
前端Bundle，再检查浏览器是否启用了WebGL硬件加速。

### 8.2 部署到Orange Pi

```bash
scp -r backend scripts deploy docs README.md LICENSE \
  orangepi@192.168.1.105:~/3d-reconstruction-drone/

ssh orangepi@192.168.1.105
cd ~/3d-reconstruction-drone
chmod +x scripts/*.sh scripts/*.py
./scripts/install_orangepi.sh
```

安装脚本执行的系统依赖：

```bash
sudo apt-get install -y \
  python3-venv python3-pip python3-opencv python3-numpy unzip curl avahi-daemon
```

Python虚拟环境使用 `--system-site-packages`，以复用Ubuntu为ARM64编译的OpenCV/NumPy，
避免在开发板上从源码构建OpenCV。

### 8.3 下载数据

```bash
mkdir -p ~/3d-reconstruction-drone/data/EuRoC
curl -L -C - --fail --retry 5 --retry-delay 5 \
  "https://huggingface.co/datasets/pepijn223/euroc-mirror/resolve/main/V1_01_easy.zip?download=true" \
  -o ~/3d-reconstruction-drone/data/EuRoC/V1_01_easy.zip

unzip ~/3d-reconstruction-drone/data/EuRoC/V1_01_easy.zip \
  -d ~/3d-reconstruction-drone/data/EuRoC/V1_01_easy
```

### 8.4 固定Wi-Fi地址

```bash
cd /home/orangepi/3d-reconstruction-drone
./scripts/configure_static_wifi.sh
```

当前实机配置为：

```text
地址 192.168.1.105/24
网关 192.168.1.1
DNS  192.168.1.1
```

为避免与路由器DHCP池冲突，长期使用时还应在路由器中为Orange Pi无线网卡MAC地址创建
DHCP保留。脚本切换连接时SSH可能短暂断开。

### 8.5 启动和关闭Orange Pi后端

安装脚本会注册systemd服务。常用命令：

```bash
sudo systemctl start 3d-reconstruction-drone
sudo systemctl stop 3d-reconstruction-drone
sudo systemctl restart 3d-reconstruction-drone
systemctl status 3d-reconstruction-drone
journalctl -u 3d-reconstruction-drone -f
```

服务随开发板开机启动，但数据集初始保持暂停，直到笔记本前端发送Play。停止SSH连接不会
影响服务。Orange Pi的 `http://192.168.1.105:8000/` 只返回后端身份JSON，不再返回网页。

## 9. 验证命令

```bash
# Python语法和依赖
.venv/bin/python -m compileall -q backend scripts
.venv/bin/python -c 'import cv2,fastapi,uvicorn,numpy,yaml,psutil,websockets'
.venv/bin/python -m pytest -q

# WebSocket握手、ping、控制和实时VO
.venv/bin/python scripts/check_backend.py --play

# 服务健康
curl http://127.0.0.1:8000/api/health

# 状态快照
curl http://127.0.0.1:8000/api/state

# 开始重放
curl -X POST http://127.0.0.1:8000/api/control/play

# 检查MJPEG是否返回JPEG字节流
curl --max-time 3 http://127.0.0.1:8000/stream/left.mjpg -o /tmp/left.mjpg

# systemd与mDNS
systemctl is-active 3d-reconstruction-drone avahi-daemon

# 系统状态
grep -H . /sys/class/thermal/thermal_zone*/temp
ps -eo pid,psr,pcpu,pmem,cmd --sort=-pcpu | head
```

验收时至少记录：平均/95百分位处理时间、有效处理FPS、跟踪丢失次数、PnP内点数、CPU、
最高温度、浏览器可见延迟以及运行持续时间。

## 10. IMX219到货后的迁移

目标接口保持为：

```text
(timestamp_ns, rectified_left_gray, rectified_right_gray)
```

需要完成：

1. 安装相机并确认排线方向；
2. `sudo modprobe vin_v4l2`；
3. 检查 `/dev/video0`、`/dev/video8`及 `v4l2-ctl --list-devices`；
4. 使用 `/opt/v4l2_opencv_demo` 分别验证两路画面；
5. 写真实V4L2数据源替换EuRoC读取器；
6. 保存内核采集时间戳，不能用Python收到帧的时间代替；
7. 刚性固定10 cm基线后重新完成双目标定；
8. 测量左右时间偏移分布、掉帧率和帧率；
9. 锁定曝光/增益，避免左右亮度差和帧间跳变；
10. 低速推车验证后才考虑无人机。

IMX219为滚动快门，而EuRoC使用全局快门；数据集结果不能代表真实IMX219高速运动性能。
左右CSI端口也不自动等于硬件同步。卷帘、曝光、同步和支架刚性是实机阶段的主要风险。

## 11. 后续SLAM引擎

推荐按以下顺序扩展：

1. 保留 `stereo_vo` 作为最小可解释基线；
2. 接入ORB-SLAM3双目，增加关键帧、地图管理和回环；
3. 若以后增加IMU，再评估VINS-Fusion双目+IMU；
4. 用相同EuRoC片段比较ATE、RPE、FPS、温度和跟踪失败次数；
5. 以“误差/毫秒”和“焦耳/帧”决定板载方案，而不是只看单次演示。

VINS-Fusion官方主要面向Ubuntu 16.04/18.04与ROS Kinetic/Melodic，因此在当前Jammy ARM64
开发板上的首要风险是旧ROS/Ceres兼容性。ORB-SLAM3更易以无ROS方式做数据集基线，但
Pangolin及ARM编译仍需要单独验证。

## 12. 安全与版本控制

- `githubtoken.txt` 位于仓库之外，Token只通过进程环境读取；
- SSH密码、Token、数据集、ZIP、会话文件和虚拟环境均被排除；
- 不在README、命令输出、Git remote URL或提交历史中保存Token；
- GitHub仓库默认为私有；
- 调试界面不是飞控，也不能作为唯一避障或自主飞行数据源；
- 当前服务只应暴露在受信任局域网，未实现用户认证和TLS。
- `127.0.0.1:5173` 是笔记本前端；`192.168.1.105:8000` 是Orange Pi后端；
- SSH仅用于管理，不传输运行时图像、轨迹或点云。

## 13. 目录结构

```text
backend/
  app/
    euroc.py       数据读取、标定、校正、真值查找
    stereo_vo.py   ORB + 双目深度 + PnP-RANSAC
    runtime.py     20 FPS重放、状态、遥测、图像编码
    main.py        纯后端FastAPI、WebSocket和MJPEG
frontend/
  dist/            笔记本生产前端
  serve.mjs        仅绑定127.0.0.1的本地静态服务器
  src/
    main.jsx       React界面和Three.js场景
    styles.css     调试控制台样式
scripts/
  install_orangepi.sh
  configure_static_wifi.sh
  download_euroc.sh
  check_backend.py
  run_backend.sh
deploy/
  3d-reconstruction-drone.service
docs/
  architecture.md
start-dashboard.ps1
start-dashboard.cmd
```

## 14. 许可证

项目代码使用MIT许可证。EuRoC和第三方镜像数据仍遵循各自的数据集许可，不能因为代码为
MIT而改变数据许可。
