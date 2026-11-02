from collections import deque

import numpy as np

from backend.app.runtime import ReplayRuntime


def test_ground_truth_alignment_removes_rigid_transform():
    estimate = np.array(
        [[0.0, 0.0, 0.0], [1.0, 0.0, 0.0], [1.0, 1.0, 0.0], [1.0, 1.0, 1.0]]
    )
    rotation = np.array([[0.0, -1.0, 0.0], [1.0, 0.0, 0.0], [0.0, 0.0, 1.0]])
    truth = (rotation @ estimate.T).T + np.array([4.0, -2.0, 0.5])
    runtime = ReplayRuntime.__new__(ReplayRuntime)
    runtime.trajectory = deque(estimate.tolist())
    runtime.ground_truth = deque(truth.tolist())

    aligned, current_error, ate_rmse = runtime._aligned_ground_truth()

    assert np.allclose(aligned, estimate, atol=1e-8)
    assert current_error < 1e-8
    assert ate_rmse < 1e-8
