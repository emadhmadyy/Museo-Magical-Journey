/* eslint-disable react/no-unknown-property */
import { Html, useGLTF } from "@react-three/drei";
const Achilles = (props) => {
  const { scene } = useGLTF("./achilles_heel/scene.gltf");
  return (
    <primitive object={scene} {...props}>
      {/* <Html
        position={[0, 0.23, 0]}
        wrapperClass="museum-label"
        occlude
        distanceFactor={15}
      >
        <h1>Achilles</h1>
        <h2>around the 4th century BCE</h2>
        <p>
          In Greek mythology, Achilles was the strongest warrior and hero in the
          Greek army during the Trojan War.
        </p>
        <p>
          He was the son of Peleus, king of the Myrmidons, and Thetis, a sea
          nymph.
        </p>
      </Html> */}
    </primitive>
  );
};
useGLTF.preload("./achilles_heel/scene.gltf");
export default Achilles;
