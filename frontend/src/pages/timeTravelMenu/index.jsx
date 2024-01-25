import "./index.css";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import InfoCard from "../../components/infoCard";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const TimeTravelMenu = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const info = [
    {
      icon: "./icons8-locomotive-96.png",
      title: "Locomotive",
      description:
        "Locomotives, marvels of transportation, have shaped societies since the 19th century. From steam giants to sleek marvels, they connect worlds, symbolizing progress and innovation.",
      handleclick: () => {
        navigate("/locomotive");
      },
    },
    {
      icon: "./icons8-telephone-96.png",
      title: "Telephone",
      description:
        "Telephones, transformative inventions, revolutionized communication since the 19th century. From rotary to smartphones, they connect people, shaping modern societies.",
    },
  ];
  return (
    <>
      <Nav isAuthPage={false} isLandingPage={false} />
      <div className="time-travel flex column main-padding main-color">
        <p className="time-travel-main-title">Get Back In Time!</p>
        <p className="time-travel-sub-title">Choose from the below options</p>
        <div className="flex info-cards-container ">
          {info.map((i, index) => {
            return (
              <InfoCard
                key={index}
                icon={i.icon}
                title={i.title}
                description={i.description}
                isClickable={true}
                onClick={i.handleclick}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TimeTravelMenu;
