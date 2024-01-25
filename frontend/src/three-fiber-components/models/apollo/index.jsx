/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
const Apollo = (props) => {
  const { scene } = useGLTF("./apollo_und_daphne/scene.gltf");
  return <primitive object={scene} {...props}></primitive>;
};
useGLTF.preload("./apollo_und_daphne/scene.gltf");
export default Apollo;
