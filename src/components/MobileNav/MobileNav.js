import React from "react";
import "./mobileNav.css";
import { HashLink as Link } from "react-router-hash-link";

export const MobileNav = ({ handleToggle }) => {
  return (
    <div>
      <nav className="mobile-navigation">
        <Link to="#aboutMe" onClick={() => handleToggle()} smooth>
          About me
        </Link>
        <Link to="#mySkills" onClick={() => handleToggle()} smooth>
          My skills
        </Link>
        <Link to="#projects" onClick={() => handleToggle()} smooth>
          Projects
        </Link>
        <Link to="#contact" onClick={() => handleToggle()} smooth>
          Contact
        </Link>
      </nav>
    </div>
  );
};
