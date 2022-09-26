import React, { useState } from "react";
import "./Header.css";
import { HashLink as Link } from "react-router-hash-link";
import { MobileNav } from "../MobileNav/MobileNav";

export const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <header className={navbarOpen ? "open-mobile" : ""}>
      <div className="navigation-container">
        <nav className="menu-computer">
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
        <div
          className={
            navbarOpen
              ? "mobile-navigation-button-close"
              : "mobile-navigation-button-open"
          }
        >
          <button className="hamburger-menu" onClick={handleToggle}>
            {navbarOpen ? <span>&times;</span> : <span>&#x2630;</span>}
          </button>
        </div>
        {navbarOpen ? <MobileNav handleToggle={handleToggle} /> : ""}
      </div>
    </header>
  );
};
