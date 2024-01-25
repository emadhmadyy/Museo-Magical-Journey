import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import LoadingSpinner from "../../components/spinner";
import { useNavigate } from "react-router-dom";
import Telephone from "../../three-fiber-components/timeTravel/telephone";

const TelephoneCanvas = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token") || !localStorage.getItem("user")) {
      localStorage.clear();
      navigate("/");
    }
  });
  const [position, setPosition] = useState(0);
  const moveUp = () => {
    if (position == 0) {
      setPosition(-30);
    } else {
      setPosition(position + 10);
    }
  };
  const moveDown = () => {
    if (position == -30) {
      setPosition(0);
    } else {
      setPosition(position - 10);
    }
  };
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Canvas>
          <Telephone position_y={position} />
        </Canvas>
        <img
          className="down-arrow"
          onClick={moveDown}
          src="./down.png"
          alt="move-down-icon"
        />
        <img
          className="up-arrow"
          onClick={moveUp}
          src="./upload.png"
          alt="move-up-icon"
        />
      </Suspense>
    </>
  );
};

export default TelephoneCanvas;
