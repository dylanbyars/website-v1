import React from 'react';
import { Link } from 'react-router';

export const Projects = ({ children }) => {

    return (
        <div className="projects page">

            { !children && 
            <div className="page__header">
                <div className="page__title">Projects</div>
            </div> }

            { children && <div className="project">{children}</div> }

            <div className="projects__nav">

                <div className="project-preview">

                    <Link className="project-preview__link" activeClassName="project-preview__link--active" to="/projects/periodic-table-app">Periodic Table App</Link>
                    
                    <div className="project-preview__description">
                        <p>A periodic table web app that connects users with elemental data from Wikipedia through a slick user interface.</p>
                        <p>Looks best on desktops or mobile screens flipped to landscape mode.</p>
                    </div>

                    <a href="https://github.com/dbyars/dylan-byars-v2/blob/master/src/components/projects/components/periodic-table-app/PeriodicTableApp.js" className="project-preview__code-link">Code</a>
                    
                </div>
                
                <div className="project-preview">

                    <Link className="project-preview__link" activeClassName="project-preview__link--active" to="/projects/weather-app">Weather App</Link>
                    
                    <div className="project-preview__description">
                        <p>Learn the metric system with this minimalistic weather app that shows you the current weather for a given location in metric and imperial units.</p>
                        <p>Get a head start on learning that funky new Metric system the world keeps raving about.</p>
                    </div>

                    <a href="https://github.com/dbyars/dylan-byars-v2/blob/master/src/components/projects/components/weather-app/WeatherApp.js" className="project-preview__code-link">Code</a>
                
                </div>

                <div className="project-preview">

                    <Link className="project-preview__link" activeClassName="project-preview__link--active" to="/projects/cellular-automaton-widget">Cellular Automaton Widget</Link>
                    
                    <div className="project-preview__description">
                        <p>Cellular automata are interesting.</p>
                        <p>Check it out.</p>
                    </div>

                    <a href="https://github.com/dbyars/dylan-byars-v2/blob/master/src/components/projects/components/cellular-automaton-widget/CellularAutomaton.js" className="project-preview__code-link">Code</a>
                
                </div>

            </div>

        </div>
    )
}