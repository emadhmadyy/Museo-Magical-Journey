/* eslint-disable react/prop-types */
import "./index.css";
const Option = ({ title, paragraph1, paragraph2, btn_text }) => {
  return (
    <div className="option-container">
      <p className="option-title">{title}</p>
      <p className="option-paragraaph">{paragraph1}</p>
      <p className="option-paragraph">{paragraph2}</p>
      <button className="option-btn">{btn_text}</button>
    </div>
  );
};

export default Option;
