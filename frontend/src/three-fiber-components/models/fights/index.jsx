/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
const Fights = (props) => {
  const { scene } = useGLTF("./fights/scene.gltf");
  return <primitive object={scene} {...props} />;
};
export default Fights;
