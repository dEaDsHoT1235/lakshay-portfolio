
import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

function Robot({ scrollY }: { scrollY: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = scrollY * 0.5;
      meshRef.current.rotation.y = scrollY * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} /> {/* Robot head */}
      <meshStandardMaterial color="#9b87f5" />
      <group position={[0, -2, 0]}> {/* Robot body */}
        <mesh>
          <boxGeometry args={[3, 2, 1.5]} />
          <meshStandardMaterial color="#7E69AB" />
        </mesh>
      </group>
      <group position={[-1.8, -2, 0]}> {/* Left arm */}
        <mesh>
          <boxGeometry args={[0.5, 2, 0.5]} />
          <meshStandardMaterial color="#6E59A5" />
        </mesh>
      </group>
      <group position={[1.8, -2, 0]}> {/* Right arm */}
        <mesh>
          <boxGeometry args={[0.5, 2, 0.5]} />
          <meshStandardMaterial color="#6E59A5" />
        </mesh>
      </group>
    </mesh>
  );
}

function Scene() {
  const { scrollYProgress } = useScroll();
  const { camera } = useThree();
  
  camera.position.z = 10;

  return <Robot scrollY={scrollYProgress} />;
}

export const RobotBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-20">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Scene />
      </Canvas>
    </div>
  );
};
