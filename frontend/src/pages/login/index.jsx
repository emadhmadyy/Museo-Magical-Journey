import "./index.css";
import Nav from "../../components/nav";
import Input from "../../components/inputField";
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
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
          <button className="secondary-color white-font login-btn">
            LOG IN
          </button>
          <p className="">
            dont have an account?{" "}
            <span className="signup-btn" onClick={() => navigate("/register")}>
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
