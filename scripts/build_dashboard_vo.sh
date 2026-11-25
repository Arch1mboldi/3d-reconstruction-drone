#!/usr/bin/env bash
set -eu
root=$(cd "$(dirname "$0")/.." && pwd)
source_file="$root/native/dashboard_vo.cpp"
bin_dir="$HOME/.local/bin"
binary="$bin_dir/drone-dashboard-vo"
if [[ -x "$binary" && "$binary" -nt "$source_file" ]]; then exit 0; fi
mkdir -p "$bin_dir"
temporary=$(mktemp "$bin_dir/drone-dashboard-vo.XXXXXX")
trap 'rm -f "$temporary"' EXIT
# pkg-config emits the compiler and linker arguments for the installed OpenCV.
g++ -O3 -std=c++17 "$source_file" -o "$temporary" $(pkg-config --cflags --libs opencv4)
chmod 755 "$temporary"
mv "$temporary" "$binary"
