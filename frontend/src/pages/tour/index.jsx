import "./index.css";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import Option from "../../components/option";
import Popup from "../../components/popup";
import { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
const Tour = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [id, setId] = useState("");
  const [idError, setIdError] = useState("");

  const validateId = () => {
    const value = id == "" ? "This field is required" : "";
    setIdError(value);
    return value == "";
  };
  const handleIdChange = (e) => {
    setIdError("");
    const id = e.target.value;
    setId(id);
  };
  const navigateToSoloVirtualTour = () => {
    console.log("Navigating to Solo Virtual Tour");
  };
  const openGroupTourPopUp = () => {
    setOpenPopup(true);
  };
  const closeGroupTourPopUp = () => {
    setOpenPopup(false);
  };
  const joinGroupTour = async () => {
    if (validateId()) {
      try {
        const response = await axios.request({
          url: "http://localhost:8000/room/join",
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          data: {
            room_id: id,
          },
        });
        if (response.status == 200) {
          alert(response.data.message);
        }
      } catch (e) {
        if (e.response.status == 400) {
          setIdError(e.response.data.message);
        } else {
          console.log(e.response.data.message);
        }
      }
    }
  };
  const hostGroupTour = () => {
    console.log("hosting group tour");
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
      <Nav isLandingPage={false} isAuthPage={false} isLoggedIn={true} />
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
      {openPopup && (
        <Popup
          onClickClosePopup={closeGroupTourPopUp}
          onClickJoinTour={joinGroupTour}
          onClickHostTour={hostGroupTour}
          onChange={handleIdChange}
          value={id}
          error={idError}
        />
      )}
    </>
  );
};

export default Tour;
