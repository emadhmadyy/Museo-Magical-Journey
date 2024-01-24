import { Suspense, useEffect } from "react";
import LoadingSpinner from "../../components/spinner";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";

const SoloTour = () => {
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
      <Canvas></Canvas>
      <button className="exit-btn secondary-color white-font">End Tour</button>
    </Suspense>
  );
};
export default SoloTour;
