/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
const LoginScene = () => {
  const login_model = useGLTF(
    "./nefertitis_bust_like_in_the_museum/scene.gltf"
  );
  return (
    <Canvas
      style={{
        height: "60vh",
        minWidth: "300px",
        width: "43%",
      }}
    >
      <directionalLight />
      <primitive object={login_model.scene}></primitive>
    </Canvas>
  );
};

export default LoginScene;
