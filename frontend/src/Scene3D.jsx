import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { updateCloud, viewPoint } from "./world-map.js";
function setLine(line, points, color) {
  const mapped = points.map((p) => p && viewPoint(p));
  const segments = [];
  for (let index = 1; index < mapped.length; index += 1) {
    if (mapped[index - 1] && mapped[index])
      segments.push(mapped[index - 1], mapped[index]);
  }
  const geometry = new THREE.BufferGeometry().setFromPoints(segments);
  line.geometry.dispose();
  line.geometry = geometry;
  line.material.color.set(color);
}

export function Scene3D({ state, fit }) {
  const host = useRef(null);
  const sceneApi = useRef(null);

  useEffect(() => {
    const element = host.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x071017);

    const camera = new THREE.PerspectiveCamera(55, 1, 0.01, 500);
    camera.position.set(7, 6, 8);
    camera.lookAt(0, 0, 0);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    element.appendChild(renderer.domElement);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    scene.add(new THREE.GridHelper(30, 30, 0x24475b, 0x122631));
    scene.add(new THREE.AxesHelper(1.2));
    const estimated = new THREE.LineSegments(
      new THREE.BufferGeometry(),
      new THREE.LineBasicMaterial({ color: 0x31e6a1 }),
    );
    const truth = new THREE.LineSegments(
      new THREE.BufferGeometry(),
      new THREE.LineBasicMaterial({ color: 0xffb24a }),
    );
    const cloud = new THREE.Points(
      new THREE.BufferGeometry(),
      new THREE.PointsMaterial({
        color: 0x5cb9ff,
        size: 0.025,
        sizeAttenuation: true,
      }),
    );
    const body = new THREE.Group();
    const cone = new THREE.Mesh(
      new THREE.ConeGeometry(0.14, 0.38, 4),
      new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true }),
    );
    cone.rotation.x = Math.PI / 2;
    body.add(cone);
    scene.add(estimated, truth, cloud, body);
    sceneApi.current = { estimated, truth, cloud, body, camera, controls };

    const resize = () => {
      const clientWidth = Math.max(element.clientWidth, 1);
      const clientHeight = Math.max(element.clientHeight, 1);
      renderer.setSize(clientWidth, clientHeight, true);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(element);
    resize();
    let frame;
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      renderer.dispose();
      element.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    const api = sceneApi.current;
    if (!api) return;
    setLine(api.estimated, state.trajectory || [], 0x31e6a1);
    setLine(api.truth, state.ground_truth || [], 0xffb24a);
    // Legacy snapshots replace the cloud. Live sessions append by point index.
    updateCloud(
      api.cloud,
      state.map_points || [],
      state.session ?? state.map_points,
    );
    api.body.visible = Boolean(state.position);
    if (state.position) api.body.position.copy(viewPoint(state.position));
  }, [
    state.trajectory,
    state.ground_truth,
    state.map_points,
    state.position,
    state.poseCount,
    state.pointCount,
    state.session,
  ]);

  useEffect(() => {
    if (!fit || !sceneApi.current || !state.map_points.length) return;
    const { camera, controls } = sceneApi.current;
    const bounds = new THREE.Box3();
    for (const point of state.map_points)
      bounds.expandByPoint(viewPoint(point));
    const sphere = bounds.getBoundingSphere(new THREE.Sphere());
    controls.target.copy(sphere.center);
    const distance =
      (sphere.radius * 1.2) /
      Math.sin(THREE.MathUtils.degToRad(camera.fov / 2));
    camera.position
      .copy(sphere.center)
      .addScaledVector(new THREE.Vector3(1, 0.8, 1).normalize(), distance);
    camera.far = Math.max(500, distance * 3);
    camera.updateProjectionMatrix();
    controls.update();
  }, [fit]);
  return <div className="scene" ref={host} />;
}
