#include <opencv2/imgcodecs.hpp>
#include <opencv2/imgproc.hpp>
#include <opencv2/videoio.hpp>

#include <chrono>
#include <filesystem>
#include <fstream>
#include <iomanip>
#include <iostream>
#include <stdexcept>
#include <string>

namespace fs = std::filesystem;

int main(int argc, char** argv) {
    if (argc < 2 || argc > 4) {
        std::cerr << "Usage: drone_receiver <record directory> [port=5600] [max-frames=0]\n";
        return 2;
    }
    try {
        const fs::path directory = argv[1];
        const int port = argc >= 3 ? std::stoi(argv[2]) : 5600;
        const int limit = argc >= 4 ? std::stoi(argv[3]) : 0;
        if (port < 1 || port > 65535 || limit < 0) throw std::runtime_error("Invalid port or frame limit");
        fs::create_directories(directory);
        std::ofstream metrics(directory / "receive.csv");
        if (!metrics) throw std::runtime_error("Cannot create receive.csv");
        metrics << "frame,receive_time_unix_ns,width,height,decode_interval_ms\n";
        const std::string pipeline =
            "udpsrc port=" + std::to_string(port) +
            " caps=\"application/x-rtp,media=(string)video,clock-rate=(int)90000,encoding-name=(string)JPEG,payload=(int)26\" "
            "! rtpjitterbuffer latency=50 drop-on-latency=true ! rtpjpegdepay ! jpegdec ! "
            "videoconvert ! video/x-raw,format=BGR ! appsink drop=true max-buffers=2 sync=false";
        cv::VideoCapture input(pipeline, cv::CAP_GSTREAMER);
        if (!input.isOpened()) throw std::runtime_error("GStreamer receiver pipeline failed: " + pipeline);
        std::cout << "Listening on UDP " << port << "; recording to " << directory << '\n';

        auto last = std::chrono::steady_clock::now();
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
            if (frame % 100 == 0) {
                cv::imwrite((directory / "latest_left.jpg").string(), pair(cv::Rect(0, 0, pair.cols / 2, pair.rows)));
                cv::imwrite((directory / "latest_right.jpg").string(), pair(cv::Rect(pair.cols / 2, 0, pair.cols / 2, pair.rows)));
                metrics.flush();
                std::cout << "received=" << frame + 1 << " interval_ms=" << std::fixed << std::setprecision(1)
                          << gap_ms << '\n';
            }
        }
        return 0;
    } catch (const std::exception& error) {
        std::cerr << "receiver: " << error.what() << '\n';
        return 1;
    }
}
