import React, { Component } from 'react';
import { Link } from 'react-router';

export const Home = () => {

    return (
        <div className="home">

            <div className="home__navigation">

                <Link className="home__nav-link" activeClassName="home__nav-link--active" to="experience">Experience</Link>

                <Link className="home__nav-link" activeClassName="home__nav-link--active" to="/projects">Projects</Link>

                <Link className="home__nav-link" activeClassName="home__nav-link--active" to="/about">About</Link>

            </div>

            <div className="home__db">Dylan Byars</div>

            <div className="home__hustle">frontend web developer</div>

        </div>
    )
}