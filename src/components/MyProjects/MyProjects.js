import React from "react";
import "./MyProjects.css";
import { projects } from "../../data/projects";
import { ProjectItem } from "./ProjectItem";

export const MyProjects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h3 className="projects-title">Some projects I have biuld</h3>
        {projects.map((project) => {
          return <ProjectItem key={project.id} item={project} />;
        })}
      </div>
    </section>
  );
};
