from __future__ import annotations

import csv
from dataclasses import dataclass
from pathlib import Path

import cv2
import numpy as np
import yaml


@dataclass(frozen=True)
class StereoFrame:
    index: int
    timestamp_ns: int
    left_path: Path
    right_path: Path


class EurocDataset:
    """Minimal EuRoC ASL-format reader with stereo rectification and ground truth."""

    def __init__(self, mav0: Path):
        self.mav0 = Path(mav0)
        if not self.mav0.exists():
            raise FileNotFoundError(f"EuRoC mav0 directory not found: {self.mav0}")

        self.frames = self._load_frames()
        self.gt_times, self.gt_positions = self._load_ground_truth()
        self.map_left, self.map_right, self.K, self.baseline_m = self._build_rectification()

    @staticmethod
    def _read_image_csv(path: Path) -> dict[int, str]:
        rows: dict[int, str] = {}
        with path.open("r", encoding="utf-8") as handle:
            for row in csv.reader(line for line in handle if not line.startswith("#")):
                if len(row) >= 2:
                    rows[int(row[0])] = row[1].strip()
        return rows

    def _load_frames(self) -> list[StereoFrame]:
        left = self._read_image_csv(self.mav0 / "cam0" / "data.csv")
        right = self._read_image_csv(self.mav0 / "cam1" / "data.csv")
        timestamps = sorted(set(left).intersection(right))
        if not timestamps:
            raise RuntimeError("No synchronized stereo timestamps found")
        return [
            StereoFrame(
                index=i,
                timestamp_ns=ts,
                left_path=self.mav0 / "cam0" / "data" / left[ts],
                right_path=self.mav0 / "cam1" / "data" / right[ts],
            )
            for i, ts in enumerate(timestamps)
        ]

    def _load_ground_truth(self) -> tuple[np.ndarray, np.ndarray]:
        path = self.mav0 / "state_groundtruth_estimate0" / "data.csv"
        times: list[int] = []
        positions: list[list[float]] = []
        if not path.exists():
            return np.empty(0, dtype=np.int64), np.empty((0, 3), dtype=np.float64)
        with path.open("r", encoding="utf-8") as handle:
            for row in csv.reader(line for line in handle if not line.startswith("#")):
                if len(row) >= 4:
                    times.append(int(row[0]))
                    positions.append([float(row[1]), float(row[2]), float(row[3])])
        return np.asarray(times, dtype=np.int64), np.asarray(positions, dtype=np.float64)

    @staticmethod
    def _sensor_config(path: Path) -> tuple[np.ndarray, np.ndarray, np.ndarray, tuple[int, int]]:
        with path.open("r", encoding="utf-8") as handle:
            cfg = yaml.safe_load(handle)
        fx, fy, cx, cy = cfg["intrinsics"]
        K = np.array([[fx, 0.0, cx], [0.0, fy, cy], [0.0, 0.0, 1.0]], dtype=np.float64)
        D = np.asarray(cfg["distortion_coefficients"], dtype=np.float64)
        T_bs = np.asarray(cfg["T_BS"]["data"], dtype=np.float64).reshape(4, 4)
        width, height = cfg["resolution"]
        return K, D, T_bs, (int(width), int(height))

    def _build_rectification(self):
        K0, D0, T_b_c0, size0 = self._sensor_config(self.mav0 / "cam0" / "sensor.yaml")
        K1, D1, T_b_c1, size1 = self._sensor_config(self.mav0 / "cam1" / "sensor.yaml")
        if size0 != size1:
            raise RuntimeError(f"Stereo image sizes differ: {size0} vs {size1}")

        # T_c1_c0 maps points from the left camera into the right camera.
        T_c1_c0 = np.linalg.inv(T_b_c1) @ T_b_c0
        R = T_c1_c0[:3, :3]
        t = T_c1_c0[:3, 3]
        R0, R1, P0, P1, _, _, _ = cv2.stereoRectify(
            K0, D0, K1, D1, size0, R, t, flags=cv2.CALIB_ZERO_DISPARITY, alpha=0
        )
        left_maps = cv2.initUndistortRectifyMap(K0, D0, R0, P0, size0, cv2.CV_16SC2)
        right_maps = cv2.initUndistortRectifyMap(K1, D1, R1, P1, size0, cv2.CV_16SC2)
        rectified_K = P0[:3, :3].copy()
        baseline = abs(float(P1[0, 3] / P1[0, 0]))
        return left_maps, right_maps, rectified_K, baseline

    def read(self, index: int) -> tuple[StereoFrame, np.ndarray, np.ndarray]:
        frame = self.frames[index]
        left = cv2.imread(str(frame.left_path), cv2.IMREAD_GRAYSCALE)
        right = cv2.imread(str(frame.right_path), cv2.IMREAD_GRAYSCALE)
        if left is None or right is None:
            raise RuntimeError(f"Could not read stereo images at frame {index}")
        left = cv2.remap(left, self.map_left[0], self.map_left[1], cv2.INTER_LINEAR)
        right = cv2.remap(right, self.map_right[0], self.map_right[1], cv2.INTER_LINEAR)
        return frame, left, right

    def ground_truth_position(self, timestamp_ns: int) -> np.ndarray | None:
        if self.gt_times.size == 0:
            return None
        i = int(np.searchsorted(self.gt_times, timestamp_ns))
        candidates = [j for j in (i - 1, i) if 0 <= j < len(self.gt_times)]
        nearest = min(candidates, key=lambda j: abs(int(self.gt_times[j]) - timestamp_ns))
        return self.gt_positions[nearest].copy()
