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
