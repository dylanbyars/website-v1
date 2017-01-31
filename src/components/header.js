import React from 'react';
import { Link } from 'react-router';

export const Header = () => {
    return (
        <header>
            <div className="header__banner">DYLAN'S WEBSITE</div>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/experience"}>Experience</Link>
                <Link to={"/contact"}>Contact</Link>
            </nav>
        </header>
    )
}