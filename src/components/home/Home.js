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

                <div className="home__foreground">

                    <div className="home__navigation">

                        <div className="home__nav-item">
                            <Link className="home__nav-link" activeClassName="home__nav-link--active" to="experience">Experience</Link>
                        </div>

                        <div className="home__nav-item">
                            <Link className="home__nav-link" activeClassName="home__nav-link--active" to="/projects">Projects</Link>
                        </div>

                        <div className="home__nav-item">
                            <Link className="home__nav-link" activeClassName="home__nav-link--active" to="/about">About</Link>
                        </div>

                    </div>

                    <div className="home__db">Dylan Byars</div>

                    <div className="home__hustle">frontend web developer</div>

                </div>

            </div>
        )
    }
}

export default Home;