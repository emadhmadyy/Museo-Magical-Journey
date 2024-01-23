/* eslint-disable react/no-unknown-property */
import { useFrame } from "@react-three/fiber";
//import { useGLTF } from "@react-three/drei";
import { MeshReflectorMaterial } from "@react-three/drei";
import { Suspense, useRef } from "react";
import Model from "../model";
import LoadingIndicator from "../loadingIndicator";
const RegisterScene = () => {
  const register_model_ref = useRef();
  useFrame((state, delta) => {
    if (register_model_ref.current) {
      register_model_ref.current.rotation.y += delta;
    }
  });
  return (
    <>
      <directionalLight intensity={4} position={[0, 0, 1]} />
      <ambientLight position={[0, 0, 2]} intensity={9} />
      <Suspense fallback={<LoadingIndicator />}>
        <Model
          url="./zeus/scene.gltf"
          ref={register_model_ref}
          scale={2.5}
          position={[0, -2, 0]}
          // rotation={[-Math.PI * 0.5, 0, 0]}
        />
      </Suspense>

      {/* <primitive
        object={login_model.scene}
        ref={login_model_ref}
        scale={0.6}
      ></primitive> */}
      <mesh
        scale={[4.6, 5, 4]}
        rotation-x={-Math.PI * 0.5}
        position={[0, -2, 0]}
      >
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

export default RegisterScene;
