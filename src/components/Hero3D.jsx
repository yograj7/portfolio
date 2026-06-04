/* eslint-disable no-unused-vars */
import React, { Suspense, useRef, useState, useEffect } from 'react';

// Hero3D dynamically imports heavy 3D libraries to keep vendor chunk small

const FloatingParticles = ({ Points, PointMaterial, useFrame, random, particleCount = 2000, ...props }) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(particleCount * 3), { radius: 1.5 }));

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f2f2f2"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const AbstractShape = ({ Float, useFrame, position, rotation, scale, color }) => {
  const mesh = useRef();

  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.2;
    mesh.current.rotation.y += delta * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={mesh} position={position} rotation={rotation} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
    </Float>
  );
};

const Hero3D = () => {
  const [mods, setMods] = useState(null);

  useEffect(() => {
    let mounted = true;
    Promise.all([
      import('@react-three/fiber'),
      import('@react-three/drei'),
      import('maath/random/dist/maath-random.esm')
    ]).then(([fiber, drei, random]) => {
      if (mounted) setMods({ fiber, drei, random });
    }).catch(() => {
      // ignore
    });
    return () => { mounted = false; };
  }, []);

  if (!mods) return null;

  const { Canvas, useFrame } = mods.fiber;
  const { Points, PointMaterial, Preload, Float } = mods.drei;
  const randomLib = mods.random;

  // adapt particle count for device
  const particleCount = typeof navigator !== 'undefined' && navigator.hardwareConcurrency
    ? Math.min(5000, navigator.hardwareConcurrency * 800)
    : 2000;

  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 3] }} frameloop="demand">
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#6366f1" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#a0a0a0" />
        <Suspense fallback={null}>
          <FloatingParticles Points={Points} PointMaterial={PointMaterial} useFrame={useFrame} random={randomLib} particleCount={particleCount} />
          <AbstractShape Float={Float} useFrame={useFrame} position={[2, 1, -2]} rotation={[0.4, 0.2, 0.1]} scale={0.8} color="#6366f1" />
          <AbstractShape Float={Float} useFrame={useFrame} position={[-2, -1, -1]} rotation={[-0.4, 0.5, 0.2]} scale={1.2} color="#ffffff" />
          <AbstractShape Float={Float} useFrame={useFrame} position={[1, -2, -3]} rotation={[0.1, -0.6, 0.3]} scale={0.5} color="#6366f1" />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default Hero3D;
