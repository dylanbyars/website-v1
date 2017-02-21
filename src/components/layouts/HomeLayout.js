import React from 'react';
import { Footer } from './components/footer/Footer';

export const HomeLayout = ({ children }) => {

    return (
        <div className="home-layout">
            {children}
        </div>
    )
}