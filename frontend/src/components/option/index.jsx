/* eslint-disable react/prop-types */
import "./index.css";
const Option = ({ title, paragraph1, paragraph2, btn_text }) => {
  return (
    <div className="option-container flex column  main-color">
      <p className="option-title">{title}</p>
      <div className="paragraphs">
        <p className="option-paragraph">{paragraph1}</p>
        <p className="option-paragraph">{paragraph2}</p>
      </div>
      <button className="option-btn">{btn_text}</button>
    </div>
  );
};

export default Option;
