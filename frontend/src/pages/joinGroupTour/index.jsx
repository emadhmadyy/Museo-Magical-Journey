import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import MessageBox from "../../components/messagebox";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../components/spinner";
import JoinGroupTourExperience from "../../three-fiber-components/joinGroupTourExperience";
const JoinGroupTour = () => {
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
  const handleQuitTour = () => {
    navigate("/options");
  };
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Canvas>
        <JoinGroupTourExperience />
      </Canvas>
      <MessageBox />
      <button
        className="exit-btn secondary-color white-font"
        onClick={handleQuitTour}
      >
        Quit
      </button>
      <button id="lock" className="lock-btn secondary-color white-font">
        Lock
      </button>
    </Suspense>
  );
};
export default JoinGroupTour;
