/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
const Pillar = (props) => {
  const { scene } = useGLTF("./statue_bust_of_nike/scene.gltf");
  return <primitive object={scene} {...props} />;
};
export default Pillar;
