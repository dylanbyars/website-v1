import React from 'react';
import { Link } from 'react-router';

export const ProjectPreview = ({ projectLink, projectName, codeLink, children }) => {

    return (
        <div className="project-preview">

            <Link className="project-preview__link" activeClassName="project-preview__link--active" to={projectLink}>{projectName}<i className="fa fa-external-link"></i></Link>
            
            <div className="project-preview__description">
                {children}
            </div>

            <a href={codeLink} className="project-preview__code-link">Code<i className="fa fa-external-link"></i></a>
            
        </div>
    )

}