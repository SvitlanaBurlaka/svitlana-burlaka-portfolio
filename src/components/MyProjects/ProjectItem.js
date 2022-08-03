import gitLink from "../MyProjects/git-code-link.png";
import externalLink from "../MyProjects/external-link.png";

export const ProjectItem = ({ title, img, codeLink, demoLink }) => {
  return (
    <div className="project-card">
      <img className="project-img" src={img} alt="meal-sharing-card"></img>
      <div className="project-content">
        <h4>{title}</h4>
        <div className="links-container">
          <a href={codeLink} target="_blank" rel="noreferrer">
            <img
              className="project-link"
              src={gitLink}
              alt="link for git hub with code"
            ></img>
          </a>
          <a href={demoLink} target="_blank" rel="noreferrer">
            <img
              className="project-link"
              src={externalLink}
              alt="link for git hub with code"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};
