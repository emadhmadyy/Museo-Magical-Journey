/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import { forwardRef } from "react";

const Model = forwardRef(({ url, scale }, ref) => {
  const model = useGLTF(url);
  return <primitive object={model.scene} scale={scale} ref={ref} />;
});

export default Model;
