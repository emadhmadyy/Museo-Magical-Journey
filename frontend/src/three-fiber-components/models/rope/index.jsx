/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import { Clone } from "@react-three/drei";
const Rope = () => {
  const { scene } = useGLTF("./velvet_rope_low_poly_barrier/scene.gltf");
  const scale_y = 0.75;
  return (
    <>
      <Clone object={scene} position-x={2} scale-y={scale_y} />
      <Clone object={scene} position-x={-2} scale-y={scale_y} scale-x={0.5} />
    </>
  );
};
useGLTF.preload("./velvet_rope_low_poly_barrier/scene.gltf");
export default Rope;
