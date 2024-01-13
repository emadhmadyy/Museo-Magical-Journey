import "./index.css";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import Option from "../../components/option";
import { useNavigate } from "react-router-dom";
const Options = () => {
  const navigate = useNavigate();
  const navigateToTourPage = () => {
    navigate("/tour");
  };
  const navigateToTimeTravelPage = () => {
    navigate("/time-travel");
  };
  const options = [
    {
      title: "Virtual Tour",
      paragraph1:
        "Whether you are an art enthusiast or simply looking for a fun and educational way to spend your time, a tour in our virtual museum is the perfect choice.",
      paragraph2:
        "With our cutting-edge technology, you can explore the museum from the comfort of your own home and experience the thrill of being so close to these incredible works of art.",
      btn_text: "Take A Virtual Tour",
      navigation: navigateToTourPage,
    },
    {
      title: "Time Travel",
      paragraph1:
        "Whether you are an art enthusiast or simply looking for a fun and educational way to spend your time, a tour in our virtual museum is the perfect choice.",
      paragraph2:
        "With our cutting-edge technology, you can explore the museum from the comfort of your own home and experience the thrill of being so close to these incredible works of art.",
      btn_text: "Travel In Time",
      navigation: navigateToTimeTravelPage,
    },
  ];
  return (
    <>
      <Nav isLandingPage={false} isAuthPage={false} isLoggedIn={true} />
      <div className="flex">
        {options.map((option, index) => {
          let Main;
          if (index % 2 == 0) {
            Main = true;
          } else {
            Main = false;
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

export default Options;
