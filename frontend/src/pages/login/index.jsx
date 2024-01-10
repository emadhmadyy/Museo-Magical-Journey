import "./index.css";
import Nav from "../../components/nav";
import Input from "../../components/inputField";
import Footer from "../../components/footer";
const Login = () => {
  return (
    <>
      <Nav />
      <div className="flex main-padding login-container main-color">
        {/* <div className="model"></div> */}
        <div className="login-form flex column box-shadow">
          <p className="login-title">log in</p>
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
          <button className="secondary-color white-font login-btn">
            LOG IN
          </button>
          <p className="">
            dont have an account? <span className="signup-btn">sign up</span>
          </p>
        </div>
        <div className="login-form flex column box-shadow">
          <p className="login-title">log in</p>
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
          <button className="secondary-color white-font login-btn">
            LOG IN
          </button>
          <p className="">
            dont have an account? <span className="signup-btn">sign up</span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
