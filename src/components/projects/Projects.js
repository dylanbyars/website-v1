import React, { Component } from 'react';
import { Link } from 'react-router';
import { ProjectsHeader } from './components/ProjectsHeader';
// import { ProjectPreview } from './components/ProjectPreview';
// import PeriodicTable from './components/periodic-table-app/PeriodicTable';
// import WeatherApp from './components/weather-app/WeatherApp';

class Projects extends Component {

    render() {
        return (
            <div className="projects">

                <ProjectsHeader />             
                
                <Link to="/projects/periodic-table-app">Periodic Table App</Link>

                <Link to="/projects/weather-app">Weather App</Link>

                <div className="project">
                    {this.props.children}
                </div>

            </div>
        )
    }
}

export default Projects;