/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";
const Character = (props) => {
  const character_model = useGLTF("./character_walk/scene.gltf");
  const animations = useAnimations(
    character_model.animations,
    character_model.scene
  );
  useEffect(() => {
    const action = animations.actions["Armature|Walk"];
    action.play();
  }, []);
  return <primitive object={character_model.scene} {...props} />;
};
useGLTF.preload("./male_avatar_voxel/scene.gltf");
export default Character;
