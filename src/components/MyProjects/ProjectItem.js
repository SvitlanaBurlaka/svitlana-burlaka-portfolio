import gitLink from "../MyProjects/git-code-link.png";
import externalLink from "../MyProjects/external-link.png";

export const ProjectItem = ({
  item,
  // title,
  // img,
  // codeLink,
  // demoLink,
  // description,
  // tools,
}) => {
  return (
    <div className="card-container">
      <div className="project-card">
        <a href={item.demoLink}>
          <img
            className="project-img"
            src={process.env.PUBLIC_URL + item.image}
            alt="project-card"
          ></img>
        </a>
      </div>
      <div className="description-container">
        <h4 className="project-title">{item.title}</h4>
        <h6 className="project-tools">{item.tools}</h6>
        <p className="description">{item.description}</p>
        <div className="project-content">
          <div className="links-container">
            <a href={item.codeLink} target="_blank" rel="noreferrer">
              <img
                className="project-link"
                src={gitLink}
                alt="link for git hub with code"
              ></img>
            </a>
            <a href={item.demoLink} target="_blank" rel="noreferrer">
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
