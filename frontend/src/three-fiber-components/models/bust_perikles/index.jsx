/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
const BustPerikles = (props) => {
  const { scene } = useGLTF("./bust_of_perikles/scene.gltf");
  return <primitive object={scene} {...props} />;
};
useGLTF.preload("./bust_of_perikles/scene.gltf");
export default BustPerikles;
