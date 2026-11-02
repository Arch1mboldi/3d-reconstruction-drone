import numpy as np

from backend.app.stereo_vo import StereoVisualOdometry


def test_reset_restores_identity_pose():
    K = np.array([[450.0, 0.0, 376.0], [0.0, 450.0, 240.0], [0.0, 0.0, 1.0]])
    engine = StereoVisualOdometry(K, 0.11)
    engine.pose[:3, 3] = [1.0, 2.0, 3.0]
    engine.reset()
    assert np.allclose(engine.pose, np.eye(4))
