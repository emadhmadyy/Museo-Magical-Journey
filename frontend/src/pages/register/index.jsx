import "./index.css";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import Input from "../../components/inputField";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  return (
    <>
      <Nav />
      <div className="signup-container main-color main-padding flex">
        <div className="signup-form box-shadow flex column">
          <p className="signup-title">sign up</p>
          <Input
            type="text"
            placeholder="First Name"
            value=""
            onChange=""
            error=""
            name="first-name"
            labelName="first name"
          />
          <Input
            type="text"
            placeholder="Last Name"
            value=""
            onChange=""
            error=""
            name="last-name"
            labelName="last name"
          />
          <Input
            type="email"
            placeholder="Email"
            value=""
            onChange=""
            error=""
            name="email"
            labelName="email"
          />
          <Input
            type="password"
            placeholder="Password"
            value=""
            onChange=""
            error=""
            name="password"
            labelName="password"
          />
          <button className="signup-btn-register-form secondary-color white-font">
            SIGN UP
          </button>
          <p>
            have an account?{" "}
            <span
              className="signin-btn"
              onClick={() => {
                navigate("/login");
              }}
            >
              log in
            </span>
          </p>
        </div>
        <div className="signup-form box-shadow flex column">
          <p className="signup-title">sign up</p>
          <Input
            type="text"
            placeholder="First Name"
            value=""
            onChange=""
            error=""
            name="first-name"
            labelName="first name"
          />
          <Input
            type="text"
            placeholder="Last Name"
            value=""
            onChange=""
            error=""
            name="last-name"
            labelName="last name"
          />
          <Input
            type="email"
            placeholder="Email"
            value=""
            onChange=""
            error=""
            name="email"
            labelName="email"
          />
          <Input
            type="password"
            placeholder="Password"
            value=""
            onChange=""
            error=""
            name="password"
            labelName="password"
          />
          <button className="signup-btn-register-form secondary-color white-font">
            SIGN UP
          </button>
          <p>
            have an account? <span className="signin-btn">log in</span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
