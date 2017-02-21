import React from 'react';
import { ExperienceHeader } from './components/ExperienceHeader';
import { resume } from './resume';
import { Gig } from './components/Gig';
import SkillChart from './components/skill-chart/SkillChart';

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
        <div className="experience">

            <ExperienceHeader />

            <div className="experience__content">

                <div className="content__skill-chart">
                    <SkillChart />
                </div>

                <div className="content__sections">{sections}</div>
            
            </div>
            
        </div>
    )
}