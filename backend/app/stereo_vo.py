from __future__ import annotations

from dataclasses import dataclass

import cv2
import numpy as np


@dataclass
class VOResult:
    pose_world_camera: np.ndarray
    tracking: str
    features: int
    stereo_points: int
    inliers: int
    new_map_points: np.ndarray


class StereoVisualOdometry:
    """Small, inspectable stereo VO front end for hardware and transport bring-up.

    This is intentionally not presented as a loop-closing SLAM system. The dashboard
    protocol exposes an engine name so ORB-SLAM3 or VINS-Fusion can replace it later.
    """

    def __init__(self, K: np.ndarray, baseline_m: float, max_features: int = 900):
        self.K = K.astype(np.float64)
        self.baseline_m = float(baseline_m)
        self.orb = cv2.ORB_create(nfeatures=max_features, fastThreshold=12)
        self.matcher = cv2.BFMatcher(cv2.NORM_HAMMING, crossCheck=False)
        self.pose = np.eye(4, dtype=np.float64)
        self.prev = None

    def reset(self) -> None:
        self.pose = np.eye(4, dtype=np.float64)
        self.prev = None

    def _features(self, image: np.ndarray):
        keypoints, descriptors = self.orb.detectAndCompute(image, None)
        return keypoints or [], descriptors

    def _stereo_depths(self, kp_left, des_left, kp_right, des_right) -> dict[int, np.ndarray]:
        if des_left is None or des_right is None or len(des_left) < 2 or len(des_right) < 2:
            return {}
        depths: dict[int, np.ndarray] = {}
        for pair in self.matcher.knnMatch(des_left, des_right, k=2):
            if len(pair) != 2:
                continue
            match, second = pair
            if match.distance >= 0.72 * second.distance:
                continue
            xl, yl = kp_left[match.queryIdx].pt
            xr, yr = kp_right[match.trainIdx].pt
            disparity = xl - xr
            if abs(yl - yr) > 1.8 or disparity <= 1.0:
                continue
            z = self.K[0, 0] * self.baseline_m / disparity
            if not 0.25 < z < 25.0:
                continue
            x = (xl - self.K[0, 2]) * z / self.K[0, 0]
            y = (yl - self.K[1, 2]) * z / self.K[1, 1]
            depths[match.queryIdx] = np.array([x, y, z], dtype=np.float64)
        return depths

    def process(self, left: np.ndarray, right: np.ndarray) -> VOResult:
        kp_l, des_l = self._features(left)
        kp_r, des_r = self._features(right)
        depths = self._stereo_depths(kp_l, des_l, kp_r, des_r)

        if self.prev is None:
            self.prev = (kp_l, des_l, depths)
            return VOResult(self.pose.copy(), "initializing", len(kp_l), len(depths), 0, np.empty((0, 3)))

        prev_kp, prev_des, prev_depths = self.prev
        object_points: list[np.ndarray] = []
        image_points: list[tuple[float, float]] = []
        source_points: list[np.ndarray] = []

        if prev_des is not None and des_l is not None and len(prev_des) >= 2 and len(des_l) >= 2:
            for pair in self.matcher.knnMatch(prev_des, des_l, k=2):
                if len(pair) != 2:
                    continue
                match, second = pair
                point3d = prev_depths.get(match.queryIdx)
                if point3d is None or match.distance >= 0.72 * second.distance:
                    continue
                object_points.append(point3d)
                source_points.append(point3d)
                image_points.append(kp_l[match.trainIdx].pt)

        inlier_count = 0
        tracking = "lost"
        map_points_world = np.empty((0, 3), dtype=np.float64)
        if len(object_points) >= 10:
            ok, rvec, tvec, inliers = cv2.solvePnPRansac(
                np.asarray(object_points, dtype=np.float64),
                np.asarray(image_points, dtype=np.float64),
                self.K,
                None,
                iterationsCount=80,
                reprojectionError=2.5,
                confidence=0.995,
                flags=cv2.SOLVEPNP_EPNP,
            )
            if ok and inliers is not None and len(inliers) >= 8:
                inlier_count = len(inliers)
                inlier_idx = inliers.reshape(-1)
                cv2.solvePnP(
                    np.asarray(object_points)[inlier_idx],
                    np.asarray(image_points)[inlier_idx],
                    self.K,
                    None,
                    rvec,
                    tvec,
                    True,
                    flags=cv2.SOLVEPNP_ITERATIVE,
                )
                R, _ = cv2.Rodrigues(rvec)
                T_current_previous = np.eye(4, dtype=np.float64)
                T_current_previous[:3, :3] = R
                T_current_previous[:3, 3] = tvec.reshape(3)
                previous_pose = self.pose.copy()
                self.pose = previous_pose @ np.linalg.inv(T_current_previous)
                tracking = "tracking" if inlier_count >= 15 else "degraded"

                selected = np.asarray(source_points)[inlier_idx][:: max(1, len(inlier_idx) // 40)]
                homogeneous = np.column_stack((selected, np.ones(len(selected))))
                map_points_world = (previous_pose @ homogeneous.T).T[:, :3]

        self.prev = (kp_l, des_l, depths)
        return VOResult(
            self.pose.copy(), tracking, len(kp_l), len(depths), inlier_count, map_points_world
        )
