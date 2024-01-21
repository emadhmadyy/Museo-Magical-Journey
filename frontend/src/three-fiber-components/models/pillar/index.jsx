/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
const Pillar = (props) => {
  const { scene } = useGLTF("./marble_pillar/scene.gltf");
  return <primitive object={scene} {...props} />;
};
useGLTF.preload("./marble_pillar/scene.gltf");
export default Pillar;
