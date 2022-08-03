import "./MySkills.css";
import iconGit from "../MySkills/git-icon.png";
import iconCss from "../MySkills/icon-css.png";
import iconHtml from "../MySkills/icon-html.png";
import iconJavaScript from "../MySkills/icon-javaScript.png";
import iconNodeJs from "../MySkills/icon-nodeJs.png";
import iconReact from "../MySkills/icon-react.png";
import iconSql from "../MySkills/icon-sql.png";

export const MySkills = () => {
  return (
    <section className="skills-container" id="mySkills">
      <h3 className="skills-title">My skills</h3>
      <div className="skills-icons-container">
        <img className="skill-icon" src={iconHtml} alt="HTML-icon"></img>
        <img className="skill-icon" src={iconCss} alt="CSS-icon"></img>
        <img className="skill-icon" src={iconGit} alt="Git-icon"></img>
        <img className="skill-icon" src={iconJavaScript} alt="JS-icon"></img>
        <img className="skill-icon" src={iconNodeJs} alt="NodeJS-icon"></img>
        <img className="skill-icon" src={iconReact} alt="React-icon"></img>
        <img className="skill-icon" src={iconSql} alt="SQL-icon"></img>
      </div>
    </section>
  );
};
