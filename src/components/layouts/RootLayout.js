import React from 'react';
import Nav from './components/navigation/Nav';
import { Footer } from './components/footer/Footer';

export const RootLayout = ({ children }) => {

    return (
        <div className="root-layout">
            
            <Nav />
            
            <div className="root-layout__content">
                {children}
            </div>
            
            <Footer />

        </div>
    )
}