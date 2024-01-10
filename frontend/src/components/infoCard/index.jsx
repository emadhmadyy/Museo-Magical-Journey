import "./index.css";

// eslint-disable-next-line react/prop-types
const InfoCard = ({ icon, title, description }) => {
  return (
    <div className="flex column card box-shadow main-color">
      <img src={icon} alt="icon" className="card-icon" />
      <p className="card-title">{title}</p>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default InfoCard;
