import React from 'react';
import { Gig } from './Gig';
import { resume } from './resume';
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
        <div className="container__experience">{sections}</div>
    )
}