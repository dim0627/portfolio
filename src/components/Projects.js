import React, { Component } from 'react';
import Frontmatters from '../frontmatters';
import './Projects.css';

function renderProject(project, i) {
  const asides = (
    <div className="asides">
      {project.sourceUrl &&
        <a href={project.sourceUrl} target="_blank" rel="nofollow">
          <i className="fa fa-github fa-fw" aria-hidden="true"></i>GitHub
        </a>
      }
      {project.relatedUrl &&
        <a href={project.relatedUrl} target="_blank" rel="nofollow">
          <i className="fa fa-link fa-fw" aria-hidden="true"></i>Link
        </a>
      }
    </div>
  );

  return(
    <article key={i} className="project">
      <h3 className="title">{project.title}</h3>
      <div className="description">{project.descriptionShort}</div>
      {asides}
    </article>
  );
}

class Projects extends Component {
  render() {
    return (
      <div>
        <div className="section-projects">
          {Frontmatters.projects.filter((p) => p.index).map(renderProject)}
        </div>
        <div className="readmore">
          <a href="/projects">See All Projects</a>
        </div>
      </div>
    );
  }
}

export default Projects;
