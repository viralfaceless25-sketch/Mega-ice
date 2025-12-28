import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function FrostParticles() {
  const points = useRef();

  const { positions } = useMemo(() => {
    const count = 900;
    const pos = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // wide spread, soft depth
      pos[i * 3 + 0] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    return { positions: pos };
  }, []);

  useFrame((state, delta) => {
    if (!points.current) return;

    points.current.rotation.y += delta * 0.03;
    points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.03;

    const attr = points.current.geometry.attributes.position;
    for (let i = 0; i < attr.count; i++) {
      const y = attr.getY(i);
      attr.setY(i, y + delta * 0.25);
      if (attr.getY(i) > 6) attr.setY(i, -6);
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          itemSize={3}
          count={positions.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color={new THREE.Color("#bfefff")}
        transparent
        opacity={0.55}
        depthWrite={false}
      />
    </points>
  );
}