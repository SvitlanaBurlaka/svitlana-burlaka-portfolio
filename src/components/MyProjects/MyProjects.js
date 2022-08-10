import React from "react";
import "./MyProjects.css";
import { ProjectItem } from "./ProjectItem";
import mealSharing from "../MyProjects/meal-sharing.png";
import fastestPresser from "../MyProjects/fastest-presser-game.png";
import userSearcher from "../MyProjects/user-searcher.png";
import gifSearcher from "../MyProjects/gif-searcher.png";
import todoApp from "../MyProjects/todo-app.png";

export const MyProjects = () => {
  const data = [
    {
      id: 1,
      title: "Meal sharing app",
      img: mealSharing,
      codeLink: "https://github.com/SvitlanaBurlaka/meal-sharing",
      demoLink: "https://hyf-meal-sharing-test.herokuapp.com/",
    },
    {
      id: 2,
      title: "Fastest Presser",
      img: fastestPresser,
      codeLink:
        "https://github.com/SvitlanaBurlaka/fastest-presser-game.github.io",
      demoLink:
        "https://svitlanaburlaka.github.io/fastest-presser-game.github.io/",
    },
    {
      id: 3,
      title: "Git Hub user searcher",
      img: userSearcher,
      codeLink: "https://github.com/SvitlanaBurlaka/github-user-searcher",
      demoLink: "https://svitlanaburlaka.github.io/github-user-searcher/",
    },
    {
      id: 4,
      title: "GIF searcher",
      img: gifSearcher,
      codeLink: "https://github.com/SvitlanaBurlaka/gif-searcher",
      demoLink: "https://svitlanaburlaka.github.io/gif-searcher/",
    },
    {
      id: 5,
      title: "Todo app",
      img: todoApp,
      codeLink: "https://github.com/SvitlanaBurlaka/todo-app",
      demoLink: "https://svitlanaburlaka.github.io/todo-app/",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h3 className="projects-title">Some projects I have biuld</h3>
        {data.map((project) => {
          return (
            <ProjectItem
              key={project.id}
              title={project.title}
              img={project.img}
              codeLink={project.codeLink}
              demoLink={project.demoLink}
            />
          );
        })}
      </div>
    </section>
  );
};
