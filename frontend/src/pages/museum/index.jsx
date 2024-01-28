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
  const handleEndTour = () => {
    navigate("/options");
  };
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Canvas>
        <Experience />
      </Canvas>
      <MessageBox />
      <button
        className="exit-btn secondary-color white-font"
        onClick={handleEndTour}
      >
        End Tour
      </button>
      <p className="lock-text">Click to move</p>
      <button id="lock" className="lock-btn secondary-color white-font">
        Move
      </button>
      <p className="roomid-container">
        room id: {localStorage.getItem("room_id")}
      </p>
    </Suspense>
  );
};

export default Museum;
