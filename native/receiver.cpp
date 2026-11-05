#include <opencv2/imgcodecs.hpp>
#include <opencv2/imgproc.hpp>
#include <opencv2/videoio.hpp>

#include <chrono>
#include <filesystem>
#include <fstream>
#include <iomanip>
#include <iostream>
#include <memory>
#include <stdexcept>
#include <string>

#ifdef DRONE_HAS_STELLA
#include <stella_vslam/config.h>
#include <stella_vslam/system.h>
#include <stella_vslam/util/stereo_rectifier.h>
#endif

namespace fs = std::filesystem;

int main(int argc, char** argv) {
    if (argc < 2 || argc > 6) {
        std::cerr << "Usage: drone_receiver <record directory> [port=5600] [max-frames=0] [stella-config.yaml vocabulary.fbow]\n";
        return 2;
    }
    try {
        const fs::path directory = argv[1];
        const int port = argc >= 3 ? std::stoi(argv[2]) : 5600;
        const int limit = argc >= 4 ? std::stoi(argv[3]) : 0;
        if (port < 1 || port > 65535 || limit < 0) throw std::runtime_error("Invalid port or frame limit");
        if (argc == 5) throw std::runtime_error("SLAM requires both config and vocabulary paths");
        fs::create_directories(directory);
        std::ofstream metrics(directory / "receive.csv");
        if (!metrics) throw std::runtime_error("Cannot create receive.csv");
        metrics << "local_frame,receive_time_unix_ns,width,height,receive_interval_ms\n";

#ifdef DRONE_HAS_STELLA
        std::unique_ptr<stella_vslam::system> slam;
        std::unique_ptr<stella_vslam::util::stereo_rectifier> rectifier;
        std::ofstream poses;
        if (argc == 6) {
            auto config = std::make_shared<stella_vslam::config>(argv[4]);
            slam = std::make_unique<stella_vslam::system>(config, argv[5]);
            rectifier = std::make_unique<stella_vslam::util::stereo_rectifier>(config, slam->get_camera());
            poses.open(directory / "poses.csv");
            if (!poses) throw std::runtime_error("Cannot create poses.csv");
            poses << "local_frame,receive_elapsed_s,tracking,world_x,world_y,world_z\n";
            slam->startup();
            std::cout << "stella_vslam stereo started on laptop\n";
        }
#else
        if (argc == 6) throw std::runtime_error("This build lacks stella_vslam; install it and rebuild");
#endif
        const std::string pipeline =
            "udpsrc port=" + std::to_string(port) +
            " caps=\"application/x-rtp,media=(string)video,clock-rate=(int)90000,encoding-name=(string)JPEG,payload=(int)26\" "
            "! rtpjitterbuffer latency=50 drop-on-latency=true ! rtpjpegdepay ! jpegdec ! "
            "videoconvert ! video/x-raw,format=BGR ! appsink drop=true max-buffers=2 sync=false";
        cv::VideoCapture input(pipeline, cv::CAP_GSTREAMER);
        if (!input.isOpened()) throw std::runtime_error("GStreamer receiver pipeline failed: " + pipeline);
        std::cout << "Listening on UDP " << port << "; recording to " << directory << '\n';

        const auto started = std::chrono::steady_clock::now();
        auto last = started;
        for (int frame = 0; limit == 0 || frame < limit; ++frame) {
            cv::Mat pair;
            if (!input.read(pair)) throw std::runtime_error("Video stream ended");
            if (pair.cols % 2 != 0 || pair.empty()) throw std::runtime_error("Invalid stereo frame dimensions");
            const auto now = std::chrono::steady_clock::now();
            const auto unix_ns = std::chrono::duration_cast<std::chrono::nanoseconds>(
                std::chrono::system_clock::now().time_since_epoch()).count();
            const double gap_ms = std::chrono::duration<double, std::milli>(now - last).count();
            last = now;
            metrics << frame << ',' << unix_ns << ',' << pair.cols << ',' << pair.rows << ',' << gap_ms << '\n';
#ifdef DRONE_HAS_STELLA
            if (slam) {
                const int half = pair.cols / 2;
                cv::Mat left_gray, right_gray, left_rectified, right_rectified;
                cv::cvtColor(pair(cv::Rect(0, 0, half, pair.rows)), left_gray, cv::COLOR_BGR2GRAY);
                cv::cvtColor(pair(cv::Rect(half, 0, half, pair.rows)), right_gray, cv::COLOR_BGR2GRAY);
                rectifier->rectify(left_gray, right_gray, left_rectified, right_rectified);
                // Monotonic receive time keeps gaps visible. Source timestamps need a GStreamer API receiver.
                const double elapsed_s = std::chrono::duration<double>(now - started).count();
                const auto pose = slam->feed_stereo_frame(left_rectified, right_rectified, elapsed_s);
                poses << frame << ',' << elapsed_s << ',' << (pose ? "tracking" : "lost");
                if (pose) {
                    const auto world_from_camera = pose->inverse();
                    poses << ',' << world_from_camera(0, 3) << ',' << world_from_camera(1, 3)
                          << ',' << world_from_camera(2, 3);
                }
                poses << '\n';
                if (frame % 10 == 0) poses.flush();
            }
#endif
            if (frame % 100 == 0) {
                cv::imwrite((directory / "latest_left.jpg").string(), pair(cv::Rect(0, 0, pair.cols / 2, pair.rows)));
                cv::imwrite((directory / "latest_right.jpg").string(), pair(cv::Rect(pair.cols / 2, 0, pair.cols / 2, pair.rows)));
                metrics.flush();
                std::cout << "received=" << frame + 1 << " interval_ms=" << std::fixed << std::setprecision(1)
                          << gap_ms << '\n';
            }
        }
#ifdef DRONE_HAS_STELLA
        if (slam) {
            slam->shutdown();
            slam->save_frame_trajectory((directory / "trajectory_tum.txt").string(), "TUM");
        }
#endif
        return 0;
    } catch (const std::exception& error) {
        std::cerr << "receiver: " << error.what() << '\n';
        return 1;
    }
}
