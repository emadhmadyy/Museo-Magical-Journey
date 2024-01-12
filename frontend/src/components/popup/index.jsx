import "./index.css";
import Input from "../inputField";
import closeIcon from "../../assets/images/icons8-close.png";
const Popup = () => {
  return (
    <div className="overlay">
      <div className="popup flex column main-color">
        <img src={closeIcon} alt="close-icon-button" className="close-icon" />
        <Input
          type="text"
          placeholder="Tour Id"
          value=""
          onChange=""
          error=""
          name="tour-id"
          labelName="Enter Tour Id"
        />
        <button className="popup-btn secondary-color white-font">
          Join Group Tour
        </button>
        <p className="or">OR</p>
        <button className="popup-btn secondary-color white-font host-btn">
          Host Group Tour
        </button>
      </div>
    </div>
  );
};

export default Popup;
