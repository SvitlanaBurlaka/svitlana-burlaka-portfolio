import "./Header.css";
import { HashLink as Link } from "react-router-hash-link";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className="navigation-list">
          <li>
            <Link to="#aboutMe" smooth>
              About me
            </Link>
          </li>
          <li>
            <Link to="#mySkills" smooth>
              My skills
            </Link>
          </li>
          <li>
            <Link to="#projects" smooth>
              Projects
            </Link>
          </li>
          <li>
            <Link to="#contact" smooth>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
