import { PivotControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "../../model";

const Locomotive = () => {
  return (
    <Canvas>
      <Model url="toy_steam_train/scene.gltf" />
    </Canvas>
  );
};

export default Locomotive;
