import React, { Component } from 'react';
import { Link } from 'react-router';
import CellularAutomaton from './components/CellularAutomaton';

class Home extends Component {

    render() {

        return (
            <div className="home">

            <div className="home__background">
                <CellularAutomaton />
            </div>

            <div className="home__title">
                <div className="home__db">Dylan Byars</div>
                <div className="home__hustle">frontend web developer</div>
            </div>

            <div className="home__blurb">
                <p>My name's Dylan and you should hire me</p>
                <p>Now please</p>
            </div>

            <div className="home__navigation">
                <Link className="" activeClassName="" to="/experience">Experience</Link>
                <Link className="" activeClassName="" to="/projects">Projects</Link>
                <Link className="" activeClassName="" to="/about">About</Link>
            </div>

            </div>
        )
    }
}

export default Home;