/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
const HerculesGiambologna = (props) => {
  const { scene } = useGLTF("./flo_hercules_giambologna/scene.gltf");
  return <primitive object={scene} {...props} />;
};
useGLTF.preload("./flo_hercules_giambologna/scene.gltf");
export default HerculesGiambologna;
