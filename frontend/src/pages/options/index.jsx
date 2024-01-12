import "./index.css";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import Option from "../../components/option";
const Options = () => {
  const options = [
    {
      title: "Virtual Tour",
      paragraph1:
        "Whether you are an art enthusiast or simply looking for a fun and educational way to spend your time, a tour in our virtual museum is the perfect choice.",
      paragraph2:
        "With our cutting-edge technology, you can explore the museum from the comfort of your own home and experience the thrill of being so close to these incredible works of art.",
      btn_text: "Take A Virtual Tour",
    },
    {
      title: "Time Travel",
      paragraph1:
        "Whether you are an art enthusiast or simply looking for a fun and educational way to spend your time, a tour in our virtual museum is the perfect choice.",
      paragraph2:
        "With our cutting-edge technology, you can explore the museum from the comfort of your own home and experience the thrill of being so close to these incredible works of art.",
      btn_text: "Travel In Time",
    },
  ];
  return (
    <>
      <Nav />
      <div className="flex">
        <Option
          title={options[0].title}
          paragraph1={options[0].paragraph1}
          paragraph2={options[0].paragraph2}
          btn_text={options[0].btn_text}
          isMain={true}
        />
        <Option
          title={options[1].title}
          paragraph1={options[1].paragraph1}
          paragraph2={options[1].paragraph2}
          btn_text={options[1].btn_text}
          isMain={false}
        />
      </div>
      <Footer />
    </>
  );
};

export default Options;
