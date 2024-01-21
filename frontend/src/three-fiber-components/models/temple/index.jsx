/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
const Temple = (props) => {
  const { scene } = useGLTF("./greek_temple/scene.gltf");
  return <primitive object={scene} {...props} />;
};
export default Temple;
