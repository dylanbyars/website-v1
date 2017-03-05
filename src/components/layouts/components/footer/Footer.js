import React from 'react';

// icons
import codepenLogo from '../icons/codepen-logo--border.svg';
import githubLogo from '../icons/github-logo.svg';
import linkedinLogo from '../icons/linkedin-logo.svg';

export const Footer = () => {

    return (

        <footer className="footer">

            <p className="footer__email">dylan@dylanbyars.com</p>
            
            <div className="footer__social-media">

                <div className="footer__social-item">
                    <a href="https://www.github.com/dbyars"><img className="footer__social-img" src={githubLogo} alt="Github Logo" /></a>
                </div>

                <div className="footer__social-item">
                    <a href="https://www.codepen.io/dylanbyars"><img className="footer__social-img" src={codepenLogo} alt="Codepen Logo" /></a>
                </div>

                <div className="footer__social-item">
                    <a href="https://www.linkedin.com/in/dylanbyars"><img className="footer__social-img" src={linkedinLogo} alt="LinkedIn Logo" /></a>
                </div>

            </div>

            <div className="footer__thanks">
                <p>proudly powered by <a className="inline-link" href="https://github.com/dbyars/dylan-byars-v2">hand coding</a></p>
            </div>

        </footer>
    )
}