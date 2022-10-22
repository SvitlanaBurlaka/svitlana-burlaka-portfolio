import React from "react";
import "./MyProjects.css";
import { projects } from "../../data/projects";
import { ProjectItem } from "./ProjectItem";

// import mealSharing from "../MyProjects/meal-sharing.png";
// import fastestPresser from "../MyProjects/fastest-presser-game.png";
// import userSearcher from "../MyProjects/user-searcher.png";
// import gifSearcher from "../MyProjects/gif-searcher.png";
// import todoApp from "../MyProjects/todo-app.png";
// import kaospilot from "../MyProjects/kaos-pilot.png";

export const MyProjects = () => {
  // const data = [
  //   {
  //     id: 6,
  //     title: "Kaospilot toolbox",
  //     img: kaospilot,
  //     codeLink: "https://github.com/HackYourFuture-CPH/kp-toolbox-fp-class21",
  //     demoLink: "https://staging-kp-toolbox-fp-class21.herokuapp.com/",
  //     description:
  //       "React app biuld in a teams, task was splitted between people",
  //     tools: "HTML, CSS, React, NodeJS, MySQL, Docker, JIRA, Agile method",
  //   },
  //   {
  //     id: 1,
  //     title: "Meal sharing app",
  //     img: mealSharing,
  //     codeLink: "https://github.com/SvitlanaBurlaka/meal-sharing",
  //     demoLink: "https://hyf-meal-sharing-test.herokuapp.com/",
  //     description:
  //       "React app where you can share, reserve and leave a review for meal.",
  //     tools: "HTML, CSS, React(Hooks and Context), NodeJS, MySQL, Docker.",
  //   },
  //   {
  //     id: 2,
  //     title: "Fastest Presser",
  //     img: fastestPresser,
  //     codeLink:
  //       "https://github.com/SvitlanaBurlaka/fastest-presser-game.github.io",
  //     demoLink:
  //       "https://svitlanaburlaka.github.io/fastest-presser-game.github.io/",
  //     description:
  //       "Game where two users compete about who can press a key the most times within a set time!",
  //     tools: "HTML, CSS, JavaScript, DOM manipulation.",
  //   },
  //   {
  //     id: 3,
  //     title: "Git Hub user searcher",
  //     img: userSearcher,
  //     codeLink: "https://github.com/SvitlanaBurlaka/github-user-searcher",
  //     demoLink: "https://svitlanaburlaka.github.io/github-user-searcher/",
  //     description: "App where you can search user by name on GitHub.",
  //     tools: "React: used Hooks and Context.",
  //   },
  //   {
  //     id: 4,
  //     title: "GIF searcher",
  //     img: gifSearcher,
  //     codeLink: "https://github.com/SvitlanaBurlaka/gif-searcher",
  //     demoLink: "https://svitlanaburlaka.github.io/gif-searcher/",
  //     description: "User can search GIF`s by name and number.",
  //     tools: "HTML, CSS, JavaScript, DOM manipulation and Fetch API.",
  //   },
  //   {
  //     id: 5,
  //     title: "Todo app",
  //     img: todoApp,
  //     codeLink: "https://github.com/SvitlanaBurlaka/todo-app",
  //     demoLink: "https://svitlanaburlaka.github.io/todo-app/",
  //     description:
  //       "React todo list app, where user can add, delete, and mark todo as done.",
  //     tools: "React: used Hooks and lifecycle methods.",
  //   },
  // ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h3 className="projects-title">Some projects I have biuld</h3>
        {projects.map((project) => {
          return (
            <ProjectItem
              key={project.id}
              item={project}
              // title={project.title}
              // img={project.img}
              // codeLink={project.codeLink}
              // demoLink={project.demoLink}
              // description={project.description}
              // tools={project.tools}
            />
          );
        })}
      </div>
    </section>
  );
};
