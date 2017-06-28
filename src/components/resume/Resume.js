import React from 'react';
import { Gig } from './Gig';
import { cv } from './cv';

export const Resume = () => {
    const resume = cv.map((section, index) => {

        const gigs = section.gigs.map(({ title, company, companySite, description }) => <Gig title={title} company={company} companySite={companySite} description={description} />)

        return (
            <div className="resume__section">
                <h3 className="section__category">{section.category}</h3>
                <div className="section__gigs">{gigs}</div>
            </div>
        )
    })
    return <div className="resume">{resume}</div>
}