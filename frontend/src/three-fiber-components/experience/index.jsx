/* eslint-disable react/no-unknown-property */
import {
  OrbitControls,
  PointerLockControls,
  useTexture,
} from "@react-three/drei";
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
import { DoubleSide } from "three";
import * as THREE from "three";

const Experience = () => {
  const textures = useTexture([
    "laminate-flooring-brown/laminate-flooring-brown_albedo.png",
    "laminate-flooring-brown/laminate-flooring-brown_ao.png",
    "laminate-flooring-brown/laminate-flooring-brown_normal-ogl.png",
    "laminate-flooring-brown/laminate-flooring-brown_metallic.png",
  ]);
  textures.map((texture) => {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(10, 10);
  });

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
    // controls.current.camera.position.y = 1.5;
    console.log(floor.current.geometry.attributes.uv.array[0]);
    // document.addEventListener("keypress", handleKeyPress);
    // return () => document.removeEventListener("keypress", handleKeyPress);
  }, []);
  const playerPosition = [1, 0, 0];
  const controls = useRef();
  const floor = useRef();
  const spotlight = useRef();
  useFrame(() => {
    // console.log(spotlight.current);
    // console.log(floor.current);
  });
  return (
    <>
      {/* <PointerLockControls ref={controls} /> */}
      <OrbitControls />
      <directionalLight intensity={10} />
      {/* <pointLight
        intensity={10}
        position={[0, 2, 0]}
        ref={spotlight}
        decay={1}
      /> */}
      <ambientLight intensity={1} />
      <mesh rotation-x={-Math.PI * 0.5} scale={50} ref={floor}>
        <planeGeometry />
        <meshPhysicalMaterial
          map={textures[0]}
          aoMap={textures[1]}
          normalMap={textures[2]}
          metalnessMap={textures[3]}
          side={DoubleSide}
        />
      </mesh>
      <mesh
        rotation-x={Math.PI}
        scale={50}
        ref={floor}
        position={[0, 0, 7]}
        name="positive z"
      >
        <planeGeometry />
        <meshBasicMaterial />
      </mesh>
      <mesh scale={50} ref={floor} position={[0, 0, -7]} name="negative z">
        <planeGeometry />
        <meshBasicMaterial />
      </mesh>
      <mesh
        scale={50}
        ref={floor}
        rotation={[0, Math.PI * 0.5, 0]}
        position={[8, 0, 0]}
        name="positive x"
      >
        <planeGeometry />
        <meshBasicMaterial side={DoubleSide} />
      </mesh>
      <mesh
        scale={50}
        ref={floor}
        rotation={[0, Math.PI * 0.5, 0]}
        position={[-8, 0, 0]}
        name="negative x"
      >
        <planeGeometry />
        <meshBasicMaterial side={DoubleSide} />
      </mesh>
      <axesHelper />
      <Zeus position={[0, 0, -5]} />
      {/* <Temple scale={0.3} position={[0, 0, 0]} /> */}
      <Pillar />
      <Nike scale={0.06} position={[0, -0.06, 5]} />
      <Hermes position={[0 + 7, 32, -30]} />
      {/* <HerculesGiambologna position={[0, -0.5, 0]} scale={0.04} /> */}
      {/* <Rope /> */}
      <Hera position={[0, 13.1, -10 - 6.75]} />
      <Fights rotation={[0, Math.PI * 0.5, 0]} position={[-7.5, 1.5, 0]} />
      <BustZeus scale={0.04} position={[0 - 2, 1, 0 - 5]} />
      <BustRhetorician
        scale={0.04}
        position={[0.01 - 4, 1.32, 0.51 - 5]}
        rotation={[Math.PI * 0.09, 0, -Math.PI * 0.03]}
      />
      <BustGorgon position={[0.18, 0.62, 0.6]} />
      <BustPerikles
        position={[-0.01 + 5, 1.175, 0 - 5]}
        rotation={[0, 0, -Math.PI * 0.015]}
        scale={0.7}
      />
      {/* <AthenaPergamon scale={0.01} /> */}
      <Apollo
        scale={0.1}
        rotation={[0, -Math.PI * 0.75, 0]}
        position={[6.5, 1.1, 6.5]}
      />
      {/* <Alexander /> */}
      <Achilles
        scale={15}
        position={[6.5, 0.5, -6]}
        rotation={[0, -Math.PI * 0.25, 0]}
      />

      {/* <Character position={playerPosition} /> */}
    </>
  );
};

export default Experience;
