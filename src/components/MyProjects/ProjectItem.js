import gitLink from "../MyProjects/git-code-link.png";
import externalLink from "../MyProjects/external-link.png";

export const ProjectItem = ({
  title,
  img,
  codeLink,
  demoLink,
  description,
  tools,
}) => {
  return (
    <div className="card-container">
      <div className="project-card">
        <a href={demoLink}>
          <img className="project-img" src={img} alt="project-card"></img>
        </a>
      </div>
      <div className="description-container">
        <h4 className="project-title">{title}</h4>
        <h6 className="project-tools">{tools}</h6>
        <p className="description">{description}</p>
        <div className="project-content">
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
                alt="link for git hub with-code"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
