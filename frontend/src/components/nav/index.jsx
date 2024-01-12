import "./index.css";
import logo from "../../assets/images/Emad_Hmady_Logo.png";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex nav secondary-color main-padding">
        <img className="logo" src={logo} alt="logo" />
        <div className="flex gap">
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
          <p
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </p>
        </div>
      </div>
    </>
  );
};

export default Nav;
