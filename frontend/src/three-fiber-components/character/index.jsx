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
  return (
    <primitive
      object={character_model.scene}
      position={props.player}
      rotation={props.rotation}
    />
  );
  // if (!props.players || props.players.length === 0) {
  //   return null;
  // }
  // return props.players.map((player) => {
  //   return (
  //     <Clone
  //       key={player.socket_id}
  //       name="character"
  //       object={character_model.scene}
  //       position={[player.position_x, 0, player.position_z]}
  //     />
  //   );
  // });
};
useGLTF.preload("./male_avatar_voxel/scene.gltf");
export default Character;
