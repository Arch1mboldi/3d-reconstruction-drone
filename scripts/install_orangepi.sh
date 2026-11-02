#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
DEFAULT_PROJECT_DIR="$(cd -- "$SCRIPT_DIR/.." && pwd)"
PROJECT_DIR="${1:-$DEFAULT_PROJECT_DIR}"

sudo apt-get update
sudo apt-get install -y python3-venv python3-pip python3-opencv python3-numpy unzip curl

cd "$PROJECT_DIR"
python3 -m venv --system-site-packages .venv
.venv/bin/python -m pip install --upgrade pip
.venv/bin/python -m pip install -r backend/requirements.txt

echo "Orange Pi environment ready at $PROJECT_DIR"
