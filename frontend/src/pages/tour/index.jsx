import "./index.css";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import Option from "../../components/option";
import Popup from "../../components/popup";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Tour = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [openPopup, setOpenPopup] = useState(false);
  const navigateToSoloVirtualTour = () => {
    console.log("Navigating to Solo Virtual Tour");
  };
  const openGroupTourPopUp = () => {
    setOpenPopup(true);
  };
  const closeGroupTourPopUp = () => {
    setOpenPopup(false);
  };
  const options = [
    {
      title: "Solo Virtual Tour",
      paragraph1:
        "Start your solo adventure in our 3D museum tour, tailored just for you. Enjoy the benefits of solitude as you delve into the details of each artifact, immersing yourself fully without distractions.",
      paragraph2:
        "Our 3D museum offers a personalized journey through time and culture, ensuring a fulfilling exploration within the comfort of your own virtual space. Begin your solo adventure today!",
      btn_text: "Go Solo",
      navigation: navigateToSoloVirtualTour,
    },
    {
      title: "Group Virtual Tour",
      paragraph1:
        "Start your group adventure in our 3D museum tour, from the comfort of your homes. Enjoy real-time communication and shared excitement with fellow participants, fostering a sense of community. ",
      paragraph2:
        " Immerse yourselves in the beauty of incredible artworks while engaging in lively discussions. Join the virtual tour as a group, creating memorable moments and enriching your appreciation for art together!",
      btn_text: "Join / Host",
      navigation: openGroupTourPopUp,
    },
  ];
  return (
    <>
      <Nav isLandingPage={false} isAuthPage={false} />
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
      {openPopup && <Popup onClickClosePopup={closeGroupTourPopUp} />}
    </>
  );
};

export default Tour;
