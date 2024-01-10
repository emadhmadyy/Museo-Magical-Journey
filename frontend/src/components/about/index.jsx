import "./index.css";
const About = () => {
  return (
    <div className="flex column main-padding about-container">
      <div className="blur-container">
        <div className="blur-text">
          <p>
            Welcome to our immersive 3D museum, where art comes to life. Explore
            a captivating collection of statues that blend history, culture, and
            creativity. Each masterpiece tells a unique story, inviting you to
            embark on a visual journey through time. Join us in celebrating the
            beauty and significance of sculpted art in our digital realm.
          </p>
        </div>
        <div className="blur-background"></div>
      </div>
      <button className="get-started-btn secondary-color white-font">
        Get Started
      </button>
    </div>
  );
};

export default About;
