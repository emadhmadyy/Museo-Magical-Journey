/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
const Nike = (props) => {
  const { scene } = useGLTF("./statue_bust_of_nike/scene.gltf");
  return <primitive object={scene} {...props} />;
};
useGLTF.preload("./statue_bust_of_nike/scene.gltf");
export default Nike;
