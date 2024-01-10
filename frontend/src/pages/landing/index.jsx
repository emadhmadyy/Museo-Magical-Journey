import "./index.css";
import Nav from "../../components/nav";
import InfoCard from "../../components/infoCard";
import Input from "../../components/inputField";
import statue from "../../assets/images/icons8-statue.png";
import team from "../../assets/images/icons8-team.png";
import chat from "../../assets/images/icons8-chat.png";
import time from "../../assets/images/icons8-time-machine.png";
const Landing = () => {
  const info = [
    {
      icon: statue,
      title: "3D Masterpieces",
      description:
        "Immerse yourself in an extraordinary collection of 3D artworks that transcend time and space. Explore meticulously crafted sculptures and paintings, each brought to life in stunning detail within our digital museum",
    },
    {
      icon: team,
      title: "Group Virtual Tours",
      description:
        "Embark on shared adventures with friends, family, or fellow art enthusiasts through our group virtual tours. Navigate the museum's diverse exhibits together, fostering a sense of community and shared exploration in the world of art.",
    },
    {
      icon: chat,
      title: " Real-time Chat",
      description:
        "Connect with your group through our real-time chat feature. Share thoughts, insights, and reactions as you explore the virtual galleries together. Experience the joy of art in a dynamic and interactive community.",
    },
    {
      icon: time,
      title: "Time Travel",
      description:
        "Unleash the magic of time travel with our unique time machine. Witness the evolution of art across different eras as you scroll through captivating scenes. Experience the seamless blend of history and innovation in an enchanting visual journey.",
    },
  ];
  return (
    <>
      <Nav></Nav>
      <div className="flex column main-padding about-container">
        <div className="blur-container">
          <div className="blur-text">
            <p>
              Welcome to our immersive 3D museum, where art comes to life.
              Explore a captivating collection of statues that blend history,
              culture, and creativity. Each masterpiece tells a unique story,
              inviting you to embark on a visual journey through time. Join us
              in celebrating the beauty and significance of sculpted art in our
              digital realm.
            </p>
          </div>
          <div className="blur-background"></div>
        </div>
        <button className="get-started-btn secondary-color white-font">
          Get Started
        </button>
      </div>
      <div className="features flex column">
        <p className="features-section-title">More Than A Regular Museum</p>
        <p className="features-section-subtitle">Explore Our Super Features</p>
        <div className="flex cards-container">
          <InfoCard
            icon={info[0].icon}
            title={info[0].title}
            description={info[0].description}
          />
          <InfoCard
            icon={info[1].icon}
            title={info[1].title}
            description={info[1].description}
          />
          <InfoCard
            icon={info[2].icon}
            title={info[2].title}
            description={info[2].description}
          />
          <InfoCard
            icon={info[3].icon}
            title={info[3].title}
            description={info[3].description}
          />
        </div>
      </div>
      <div className="inquiry-form main-padding">
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
    </>
  );
};

export default Landing;
