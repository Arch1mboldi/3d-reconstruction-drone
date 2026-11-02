from __future__ import annotations

import asyncio
import json
import os
from contextlib import asynccontextmanager
from contextlib import suppress
from pathlib import Path

from fastapi import FastAPI, HTTPException, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, StreamingResponse

from .runtime import ReplayRuntime


PROJECT_ROOT = Path(__file__).resolve().parents[2]
DATASET_PATH = Path(os.getenv("EUROC_MAV0", PROJECT_ROOT / "data/EuRoC/V1_01_easy/mav0"))
VIDEO_FPS = max(1, min(20, int(os.getenv("VIDEO_FPS", "10"))))
runtime: ReplayRuntime | None = None


@asynccontextmanager
async def lifespan(_: FastAPI):
    global runtime
    runtime = ReplayRuntime(DATASET_PATH)
    task = asyncio.create_task(runtime.run())
    yield
    task.cancel()


app = FastAPI(title="3D Reconstruction Drone Debug Backend", lifespan=lifespan)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5173", "http://localhost:5173"],
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


def get_runtime() -> ReplayRuntime:
    if runtime is None:
        raise HTTPException(status_code=503, detail="Replay runtime is not ready")
    return runtime


@app.get("/")
async def root():
    return {"service": "3d-reconstruction-drone-backend", "frontend": "runs on the laptop", "ok": True}


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
        await asyncio.sleep(1.0 / VIDEO_FPS)


@app.get("/stream/{camera}.mjpg")
async def stream(camera: str):
    if camera not in {"left", "right"}:
        raise HTTPException(status_code=404, detail="Unknown camera")
    return StreamingResponse(mjpeg(camera), media_type="multipart/x-mixed-replace; boundary=frame")


@app.websocket("/ws")
async def websocket_endpoint(socket: WebSocket):
    await socket.accept()
    rt = get_runtime()
    send_lock = asyncio.Lock()

    async def send(payload: dict):
        async with send_lock:
            await socket.send_text(json.dumps(payload, separators=(",", ":")))

    async def send_states():
        while True:
            await send(rt.snapshot())
            await asyncio.sleep(0.2)

    sender = asyncio.create_task(send_states())
    try:
        while True:
            message = await socket.receive_json()
            if message.get("type") == "control":
                rt.command(str(message.get("action")), message.get("value"))
            elif message.get("type") == "ping":
                await send({"type": "pong", "client_time_ms": message.get("client_time_ms")})
    except WebSocketDisconnect:
        pass
    finally:
        sender.cancel()
        with suppress(asyncio.CancelledError):
            await sender
