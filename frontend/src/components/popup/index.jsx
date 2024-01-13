import "./index.css";
import Input from "../inputField";
import closeIcon from "../../assets/images/icons8-close.png";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
const Popup = ({ onClickClosePopup, onClickHostTour }) => {
  const [id, setId] = useState("");
  const handleIdChange = (e) => {
    const id = e.target.value;
    setId(id);
  };
  const handleJoinTour = () => {
    console.log(id);
  };
  return (
    <div className="overlay">
      <div className="popup flex column main-color">
        <img
          src={closeIcon}
          alt="close-icon-button"
          className="close-icon"
          onClick={onClickClosePopup}
        />
        <Input
          type="text"
          placeholder="Tour Id"
          onChange={handleIdChange}
          error=""
          name="tour-id"
          labelName="Enter Tour Id"
        />
        <button
          className="popup-btn secondary-color white-font"
          onClick={handleJoinTour}
        >
          Join Group Tour
        </button>
        <p className="or">OR</p>
        <button
          className="popup-btn secondary-color white-font host-btn"
          onClick={onClickHostTour}
        >
          Host Group Tour
        </button>
      </div>
    </div>
  );
};

export default Popup;
