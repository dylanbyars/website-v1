import React, { Component } from 'react';
import SkillChart from './skill-chart/SkillChart';

class Home extends Component {
    render() {
        return (
            <div className="container__home">
                <div className="home__blurb">
                </div>
                <div className="home__skill-chart">
                    <SkillChart />
                </div>
            </div>
        )
    }
}

export default Home;