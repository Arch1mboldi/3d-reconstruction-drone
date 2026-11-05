#include <opencv2/imgcodecs.hpp>
#include <opencv2/imgproc.hpp>
#include <opencv2/videoio.hpp>

#include <chrono>
#include <filesystem>
#include <fstream>
#include <iostream>
#include <stdexcept>
#include <string>
#include <thread>
#include <vector>

namespace fs = std::filesystem;

struct Sample {
    std::string timestamp;
    fs::path image;
};

std::vector<Sample> read_camera_csv(const fs::path& mav0, const std::string& camera) {
    const fs::path csv = mav0 / camera / "data.csv";
    std::ifstream input(csv);
    if (!input) throw std::runtime_error("Cannot open " + csv.string());
    std::vector<Sample> samples;
    std::string line;
    while (std::getline(input, line)) {
        // EuRoC CSV archives may use CRLF; std::getline removes only '\n'.
        if (!line.empty() && line.back() == '\r') line.pop_back();
        if (line.empty() || line[0] == '#') continue;
        const auto comma = line.find(',');
        if (comma == std::string::npos) throw std::runtime_error("Invalid CSV row: " + line);
        samples.push_back({line.substr(0, comma), mav0 / camera / "data" / line.substr(comma + 1)});
    }
    return samples;
}

int main(int argc, char** argv) {
    if (argc < 3 || argc > 6) {
        std::cerr << "Usage: drone_sender <EuRoC mav0 path|synthetic> <laptop IP> [port=5600] [fps=10] [max-pairs=0]\n";
        return 2;
    }
    try {
        const fs::path mav0 = argv[1];
        const std::string host = argv[2];
        const int port = argc >= 4 ? std::stoi(argv[3]) : 5600;
        const int fps = argc >= 5 ? std::stoi(argv[4]) : 10;
        const int max_pairs = argc >= 6 ? std::stoi(argv[5]) : 0;
        if (port < 1 || port > 65535 || fps < 1 || fps > 30 || max_pairs < 0)
            throw std::runtime_error("Invalid port, fps or max-pairs");

        const bool test_pattern = mav0 == "synthetic";
        const auto left = test_pattern ? std::vector<Sample>{} : read_camera_csv(mav0, "cam0");
        const auto right = test_pattern ? std::vector<Sample>{} : read_camera_csv(mav0, "cam1");
        if (test_pattern) {
            std::cerr << "synthetic input is only for transport diagnostics; it is not SLAM data\n";
        }
        if (!test_pattern && (left.empty() || right.empty())) throw std::runtime_error("EuRoC camera CSV is empty");
        const cv::Mat first = test_pattern ? cv::Mat(480, 752, CV_8UC1, cv::Scalar(100))
                                           : cv::imread(left.front().image.string(), cv::IMREAD_GRAYSCALE);
        if (first.empty()) throw std::runtime_error("Cannot decode first left image");
        const int width = first.cols * 2;
        const int height = first.rows;
        const std::string pipeline =
            "appsrc ! video/x-raw,format=GRAY8,width=" + std::to_string(width) +
            ",height=" + std::to_string(height) + ",framerate=" + std::to_string(fps) +
            "/1 ! queue max-size-buffers=2 leaky=downstream ! videoconvert ! "
            "video/x-raw,format=I420 ! jpegenc quality=85 ! "
            "rtpjpegpay ! udpsink host=" + host + " port=" + std::to_string(port) + " sync=false";
        cv::VideoWriter output(pipeline, cv::CAP_GSTREAMER, 0, fps, {width, height}, false);
        if (!output.isOpened()) throw std::runtime_error("GStreamer sender pipeline failed: " + pipeline);
        std::cout << "Sending " << width << "x" << height << " stereo pairs to " << host
                  << ":" << port << " at " << fps << " FPS\n";

        const auto interval = std::chrono::nanoseconds(1000000000LL / fps);
        auto next = std::chrono::steady_clock::now();
        size_t paired = 0, skipped = 0;
        for (size_t i = 0, j = 0;
             (max_pairs == 0 || paired < static_cast<size_t>(max_pairs)) &&
             (test_pattern ? paired < 300 : (i < left.size() && j < right.size()));) {
            if (test_pattern) {
                cv::Mat l(first.size(), CV_8UC1, cv::Scalar(90));
                cv::Mat r(first.size(), CV_8UC1, cv::Scalar(90));
                const int x = 80 + static_cast<int>(paired % 400);
                cv::circle(l, {x, 230}, 32, cv::Scalar(230), -1);
                cv::circle(r, {x - 25, 230}, 32, cv::Scalar(230), -1);
                cv::Mat pair;
                cv::hconcat(l, r, pair);
                output.write(pair);
                ++paired;
                next += interval;
                std::this_thread::sleep_until(next);
                continue;
            }
            if (left[i].timestamp != right[j].timestamp) {
                // EuRoC camera rows are normally identical. Never silently pair different times.
                if (left[i].timestamp < right[j].timestamp) ++i; else ++j;
                ++skipped;
                continue;
            }
            const cv::Mat l = cv::imread(left[i].image.string(), cv::IMREAD_GRAYSCALE);
            const cv::Mat r = cv::imread(right[j].image.string(), cv::IMREAD_GRAYSCALE);
            if (l.size() != first.size() || r.size() != first.size() || l.empty() || r.empty()) {
                throw std::runtime_error("Missing or mismatched stereo image at " + left[i].timestamp);
            }
            cv::Mat pair;
            cv::hconcat(l, r, pair);
            output.write(pair);
            ++paired;
            if (paired % 100 == 0) std::cout << "pairs=" << paired << " unmatched=" << skipped << '\n';
            ++i;
            ++j;
            next += interval;
            std::this_thread::sleep_until(next);
        }
        std::cout << "Finished: pairs=" << paired << " unmatched=" << skipped << '\n';
        return 0;
    } catch (const std::exception& error) {
        std::cerr << "sender: " << error.what() << '\n';
        return 1;
    }
}
