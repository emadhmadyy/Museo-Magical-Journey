/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import {
  Float,
  TransformControls,
  Text,
  MeshReflectorMaterial,
  Stars,
  Sky,
} from "@react-three/drei";
import Model from "../../model";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
const Locomotive = ({ position_y }) => {
  //   const [position, setPosition] = useState([0, 0, 5]);
  //   const handleClick = () => {
  //     setPosition([0, -10, 5]);
  //   };
  useFrame((state) => {
    state.camera.position.lerp(new THREE.Vector3(0, position_y, 5), 0.1);
    state.camera.updateProjectionMatrix();
  });
  return (
    <>
      <directionalLight intensity={9} position={[0, 0, 1]} />
      <ambientLight position={[0, 0, 2]} intensity={9} />

      <TransformControls mode="rotate" position={[0, 0, 0]} size={0.5}>
        <Model
          url="./toy_steam_train/scene.gltf"
          scale={15}
          position={[1.5, 0, 0]}
        />
      </TransformControls>

      <Float floatIntensity={1}>
        <Text
          font="./fonts/Kavoon/Kavoon-Regular.ttf"
          maxWidth={2}
          position={[-4.5, 1.5, 0]}
          fontSize={0.5}
          color="Salmon"
          textAlign="center"
        >
          Steam Locomotive 1829
        </Text>
      </Float>
      <mesh scale={3} rotation={[-Math.PI * 0.5, 0, 0]} position={[0, -1.2, 0]}>
        <circleGeometry />
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={0.5}
          mirror={0.75}
        />
      </mesh>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      />
    </>
  );
};

export default Locomotive;
