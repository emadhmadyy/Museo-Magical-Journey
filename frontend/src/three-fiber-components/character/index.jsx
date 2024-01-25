/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
const Character = (props) => {
  const { nodes, materials } = useGLTF("./character_walk/scene.gltf");
  useEffect(() => {}, []);
  return (
    // <mesh {...props}>
    //   <boxGeometry />
    //   <meshBasicMaterial color="blue" />
    // </mesh>
    <mesh
      {...props}
      geometry={nodes.Object_66.geometry}
      material={materials.material}
      scale={0.01}
    />
  );
};

export default Character;
