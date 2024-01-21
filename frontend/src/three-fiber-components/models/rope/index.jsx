/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
const Rope = (props) => {
  const { scene } = useGLTF("./velvet_rope_low_poly_barrier/scene.gltf");
  return <primitive object={scene} {...props} />;
};
useGLTF.preload("./velvet_rope_low_poly_barrier/scene.gltf");
export default Rope;
