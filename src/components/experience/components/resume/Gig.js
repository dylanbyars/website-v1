import React from 'react';

export const Gig = ({ title, company, description }) => {

    const jobDescriptions = description.map(blurb => {
        return <li className="gig__description">{blurb}</li>
    })

    return (
        <div className="gig">
            <div className="gig__title">{title}</div>
            <div className="gig__company">{company}</div>
            <ul className="gig__descriptions">{jobDescriptions}</ul>
        </div>
    )
}