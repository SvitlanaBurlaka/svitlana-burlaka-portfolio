import "./ContactMe.css";
import gitContact from "../ContactMe/git-code-link.png";
import linkedin from "../ContactMe/linkedin-icon.png";
import PDFfile from "../ContactMe/Svitlana-CV.pdf";
import download from "../ContactMe/resume-download-icon.png";

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
          <img className="contact-icon" src={gitContact} alt="git-icon"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/svitlana-burlaka-ab6304238/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="contact-icon" src={linkedin} alt="git-icon"></img>
        </a>
        <a
          href={PDFfile}
          download="Svitlana`s CV"
          target="_blank"
          rel="noreferrer"
        >
          <img className="contact-icon" src={download} alt="CV-icon"></img>
        </a>
      </div>
      <p className="email-text">burlaka.sv.7@gmail.com</p>
    </section>
  );
};
