/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
const Hera = (props) => {
  const { scene } = useGLTF("./chronos/scene.gltf");
  return <primitive object={scene} {...props} />;
};
useGLTF.preload("./chronos/scene.gltf");
export default Hera;
