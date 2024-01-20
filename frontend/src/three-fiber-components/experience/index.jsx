/* eslint-disable react/no-unknown-property */
// import { OrbitControls } from "@react-three/drei";
// import Model from "../model";
// import { Suspense } from "react";
// import Fallback from "../modelfallback";
import { PointerLockControls } from "@react-three/drei";
import Character from "../character";

const Experience = () => {
  return (
    <>
      {/* <OrbitControls makeDefault /> */}
      <PointerLockControls />
      <directionalLight intensity={5} />
      <ambientLight intensity={1.5} />
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial />
      </mesh>
      {/* <Suspense fallback={<Fallback position={[1, 1, 1]} scale={[2, 3, 2]} />}>
        <Model url="./hamburger.glb" position={[1, 1, 1]} scale={0.35} />
      </Suspense>
      <Suspense fallback={<Fallback position={[0, 0, 0]} scale={[2, 3, 2]} />}>
        <Model
          url="./nefertitis_bust_like_in_the_museum/scene.gltf"
          position={[0, 0, 0]}
          scale={5}
        />
      </Suspense> */}
      <Character />
    </>
  );
};

export default Experience;
