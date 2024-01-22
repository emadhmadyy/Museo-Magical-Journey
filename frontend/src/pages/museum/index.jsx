import { Canvas } from "@react-three/fiber";
import Experience from "../../three-fiber-components/experience";
import { Suspense, useEffect } from "react";
import MessageBox from "../../components/messagebox";
import { useNavigate } from "react-router-dom";

const Museum = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token") || !localStorage.getItem("user")) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
