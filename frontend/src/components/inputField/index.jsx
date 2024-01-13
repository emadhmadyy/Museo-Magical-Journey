/* eslint-disable react/prop-types */
import "./index.css";
const Input = ({ type, placeholder, onChange, error, name, labelName }) => {
  return (
    <div className="input-container flex column">
      <label htmlFor={name} className="input-field-label">
        {labelName}
      </label>
      <input
        name={name}
        className="input-field"
        type={type}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        required
        autoComplete="off"
      />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Input;
