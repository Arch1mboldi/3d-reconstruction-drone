import { Matrix4, Quaternion, Vector3 } from "three";

const positionOf = (matrix) => new Vector3().setFromMatrixPosition(matrix);

// EuRoC timestamps exceed Number.MAX_SAFE_INTEGER. Convert only differences.
export class Reference {
  constructor(csv, bodyFromRect) {
    this.bodyFromRect = new Matrix4().set(...bodyFromRect);
    this.rows = csv
      .trim()
      .split(/\r?\n/)
      .filter((line) => line && !line.startsWith("#"))
      .map((line) => {
        const [stamp, ...fields] = line.split(",");
        const [x, y, z, w, qx, qy, qz] = fields.map(Number);
        return {
          time: BigInt(stamp),
          position: new Vector3(x, y, z),
          rotation: new Quaternion(qx, qy, qz, w).normalize(),
        };
      });
    this.cursor = 0;
    this.squaredError = 0;
    this.count = 0;
  }

  compare(timestamp, estimate) {
    const time = BigInt(timestamp);
    const rows = this.rows;
    if (!rows.length || time < rows[0].time || time > rows.at(-1).time)
      return {};
    while (this.cursor + 1 < rows.length && rows[this.cursor + 1].time <= time)
      this.cursor++;
    const a = rows[this.cursor],
      b = rows[this.cursor + 1] || a;
    const alpha = a === b ? 0 : Number(time - a.time) / Number(b.time - a.time);
    const pose = new Matrix4().makeRotationFromQuaternion(
      a.rotation.clone().slerp(b.rotation, alpha),
    );
    pose
      .setPosition(a.position.clone().lerp(b.position, alpha))
      .multiply(this.bodyFromRect);

    // Anchor once at a timestamp for which BOTH full camera poses exist.
    if (!this.origin && estimate)
      this.origin = estimate.clone().multiply(pose.clone().invert());
    if (!this.origin) return {};
    const truth = positionOf(pose.premultiply(this.origin));
    if (!estimate) return { truth: truth.toArray() };
    const error = truth.distanceTo(positionOf(estimate));
    this.squaredError += error * error;
    this.count++;
    return {
      truth: truth.toArray(),
      error,
      rmse: Math.sqrt(this.squaredError / this.count),
    };
  }
}
