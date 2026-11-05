cmake_minimum_required(VERSION 3.16)
project(drone_stereo_transport LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
find_package(OpenCV REQUIRED COMPONENTS core imgcodecs imgproc videoio)

add_executable(drone_sender sender.cpp)
target_include_directories(drone_sender PRIVATE ${OpenCV_INCLUDE_DIRS})
target_link_libraries(drone_sender PRIVATE ${OpenCV_LIBS})

add_executable(drone_receiver receiver.cpp)
target_include_directories(drone_receiver PRIVATE ${OpenCV_INCLUDE_DIRS})
target_link_libraries(drone_receiver PRIVATE ${OpenCV_LIBS})

# The transport remains buildable before the laptop SLAM dependencies are installed.
find_package(stella_vslam QUIET)
if(stella_vslam_FOUND)
    target_compile_definitions(drone_receiver PRIVATE DRONE_HAS_STELLA=1)
    target_link_libraries(drone_receiver PRIVATE stella_vslam::stella_vslam)
    message(STATUS "Laptop stereo SLAM: enabled")
else()
    message(STATUS "Laptop stereo SLAM: unavailable (transport-only receiver)")
endif()
