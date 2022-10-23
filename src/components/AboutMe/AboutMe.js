import "./AboutMe.css";

export const AboutMe = () => {
  return (
    <section className="about-me-container" id="aboutMe">
      <div>
        <img
          className="portrait"
          src="assets/svitlana-portrait.jpg"
          alt="Svitlana`s portrait"
        ></img>
      </div>
      <div className="info-container">
        <h1 className="title-name">I am Svitlana.</h1>
        <h3 className="title">
          I am passionate about learning new technology, innovation and
          challenging tasks.
        </h3>
        <p className="bio-description">
          Motivated and looking for an opportunity to improve my skills and to
          make a positive impact on the web. I am able to quickly build trust
          and collaborative working relationships.
        </p>
      </div>
    </section>
  );
};
