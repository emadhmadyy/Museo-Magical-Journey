import "./index.css";
import Input from "../inputField";
import { useState } from "react";
import axios from "axios";
const Inquiry = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    inquiry_text: "",
  });

  const [formError, setFormError] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    inquiry_text: "",
  });

  const validateInputField = (field_name) => {
    let value = formData[field_name] == "" ? "This field is required" : "";
    if (field_name == "email" && formData[field_name] != "") {
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData[field_name]
      );
      if (!isEmailValid) {
        value = "Invalid Email Adress";
      }
    }
    setFormError((prevData) => ({
      ...prevData,
      [field_name]: value,
    }));
    return value;
  };
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormError((prevData) => ({
      ...prevData,
      [name]: "",
    }));
    setFormData(
      //anonymous function that returns an object to setFormData
      (prevData) => {
        return {
          ...prevData,
          //dynamic key using [name]:value
          //this allowed me to create only one function for all fields
          [name]: value,
        };
      }
    );
  };
  const clearInquiryInputFields = () => {
    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      inquiry_text: "",
    });
  };
  const handleSubmit = async () => {
    const first_name_error = validateInputField("first_name");
    const last_name_error = validateInputField("last_name");
    const email_error = validateInputField("email");
    const phone_number_error = validateInputField("phone_number");
    const inquiry_text_error = validateInputField("inquiry_text");
    if (
      first_name_error == "" &&
      last_name_error == "" &&
      email_error == "" &&
      phone_number_error == "" &&
      inquiry_text_error == ""
    ) {
      try {
        const response = await axios.request({
          url: "http://localhost:8000/inquiry",
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          data: formData,
        });
        alert(response.data.message);
        clearInquiryInputFields();
      } catch (e) {
        console.log(e.response.data);
      }
    }
  };
  return (
    <div
      className="main-padding main-color inquiry-form-container flex column"
      id="contact"
    >
      <p className="contact-us-title">Contact Us</p>
      <div className="inquiry-form box-shadow flex column">
        <div className="flex form-row">
          <Input
            value={formData.first_name}
            type="text"
            placeholder="e.g. John"
            onChange={handleInputChange}
            error={formError.first_name}
            name="first_name"
            labelName="First Name"
          />
          <Input
            value={formData.last_name}
            type="text"
            placeholder="e.g. Doe"
            onChange={handleInputChange}
            error={formError.last_name}
            name="last_name"
            labelName="Last Name"
          />
        </div>
        <div className="flex form-row">
          <Input
            value={formData.email}
            type="email"
            placeholder="e.g. johndoe@gmail.com"
            onChange={handleInputChange}
            error={formError.email}
            name="email"
            labelName="Email"
          />
          <Input
            value={formData.phone_number}
            type="text"
            placeholder="e.g. +XXX-XXXXXXXX"
            onChange={handleInputChange}
            error={formError.phone_number}
            name="phone_number"
            labelName="Phone Number"
          />
        </div>
        <div className="flex column text-area-field">
          <label htmlFor="feedback" className="text-area-label">
            How Can We Enhance Our Museum?
          </label>
          <textarea
            value={formData.inquiry_text}
            name="inquiry_text"
            id="feedback"
            cols="30"
            rows="10"
            className="text-area"
            placeholder="How Can We Enhance Our Museum?"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button
          className="submit-btn secondary-color white-font"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Inquiry;
