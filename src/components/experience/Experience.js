import React from 'react';
import SkillChart from './components/skill-chart/SkillChart';
import { Resume } from './components/resume/Resume';

export const Experience = () => {

    return (
        <div className="experience page">

            <div className="page__header">
                <div className="page__title">Experience</div>
            </div>

            <div className="page__sub-header">Skills</div>
            <span className="experience__skill-chart"><SkillChart /></span>

            <div className="page__sub-header">Resumé</div>
            <Resume />
            
        </div>
    )
}