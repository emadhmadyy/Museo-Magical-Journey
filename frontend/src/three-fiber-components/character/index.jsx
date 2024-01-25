/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
import { useGLTF, useAnimations, Clone } from "@react-three/drei";
import { useEffect } from "react";
const Character = (props) => {
  const character_model = useGLTF("./character_walk/scene.gltf");
  const animations = useAnimations(
    character_model.animations,
    character_model.scene
  );
  useEffect(() => {
    // const action = animations.actions["Armature|Walk"];
    // action.play();
  }, []);

  if (!props.players || props.players.length === 0) {
    return null;
  }
  const playersArray = Object.entries(props.players);
  return playersArray.map((player) => {
    console.log("triggered");
    return (
      <Clone
        key={player[0]}
        name="character"
        object={character_model.scene}
        position={player[1].position}
        rotation={player[1].rotation}
      />
    );
  });
};
useGLTF.preload("./male_avatar_voxel/scene.gltf");
export default Character;
