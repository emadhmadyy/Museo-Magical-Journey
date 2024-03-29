/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
const Hermes = (props) => {
  const { scene } = useGLTF("./hermes/scene.gltf");
  return <primitive object={scene} {...props} />;
};
useGLTF.preload("./hermes/scene.gltf");
export default Hermes;
