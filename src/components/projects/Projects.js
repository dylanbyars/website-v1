import React, { Component } from 'react';
import { Link } from 'react-router';
// import { ProjectPreview } from './components/ProjectPreview';
// import PeriodicTable from './components/periodic-table-app/PeriodicTable';
// import WeatherApp from './components/weather-app/WeatherApp';

class Projects extends Component {
    constructor() {
        super()

        this.state = {
            pageTitle: 'Projects',
            projectOpen: false
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(newTitle) {
        this.setState({pageTitle: newTitle})
    }

    render() {

        return (
            <div className="projects page">

                <div className="page__header">
                    <div className="page__title">{this.state.pageTitle}</div>
                </div>
                
                <Link to="/projects/periodic-table-app" onClick={() => this.handleClick('Periodic Table App')}>Periodic Table App</Link>

                <Link to="/projects/weather-app" onClick={() => this.handleClick('Weather App')}>Weather App</Link>

                <div className="project">
                    {this.props.children}
                </div>

            </div>
        )
    }
}

export default Projects;