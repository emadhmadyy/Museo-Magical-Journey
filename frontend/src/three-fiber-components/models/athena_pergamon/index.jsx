/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
const AthenaPergamon = (props) => {
  const { scene } = useGLTF("./athena_pergamon_altar/scene.gltf");
  return <primitive object={scene} {...props} />;
};
useGLTF.preload("./athena_pergamon_altar/scene.gltf");
export default AthenaPergamon;
