import "./index.css";
import icon from "../../assets/images/icons8-statue.png";

const InfoCard = () => {
  return (
    <div className="flex column card">
      <img src={icon} alt="icon" className="card-icon" />
      <p className="card-title">TITLE</p>
      <p className="card-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
        molestie enim, vitae vehicula est. Nam ac nisl nisl.
      </p>
    </div>
  );
};

export default InfoCard;
