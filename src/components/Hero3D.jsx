import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload, Float } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const FloatingParticles = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

  useFrame((state, delta) => {
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

// Abstract shapes floating in the background
const AbstractShape = ({ position, rotation, scale, color }) => {
  const mesh = useRef();
  
  useFrame((state, delta) => {
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
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#6366f1" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#a0a0a0" />
        <Suspense fallback={null}>
          <FloatingParticles />
          <AbstractShape position={[2, 1, -2]} rotation={[0.4, 0.2, 0.1]} scale={0.8} color="#6366f1" />
          <AbstractShape position={[-2, -1, -1]} rotation={[-0.4, 0.5, 0.2]} scale={1.2} color="#ffffff" />
          <AbstractShape position={[1, -2, -3]} rotation={[0.1, -0.6, 0.3]} scale={0.5} color="#6366f1" />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default Hero3D;
