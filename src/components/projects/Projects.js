import React from 'react';
import { ProjectPreview } from './components/ProjectPreview'

export const Projects = ({ children }) => {

    return (
        <div className="projects page">

            { !children && 
            <div className="page__header">
                <div className="page__title">Projects</div>
            </div> }

            { children && <div className="project">{children}</div> }

            <div className="projects__nav">

                <ProjectPreview projectLink="/projects/periodic-table-app" projectName="Periodic Table App" codeLink="https://github.com/dbyars/dylan-byars-v2/blob/master/src/components/projects/components/periodic-table-app/PeriodicTableApp.js">
                    <p>A periodic table web app that connects users with elemental data from Wikipedia through a slick user interface.</p>
                    <p>Looks best on desktops or mobile screens flipped to landscape mode.</p>
                </ProjectPreview>

                <ProjectPreview projectLink="/projects/weather-app" projectName="Weather App" codeLink="https://github.com/dbyars/dylan-byars-v2/blob/master/src/components/projects/components/weather-app/WeatherApp.js">
                    <p>Learn the metric system with this minimalistic weather app that shows you the current weather for a given location in metric and imperial units.</p>
                    <p>Get a head start on learning that funky new Metric system the world keeps raving about.</p>
                </ProjectPreview>

                <ProjectPreview projectLink="/projects/cellular-automaton-widget" projectName="Cellular Automaton Widget" codeLink="https://github.com/dbyars/dylan-byars-v2/blob/master/src/components/projects/components/cellular-automaton-widget/CellularAutomaton.js">
                    <p>Cellular automata are interesting.</p>
                    <p>Check it out.</p>
                </ProjectPreview>

            </div>

        </div>
    )
}