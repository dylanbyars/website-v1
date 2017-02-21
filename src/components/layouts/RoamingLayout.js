import React from 'react';
import Nav from './components/navigation/Nav';
import { Footer } from './components/footer/Footer';

export const RoamingLayout = ({ children }) => {

    return (
        <div className="root">
            
            <Nav />
            
            <div className="root__content">
                {children}
            </div>
            
            <Footer />

        </div>
    )
}