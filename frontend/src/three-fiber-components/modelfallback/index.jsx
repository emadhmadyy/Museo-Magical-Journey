/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
const Fallback = (props) => {
  return (
    <>
      <mesh {...props}>
        <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
        <meshBasicMaterial color="white" wireframe />
      </mesh>
    </>
  );
};

export default Fallback;
