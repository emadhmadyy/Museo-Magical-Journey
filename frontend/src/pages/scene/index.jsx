import { Canvas } from "@react-three/fiber";
import "./style.css";
import Experience from "../../three-fiber-components/experience";
// import { Leva } from "leva";
// import { useNavigate, useParams } from "react-router-dom";

const Scene = () => {
  // const { data } = useParams();

  // const navigate = useNavigate();
  return (
    <Canvas shadows>
      <Experience />
    </Canvas>
    // <>
    //   <Leva collapsed />
    //   <Canvas className="canvas"></Canvas>
    //   {data == "true" ? (
    //     <button
    //       className="end-tour white-font"
    //       onClick={() => navigate("/options")}
    //     >
    //       End Tour
    //     </button>
    //   ) : (
    //     <button
    //       className="end-tour white-font"
    //       onClick={() => navigate("/options")}
    //     >
    //       Quit
    //     </button>
    //   )}
    // </>
  );
};

export default Scene;
