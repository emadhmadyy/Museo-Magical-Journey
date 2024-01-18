/* eslint-disable react/no-unknown-property */
import { useFrame } from "@react-three/fiber";
//import { useGLTF } from "@react-three/drei";
import { MeshReflectorMaterial } from "@react-three/drei";
import { Suspense, useRef } from "react";
import Model from "../model";
const LoginScene = () => {
  const login_model_ref = useRef();
  useFrame((state, delta) => {
    if (login_model_ref.current) {
      login_model_ref.current.rotation.y += delta;
    }
  });
  return (
    <>
      <directionalLight intensity={9} position={[0, 0, 1]} />
      <ambientLight position={[0, 0, 2]} intensity={9} />
      <Suspense
        fallback={
          <mesh position={[0, 0, 1]} scale={[1, 3, 2]}>
            <boxGeometry args={[2, 1, 1, 2, 2, 2]} />
            <meshBasicMaterial color="black" wireframe />
          </mesh>
        }
      >
        <Model
          url="./statue_of_edward_snowden/scene.gltf"
          ref={login_model_ref}
          scale={0.62}
        />
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
