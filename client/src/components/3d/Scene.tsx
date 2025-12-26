import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Environment, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloatingGeometry() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.cos(t / 4) / 2;
    meshRef.current.rotation.y = Math.sin(t / 4) / 2;
    meshRef.current.rotation.z = Math.sin(t / 1.5) / 2;
    meshRef.current.position.y = Math.sin(t / 1.5) / 10;
  });

  return (
    <group ref={meshRef}>
      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <mesh>
          <icosahedronGeometry args={[2, 0]} />
          <meshStandardMaterial
            color="#09090b"
            emissive="#00f0ff"
            emissiveIntensity={0.5}
            roughness={0.1}
            metalness={1}
            wireframe
          />
        </mesh>
        <mesh scale={[0.9, 0.9, 0.9]}>
          <icosahedronGeometry args={[2, 0]} />
          <meshStandardMaterial
            color="#09090b"
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>
      </Float>
    </group>
  );
}

function Scene() {
  return (
    <div className="absolute inset-0 z-0 opacity-40 md:opacity-100 pointer-events-none">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <Environment preset="city" />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <directionalLight position={[10, 10, 5]} intensity={2} color="#00f0ff" />
        <directionalLight position={[-10, -10, -5]} intensity={2} color="#7000ff" />
        
        <FloatingGeometry />
      </Canvas>
    </div>
  );
}

export default Scene;
