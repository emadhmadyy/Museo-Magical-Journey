/* eslint-disable react/no-unknown-property */
import { Html, useGLTF } from "@react-three/drei";
const Nike = (props) => {
  const { scene } = useGLTF("./statue_bust_of_nike/scene.gltf");
  return (
    <primitive object={scene} {...props}>
      <Html
        position={[10, 70, 20]}
        wrapperClass="museum-label"
        occlude
        distanceFactor={15}
      >
        <h1>The Goddess of Victory</h1>
        <h2>Year of creation: 190 BCE</h2>
        <p>
          In Greek mythology, Nike is a divine figure associated with success
          and glory, particularly in the context of athletic and military
          achievements.
        </p>
        <p>
          The sculpture shows Nike standing on the front of a ship, with her
          wings spread wide as if she is descending or alighting. This dynamic
          pose gives the impression of movement and captures the energy of
          victory.
        </p>
        <p>
          The purpose and specific historical context of the sculpture remain
          somewhat unclear. While it is widely believed that the statue was
          created to commemorate a naval victory, the exact battle or the
          identity of the sculptor has not been definitively established.
        </p>
      </Html>
    </primitive>
  );
};
useGLTF.preload("./statue_bust_of_nike/scene.gltf");
export default Nike;
