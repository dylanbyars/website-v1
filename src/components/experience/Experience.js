import React from 'react';
import { resume } from './resume';
import { Gig } from './components/Gig';
import SkillChart from './components/skill-chart/SkillChart';

export const Experience = () => {

    const experienceSections = resume.map(section => {

        const gigs = section.gigs.map(
            ({ title, company, description }) => <Gig title={title} company={company} description={description} />)

        return (
            <div className="experience__section">
                <div className="experience__category">{section.category}</div>
                <div className="experience__gigs">{gigs}</div>
            </div>
        )
    })

    return (
        <div className="experience page">

            <div className="page__header">
                <div className="page__title">Experience</div>
            </div>

            <div className="experience__skill-chart">
                <div className="experience__sub-header">Skills</div>
                <SkillChart />
            </div>

            <div className="experience__resume">
                <div className="experience__sub-header">Resume</div>
                <div className="experience__sections">{experienceSections}</div>
            </div>
            
        </div>
    )
}