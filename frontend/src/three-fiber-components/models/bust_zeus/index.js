/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
const BustZeus = (props) => {
  const { scene } = useGLTF("./colossal_marble_bust_of_zeus/scene.gltf");
  return <primitive object={scene} {...props} />;
};
useGLTF.preload("./colossal_marble_bust_of_zeus/scene.gltf");
export default BustZeus;
