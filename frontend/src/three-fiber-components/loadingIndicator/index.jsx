import { Html, useProgress } from "@react-three/drei";
const LoadingIndicator = () => {
  const { progress } = useProgress();
  return <Html center> {progress} % loaded</Html>;
};

export default LoadingIndicator;
