/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
import { PointerLockControls, useTexture } from "@react-three/drei";
import Character from "../character";
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
import { io } from "socket.io-client";

const Experience = () => {
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

  const socket = io("http://localhost:3001", {
    autoConnect: false,
  });
  const handleUpdateState = (updatedPlayers) => {
    setPlayers(updatedPlayers);
    controls.current.camera.position.x = updatedPlayers[socket.id].position[0];
    controls.current.camera.position.z = updatedPlayers[socket.id].position[2];
  };
  const [players, setPlayers] = useState(null);
  const [roomId, setRoomId] = useState("");
  const handleKeyPress = (event) => {
    if (controls.current.isLocked == true) {
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
      const position = controls.current.camera.position;
      socket.emit("keypress", roomId, [position.x, 0, position.z]);
    }
  };

  // const handleMouseMove = () => {
  //   if (controls.current.isLocked == true) {
  //     let vector = new THREE.Vector3();
  //     controls.current.camera.getWorldDirection(vector);
  //     socket.emit("mousemove", vector);
  //   }
  // };
  useEffect(() => {
    socket.connect();
    const room_id = localStorage.getItem("room_id");
    setRoomId(room_id);
    socket.emit("joinRoom", room_id);
    socket.on("updateState", handleUpdateState);
    return () => {
      socket.disconnect();
      socket.off("updateState", handleUpdateState);
    };
  }, []);
  useEffect(() => {
    controls.current.camera.position.y = 1.8;
    document.addEventListener("keypress", handleKeyPress);
    // document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("keypress", handleKeyPress);
  }, []);

  return (
    <>
      <PointerLockControls ref={controls} selector="#lock" />
      {players
        ? Object.keys(players).map((key) => {
            return <Character key={key} position={players[key].position} />;
          })
        : null}
      <Character players={players} />
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
      <axesHelper />
      <Temple scale={0.3} position={[0, 0, 0]} />
      <Pillar />
      <Nike
        scale={0.06}
        position={[0, -0.06, 5.5]}
        rotation-y={Math.PI * 0.1}
      />
      <Hermes rotation={[0, -Math.PI * 0.5, 0]} position={[39.3, 33.5, 0]} />
      {/* <Rope /> */}
      <Hera
        scale={0.05}
        position={[3.69, 1.65, 2.6]}
        rotation={[0, -Math.PI * 0.75, 0]}
      />
      <Fights rotation={[0, Math.PI * 0.5, 0]} position={[-7.5, 1.5, 0]} />
      <BustZeus
        scale={0.06}
        position={[-3.2, 1, 2]}
        rotation-y={-Math.PI * 0.25}
      />
      <BustRhetorician
        scale={0.05}
        position={[-3.63, 1.44, -2.45]}
        rotation={[-Math.PI * 0.095, -Math.PI * 0.75, -Math.PI * 0.08]}
      />
      <BustPerikles
        position={[-0.01 + 3.2, 1.175, -2]}
        rotation={[0, Math.PI * 0.75, -Math.PI * 0.015]}
        scale={0.7}
      />
      <Apollo
        scale={0.1}
        rotation={[0, -Math.PI * 0.7, 0]}
        position={[8, 1.1, 6.4]}
      />
      <group>
        <primitive
          object={spotlight}
          position={[8 / 1.1, 5, 6.4 / 1.1]}
          intensity={100}
          penumbra={0.5}
          angle={Math.PI / 15}
        />
        <primitive
          object={spotlight.target}
          position={[8 / 1.1, 0, 6.4 / 1.1]}
        />
      </group>
      <Achilles
        scale={15}
        position={[6.5, 0.5, -6]}
        rotation={[0, -Math.PI * 0.25, 0]}
      />
    </>
  );
};

export default Experience;
