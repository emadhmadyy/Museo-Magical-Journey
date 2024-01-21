/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
// import Model from "../model";
// import { Suspense } from "react";
// import Fallback from "../modelfallback";
// import { PointerLockControls } from "@react-three/drei";
//import Character from "../character";
import { useFrame } from "@react-three/fiber";
//import { useRef } from "react";
import Zeus from "../models/zeus";
import Temple from "../models/temple";
import Pillar from "../models/pillar";
import Nike from "../models/nike";
import Hermes from "../models/hermes";
import HerculesGiambologna from "../models/hercules_giambologna";
import Hera from "../models/hera";

const Experience = () => {
  //const controls = useRef();
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
      <directionalLight intensity={1.5} />
      <ambientLight intensity={0.5} />
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial />
      </mesh>
      <Zeus position-x={12} scale={10} />
      <Temple />
      <Pillar />
      <Nike position-x={-50} />
      <Hermes position-y={30} />
      <HerculesGiambologna position-y={-50} />
      <Hera />
      {/* <Character /> */}
    </>
  );
};

export default Experience;
