import "./index.css";
import Nav from "../../components/nav";
import InfoCard from "../../components/infoCard";
import statue from "../../assets/images/icons8-statue.png";
const Landing = () => {
  const info = [
    {
      icon: statue,
      title: "3D Masterpieces",
      description:
        "Immerse yourself in an extraordinary collection of 3D artworks that transcend time and space. Explore meticulously crafted sculptures and paintings, each brought to life in stunning detail within our digital museum",
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
      <div className="features">
        <InfoCard
          icon={info[0].icon}
          title={info[0].title}
          description={info[0].description}
        />
      </div>
    </>
  );
};

export default Landing;
