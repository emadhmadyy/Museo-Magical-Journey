import "./index.css";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import Option from "../../components/option";
const Options = () => {
  const options = [
    {
      title: "Virtual Tour",
      paragraph1:
        "Whether you’re an art enthusiast or simply looking for a fun and educational way to spend your time, our virtual museum tour is the perfect choice.",
      paragraph2:
        "With our cutting-edge technology, you can explore the museum from the comfort of your own home and experience the thrill of being up close and personal with these incredible works of art.",
      btn_text: "TAKE A VIRTUAL TOUR",
    },
  ];
  return (
    <>
      <Nav />
      <Option
        title={options[0].title}
        paragraph1={options[0].paragraph1}
        paragraph2={options[0].paragraph2}
        btn_text={options[0].btn_text}
      />
      <Footer />
    </>
  );
};

export default Options;
