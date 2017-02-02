import React from 'react';
import NavigationBar from './navigation-bar/NavigationBar';
import './header.scss';

export const Header = () => {
    return (
        <header className="container__header">
            <div className="header__banner">DYLAN'S WEBSITE</div>
            <NavigationBar />
        </header>
    )
}