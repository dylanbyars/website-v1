import React from 'react';

import SkillChart from './skill-chart/SkillChart';
import { ProjectPreview } from './projects/ProjectPreview';
import { Resume } from './resume/Resume';
import { Footer } from './footer/Footer';

export const Home = () => {

    return (
        <div className="home">

            <header className="home__header">

                <div className="home__db">Dylan Byars</div>

                <div className="home__hustle">frontend web developer</div>
                
            </header>

            <div className="home__content">

                <section className="section__skill-chart">
                    
                    <p className="page__sub-header">Skills</p>
                    
                    <SkillChart />

                </section>
                
                <section className="section__projects">

                    <p className="page__sub-header">Projects</p>

                    <div className="projects__nav">

                        <ProjectPreview projectLink="/periodic-table-app" projectName="Periodic Table App" codeLink="https://github.com/dbyars/dylan-byars-v2/blob/master/src/components/projects/components/periodic-table-app/PeriodicTableApp.js">
                            <p>A periodic table web app that connects users with elemental data from Wikipedia through a slick user interface.</p>
                            <p>Looks best on desktops or mobile screens flipped to landscape mode.</p>
                        </ProjectPreview>

                        <ProjectPreview projectLink="/weather-app" projectName="Weather App" codeLink="https://github.com/dbyars/dylan-byars-v2/blob/master/src/components/projects/components/weather-app/WeatherApp.js">
                            <p>Learn the metric system with this minimalistic weather app that shows you the current weather for a given location in metric and imperial units.</p>
                            <p>Get a head start on learning that funky new Metric system the world keeps raving about.</p>
                        </ProjectPreview>

                        <ProjectPreview projectLink="/cellular-automaton-widget" projectName="Cellular Automaton Widget" codeLink="https://github.com/dbyars/dylan-byars-v2/blob/master/src/components/projects/components/cellular-automaton-widget/CellularAutomaton.js">
                            <p>Cellular automata are interesting.</p>
                            <p>Check it out.</p>
                        </ProjectPreview>

                    </div>

                </section>

                

                <p className="page__sub-header">Experience</p>

                <Resume />

            </div>

            <Footer />

        </div>
    )
}