import React, { Component } from 'react';
import { HomeHeader } from './components/HomeHeader';
import './home.scss';

class Home extends Component {

    render() {

        return <div>HOME WORKING</div>

        return (
            <div className="container__home">

                <div className="home__intro">
                    
                    <HomeHeader />

                </div>

                <div className="home__content">
                    HOME CONTENT
                </div>

            </div>
        )
    }
}

export default Home;