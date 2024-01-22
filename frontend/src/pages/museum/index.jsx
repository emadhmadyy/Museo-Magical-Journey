import { Canvas } from "@react-three/fiber";
import Experience from "../../three-fiber-components/experience";
import { Suspense } from "react";
import MessageBox from "../../components/messagebox";

const Museum = () => {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Canvas>
        <Experience />
      </Canvas>
      <MessageBox />
    </Suspense>
  );
};

export default Museum;
