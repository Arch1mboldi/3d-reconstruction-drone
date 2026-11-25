#include <filesystem>
#include <fstream>
#include <iostream>
#include <map>
#include <opencv2/calib3d.hpp>
#include <opencv2/imgcodecs.hpp>
#include <opencv2/imgproc.hpp>

namespace fs = std::filesystem;
struct Camera {
  cv::Mat K, distortion, body_from_camera;
  cv::Size size;
};

Camera read_camera(const fs::path& file) {
  std::ifstream input(file);
  std::string yaml((std::istreambuf_iterator<char>(input)), {});
  cv::FileStorage config("%YAML:1.0\n" + yaml,
                         cv::FileStorage::READ | cv::FileStorage::MEMORY);
  std::vector<double> intrinsics, distortion, transform;
  std::vector<int> size;
  config["intrinsics"] >> intrinsics;
  config["resolution"] >> size;
  config["T_BS"]["data"] >> transform;
  config["distortion_coefficients"] >> distortion;
  if (intrinsics.size() != 4 || transform.size() != 16 || size.size() != 2)
    throw std::runtime_error("Incomplete calibration: " + file.string());
  cv::Mat K = (cv::Mat_<double>(3, 3) << intrinsics[0], 0, intrinsics[2], 0,
               intrinsics[1], intrinsics[3], 0, 0, 1);
  return {K,
          cv::Mat(distortion).clone(),
          cv::Mat(transform).reshape(1, 4).clone(),
          {size[0], size[1]}};
}

std::map<std::string, fs::path> image_index(const fs::path& folder) {
  std::map<std::string, fs::path> result;
  std::ifstream input(folder / "data.csv");
  std::string row;
  while (std::getline(input, row)) {
    if (row.empty() || row.front() == '#') continue;
    if (row.back() == '\r') row.pop_back();
    const auto comma = row.find(',');
    result.emplace(row.substr(0, comma),
                   folder / "data" / row.substr(comma + 1));
  }
  return result;
}

void prepare(const fs::path& dataset, const fs::path& out) {
  fs::create_directories(out);
  const auto left = read_camera(dataset / "cam0/sensor.yaml"),
             right = read_camera(dataset / "cam1/sensor.yaml");
  cv::Mat relative = right.body_from_camera.inv() * left.body_from_camera;
  cv::Mat R0, R1, P0, P1, Q, mx[2], my[2];
  cv::stereoRectify(left.K, left.distortion, right.K, right.distortion,
                    left.size, relative(cv::Rect(0, 0, 3, 3)),
                    relative(cv::Rect(3, 0, 1, 3)), R0, R1, P0, P1, Q,
                    cv::CALIB_ZERO_DISPARITY, 0);
  cv::initUndistortRectifyMap(left.K, left.distortion, R0, P0, left.size,
                              CV_16SC2, mx[0], my[0]);
  cv::initUndistortRectifyMap(right.K, right.distortion, R1, P1, right.size,
                              CV_16SC2, mx[1], my[1]);
  cv::Mat raw_from_rect = cv::Mat::eye(4, 4, CV_64F);
  cv::transpose(R0, raw_from_rect(cv::Rect(0, 0, 3, 3)));
  cv::Mat body_from_rect = left.body_from_camera * raw_from_rect;
  cv::FileStorage config((out / "calibration.json").string(),
                         cv::FileStorage::WRITE);
  config << "K" << P0(cv::Rect(0, 0, 3, 3)) << "baseline"
         << -P1.at<double>(0, 3) / P1.at<double>(0, 0) << "body_from_rect"
         << body_from_rect;
  config.release();
  fs::copy_file(dataset / "state_groundtruth_estimate0/data.csv",
                out / "truth.csv", fs::copy_options::overwrite_existing);
  const auto right_index = image_index(dataset / "cam1");
  std::ofstream manifest(out / "frames.tmp");
  size_t count = 0;
  for (const auto& [stamp, path] : image_index(dataset / "cam0")) {
    const auto other = right_index.find(stamp);
    if (other == right_index.end()) continue;
    cv::Mat images[2] = {cv::imread(path.string(), 0),
                         cv::imread(other->second.string(), 0)};
    cv::Mat rect[2], pair;
    for (int eye = 0; eye < 2; ++eye)
      cv::remap(images[eye], rect[eye], mx[eye], my[eye], cv::INTER_LINEAR);
    cv::hconcat(rect[0], rect[1], pair);
    if (!cv::imwrite((out / (stamp + ".jpg")).string(), pair,
                     {cv::IMWRITE_JPEG_QUALITY, 90}))
      throw std::runtime_error("Cannot write stereo pair");
    manifest << stamp << '\n';
    ++count;
  }
  manifest.close();
  if (!count || !manifest) throw std::runtime_error("Incomplete stereo index");
  fs::rename(out / "frames.tmp", out / "frames.txt");
  std::cout << count << " rectified pairs\n";
}

int main(int argc, char** argv) {
  if (argc != 3) {
    std::cerr << "Usage: prepare_feed mav0 output-directory\n";
    return 2;
  }
  try {
    cv::setNumThreads(2);
    prepare(argv[1], argv[2]);
  } catch (const std::exception& e) {
    std::cerr << e.what() << '\n';
    return 1;
  }
}
