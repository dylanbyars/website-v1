import React from 'react';
import NavBar from './components/nav-bar/NavBar';
import { Footer } from './components/footer/Footer';
import './root.scss';

export const Root = ({ children }) => {

    return (
        <div className="container__root">
            
            <NavBar />
            
            <div className="root__content">
                {children}
            </div>
            
            {/*<Footer />*/}

        </div>
    )
}