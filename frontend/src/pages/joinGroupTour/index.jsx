import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import MessageBox from "../../components/messagebox";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../components/spinner";
import JoinGroupTourExperience from "../../three-fiber-components/joinGroupTourExperience";
import axios from "axios";
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
  const handleQuitTour = async () => {
    try {
      const response = await axios.request({
        url: `http://${import.meta.env.VITE_BASE_URL}/room/leave`,
        method: "post",
        data: {
          room_id: localStorage.getItem("room_id"),
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      if (response.status == 200) {
        localStorage.removeItem("room_id");
        navigate("/options");
      }
    } catch (e) {
      console.log(e.response);
    }
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
        Move
      </button>
    </Suspense>
  );
};
export default JoinGroupTour;
