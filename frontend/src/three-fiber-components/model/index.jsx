/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import { forwardRef, useMemo } from "react";

const Model = forwardRef(({ url, scale, position, rotation }, ref) => {
  const model = useGLTF(url);
  const memorizedModel = useMemo(() => model.scene, [model.scene]);
  return (
    <primitive
      object={memorizedModel}
      scale={scale}
      ref={ref}
      position={position}
      rotation={rotation}
    />
  );
});

// useGLTF.preload(url)
export default Model;
