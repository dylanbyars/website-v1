import React from 'react';
import { resume } from './resume';
import { Gig } from './components/Gig';
import SkillChart from './components/skill-chart/SkillChart';
import './experience.scss';

export const Experience = () => {

    const sections = resume.map(section => {

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
        <div className="container__experience">
            <div className="experience__intro">Blurb</div>
            <div className="experience__skill-chart">
                <SkillChart />
            </div>
            <div className="experience__sections">{sections}</div>
        </div>
    )
}