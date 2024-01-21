/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
const HerculesGiambologna = (props) => {
  const { scene } = useGLTF("./flo_hercules_giambologna/scene.gltf");
  return <primitive object={scene} {...props} />;
};
export default HerculesGiambologna;
