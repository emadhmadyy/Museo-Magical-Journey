import "./index.css";
// import icon from "../../assets/images/icons8-statue.png";

const InfoCard = (icon, title, description) => {
  return (
    <div className="flex column card">
      <img src={icon} alt="icon" className="card-icon" />
      <p className="card-title">{title}</p>
      <p className="card-description">{description}</p>
    </div>
    // <div className="flex cards-container">
    //   <div className="flex column card">
    //     <img src={icon} alt="icon" className="card-icon" />
    //     <p className="card-title">TITLE</p>
    //     <p className="card-description">
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
    //       molestie enim, vitae vehicula est. Nam ac nisl nisl.
    //     </p>
    //   </div>
    //   <div className="flex column card">
    //     <img src={icon} alt="icon" className="card-icon" />
    //     <p className="card-title">TITLE</p>
    //     <p className="card-description">
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
    //       molestie enim, vitae vehicula est. Nam ac nisl nisl.
    //     </p>
    //   </div>
    //   <div className="flex column card">
    //     <img src={icon} alt="icon" className="card-icon" />
    //     <p className="card-title">TITLE</p>
    //     <p className="card-description">
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
    //       molestie enim, vitae vehicula est. Nam ac nisl nisl.
    //     </p>
    //   </div>
    //   <div className="flex column card">
    //     <img src={icon} alt="icon" className="card-icon" />
    //     <p className="card-title">TITLE</p>
    //     <p className="card-description">
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
    //       molestie enim, vitae vehicula est. Nam ac nisl nisl.
    //     </p>
    //   </div>
    // </div>
  );
};

export default InfoCard;
