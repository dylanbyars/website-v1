import React from 'react';
import { Link } from 'react-router';

export const LaunchProject = ({ link }) => {

    return (
        <Link className="launch-project" to={link}>
            <span className="launch-project__description">launch</span>
            <svg className="launch-project__icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" fill-rule="evenodd"/>
            </svg>
        </Link>
    )

}