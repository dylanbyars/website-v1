import React from 'react';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import './root.scss';

export const Root = ({ children }) => {

    return (
        <div className="container__root">
            
            <Header />
            
            <div className="root__content">
                {children}
            </div>
            
            {/*<Footer />*/}

        </div>
    )
}