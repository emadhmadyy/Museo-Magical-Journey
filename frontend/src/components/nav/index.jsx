import "./index.css";
import logo from "../../assets/images/Emad_Hmady_Logo.webp";
import { Link as ScrollLink } from "react-scroll";

const Nav = () => {
  return (
    <>
      <div className="flex nav main-color main-padding">
        <img className="logo" src={logo} alt="logo" />
        <div className="flex gap">
          <p>
            <ScrollLink to="about" smooth={true} duration={500}>
              about
            </ScrollLink>
          </p>
          <p>
            <ScrollLink to="features" smooth={true} duration={500}>
              features
            </ScrollLink>
          </p>
          <p>
            <ScrollLink to="contact" smooth={true} duration={500}>
              contact us
            </ScrollLink>
          </p>
          <p>login</p>
        </div>
      </div>
    </>
  );
};

export default Nav;
