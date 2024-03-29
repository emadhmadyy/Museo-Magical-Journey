import "./index.css";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import Option from "../../components/option";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Options = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
        "Whether you love history or just seeking an engaging way to immerse yourself in the evolution of human innovation, our virtual exhibition is the ideal destination for you.",
      paragraph2:
        "Our time travel feature allows you to marvel at the birth of revolutionary items, tracing their development through various eras until today.",
      btn_text: "Travel In Time",
      navigation: navigateToTimeTravelPage,
    },
  ];
  return (
    <>
      <Nav isLandingPage={false} isAuthPage={false} />
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
