/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
const Achilles = (props) => {
  const { scene } = useGLTF("./achilles_heel/scene.gltf");
  return <primitive object={scene} {...props} />;
};
export default Achilles;
