/* eslint-disable react/prop-types */
import "./index.css";
import Input from "../inputField";
import closeIcon from "../../assets/images/icons8-close.png";
const Popup = ({
  onClickClosePopup,
  onClickJoinTour,
  onClickHostTour,
  onChange,
  value,
  error,
}) => {
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
          onChange={onChange}
          value={value}
          error={error}
          name="tour-id"
          labelName="Enter Tour Id"
        />
        <button
          className="popup-btn secondary-color white-font"
          onClick={onClickJoinTour}
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
