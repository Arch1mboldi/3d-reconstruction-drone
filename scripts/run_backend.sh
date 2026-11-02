#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="${PROJECT_DIR:-$HOME/3d-reconstruction-drone}"
export EUROC_MAV0="${EUROC_MAV0:-$PROJECT_DIR/data/EuRoC/V1_01_easy/mav0}"
export FRONTEND_DIST="${FRONTEND_DIST:-$PROJECT_DIR/frontend/dist}"

cd "$PROJECT_DIR"
exec .venv/bin/uvicorn backend.app.main:app --host 0.0.0.0 --port "${PORT:-8000}"
