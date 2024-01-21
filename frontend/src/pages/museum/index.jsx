import { Canvas } from "@react-three/fiber";
import Experience from "../../three-fiber-components/experience";
import { Suspense, useEffect } from "react";

const Museum = () => {
  useEffect(() => {
    document.addEventListener("keypress", () => {
      console.log("clicked");
    });
    return () => document.removeEventListener("keypress");
  }, []);
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Canvas>
        <Experience />
      </Canvas>
    </Suspense>
  );
};

export default Museum;
