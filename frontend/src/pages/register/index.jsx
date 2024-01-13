import "./index.css";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import Input from "../../components/inputField";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  return (
    <>
      <Nav isLandingPage={false} isAuthPage={true} isLoggedIn={false} />
      <div className="signup-container main-color main-padding flex">
        <div className="signup-form box-shadow flex column">
          <p className="signup-title">Sign Up</p>
          <Input
            type="text"
            placeholder="e.g. John"
            onChange=""
            error=""
            name="first-name"
            labelName="First Name"
          />
          <Input
            type="text"
            placeholder="e.g. Doe"
            onChange=""
            error=""
            name="last-name"
            labelName="Last Name"
          />
          <Input
            type="email"
            placeholder="e.g. johndoe@gmail.com"
            onChange=""
            error=""
            name="email"
            labelName="Email"
          />
          <Input
            type="password"
            placeholder="e.g. password123"
            onChange=""
            error=""
            name="password"
            labelName="Password"
          />
          <button className="signup-btn-register-form secondary-color white-font">
            Sign Up
          </button>
          <p>
            have an account?{" "}
            <span
              className="signin-btn"
              onClick={() => {
                navigate("/login");
              }}
            >
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
