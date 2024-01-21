/* eslint-disable react/no-unknown-property */
//import { OrbitControls } from "@react-three/drei";
// import Model from "../model";
// import { Suspense } from "react";
// import Fallback from "../modelfallback";
import { PointerLockControls } from "@react-three/drei";
import Character from "../character";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import Zeus from "../models/zeus";
import Temple from "../models/temple";
import Pillar from "../models/pillar";
import Nike from "../models/nike";
import Hermes from "../models/hermes";
import HerculesGiambologna from "../models/hercules_giambologna";
import Hera from "../models/hera";
import Fights from "../models/fights";
import BustZeus from "../models/bust_zeus";
import BustRhetorician from "../models/bust_rhetorician";
import BustGorgon from "../models/bust_gorgon";
import BustPerikles from "../models/bust_perikles";
import AthenaPergamon from "../models/athena_pergamon";
import Apollo from "../models/apollo";
import Alexander from "../models/alexander";
import Achilles from "../models/achilles";
import Rope from "../models/rope";

const Experience = () => {
  const handleKeyPress = (event) => {
    if (controls.current.isLocked) {
      switch (event.code) {
        case "KeyW":
          controls.current.moveForward(0.1);
          break;
        case "KeyS":
          controls.current.moveForward(-0.1);
          break;
        case "KeyD":
          controls.current.moveRight(0.1);
          break;
        case "KeyA":
          controls.current.moveRight(-0.1);
          break;
      }
    }
  };
  useEffect(() => {
    document.addEventListener("keypress", handleKeyPress);
    return () => document.removeEventListener("keypress", handleKeyPress);
  }, []);
  const playerPosition = [1, 0, 0];
  const controls = useRef();
  useFrame(() => {
    // console.log(controls);
    // console.log(moveBackward.current);
  });
  return (
    <>
      {/* <OrbitControls makeDefault /> */}
      <PointerLockControls ref={controls} />
      <directionalLight intensity={10} />
      <ambientLight intensity={1} />
      <mesh rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial />
      </mesh>
      {/* <Zeus /> */}
      {/* <Temple /> */}
      {/* <Pillar scale={0.02} position={[0, 1, 0]} /> */}
      {/* <Nike scale={0.06} position={[0, -0.06, 0]} /> */}
      {/* <Hermes position={[0, 32, -30]} /> */}
      {/* <HerculesGiambologna position={[0, -0.5, 0]} scale={0.04} /> */}
      {/* <Rope /> */}
      {/* <Hera position={[0, 13.1, -10]} /> */}
      {/* <Fights /> */}
      {/* <BustZeus scale={0.04} position={[0, 1, 0]} /> */}
      {/* <BustRhetorician
        scale={0.04}
        position={[0.01, 1.32, 0.51]}
        rotation={[Math.PI * 0.09, 0, -Math.PI * 0.03]}
      /> */}
      {/* <BustGorgon scale={0.02 / 5} position={[-0.783, 1, 0]} /> */}
      {/* <BustPerikles
        position={[-0.01, 1.175, 0]}
        rotation={[0, 0, -Math.PI * 0.015]}
        scale={0.7}
      /> */}
      {/* <AthenaPergamon scale={0.01} /> */}
      {/* <Apollo scale={0.1} position={[0, 1.1, 0]} /> */}
      {/* <Alexander /> */}
      {/* <Achilles scale={15} position={[0, 0.5, 0]} /> */}

      <Character position={playerPosition} />
    </>
  );
};

export default Experience;
