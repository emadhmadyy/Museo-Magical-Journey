/* eslint-disable react/no-unknown-property */
import { PointerLockControls, useTexture } from "@react-three/drei";
import Character from "../character";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import Temple from "../models/temple";
import Pillar from "../models/pillar";
import Nike from "../models/nike";
import Hermes from "../models/hermes";
import Hera from "../models/hera";
import Fights from "../models/fights";
import BustZeus from "../models/bust_zeus";
import BustRhetorician from "../models/bust_rhetorician";
import BustPerikles from "../models/bust_perikles";
import Apollo from "../models/apollo";
import Achilles from "../models/achilles";
import { DoubleSide } from "three";
import * as THREE from "three";
import { SpotLight } from "three";

const SoloExperience = () => {
  const floorTextures = useTexture([
    "floor2/white marble_Albedo.jpg",
    "floor2/white marble_Occlusion.jpg",
    "floor2/white marble_Normal.jpg",
    "floor2/white marble_Metallic.jpg",
  ]);
  const wallTextures = useTexture([
    "modern-shattered-wallpaper-unity/modern-shattered-wallpaper_albedo.png",
    "modern-shattered-wallpaper-unity/modern-shattered-wallpaper_ao.png",
    "modern-shattered-wallpaper-unity/modern-shattered-wallpaper_normal-ogl.png",
    "modern-shattered-wallpaper-unity/modern-shattered-wallpaper_metallic.png",
  ]);

  floorTextures.map((texture) => {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(10, 10);
  });
  wallTextures.map((texture) => {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(10, 10);
  });
  const controls = useRef();
  const floor = useRef();
  const pointlight = useRef();
  const spotlight = useMemo(() => new SpotLight("#fff"), []);
  const pointLightIntensity = 10;
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
    controls.current.camera.position.y = 1.8;
    document.addEventListener("keypress", handleKeyPress);
    return () => document.removeEventListener("keypress", handleKeyPress);
  }, []);
  return (
    <>
      <PointerLockControls ref={controls} />
      <pointLight
        intensity={20}
        position={[0, 3, 0]}
        ref={pointlight}
        decay={1}
      />
      <pointLight
        intensity={pointLightIntensity}
        position={[4.5, 6.5, 3.5]}
        ref={pointlight}
        decay={1}
      />
      <pointLight
        intensity={pointLightIntensity}
        position={[-4.5, 6.5, 3.5]}
        ref={pointlight}
        decay={1}
      />
      <pointLight
        intensity={pointLightIntensity}
        position={[-4.5, 6.5, -3.5]}
        ref={pointlight}
        decay={1}
      />
      <pointLight
        intensity={pointLightIntensity}
        position={[4.5, 6.5, -3.5]}
        ref={pointlight}
        decay={1}
      />
      <ambientLight intensity={1} />
      <mesh rotation-x={-Math.PI * 0.5} scale={50} ref={floor}>
        <planeGeometry />
        <meshPhysicalMaterial
          map={floorTextures[0]}
          aoMap={floorTextures[1]}
          normalMap={floorTextures[2]}
          metalnessMap={floorTextures[3]}
          side={DoubleSide}
        />
      </mesh>
      <mesh
        rotation-x={-Math.PI * 0.5}
        position={[0, 7, 0]}
        scale={50}
        ref={floor}
        name="ceiling"
      >
        <planeGeometry />
        <meshPhysicalMaterial
          map={floorTextures[0]}
          aoMap={floorTextures[1]}
          normalMap={floorTextures[2]}
          metalnessMap={floorTextures[3]}
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
        <meshPhysicalMaterial
          map={wallTextures[0]}
          aoMap={wallTextures[1]}
          normalMap={wallTextures[2]}
          metalnessMap={wallTextures[3]}
          side={DoubleSide}
        />
      </mesh>
      <mesh
        scale={50}
        ref={floor}
        rotation-y={Math.PI}
        position={[0, 0, -7]}
        name="negative z"
      >
        <planeGeometry />
        <meshPhysicalMaterial
          map={wallTextures[0]}
          aoMap={wallTextures[1]}
          normalMap={wallTextures[2]}
          metalnessMap={wallTextures[3]}
          side={DoubleSide}
        />
      </mesh>
      <mesh
        scale={50}
        ref={floor}
        rotation={[0, Math.PI * 0.5, 0]}
        position={[8, 0, 0]}
        name="positive x"
      >
        <planeGeometry />
        <meshPhysicalMaterial
          map={wallTextures[0]}
          aoMap={wallTextures[1]}
          normalMap={wallTextures[2]}
          metalnessMap={wallTextures[3]}
          side={DoubleSide}
        />
      </mesh>
      <mesh
        scale={50}
        ref={floor}
        rotation={[0, Math.PI * 1.5, 0]}
        position={[-8, 0, 0]}
        name="negative x"
      >
        <planeGeometry />
        <meshPhysicalMaterial
          map={wallTextures[0]}
          aoMap={wallTextures[1]}
          normalMap={wallTextures[2]}
          metalnessMap={wallTextures[3]}
          side={DoubleSide}
        />
      </mesh>
    </>
  );
};
export default SoloExperience;
