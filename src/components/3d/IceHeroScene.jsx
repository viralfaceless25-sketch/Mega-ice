import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import FrostParticles from "./FrostParticles";

import iceVertex from "../../shaders/iceVertex.glsl?raw";
import iceFragment from "../../shaders/iceFragment.glsl?raw";

function IceCore() {
  const mesh = useRef();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    }),
    []
  );

  useFrame((state, delta) => {
    uniforms.uTime.value += delta;

    const mx = (state.mouse.x + 1) / 2;
    const my = (state.mouse.y + 1) / 2;
    uniforms.uMouse.value.set(mx, my);

    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.22;
      mesh.current.rotation.x = Math.sin(uniforms.uTime.value * 0.35) * 0.1;
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      {/* “ice orb / chunk” — we’ll add fog overlay in CSS so it won’t look like a moon */}
      <icosahedronGeometry args={[2.2, 32]} />
      <shaderMaterial
        vertexShader={iceVertex}
        fragmentShader={iceFragment}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

export default function IceHeroScene() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 7.5], fov: 48 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[4, 6, 6]} intensity={1.0} color="#9fe7ff" />
        <directionalLight position={[-6, -2, 4]} intensity={0.6} color="#c2a7ff" />

        <IceCore />
        <FrostParticles />

        <EffectComposer>
          <Bloom intensity={0.7} luminanceThreshold={0.2} luminanceSmoothing={0.9} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}