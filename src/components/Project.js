import React from 'react';
import PropTypes from 'prop-types';

import './Project.css';

const Project = ({title, descriptionShort, relatedUrl, sourceUrl}) => (
  <article className="project">
    <h3 className="title">{title}</h3>
    <div className="description">{descriptionShort}</div>
    {
      (sourceUrl || relatedUrl) &&
      <div className="asides">
        {sourceUrl &&
          <a href={sourceUrl} target="_blank" rel="nofollow">
            <i className="fa fa-github fa-fw" aria-hidden="true"></i>GitHub
          </a>
        }
        {relatedUrl &&
          <a href={relatedUrl} target="_blank">
            <i className="fa fa-link fa-fw" aria-hidden="true"></i>Link
          </a>
        }
      </div>
    }
  </article>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  descriptionShort: PropTypes.element.isRequired,
  relatedUrl: PropTypes.string,
  sourceUrl: PropTypes.string,
};

export default Project;
