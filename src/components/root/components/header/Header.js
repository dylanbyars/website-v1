import React from 'react';
import ToggleableNav from './components/ToggleableNav';
import './header.scss';

export const Header = () => {

    return (
        <div className="container__header">
            <ToggleableNav />
        </div>
    )
}