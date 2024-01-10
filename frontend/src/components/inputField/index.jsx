/* eslint-disable react/prop-types */
import "./index.css";
const Input = ({
  type,
  placeholder,
  value,
  onChange,
  error,
  name,
  labelName,
}) => {
  const handleChange = (e) => {
    const { value } = e.target;
    onChange(value);
  };
  return (
    <>
      <label htmlFor={name} className="input-field-label">
        {labelName}
      </label>
      <input
        className="input-field"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
      {error && <div className="error">{error}</div>}
    </>
  );
};

export default Input;
