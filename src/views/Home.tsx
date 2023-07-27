export const Home = () => {
  return (
    <div className="home-view">
      <div className="home-left">
        <div className="intro">
          <span className="hello">HELLO,</span> <br />
          I'M A <span className="profession">
            {"<b>WEB DEVELOPER</b>"}
          </span>{" "}
          <br />
          <span className="name">BRASKIN ULLOA</span>
        </div>
      </div>
      <div className="home-right">
        <img
        className="profile-img"
          src="profile.png"
          alt="empty"
        />
        <button type="button">EXPLORE</button>
      </div>
    </div>
  );
};
