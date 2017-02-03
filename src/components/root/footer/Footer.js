import React from 'react';
import Contact from './contact/Contact';
import Quoter from './quoter/Quoter';
import './footer.scss';
import codepenLogo from './icons/codepen-logo.svg';
import githubLogo from './icons/github-logo.svg';
import linkedinLogo from './icons/linkedin-logo.svg';

export const Footer = () => {
    return (
        <footer>
            <div className="container__footer-content">

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

                </div>
                
                <Contact />

            </div>

            <div className="container__post-footer">

                <Quoter />

                <div className="copyright">&copy; Dylan Byars 2017</div>
            
            </div>

        </footer>
    )
}