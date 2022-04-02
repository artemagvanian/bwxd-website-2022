import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import mascot from "url:../assets/mascot.glb";

function Box(props) {
  const ref = useRef();

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => (ref.current.rotation.x += 0.01));

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 3 : 2}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

function Scene() {
  const obj = useLoader(GLTFLoader, mascot);
  const ref = useRef();

  useFrame((state, delta) => (ref.current.rotation.x += 0.01));

  return (
    <primitive ref={ref} object={obj.scene} rotation={[Math.PI / 2, 0, 0]} />
  );
}

export function ThreeExample() {
  return (
    <Suspense fallback={null}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {/* <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} /> */}
        <Scene />
      </Canvas>
    </Suspense>
  );
}
