import React, { Component } from 'react';
import PeriodicTable from './periodic-table-app/PeriodicTable';
import WeatherApp from './weather-app/WeatherApp';
import './projects.scss';

class Projects extends Component {

    render() {
        return (
            <div className="container__projects">
                <div className="project">
                    <PeriodicTable />
                </div>
                <div className="project">
                    <WeatherApp />
                </div>
            </div>
        )
    }
}

export default Projects;