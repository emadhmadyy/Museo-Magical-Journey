import "./index.css";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import About from "../../components/about";
import Features from "../../components/features";
import Input from "../../components/inputField";

const Landing = () => {
  return (
    <>
      <Nav />
      <About />
      <Features />
      <div className="main-padding main-color inquiry-form-container flex column">
        <p className="contact-us-title">Contact Us</p>
        <div className="inquiry-form box-shadow flex column">
          <div className="flex form-row">
            <Input
              type="text"
              placeholder="First Name"
              value=""
              onChange=""
              error=""
              name="first-name"
              labelName="first name"
            />
            <Input
              type="text"
              placeholder="Last Name"
              value=""
              onChange=""
              error=""
              name="last-name"
              labelName="last name"
            />
          </div>
          <div className="flex form-row">
            <Input
              type="email"
              placeholder="Email"
              value=""
              onChange=""
              error=""
              name="email"
              labelName="email"
            />
            <Input
              type="text"
              placeholder="Phone Number"
              value=""
              onChange=""
              error=""
              name="phone-number"
              labelName="phone number"
            />
          </div>
          <div className="flex column">
            <label htmlFor="" className="text-area-label">
              How can we enhance our museum?
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="text-area"
              placeholder="How can we enhance our museum?"
            ></textarea>
          </div>
          <button className="submit-btn secondary-color white-font">
            SUBMIT
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
