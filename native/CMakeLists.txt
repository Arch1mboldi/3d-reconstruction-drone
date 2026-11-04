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
