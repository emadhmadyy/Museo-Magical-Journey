/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
const BustGorgon = (props) => {
  const { scene } = useGLTF("./bust_of_marcus_aurelius/scene.gltf");
  return <primitive object={scene} {...props} />;
};
useGLTF.preload("./bust_of_marcus_aurelius/scene.gltf");
export default BustGorgon;
