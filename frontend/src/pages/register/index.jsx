import "./index.css";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import Input from "../../components/inputField";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Canvas } from "@react-three/fiber";
import RegisterScene from "../../three-fiber-components/registerScene";
const Register = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      navigate("/options");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
  const [formStatus, setFormStatus] = useState({
    status: "",
    message: "",
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
      const isPasswordValid = formData[field_name].length >= 8;
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
        if (response.status == 200) {
          setFormStatus({
            status: response.status,
            message: "Success",
          });
          setTimeout(() => {
            setFormStatus({
              status: "",
              message: "",
            });
          }, 2500);
          clearRegisterInputFields();
          navigate("/login");
        }
      } catch (e) {
        setFormStatus({
          status: e.response.status,
          message: e.response.data.message,
        });
        setTimeout(() => {
          setFormStatus({
            status: "",
            message: "",
          });
        }, 2500);
      }
    }
  };

  const navigateToLoginPage = () => {
    navigate("/login");
  };
  return (
    <>
      <Nav isLandingPage={false} isAuthPage={true} />
      <div className="signup-container main-color main-padding flex">
        <Canvas
          style={{
            height: "85vh",
            minWidth: "300px",
            width: "43%",
            backgroundColor: "#dcd0c3",
            minHeight: "500px",
          }}
        >
          <RegisterScene />
        </Canvas>
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
          {formStatus.status != "" && (
            <p
              className={
                formStatus.status == 200 ? "status success" : "status failed"
              }
            >
              {formStatus.message}
            </p>
          )}
          <p>
            Have an account?{" "}
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
