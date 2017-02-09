import React from 'react';
import { ReactTransitionGroup } from 'react-addons-transition-group';
// import FooterSocial from './components/footer-social/FooterSocial';
import SocialMediaAnimations from './components/footer-social/FooterSocial';
import { Quoter } from './components/quoter/Quoter';
import './footer.scss';

export const Footer = () => {

    return (

        <footer className="container__footer">
            
            <div className="footer__content">

                <ReactTransitionGroup>

                    <SocialMediaAnimations />

                </ReactTransitionGroup>
                
            </div>

        </footer>
    )
}