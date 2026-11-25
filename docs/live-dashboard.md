# 笔记本双目 VO 调试界面

双击 Windows 项目目录的 `start-dashboard.cmd`，打开 http://127.0.0.1:5173/ 。在启动窗口按 Ctrl+C 关闭。板端地址变化时，运行 `./start-dashboard.ps1 http://新地址:8001`。每次启动会检查 WSL 的 C++ 程序是否需要重新编译。笔记本需要 Node.js 20、WSL Ubuntu、g++、pkg-config、libopencv-dev；首次启动还需要 npm 下载项目依赖。修改网页后在项目根目录运行 `npm --prefix frontend run build`，再重启。

## 板端和 Wi-Fi

当前输入为 EuRoC V1_01_easy，包含 2912 对以纳秒时间戳配对的 752×480 灰度图。板端一次性使用数据集的 cam0/cam1 内参、畸变和 T_BS 作双目校正，然后把每对图像保存成一个 1504×480 JPEG（质量 90）。运行时板端通过 HTTP/TCP 提供这些文件、校正参数和数据集参考轨迹。笔记本最多预取 8 对，按原始采集时间差播放，目标每秒 20 对。SSH 用于部署和维护。此数据源模拟相机，实际 IMX219 仍需采集验证和单独标定。原有 RTP/UDP 工具可独立运行，见 [native 说明](../native/README.md)。

在 Orange Pi 上从项目根目录执行以下命令可重建数据服务。板端环境为 Ubuntu Jammy、C++17、OpenCV 4、Ruby 3 和 WEBrick。准备文件时使用独立目录，完成后再切换服务目录。

```bash
g++ -O2 -std=c++17 native/prepare_feed.cpp -o native/prepare_feed $(pkg-config --cflags --libs opencv4)
native/prepare_feed data/EuRoC/V1_01_easy/mav0 ~/euroc-v1-feed
sudo install -m644 deploy/drone-dataset-feed.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now drone-dataset-feed
```

SSH 查看状态和重启：

```bash
systemctl status drone-dataset-feed --no-pager
journalctl -u drone-dataset-feed -n 20 --no-pager
sudo systemctl restart drone-dataset-feed
curl -fsS http://127.0.0.1:8001/frames.txt | wc -l
```

## 笔记本估计与参考轨迹

C++ OpenCV 从校正后的左图提取角点，用双向金字塔光流检查跨帧和左右目匹配。通过水平视差、焦距和标定基线三角化得到米制地图点。跨帧跟踪使用保留的世界坐标点，以 PnP-RANSAC 和内点重投影优化估计相机位姿。每个新加入的点只追加一次。该引擎是稀疏双目视觉里程计，没有回环优化，长序列会积累漂移。

浏览器服务单独读取 state_groundtruth_estimate0 的位置和 wxyz 四元数。用整数时间戳查找图像两侧的真值样本，对平移线性插值，对旋转作球面插值。从机身到校正左相机的固定变换为 `T_body_cam0 × R_rect0ᵀ`（旋转扩为齐次变换）。第一帧同时拥有有效估计和参考位姿时，固定 `T_estWorld_refWorld = T_estWorld_camera × inverse(T_refWorld_camera)`。前后超出真值覆盖范围的帧留空，失跟帧也留空。图中断开缺失段。RMSE 只使用两侧都有效的同时间样本，界面同时列出样本数。这些参考数据只用于对比。

WORLD VIEW 的两个轨迹和地图共用同一个坐标变换。网页按会话及游标读取新增点；打开或刷新页面会收到本轮全部历史点。点云显存按需扩容，绘制数量就是已累计的点数。`Fit map` 将相机视野调整到覆盖整张点云。数据集循环后开始新的会话。

## 日志和诊断

笔记本项目的 `sessions/<会话 UUID>.csv` 逐帧记录采集时间、跟踪状态、估计/参考位置、误差、累计点数、处理时长和发布时刻。计数 frame 在 CSV 从 0 开始，界面从 1 开始。用第一帧到末帧的 publish_ms 差除以帧间隔数可算实际平均周期。网页的 STEREO PAIRS / S 使用最近 100 个发布间隔。系统负载或 Wi-Fi 延迟可能引起短时波动。

```powershell
Invoke-RestMethod http://127.0.0.1:5173/live/state | Select-Object frame,tracking,fps,pointCount,compared,position_error_m,ate_rmse_m
Get-ChildItem sessions/*.csv | Sort-Object LastWriteTime -Descending | Select-Object -First 3
```

## 2026-11-25 实机验证

在本机运行 `node --test frontend/ground-truth.test.mjs` 验证了纳秒时间边界、缺失位姿、相机偏心、旋转插值和固定对齐。然后从上述板端地址通过 Wi-Fi 回放 V1_01_easy，在笔记本上处理了全部 2912 对图像（一次初始化、2908 帧跟踪、3 帧失跟）。在 2868 个同时有效的样本上，位置 RMSE 为 0.317 m，最大误差为 0.605 m。整轮累计 77,367 个地图点，平均处理耗时 19.83 ms，实际发布 19.51 对/秒；独立 MJPEG 客户端连续读取 201 对时测得 20.10 对/秒。Chrome 成功解码 1504×480 图像，WebGL 绘制点数已在运行中抽查。CSV 在测试机的 `sessions/7b41a59a-8497-43a3-ab58-96be10aaab67.csv`。这些结果来自数据集回放。
