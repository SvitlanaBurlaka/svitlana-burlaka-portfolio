import "./ContactMe.css";
import PDFfile from "../../data/Svitlana-CV.pdf";

export const ContactMe = () => {
  return (
    <section className="contact-container" id="contact">
      <h3 className="contact-title">My Contacts</h3>
      <div className="contact-icons-container">
        <a
          href="https://github.com/SvitlanaBurlaka"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="contact-icon"
            src="/svitlana-burlaka-portfolio/assets/git-code-link.png"
            alt="git-icon"
          ></img>
        </a>
        <a
          href="https://www.linkedin.com/in/svitlana-burlaka-ab6304238/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="contact-icon"
            src="/svitlana-burlaka-portfolio/assets/linkedin-icon.png"
            alt="linkedin-icon"
          ></img>
        </a>
        <a
          href={PDFfile}
          download="Svitlana`s CV"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="contact-icon"
            src="/svitlana-burlaka-portfolio/assets/resume-download-icon.png"
            alt="CV-icon"
          ></img>
        </a>
      </div>
      <p className="email-text">burlaka.sv.7@gmail.com</p>
    </section>
  );
};
