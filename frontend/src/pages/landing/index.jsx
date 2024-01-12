import "./index.css";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import About from "../../components/about";
import Features from "../../components/features";
import Inquiry from "../../components/inquiry";

const Landing = () => {
  return (
    <>
      <Nav isLandingPage={true} isLoggedIn={false} isAuthPage={false} />
      <About />
      <Features />
      <Inquiry />
      <Footer />
    </>
  );
};

export default Landing;
