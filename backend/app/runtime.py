from __future__ import annotations

import asyncio
import os
import threading
import time
from collections import deque
from pathlib import Path

import cv2
import numpy as np
import psutil

from .euroc import EurocDataset
from .stereo_vo import StereoVisualOdometry


class ReplayRuntime:
    def __init__(self, dataset_path: Path):
        self.dataset = EurocDataset(dataset_path)
        self.engine = StereoVisualOdometry(
            self.dataset.K,
            self.dataset.baseline_m,
            max_features=int(os.getenv("VO_FEATURES", "900")),
        )
        self.lock = threading.Lock()
        self.playing = False
        self.loop = True
        self.speed = 1.0
        self.index = int(os.getenv("REPLAY_START_FRAME", "0"))
        self.latest_jpeg = {"left": b"", "right": b""}
        self.trajectory = deque(maxlen=2500)
        self.ground_truth = deque(maxlen=2500)
        self.map_points = deque(maxlen=3500)
        self.logs = deque(maxlen=80)
        self.last_state: dict = {}
        self.started_at = time.time()
        self._last_frame_time = time.perf_counter()
        self._fps_ema = 0.0
        self.video_fps = int(os.getenv("VIDEO_FPS", "10"))
        self.log("Dataset ready; press Play to start real-time replay")

    def log(self, message: str) -> None:
        self.logs.append({"time": time.strftime("%H:%M:%S"), "message": message})

    @staticmethod
    def _temperature_c() -> float | None:
        values = []
        for path in Path("/sys/class/thermal").glob("thermal_zone*/temp"):
            try:
                value = float(path.read_text().strip()) / 1000.0
                if 10.0 < value < 120.0:
                    values.append(value)
            except (OSError, ValueError):
                pass
        return max(values) if values else None

    @staticmethod
    def _point_list(points, limit: int | None = None):
        data = list(points)
        if limit and len(data) > limit:
            step = max(1, len(data) // limit)
            data = data[::step][:limit]
        return [[round(float(v), 4) for v in p] for p in data]

    def _aligned_ground_truth(self):
        estimate = np.asarray(self.trajectory, dtype=np.float64)
        truth = np.asarray(self.ground_truth, dtype=np.float64)
        if len(estimate) < 3 or len(estimate) != len(truth):
            return truth, None, None

        source_mean = truth.mean(axis=0)
        target_mean = estimate.mean(axis=0)
        source_centered = truth - source_mean
        target_centered = estimate - target_mean
        u, _, vt = np.linalg.svd(source_centered.T @ target_centered)
        rotation = vt.T @ u.T
        if np.linalg.det(rotation) < 0:
            vt[-1, :] *= -1
            rotation = vt.T @ u.T
        aligned = (rotation @ source_centered.T).T + target_mean
        errors = np.linalg.norm(aligned - estimate, axis=1)
        return aligned, float(errors[-1]), float(np.sqrt(np.mean(errors**2)))

    def command(self, action: str, value=None) -> None:
        with self.lock:
            if action == "play":
                self.playing = True
                self.log("Replay started")
            elif action == "pause":
                self.playing = False
                self.log("Replay paused")
            elif action == "reset":
                self.playing = False
                self.index = 0
                self.engine.reset()
                self.trajectory.clear()
                self.ground_truth.clear()
                self.map_points.clear()
                self.log("Replay and odometry reset")
            elif action == "speed":
                self.speed = max(0.1, min(4.0, float(value)))
                self.log(f"Replay speed set to {self.speed:.1f}x")
            elif action == "loop":
                self.loop = bool(value)

    def snapshot(self) -> dict:
        with self.lock:
            state = dict(self.last_state)
            aligned_truth, position_error, ate_rmse = self._aligned_ground_truth()
            video_bytes = sum(len(value) for value in self.latest_jpeg.values())
            state.update(
                {
                    "type": "state",
                    "playing": self.playing,
                    "loop": self.loop,
                    "speed": self.speed,
                    "frame": self.index,
                    "frame_count": len(self.dataset.frames),
                    "trajectory": self._point_list(self.trajectory, 800),
                    "ground_truth": self._point_list(aligned_truth, 800),
                    "map_points": self._point_list(self.map_points, 1000),
                    "position_error_m": None if position_error is None else round(position_error, 4),
                    "ate_rmse_m": None if ate_rmse is None else round(ate_rmse, 4),
                    "transport": {
                        "video_fps": self.video_fps,
                        "video_estimated_kbps": round(video_bytes * self.video_fps * 8 / 1000.0, 1),
                        "telemetry_hz": 5,
                    },
                    "logs": list(self.logs)[-15:],
                    "device": {
                        "cpu_percent": psutil.cpu_percent(),
                        "memory_percent": psutil.virtual_memory().percent,
                        "temperature_c": self._temperature_c(),
                        "uptime_s": round(time.time() - self.started_at, 1),
                    },
                }
            )
            return state

    async def run(self) -> None:
        while True:
            if not self.playing:
                await asyncio.sleep(0.08)
                continue

            started = time.perf_counter()
            try:
                frame, left, right = self.dataset.read(self.index)
                result = self.engine.process(left, right)
            except Exception as exc:  # keep UI alive and expose the failure
                self.log(f"Frame {self.index} failed: {exc}")
                self.playing = False
                await asyncio.sleep(0.2)
                continue

            now = time.perf_counter()
            instantaneous = 1.0 / max(now - self._last_frame_time, 1e-6)
            self._fps_ema = instantaneous if self._fps_ema == 0 else 0.85 * self._fps_ema + 0.15 * instantaneous
            self._last_frame_time = now

            pose = result.pose_world_camera
            position = pose[:3, 3]
            gt = self.dataset.ground_truth_position(frame.timestamp_ns)
            ok_l, jpeg_l = cv2.imencode(".jpg", left, [cv2.IMWRITE_JPEG_QUALITY, 72])
            ok_r, jpeg_r = cv2.imencode(".jpg", right, [cv2.IMWRITE_JPEG_QUALITY, 72])

            with self.lock:
                if ok_l:
                    self.latest_jpeg["left"] = jpeg_l.tobytes()
                if ok_r:
                    self.latest_jpeg["right"] = jpeg_r.tobytes()
                self.trajectory.append(position.tolist())
                if gt is not None:
                    self.ground_truth.append(gt.tolist())
                for point in result.new_map_points:
                    self.map_points.append(point.tolist())
                self.last_state = {
                    "timestamp_ns": frame.timestamp_ns,
                    "engine": "stereo_vo",
                    "engine_label": "Stereo VO front end",
                    "tracking": result.tracking,
                    "pose_matrix": np.round(pose, 6).tolist(),
                    "position": np.round(position, 5).tolist(),
                    "features": result.features,
                    "stereo_points": result.stereo_points,
                    "inliers": result.inliers,
                    "processing_ms": round((time.perf_counter() - started) * 1000.0, 2),
                    "processing_fps": round(self._fps_ema, 1),
                    "baseline_m": round(self.dataset.baseline_m, 5),
                    "dataset": self.dataset.mav0.parent.name,
                }

            self.index += 1
            if self.index >= len(self.dataset.frames):
                if self.loop:
                    self.index = 0
                    self.engine.reset()
                    self.log("Dataset looped; odometry origin reset")
                else:
                    self.playing = False
                    self.log("Replay complete")

            target_period = 0.05 / self.speed
            await asyncio.sleep(max(0.0, target_period - (time.perf_counter() - started)))
