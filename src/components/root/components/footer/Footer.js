import React from 'react';
// import { Quoter } from './components/quoter/Quoter';
// icons
import codepenLogo from './icons/codepen-logo--border.svg';
import githubLogo from './icons/github-logo.svg';
import linkedinLogo from './icons/linkedin-logo.svg';
import emailIcon from './icons/email-icon.svg';

export const Footer = () => {

    return (

        <footer className="container__footer">
            
            <div className="footer__social-media">

                <div className="footer__social-item">
                    <a className="footer__social-link" href="https://www.github.com/dbyars"><img className="footer__social-img" src={githubLogo} alt="Github Logo" /></a>
                </div>

                <div className="footer__social-item">
                    <a className="footer__social-link"href="https://www.codepen.io/dylanbyars"><img className="footer__social-img" src={codepenLogo} alt="Codepen Logo" /></a>
                </div>

                <div className="footer__social-item">
                    <a className="footer__social-link" href="https://www.linkedin.com/in/dylanbyars"><img className="footer__social-img" src={linkedinLogo} alt="LinkedIn Logo" /></a>
                </div>

                <div className="footer__social-item">
                    <a href="mailto:dylan@dylanbyars.com?subject=Hi, Dylan!&body=Can you ubild me a website?">
<img className="footer__social-img" src={emailIcon} alt="Holler" /></a>
                </div>

            </div>

        </footer>
    )
}