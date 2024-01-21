/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
const Hera = (props) => {
  const { scene } = useGLTF("./hera/scene.gltf");
  return <primitive object={scene} {...props} />;
};
useGLTF.preload("./hera/scene.gltf");
export default Hera;
