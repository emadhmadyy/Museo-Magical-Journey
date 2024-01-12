import "./index.css";
import Input from "../inputField";
const Popup = () => {
  return (
    <div className="overlay">
      <div className="popup flex column main-color">
        <button className="close-btn"> x </button>
        <Input
          type="text"
          placeholder="Tour Id"
          value=""
          onChange=""
          error=""
          name="tour-id"
          labelName="Tour Id"
        />
        <button className="popup-btn secondary-color white-font">
          Join Group Tour
        </button>
        <button className="popup-btn secondary-color white-font host-btn">
          Host Group Tour
        </button>
      </div>
    </div>
  );
};

export default Popup;
