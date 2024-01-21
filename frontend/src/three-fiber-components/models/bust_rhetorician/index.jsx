/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
const BustRhetorician = (props) => {
  const { scene } = useGLTF("./bust_of_a_rhetorician/scene.gltf");
  return <primitive object={scene} {...props} />;
};
useGLTF.preload("./bust_of_a_rhetorician/scene.gltf");
export default BustRhetorician;
