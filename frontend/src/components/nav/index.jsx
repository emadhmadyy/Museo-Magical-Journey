import "./index.css";
import logo from "../../assets/images/Emad_Hmady_Logo.webp";

const Nav = () => {
  return (
    <>
      <div className="flex nav main-color main-padding">
        <img className="logo" src={logo} alt="logo" />
        <div className="flex gap">
          <p>about</p>
          <p>features</p>
          <p>contact us</p>
          <p>login</p>
        </div>
      </div>
    </>
  );
};

export default Nav;
