import React from 'react';
import { Link } from 'react-router';

export const ProjectPreview = ({ projectLink, projectName, codeLink, children }) => {

    return (
        <div className="project-preview">

            <Link className="project-preview__link" activeClassName="project-preview__link--active" to={projectLink}>{projectName}</Link>
            
            <div className="project-preview__description">
                {children}
            </div>

            <a href={codeLink} className="project-preview__code-link">Code</a>
            
        </div>
    )

}