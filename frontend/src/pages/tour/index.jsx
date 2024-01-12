import "./index.css";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import Option from "../../components/option";
// import { useNavigate } from "react-router-dom";
const Tour = () => {
  // const navigate = useNavigate();
  const navigateToSoloVirtualTour = () => {
    console.log("Navigating to Solo Virtual Tour");
  };
  const openGroupTourPopUp = () => {
    console.log("Opening Group Tour Popup");
  };
  const options = [
    {
      title: "Solo Virtual Tour",
      paragraph1:
        "Whether you are an art enthusiast or simply looking for a fun and educational way to spend your time, a tour in our virtual museum is the perfect choice.",
      paragraph2:
        "With our cutting-edge technology, you can explore the museum from the comfort of your own home and experience the thrill of being so close to these incredible works of art.",
      btn_text: "Go Solo",
      navigation: navigateToSoloVirtualTour,
    },
    {
      title: "Group Virtual Tour",
      paragraph1:
        "Whether you are an art enthusiast or simply looking for a fun and educational way to spend your time, a tour in our virtual museum is the perfect choice.",
      paragraph2:
        "With our cutting-edge technology, you can explore the museum from the comfort of your own home and experience the thrill of being so close to these incredible works of art.",
      btn_text: "Join / Host",
      navigation: openGroupTourPopUp,
    },
  ];
  return (
    <>
      <Nav />
      <div className="flex">
        {options.map((option, index) => {
          let Main;
          if (index % 2 == 0) {
            Main = false;
          } else {
            Main = true;
          }
          return (
            <Option
              key={index}
              title={option.title}
              paragraph1={option.paragraph1}
              paragraph2={option.paragraph2}
              btn_text={option.btn_text}
              isMain={Main}
              onClick={option.navigation}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Tour;
