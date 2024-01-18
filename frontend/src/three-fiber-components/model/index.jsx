/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";

const Model = ({ url, position, scale }) => {
  const model = useGLTF(url);
  return <primitive object={model.scene} position={position} scale={scale} />;
};

export default Model;
