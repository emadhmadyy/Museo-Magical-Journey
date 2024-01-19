import { Html, useProgress } from "@react-three/drei";
import ProgressBar from "react-bootstrap/ProgressBar";
const LoadingIndicator = () => {
  const { progress } = useProgress();
  return (
    <Html center style={{ width: "100px" }}>
      <h1 style={{ fontSize: "40px" }}>{Math.floor(progress)} %</h1>
    </Html>
  );
};

export default LoadingIndicator;
