import { Canvas } from "@react-three/fiber";
import Locomotive from "../../three-fiber-components/timeTravel/locomotive";
import { useState } from "react";

const LocomotiveCanvas = () => {
  const [position, setPosition] = useState(0);
  const moveUp = () => {
    if (position == 0) {
      setPosition(-40);
    } else {
      setPosition(position + 10);
    }
  };
  const moveDown = () => {
    if (position == -40) {
      setPosition(0);
    } else {
      setPosition(position - 10);
    }
  };
  return (
    <>
      <Canvas>
        <Locomotive position_y={position} />
      </Canvas>
      <button onClick={moveUp}>Move Camera</button>
      <button onClick={moveDown}>Camera Down</button>
    </>
  );
};

export default LocomotiveCanvas;
