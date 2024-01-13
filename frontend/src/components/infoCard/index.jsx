import "./index.css";

// eslint-disable-next-line react/prop-types
const InfoCard = ({ icon, title, description, isClickable, onClick }) => {
  return (
    <div
      className={
        isClickable == true
          ? "flex column card box-shadow main-color"
          : "flex column card box-shadow main-color clickable"
      }
      onClick={isClickable && onClick}
    >
      <img src={icon} alt="icon" className="card-icon" />
      <p className="card-title">{title}</p>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default InfoCard;
