import "./index.css";
import Nav from "../../components/nav";
import Input from "../../components/inputField";
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      navigate("/options");
    }
  }, []);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({
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
    const emailError = validateInputField("email");
    const passwordError = validateInputField("password");
    return emailError == "" && passwordError == "";
  };

  const clearLoginInputFields = () => {
    setFormData({
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
  const handleLogin = async () => {
    if (validateForm()) {
      try {
        const response = await axios.request({
          url: "http://localhost:8000/user/login",
          method: "post",
          data: formData,
          headers: {
            "Content-Type": "application/json",
          },
        });
        alert(response.data.message);
        if (response.status == 200) {
          clearLoginInputFields();
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          navigate("/options");
          // console.log(localStorage.getItem("token"));
          // const user = JSON.parse(localStorage.getItem("user"));
          // console.log(user.first_name);
        }
      } catch (e) {
        alert(e.response.data.message);
      }
    }
  };
  const navigateToRegisterPage = () => {
    navigate("/register");
  };

  return (
    <>
      <Nav isLandingPage={false} isLoggedIn={true} isAuthPage={true} />
      <div className="flex main-padding login-container main-color">
        {/* here goes the 3D model */}
        <div className="login-form flex column box-shadow">
          <p className="login-title">Log In</p>
          <Input
            type="email"
            placeholder="e.g. johndoe@gmail.com"
            onChange={handleInputChange}
            value={formData.email}
            error={formError.email}
            name="email"
            labelName="Email"
          />
          <Input
            type="password"
            placeholder="e.g. password123"
            onChange={handleInputChange}
            value={formData.password}
            error={formError.password}
            name="password"
            labelName="Password"
          />
          <button
            className="secondary-color white-font login-btn"
            onClick={handleLogin}
          >
            LOG IN
          </button>
          <p className="">
            dont have an account?{" "}
            <span className="signup-btn" onClick={navigateToRegisterPage}>
              Sign Up
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
