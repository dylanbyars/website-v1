import React from 'react';

export const Gig = ({ title, company, description }) => {

    const jobDescriptions = description.map(blurb => {
        return <div className="gig__description">{blurb}</div>
    })

    return (
        <div className="gig">
            <div className="gig__title">{title}</div>
            <div className="gig__company">{company}</div>
            <div className="gig__descriptions">{jobDescriptions}</div>
        </div>
    )
}