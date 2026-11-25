import * as THREE from "three";

// The rectified camera uses x right, y down, z forward. Three.js looks down -z.
export function viewPoint([x, y, z]) {
  return new THREE.Vector3(x, -y, -z);
}

export function updateCloud(cloud, points, session) {
  const geometry = cloud.geometry;
  let attribute = geometry.getAttribute("position");
  let start =
    cloud.userData.session === session ? cloud.userData.count || 0 : 0;
  if (!attribute || points.length > attribute.count) {
    const capacity = 2 ** Math.ceil(Math.log2(Math.max(256, points.length)));
    cloud.geometry.dispose();
    cloud.geometry = new THREE.BufferGeometry();
    attribute = new THREE.Float32BufferAttribute(
      new Float32Array(3 * capacity),
      3,
    );
    attribute.setUsage(THREE.DynamicDrawUsage);
    cloud.geometry.setAttribute("position", attribute);
    start = 0;
  }
  for (let i = start; i < points.length; ++i) {
    const [x, y, z] = points[i];
    attribute.setXYZ(i, x, -y, -z);
  }
  if (points.length > start) {
    attribute.addUpdateRange(3 * start, 3 * (points.length - start));
    attribute.needsUpdate = true;
  }
  cloud.geometry.setDrawRange(0, points.length);
  cloud.frustumCulled = false;
  cloud.userData = { session, count: points.length };
}
