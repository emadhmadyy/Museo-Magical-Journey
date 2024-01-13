import "./index.css";
import Input from "../inputField";
const Inquiry = () => {
  const inputChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div
      className="main-padding main-color inquiry-form-container flex column"
      id="contact"
    >
      <p className="contact-us-title">Contact Us</p>
      <div className="inquiry-form box-shadow flex column">
        <div className="flex form-row">
          <Input
            type="text"
            placeholder="e.g. John"
            onChange={inputChange}
            error=""
            name="first-name"
            labelName="First Name"
          />
          <Input
            type="text"
            placeholder="e.g. Doe"
            onChange={inputChange}
            error=""
            name="last-name"
            labelName="Last Name"
          />
        </div>
        <div className="flex form-row">
          <Input
            type="email"
            placeholder="e.g. johndoe@gmail.com"
            onChange={inputChange}
            error=""
            name="email"
            labelName="Email"
          />
          <Input
            type="text"
            placeholder="e.g. +XXX-XXXXXXXX"
            value=""
            onChange={inputChange}
            error=""
            name="phone-number"
            labelName="Phone Number"
          />
        </div>
        <div className="flex column text-area-field">
          <label htmlFor="feedback" className="text-area-label">
            How Can We Enhance Our Museum?
          </label>
          <textarea
            name=""
            id="feedback"
            cols="30"
            rows="10"
            className="text-area"
            placeholder="How Can We Enhance Our Museum?"
          ></textarea>
        </div>
        <button className="submit-btn secondary-color white-font">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Inquiry;
