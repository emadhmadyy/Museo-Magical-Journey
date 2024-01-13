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
  // const validateFirstName = () => {
  //   setFormError((prevData) => ({
  //     ...prevData,
  //     first_name: formData.first_name == "" ? "This field is required" : "",
  //   }));
  // };
  const validateInputField = (field_name) => {
    setFormError((prevData) => ({
      ...prevData,
      [field_name]: formData[field_name] == "" ? "This field is required" : "",
    }));
  };
  const handleInputChange = (e) => {
    const { value, name } = e.target;
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
    // validateFirstName();
    validateInputField("first_name");
    if (
      formError.first_name == "" &&
      formError.last_name == "" &&
      formError.email == "" &&
      formError.phone_number == "" &&
      formError.inquiry_text == ""
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
