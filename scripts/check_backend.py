#!/usr/bin/env python3
import argparse
import asyncio
import json
import time

import websockets


async def check(url: str, start_replay: bool) -> None:
    async with websockets.connect(url, open_timeout=5) as socket:
        first = json.loads(await asyncio.wait_for(socket.recv(), timeout=5))
        print(f"connected type={first.get('type')} frames={first.get('frame_count')}")

        sent = time.perf_counter() * 1000
        await socket.send(json.dumps({"type": "ping", "client_time_ms": sent}))
        if start_replay:
            await socket.send(json.dumps({"type": "control", "action": "play"}))

        deadline = time.monotonic() + 10
        pong_ms = None
        tracking = None
        while time.monotonic() < deadline and (pong_ms is None or (start_replay and tracking != "tracking")):
            packet = json.loads(await asyncio.wait_for(socket.recv(), timeout=5))
            if packet.get("type") == "pong":
                pong_ms = time.perf_counter() * 1000 - float(packet["client_time_ms"])
            elif packet.get("type") == "state":
                tracking = packet.get("tracking")
                first = packet

        print(f"rtt_ms={pong_ms:.2f}" if pong_ms is not None else "rtt_ms=missing")
        print(
            "tracking={} frame={} features={} inliers={}".format(
                tracking, first.get("frame"), first.get("features"), first.get("inliers")
            )
        )
        if pong_ms is None or (start_replay and tracking != "tracking"):
            raise RuntimeError("backend did not produce the expected real-time messages")


def main() -> None:
    parser = argparse.ArgumentParser(description="Check the Orange Pi WebSocket data plane")
    parser.add_argument("--url", default="ws://127.0.0.1:8000/ws")
    parser.add_argument("--play", action="store_true")
    args = parser.parse_args()
    asyncio.run(check(args.url, args.play))


if __name__ == "__main__":
    main()
