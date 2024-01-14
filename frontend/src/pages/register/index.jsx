import "./index.css";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import Input from "../../components/inputField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const validateInputField = (field_name) => {
    let value = formData[field_name] == "" ? "This field is required" : "";
    if (field_name == "email" && formData[field_name] != "") {
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData[field_name]
      );
      if (!isEmailValid) {
        value = "Invalid email adress";
      }
    } else if (field_name == "password" && formData[field_name] != "") {
      const isPasswordValid = formData[field_name] >= 8;
      if (!isPasswordValid) {
        value = "Password must be 8 characters or more";
      }
    }
    setFormError((prevData) => ({
      ...prevData,
      [field_name]: value,
    }));
    return value;
  };
  const validateForm = () => {
    const first_name_error = validateInputField("first_name");
    const last_name_error = validateInputField("last_name");
    const email_error = validateInputField("email");
    const password_error = validateInputField("password");
    return (
      first_name_error == "" &&
      last_name_error == "" &&
      email_error == "" &&
      password_error == ""
    );
  };
  const clearRegisterInputFields = () => {
    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormError((prevData) => ({
      ...prevData,
      [name]: "",
    }));
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleRegister = async () => {
    if (validateForm()) {
      try {
        const response = await axios.request({
          url: "http://localhost:8000/user/register",
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          data: formData,
        });
        alert(response.data.message);
        if (response.status == 200) {
          clearRegisterInputFields();
          navigate("/login");
        }
      } catch (e) {
        alert(e.response.data.message);
      }
    }
  };

  const navigateToLoginPage = () => {
    navigate("/login");
  };
  return (
    <>
      <Nav isLandingPage={false} isAuthPage={true} isLoggedIn={false} />
      <div className="signup-container main-color main-padding flex">
        <div className="signup-form box-shadow flex column">
          <p className="signup-title">Sign Up</p>
          <Input
            type="text"
            placeholder="e.g. John"
            value={formData.first_name}
            onChange={handleInputChange}
            error={formError.first_name}
            name="first_name"
            labelName="First Name"
          />
          <Input
            type="text"
            placeholder="e.g. Doe"
            value={formData.last_name}
            onChange={handleInputChange}
            error={formError.last_name}
            name="last_name"
            labelName="Last Name"
          />
          <Input
            type="email"
            placeholder="e.g. johndoe@gmail.com"
            value={formData.email}
            onChange={handleInputChange}
            error={formError.email}
            name="email"
            labelName="Email"
          />
          <Input
            type="password"
            placeholder="e.g. password123"
            value={formData.password}
            onChange={handleInputChange}
            error={formError.password}
            name="password"
            labelName="Password"
          />
          <button
            className="signup-btn-register-form secondary-color white-font"
            onClick={handleRegister}
          >
            Sign Up
          </button>
          <p>
            have an account?{" "}
            <span className="signin-btn" onClick={navigateToLoginPage}>
              Log In
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
