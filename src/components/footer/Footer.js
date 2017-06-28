import React from 'react';

export const Footer = () => {

    return (

        <footer className="footer">

            <h2 className="footer__email">dylan@dylanbyars.com</h2>
            
            <div className="footer__social-media">

                <div className="footer__social-item">
                    <a href="https://www.github.com/dbyars"><i className="fa fa-github fa-3x footer__social-img" alt="Github Logo" /></a>
                </div>

                <div className="footer__social-item">
                    <a href="https://www.codepen.io/dylanbyars"><i className="fa fa-codepen fa-3x footer__social-img" alt="Codepen Logo" /></a>
                </div>

                <div className="footer__social-item">
                    <a href="https://www.linkedin.com/in/dylanbyars"><i className="fa fa-linkedin-square fa-3x footer__social-img" alt="LinkedIn Logo" /></a>
                </div>

            </div>

            <div className="footer__thanks">
                <p>proudly powered by <a className="inline-link" href="https://github.com/dbyars/dylan-byars-v2">hand coding</a></p>
            </div>

        </footer>
    )
}