/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
const Character = (props) => {
  // const { nodes, materials } = useGLTF("./character_walk/scene.gltf");
  // console.log(nodes);
  useEffect(() => {}, []);
  return (
    <mesh {...props}>
      <boxGeometry />
      <meshBasicMaterial color="blue" />
    </mesh>
    // <mesh
    //   {...props}
    //   geometry={nodes.Character.geometry}
    //   material={materials.material}
    // />
  );
};

export default Character;
