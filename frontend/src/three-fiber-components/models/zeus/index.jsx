/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
const Zeus = (props) => {
  const { scene } = useGLTF("./zeus/scene.gltf");
  return <primitive object={scene} {...props} />;
};

export default Zeus;
