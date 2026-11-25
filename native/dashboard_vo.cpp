#include <iomanip>
#include <iostream>
#include <opencv2/calib3d.hpp>
#include <opencv2/imgcodecs.hpp>
#include <opencv2/imgproc.hpp>
#include <opencv2/video/tracking.hpp>
#include <vector>

using Pixel = cv::Point2f;
using Point = cv::Point3f;
struct Track {
  Pixel pixel;
  Point world;
};
struct Flow {
  std::vector<Pixel> pixels;
  std::vector<uchar> valid;
};

// Check the reverse flow as well: an occluded feature often has a plausible
// forward match but fails to return to the same location.
Flow track(const cv::Mat& from, const cv::Mat& to,
           const std::vector<Pixel>& pixels) {
  Flow forward;
  std::vector<Pixel> back;
  std::vector<uchar> valid_back;
  std::vector<float> errors;
  cv::calcOpticalFlowPyrLK(from, to, pixels, forward.pixels, forward.valid,
                           errors);
  cv::calcOpticalFlowPyrLK(to, from, forward.pixels, back, valid_back, errors);
  for (size_t i = 0; i < pixels.size(); ++i)
    forward.valid[i] &= valid_back[i] && cv::norm(back[i] - pixels[i]) < 0.7;
  return forward;
}

class StereoTracker {
  cv::Matx33d K;
  double baseline;
  cv::Mat previous;
  std::vector<Track> tracks;
  cv::Matx33d camera_from_world = cv::Matx33d::eye();
  cv::Vec3d translation{0, 0, 0};

  cv::Vec3d to_world(cv::Vec3d camera_point) const {
    return camera_from_world.t() * (camera_point - translation);
  }

  bool estimate(const cv::Mat& left) {
    if (tracks.size() < 8) return false;
    std::vector<Pixel> pixels, matches;
    std::vector<Point> world;
    for (const auto& feature : tracks) pixels.push_back(feature.pixel);
    auto flow = track(previous, left, pixels);
    for (size_t i = 0; i < tracks.size(); ++i) {
      if (!flow.valid[i]) continue;
      matches.push_back(flow.pixels[i]);
      world.push_back(tracks[i].world);
    }
    if (matches.size() < 8) return false;
    cv::Mat inliers;
    cv::Vec3d rotation, offset;
    if (!cv::solvePnPRansac(world, matches, K, cv::noArray(), rotation, offset,
                            false, 100, 1.8, 0.999, inliers,
                            cv::SOLVEPNP_AP3P) ||
        inliers.rows < 8)
      return false;
    std::vector<Track> retained;
    std::vector<Pixel> observations;
    std::vector<Point> landmarks;
    for (int row = 0; row < inliers.rows; ++row) {
      const int i = inliers.at<int>(row);
      retained.push_back({matches[i], world[i]});
      observations.push_back(matches[i]);
      landmarks.push_back(world[i]);
    }
    cv::solvePnPRefineLM(landmarks, observations, K, cv::noArray(), rotation,
                         offset);
    cv::Rodrigues(rotation, camera_from_world);
    translation = offset;
    tracks.swap(retained);
    return true;
  }

  std::vector<cv::Vec3d> add_landmarks(const cv::Mat& left,
                                       const cv::Mat& right) {
    std::vector<cv::Vec3d> added;
    if (tracks.size() >= 280) return added;
    cv::Mat mask(left.size(), CV_8U, cv::Scalar(255));
    for (const auto& feature : tracks)
      cv::circle(mask, feature.pixel, 10, cv::Scalar(0), -1);
    std::vector<Pixel> corners;
    cv::goodFeaturesToTrack(left, corners, 500 - tracks.size(), 0.0015, 8,
                            mask);
    if (corners.empty()) return added;
    auto stereo = track(left, right, corners);
    for (size_t i = 0; i < corners.size(); ++i) {
      const auto l = corners[i], r = stereo.pixels[i];
      const double disparity = l.x - r.x;
      if (!stereo.valid[i] || std::abs(l.y - r.y) > 0.8 || disparity <= 0)
        continue;
      const double z = K(0, 0) * baseline / disparity;
      if (z < 0.25 || z > 15) continue;
      const auto point = to_world(
          {(l.x - K(0, 2)) * z / K(0, 0), (l.y - K(1, 2)) * z / K(1, 1), z});
      tracks.push_back({l, Point(point)});
      added.push_back(point);
    }
    return added;
  }

 public:
  StereoTracker(double fx, double fy, double cx, double cy, double separation)
      : K(fx, 0, cx, 0, fy, cy, 0, 0, 1), baseline(separation) {}

  void process(const cv::Mat& pair) {
    const int half = pair.cols / 2;
    cv::Mat left = pair.colRange(0, half),
            right = pair.colRange(half, pair.cols);
    const bool first = previous.empty();
    const bool valid = first || estimate(left);
    const int inliers = first || !valid ? 0 : static_cast<int>(tracks.size());
    std::vector<cv::Vec3d> added;
    if (valid) {
      added = add_landmarks(left, right);
      previous = left.clone();
    }
    auto position = to_world({0, 0, 0});
    std::cout << "{\"tracking\":\""
              << (valid ? (first ? "initializing" : "tracking") : "lost")
              << "\",\"inliers\":" << inliers
              << ",\"features\":" << tracks.size()
              << ",\"position\":" << position << ",\"rotation\":[";
    // Dashboard convention: row-major world-from-camera rotation.
    for (int i = 0; i < 9; ++i)
      std::cout << (i ? "," : "") << camera_from_world(i % 3, i / 3);
    std::cout << "],\"points\":[";
    for (size_t i = 0; i < added.size(); ++i)
      std::cout << (i ? "," : "") << added[i];
    std::cout << "]}\n" << std::flush;
  }
};

int main(int argc, char** argv) {
  if (argc != 6) {
    std::cerr << "Usage: dashboard_vo fx fy cx cy baseline\n";
    return 2;
  }
  cv::setNumThreads(4);
  cv::setRNGSeed(1);
  std::cout << std::setprecision(8);
  try {
    StereoTracker tracker(std::stod(argv[1]), std::stod(argv[2]),
                          std::stod(argv[3]), std::stod(argv[4]),
                          std::stod(argv[5]));
    // Little-endian uint32 JPEG length followed by exactly that many bytes.
    uint32_t size;
    while (std::cin.read(reinterpret_cast<char*>(&size), sizeof(size))) {
      if (!size || size > 8 * 1024 * 1024)
        throw std::runtime_error("Invalid stereo JPEG size");
      std::vector<uchar> jpeg(size);
      if (!std::cin.read(reinterpret_cast<char*>(jpeg.data()), size))
        throw std::runtime_error("Truncated pair");
      auto pair = cv::imdecode(jpeg, cv::IMREAD_GRAYSCALE);
      if (pair.empty() || pair.cols % 2)
        throw std::runtime_error("Invalid stereo JPEG");
      tracker.process(pair);
    }
  } catch (const std::exception& e) {
    std::cerr << e.what() << '\n';
    return 1;
  }
}
