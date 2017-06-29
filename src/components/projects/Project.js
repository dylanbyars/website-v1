import React from 'react';
import ToggleableNav from './components/ToggleableNav';

export const Project = ({ children }) => {

    const navItems = [
        { link: 'home', path: '/' }
    ]

    return (
        <div>
            
            <ToggleableNav navItems={navItems} />

            { children }

        </div>
    )
}