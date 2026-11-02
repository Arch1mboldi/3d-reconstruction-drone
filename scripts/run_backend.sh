#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="${PROJECT_DIR:-$(cd -- "$SCRIPT_DIR/.." && pwd)}"
export EUROC_MAV0="${EUROC_MAV0:-$PROJECT_DIR/data/EuRoC/V1_01_easy/mav0}"
export FRONTEND_DIST="${FRONTEND_DIST:-$PROJECT_DIR/frontend/dist}"

cd "$PROJECT_DIR"
exec .venv/bin/uvicorn backend.app.main:app --host 0.0.0.0 --port "${PORT:-8000}"
