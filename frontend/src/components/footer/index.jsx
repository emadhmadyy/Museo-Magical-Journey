import "./index.css";
import facebook_icon from "../../assets/images/icons8-facebook.svg";
import instagram_icon from "../../assets/images/instagram_logo_2016.svg.webp";

const Footer = () => {
  return (
    <div className="flex footer">
      <div className="logos">
        <img src={facebook_icon} alt="facebook" className="icon" />
        <img src={instagram_icon} alt="instagram" className="icon" />
      </div>
      <p className="footer-text">© 2023 Museo. All rights reserved.</p>
    </div>
  );
};

export default Footer;
