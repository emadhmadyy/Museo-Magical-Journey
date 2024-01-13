import "./index.css";
import InfoCard from "../infoCard";
import statue from "../../assets/images/icons8-statue.png";
import team from "../../assets/images/icons8-team.png";
import chat from "../../assets/images/icons8-chat.png";
import time from "../../assets/images/icons8-time-machine.png";
const Features = () => {
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
    <div className="features flex column" id="features">
      <p className="features-section-title">More Than A Regular Museum</p>
      <p className="features-section-subtitle">Explore Our Super Features</p>
      <div className="flex cards-container">
        {info.map((i, index) => {
          return (
            <InfoCard
              key={index}
              icon={i.icon}
              title={i.title}
              description={i.description}
              isClickable={false}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Features;
