/* eslint-disable react/prop-types */
import "./index.css";
import Input from "../inputField";
import closeIcon from "../../assets/images/icons8-close.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Popup = ({ onClickClosePopup }) => {
  const navigate = useNavigate();
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
  const hostTour = async () => {
    try {
      const response = await axios.request({
        url: `http://${import.meta.env.VITE_BASE_URL}/room/create`,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.status == 200) {
        localStorage.setItem("room_id", response.data.room_id);
        navigate("/museum");
      }
    } catch (e) {
      if (e.response.status == 403) {
        localStorage.clear();
        navigate("/login");
      }
    }
  };
  const joinGroupTour = async () => {
    if (validateId()) {
      try {
        const response = await axios.request({
          url: `http://${import.meta.env.VITE_BASE_URL}/room/join`,
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
          localStorage.setItem("room_id", response.data.room_id);
          navigate("/join-group-tour");
        }
      } catch (e) {
        if (e.response.status == 400) {
          setIdError(e.response.data.message);
        } else if (e.response.status == 403) {
          localStorage.clear();
          navigate("/login");
        } else {
          console.log(e.response.data.message);
        }
      }
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
          onChange={handleIdChange}
          value={id}
          error={idError}
          name="tour-id"
          labelName="Enter Tour Id"
        />
        <button
          className="popup-btn secondary-color white-font"
          onClick={joinGroupTour}
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
