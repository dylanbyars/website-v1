import React from 'react';
import SkillChart from './components/skill-chart/SkillChart';
import { Resume } from './components/resume/Resume';

export const Experience = () => {

    return (
        <div className="experience page">

            <div className="page__header">
                <div className="page__title">Experience</div>
            </div>

            <div className="experience__blurb page__blurb">
                <p>Take a look at what's been keeping me busy. If you think I'd make a nice fit for your team, <a className="inline-link" href="mailto:dylan@dylanbyars.com">send me a note!</a></p>
            </div>

            <div className="experience__sub-header">Skills</div>
            <div className="experience__skill-chart">
                <SkillChart />
            </div>

            <div className="experience__sub-header">Resume</div>
            <div className="experience__resume">
                <Resume />
            </div>

            {/*<div className="experience__sub-header">Volunteer</div>
            <div className="experience__volunteer">
                EMT
            </div>*/}
            
        </div>
    )
}