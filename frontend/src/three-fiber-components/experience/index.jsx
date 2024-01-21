/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
// import Model from "../model";
// import { Suspense } from "react";
// import Fallback from "../modelfallback";
// import { PointerLockControls } from "@react-three/drei";
import Character from "../character";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import Zeus from "../models/zeus";

const Experience = () => {
  const controls = useRef();
  //   const moveForward = useRef(false);
  //   const moveBackward = useRef(false);
  //   const moveRight = useRef(false);
  //   const moveLeft = useRef(false);
  useFrame(() => {
    // console.log(moveBackward.current);
  });
  return (
    <>
      <OrbitControls makeDefault />
      {/* <PointerLockControls ref={controls} /> */}
      <directionalLight intensity={5} />
      <ambientLight intensity={1.5} />
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial />
      </mesh>
      <Zeus />
      {/* <Character /> */}
    </>
  );
};

export default Experience;
