import React from 'react';
import ToggleableNav from './components/ToggleableNav';
import { Footer } from './components/footer/Footer';

export const Root = ({ children }) => {

    return (
        <div className="container__root">
            
            <ToggleableNav />
            
            <div className="root__content">
                {children}
            </div>
            
            <Footer />

        </div>
    )
}