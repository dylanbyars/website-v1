import React, { Component } from 'react';
import { ProjectPreview } from './components/ProjectPreview';
import PeriodicTable from './components/periodic-table-app/PeriodicTable';
import WeatherApp from './components/weather-app/WeatherApp';

class Projects extends Component {

    render() {
        return (
            <div className="container__projects">
                
                <div className="projects__intro">
                    <div className="projects__title">Take a look at some of these projects</div>
                    <div className="projects__blurb">Yarghhhh</div>
                </div>                
                
                <div className="projects__content">
                    <div className="containter__project">
                        <ProjectPreview>
                            <PeriodicTable />
                        </ProjectPreview>
                    </div>
                    <div className="container__project">
                        <ProjectPreview>
                            <WeatherApp />
                        </ProjectPreview>
                    </div>
                </div>

            </div>
        )
    }
}

export default Projects;