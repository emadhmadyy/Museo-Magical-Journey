import "./index.css";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import Input from "../../components/inputField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Register = () => {
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
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleRegister = () => {
    console.log(JSON.stringify(formData));
  };
  const navigate = useNavigate();
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
            onChange={handleInputChange}
            error=""
            name="first_name"
            labelName="First Name"
          />
          <Input
            type="text"
            placeholder="e.g. Doe"
            onChange={handleInputChange}
            error=""
            name="last_name"
            labelName="Last Name"
          />
          <Input
            type="email"
            placeholder="e.g. johndoe@gmail.com"
            onChange={handleInputChange}
            error=""
            name="email"
            labelName="Email"
          />
          <Input
            type="password"
            placeholder="e.g. password123"
            onChange={handleInputChange}
            error=""
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
