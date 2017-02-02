import React, { Component } from 'react';
import SkillChart from './skill-chart/SkillChart';

class Home extends Component {
    render() {
        return (
            <div className="container__home">
                <SkillChart />
            </div>
        )
    }
}

export default Home;