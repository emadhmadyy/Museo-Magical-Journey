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
  const handleEndTour = () => {
    navigate("/options");
  };
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Canvas>
        <SoloExperience />
      </Canvas>
      <button
        className="exit-btn secondary-color white-font"
        onClick={handleEndTour}
      >
        End Tour
      </button>
      <button id="lock" className="lock-btn secondary-color white-font">
        Lock
      </button>
    </Suspense>
  );
};
export default SoloTour;
