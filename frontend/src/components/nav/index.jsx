/* eslint-disable react/prop-types */
import "./index.css";
import logo from "../../assets/images/Emad_Hmady_Logo_r.png";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";
//isAuthPage Prop to check if the page is login/signup
const Nav = ({ isLandingPage, isLoggedIn, isAuthPage }) => {
  const navigate = useNavigate();
  const navigateToHomePage = () => {
    navigate("/");
  };
  const navigateToLoginPage = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="flex nav secondary-color main-padding">
        <img className="logo" src={logo} alt="logo" />
        <div className="flex gap">
          {isLandingPage == true ? (
            <>
              <p>
                <ScrollLink to="about" smooth={true} duration={500}>
                  About
                </ScrollLink>
              </p>
              <p>
                <ScrollLink to="features" smooth={true} duration={500}>
                  Features
                </ScrollLink>
              </p>
              <p>
                <ScrollLink to="contact" smooth={true} duration={500}>
                  Contact Us
                </ScrollLink>
              </p>
            </>
          ) : (
            <p onClick={navigateToHomePage}>Home</p>
          )}
          {!isAuthPage &&
            (isLoggedIn == false ? (
              <p onClick={navigateToLoginPage}>Login</p>
            ) : (
              <p
                onClick={() => {
                  console.log("logging out");
                }}
              >
                Logout
              </p>
            ))}
        </div>
      </div>
    </>
  );
};

export default Nav;
