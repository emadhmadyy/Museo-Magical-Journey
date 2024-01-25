import { Canvas } from "@react-three/fiber";
import Locomotive from "../../three-fiber-components/timeTravel/locomotive";
import { useState } from "react";

const LocomotiveCanvas = () => {
  const [position, setPosition] = useState(0);
  const handlePositionChange = () => {
    setPosition(20);
    if (position == 20) {
      setPosition(0);
    } else {
      setPosition(position + 10);
    }
  };
  return (
    <>
      <Canvas>
        <Locomotive position_y={position} />
      </Canvas>
      <button onClick={handlePositionChange}>Move Camera</button>
      <button>Camera Down</button>
    </>
  );
};

export default LocomotiveCanvas;
