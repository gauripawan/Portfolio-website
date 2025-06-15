import React from 'react'
import "./ProjectCard.css"
import { LuExternalLink, LuGithub } from "react-icons/lu";

const ProjectCard = ({ project }) => {
  return (
    <div className="info-card">
      <img src={project.imageSrc} alt={project.title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-description">{project.description}</p>

        <div className="tech-stack">
          {project.techStack.map((tech, idx) => (
            <div key={idx} className="tech-box">{tech}</div>
          ))}
        </div>
      </div>

      <div className="card-buttons">
        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
          <div className="icon-btn"><LuExternalLink size="23px" /></div>
        </a>

        {project.githubLink && (
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <div className="icon-btn">
              <LuGithub size="23px" />
            </div>
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
