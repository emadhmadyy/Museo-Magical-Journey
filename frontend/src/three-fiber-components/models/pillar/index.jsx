/* eslint-disable react/no-unknown-property */
import { Clone, useGLTF } from "@react-three/drei";
const Pillar = () => {
  const { scene } = useGLTF("./marble_pillar/scene.gltf");
  return (
    <>
      <Clone object={scene} scale={0.02} position={[-1, 1, 0]} />
      <Clone object={scene} scale={0.02} position={[-2, 1, 0]} />
      <Clone object={scene} scale={0.02} position={[-3, 1, 0]} />
      <Clone object={scene} scale={0.02} position={[0, 1, 0]} />
    </>
  );
};
useGLTF.preload("./marble_pillar/scene.gltf");
export default Pillar;
