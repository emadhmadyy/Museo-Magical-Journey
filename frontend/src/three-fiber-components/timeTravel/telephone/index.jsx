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
const Telephone = ({ position_y }) => {
  useFrame((state) => {
    state.camera.position.lerp(new THREE.Vector3(0, position_y, 5), 0.05);
    state.camera.updateProjectionMatrix();
  });
  return (
    <>
      <directionalLight intensity={9} position={[0, 0, 1]} />
      <ambientLight position={[0, 0, 2]} intensity={5} />

      <TransformControls mode="rotate" position={[0, 0, 0]} size={0.5}>
        <Model
          url="./bell_system_phone/scene.gltf"
          scale={0.1}
          position={[0, -1, 0]}
          rotation={[0, -Math.PI * 0.5, 0]}
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
          color="#141212"
          textAlign="center"
        >
          Rotary Telephone 1891
        </Text>
      </Float>
      {/* telephone with buttons */}
      <TransformControls mode="rotate" position={[0, -10, 0]} size={0.5}>
        <Model
          url="./telephone/scene.gltf"
          scale={10}
          position={[0, 0, 0]}
          rotation={[Math.PI * 0.3, 0, 0]}
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
          maxWidth={3}
          position={[-4.5, -8.5, 0]}
          fontSize={0.5}
          color="white"
          textAlign="center"
        >
          touch-tone telephone 1963
        </Text>
      </Float>

      {/* nokia phone */}
      <TransformControls mode="rotate" position={[0, -20, 0]} size={0.5}>
        <Model
          url="./old_nokia_phone/scene.gltf"
          scale={0.004}
          position={[0.4, 0.2, 0]}
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
          color="#868690"
          textAlign="center"
        >
          Feature Phone 1992
        </Text>
      </Float>
      {/* smart phone */}
      <TransformControls mode="rotate" position={[0, -30, 0]} size={0.5}>
        <Model
          url="./phone/scene.gltf"
          scale={0.03}
          position={[0, -1, 0]}
          //   rotation={[0, Math.PI * 0.5, 0]}
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
          color="#dcd0c3"
          textAlign="center"
        >
          Smart Phone 2007
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

export default Telephone;
