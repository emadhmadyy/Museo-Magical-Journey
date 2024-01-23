/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
const Hera = (props) => {
  const { scene } = useGLTF("./bust_of_trajan/scene.gltf");
  return <primitive object={scene} {...props} />;
};
useGLTF.preload("./bust_of_trajan/scene.gltf");
export default Hera;
