/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
const Alexander = (props) => {
  const { scene } = useGLTF(
    "./alexander_the_great_sets_fire_to_persepolis/scene.gltf"
  );
  return <primitive object={scene} {...props} />;
};
useGLTF.preload("./alexander_the_great_sets_fire_to_persepolis/scene.gltf");
export default Alexander;
