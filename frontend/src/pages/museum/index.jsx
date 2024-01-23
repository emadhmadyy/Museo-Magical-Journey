import { Canvas } from "@react-three/fiber";
import Experience from "../../three-fiber-components/experience";
import { Suspense, useEffect } from "react";
import MessageBox from "../../components/messagebox";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../components/spinner";

const Museum = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      !localStorage.getItem("token") ||
      !localStorage.getItem("user") ||
      !localStorage.getItem("room_id")
    ) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Canvas>
        <Experience />
      </Canvas>
      <MessageBox />
      <button className="exit-btn secondary-color white-font">Quit</button>
    </Suspense>
  );
};

export default Museum;
