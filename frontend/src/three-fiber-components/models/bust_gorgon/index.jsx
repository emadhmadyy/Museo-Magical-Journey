/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
const BustGorgon = (props) => {
  const { scene } = useGLTF("./bm_gorgon_antefix/scene.gltf");
  return <primitive object={scene} {...props} />;
};
export default BustGorgon;
