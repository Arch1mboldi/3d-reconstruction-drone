from __future__ import annotations

import asyncio
import json
import os
from contextlib import asynccontextmanager
from pathlib import Path

from fastapi import FastAPI, HTTPException, WebSocket, WebSocketDisconnect
from fastapi.responses import JSONResponse, StreamingResponse
from fastapi.staticfiles import StaticFiles

from .runtime import ReplayRuntime


PROJECT_ROOT = Path(__file__).resolve().parents[2]
DATASET_PATH = Path(os.getenv("EUROC_MAV0", PROJECT_ROOT / "data/EuRoC/V1_01_easy/mav0"))
FRONTEND_DIST = Path(os.getenv("FRONTEND_DIST", PROJECT_ROOT / "frontend/dist"))
runtime: ReplayRuntime | None = None


@asynccontextmanager
async def lifespan(_: FastAPI):
    global runtime
    runtime = ReplayRuntime(DATASET_PATH)
    task = asyncio.create_task(runtime.run())
    yield
    task.cancel()


app = FastAPI(title="3D Reconstruction Drone Debug Backend", lifespan=lifespan)


def get_runtime() -> ReplayRuntime:
    if runtime is None:
        raise HTTPException(status_code=503, detail="Replay runtime is not ready")
    return runtime


@app.get("/api/health")
async def health():
    rt = get_runtime()
    return JSONResponse({"ok": True, "dataset": str(rt.dataset.mav0), "frames": len(rt.dataset.frames)})


@app.get("/api/state")
async def state():
    return JSONResponse(get_runtime().snapshot())


@app.post("/api/control/{action}")
async def control(action: str, value: float | None = None):
    if action not in {"play", "pause", "reset", "speed", "loop"}:
        raise HTTPException(status_code=400, detail="Unknown control action")
    get_runtime().command(action, value)
    return {"ok": True}


async def mjpeg(camera: str):
    rt = get_runtime()
    boundary = b"--frame\r\nContent-Type: image/jpeg\r\n\r\n"
    while True:
        jpeg = rt.latest_jpeg[camera]
        if jpeg:
            yield boundary + jpeg + b"\r\n"
        await asyncio.sleep(0.05)


@app.get("/stream/{camera}.mjpg")
async def stream(camera: str):
    if camera not in {"left", "right"}:
        raise HTTPException(status_code=404, detail="Unknown camera")
    return StreamingResponse(mjpeg(camera), media_type="multipart/x-mixed-replace; boundary=frame")


@app.websocket("/ws")
async def websocket_endpoint(socket: WebSocket):
    await socket.accept()
    rt = get_runtime()

    async def send_states():
        while True:
            await socket.send_text(json.dumps(rt.snapshot(), separators=(",", ":")))
            await asyncio.sleep(0.2)

    sender = asyncio.create_task(send_states())
    try:
        while True:
            message = await socket.receive_json()
            if message.get("type") == "control":
                rt.command(str(message.get("action")), message.get("value"))
    except WebSocketDisconnect:
        pass
    finally:
        sender.cancel()


if FRONTEND_DIST.exists():
    app.mount("/", StaticFiles(directory=FRONTEND_DIST, html=True), name="frontend")
