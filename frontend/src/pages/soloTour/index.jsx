import { Suspense, useEffect } from "react";
import LoadingSpinner from "../../components/spinner";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import SoloExperience from "../../three-fiber-components/soloExperience";

const SoloTour = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token") || !localStorage.getItem("user")) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Canvas>
        <SoloExperience />
      </Canvas>
      <button className="exit-btn secondary-color white-font">End Tour</button>
    </Suspense>
  );
};
export default SoloTour;
