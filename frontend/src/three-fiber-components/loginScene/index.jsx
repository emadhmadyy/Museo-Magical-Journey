/* eslint-disable react/no-unknown-property */
import { useFrame, useThree } from "@react-three/fiber";
//import { useGLTF } from "@react-three/drei";
import { MeshReflectorMaterial } from "@react-three/drei";
import { Suspense, useRef } from "react";
import Model from "../model";
import LoadingIndicator from "../loadingIndicator";
import * as THREE from "three";
import { AxesHelper } from "three";

const LoginScene = () => {
  const { camera } = useThree();
  // camera.position.y = 5;
  // camera.position.z = 0;
  // camera.lookAt(new THREE.Vector3(0, 0, 0));
  const login_model_ref = useRef();
  const group = useRef();
  const offset = [0, -3.2, 0];
  useFrame((state, delta) => {
    if (login_model_ref.current) {
      group.current.rotation.y += delta / 2;
      //login_model_ref.current.rotation.y += delta / 2;
      // console.log(login_model_ref.current);
    }
  });
  return (
    <>
      <directionalLight intensity={9} position={[0, 0, 1]} />
      <ambientLight position={[0, 0, 2]} intensity={9} />
      <Suspense
        fallback={
          <LoadingIndicator />
          //   <mesh position={[0, 0, 1]} scale={[1, 3, 2]}>
          //     <boxGeometry args={[2, 1, 1, 2, 2, 2]} />
          //     <meshBasicMaterial color="white" wireframe />
          //   </mesh>
        }
      >
        <group ref={group} scale={2.5}>
          <Model
            url="./bust_of_marcus_aurelius/scene.gltf"
            ref={login_model_ref}
            scale={3.1}
            position={[0.5, -1.8, 2.2]}
          />
        </group>
      </Suspense>
      {/* <primitive
        object={login_model.scene}
        ref={login_model_ref}
        scale={0.6}
      ></primitive> */}
      <mesh scale={[5, 5, 4]} rotation-x={-Math.PI * 0.5} position={[0, -2, 0]}>
        <planeGeometry />
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={0.5}
          mirror={0.75}
          color="#dcd0c3"
        />
      </mesh>
    </>
  );
};

export default LoginScene;
