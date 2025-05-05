import React from 'react';
import '../css/ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      {project.images && project.images.length > 0 && (
        <img src={project.images[0]} alt={project.projectName} className="project-image" />
      )}
      <div className="project-content">
        <h3>{project.projectName}</h3>
        <p>{project.projectDescription}</p>
        <p><strong>Technologies:</strong> {project.technologiesUsed}</p>
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">View on GitHub</a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
