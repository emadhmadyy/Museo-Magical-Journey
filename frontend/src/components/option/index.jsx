/* eslint-disable react/prop-types */
import "./index.css";
const Option = ({
  title,
  paragraph1,
  paragraph2,
  btn_text,
  isMain,
  onClick,
}) => {
  return (
    <div
      className={
        isMain == true
          ? "option-container flex column  main-color main-color-border"
          : "option-container flex column  secondary-color main-color-border"
      }
    >
      <p
        className={isMain == true ? "option-title" : "option-title white-font"}
      >
        {title}
      </p>
      <div className="paragraphs flex column">
        <p
          className={
            isMain == true ? "option-paragraph" : "option-paragraph white-font"
          }
        >
          {paragraph1}
        </p>
        <p
          className={
            isMain == true ? "option-paragraph" : "option-paragraph white-font"
          }
        >
          {paragraph2}
        </p>
      </div>
      <button
        className={
          isMain == true
            ? "option-btn secondary-color white-font"
            : "option-btn main-color"
        }
        onClick={onClick}
      >
        {btn_text}
      </button>
    </div>
  );
};

export default Option;
