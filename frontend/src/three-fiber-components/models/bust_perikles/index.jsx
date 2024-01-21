/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
const BustZeus = (props) => {
  const { scene } = useGLTF("./bust_of_perikles/scene.gltf");
  return <primitive object={scene} {...props} />;
};
export default BustZeus;
