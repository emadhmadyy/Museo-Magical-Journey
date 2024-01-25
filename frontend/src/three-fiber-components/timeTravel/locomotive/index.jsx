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
      <ambientLight position={[0, 0, 2]} intensity={5} />

      <TransformControls mode="rotate" position={[0, 0, 0]} size={0.5}>
        <Model
          url="./toy_steam_train/scene.gltf"
          scale={15}
          position={[1.5, 0, 0]}
        />
      </TransformControls>

      <mesh scale={3} rotation={[-Math.PI * 0.5, 0, 0]} position={[0, -1.2, 0]}>
        <circleGeometry />
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={0.5}
          mirror={0.75}
        />
      </mesh>
      <Float floatIntensity={1}>
        <Text
          font="./fonts/Kavoon/Kavoon-Regular.ttf"
          maxWidth={2}
          position={[-4.5, 1.5, 0]}
          fontSize={0.5}
          color="#E77974"
          textAlign="center"
        >
          Steam Locomotive 1829
        </Text>
      </Float>
      {/* Electric Locomotive */}
      <TransformControls mode="rotate" position={[0, -10, 0]} size={0.5}>
        <Model
          url="./electric_locomotive9/scene.gltf"
          scale={0.007}
          position={[-3, -0.5, 0]}
        />
      </TransformControls>
      <mesh
        scale={3}
        rotation={[-Math.PI * 0.5, 0, 0]}
        position={[0, -11.2, 0]}
      >
        <circleGeometry />
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={0.5}
          mirror={0.75}
        />
      </mesh>
      <Float floatIntensity={1}>
        <Text
          font="./fonts/Kavoon/Kavoon-Regular.ttf"
          maxWidth={2}
          position={[-4.5, -8.5, 0]}
          fontSize={0.5}
          color="#FF8B56"
          textAlign="center"
        >
          Electric Locomotive 1879
        </Text>
      </Float>

      {/* Diesel Locomotive */}
      <TransformControls mode="rotate" position={[0, -20, 0]} size={0.5}>
        <Model
          url="./diesel_locomotive/scene.gltf"
          scale={0.4}
          position={[0, -1, 0]}
          rotation={[0, Math.PI * 0.5, 0]}
        />
      </TransformControls>
      <mesh
        scale={3}
        rotation={[-Math.PI * 0.5, 0, 0]}
        position={[0, -21.2, 0]}
      >
        <circleGeometry />
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={0.5}
          mirror={0.75}
        />
      </mesh>
      <Float rotationIntensity={0.3} floatIntensity={1} floatingRange={[-1, 1]}>
        <Text
          font="./fonts/Kavoon/Kavoon-Regular.ttf"
          maxWidth={2}
          position={[-4.5, -18.5, 0]}
          fontSize={0.5}
          color="Salmon"
          textAlign="center"
        >
          Diesel Locomotive 1925
        </Text>
      </Float>
      {/* Hybrid Locomotive */}
      <TransformControls mode="rotate" position={[0, -30, 0]} size={0.5}>
        <Model
          url="./diesel_electric_locomotive/scene.gltf"
          scale={0.3}
          position={[0, -1, 0]}
          rotation={[0, Math.PI * 0.5, 0]}
        />
      </TransformControls>
      <mesh
        scale={3}
        rotation={[-Math.PI * 0.5, 0, 0]}
        position={[0, -31.2, 0]}
      >
        <circleGeometry />
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={0.5}
          mirror={0.75}
        />
      </mesh>
      <Float rotationIntensity={0.3} floatIntensity={1} floatingRange={[-1, 1]}>
        <Text
          font="./fonts/Kavoon/Kavoon-Regular.ttf"
          maxWidth={2}
          position={[-4.5, -28.5, -1]}
          fontSize={0.5}
          color="#575757"
          textAlign="center"
        >
          Hybrid Locomotive 2005
        </Text>
      </Float>
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
