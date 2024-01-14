/* eslint-disable react/prop-types */
import "./index.css";
import Input from "../inputField";
import closeIcon from "../../assets/images/icons8-close.png";
import axios from "axios";
const Popup = ({
  onClickClosePopup,
  onClickJoinTour,
  onChange,
  value,
  error,
}) => {
  const hostTour = async () => {
    try {
      const response = await axios.request({
        url: "http://localhost:8000/room/create",
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      alert(response.data.message);
    } catch (e) {
      console.log(e.response.data.message);
    }
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
          onClick={hostTour}
        >
          Host Group Tour
        </button>
      </div>
    </div>
  );
};

export default Popup;
