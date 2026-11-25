import test from "node:test";
import assert from "node:assert/strict";
import { Matrix4, Vector3 } from "three";
import { Reference } from "./ground-truth.mjs";

test("uncovered timestamps, missing poses, camera lever arm and a fixed SE(3) anchor", () => {
  const start = 1403715274302142976n;
  // Rotate the body 180 degrees about Z. The camera is one metre off-axis.
  const csv = [start + ",0,0,0,1,0,0,0", start + 10n + ",0,0,0,0,0,0,1"].join(
    "\n",
  );
  const bodyFromCam = [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  const reference = new Reference(csv, bodyFromCam);
  assert.deepEqual(reference.compare(start - 1n, new Matrix4()), {});
  assert.deepEqual(reference.compare(start, null), {});
  const estimate = new Matrix4()
    .makeRotationZ(Math.PI / 2)
    .setPosition(10, 20, 30);
  assert.equal(reference.compare(start, estimate).error, 0);
  const middle = reference.compare(start + 5n, null);
  assert.ok(
    new Vector3(...middle.truth).distanceTo(new Vector3(9, 19, 30)) < 1e-9,
  );
  const end = reference.compare(
    start + 10n,
    new Matrix4().setPosition(10, 19, 30),
  );
  assert.ok(Math.abs(end.error - 1) < 1e-9);
  assert.ok(Math.abs(end.rmse - Math.SQRT1_2) < 1e-9);
  assert.deepEqual(reference.compare(start + 11n, estimate), {});
  assert.equal(reference.count, 2);
});
