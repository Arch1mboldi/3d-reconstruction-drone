#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="${PROJECT_DIR:-$(cd -- "$SCRIPT_DIR/.." && pwd)}"
DATA_ROOT="$PROJECT_DIR/data/EuRoC"
ARCHIVE="$DATA_ROOT/V1_01_easy.zip"
DEST="$DATA_ROOT/V1_01_easy"
URL="https://huggingface.co/datasets/pepijn223/euroc-mirror/resolve/main/V1_01_easy.zip?download=true"

if [[ -d "$DEST/mav0/cam0/data" && -d "$DEST/mav0/cam1/data" ]]; then
  echo "EuRoC V1_01_easy is already present at $DEST/mav0"
  exit 0
fi

mkdir -p "$DATA_ROOT" "$DEST"
curl -L -C - --fail --retry 5 --retry-delay 5 "$URL" -o "$ARCHIVE"
unzip -q -o "$ARCHIVE" -d "$DEST"

if [[ ! -d "$DEST/mav0/cam0/data" || ! -d "$DEST/mav0/cam1/data" ]]; then
  echo "Unexpected dataset layout under $DEST" >&2
  exit 1
fi

cp "$PROJECT_DIR/docs/V1_01_easy_SOURCE.json" "$DEST/SOURCE.json"

echo "Dataset ready at $DEST/mav0"
