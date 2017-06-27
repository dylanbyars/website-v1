import React from 'react';

export const Gig = ({ title, company, companySite, description }) => {

    const companyTitle = () => {
        if (companySite) {
            return <div><a className="gig__company" href={companySite}>{company}</a></div>
        } else {
            return <div className="gig__company">{company}</div>
        }
    }

    const jobDescriptions = description.map(blurb => {
        return <li className="gig__description">{blurb}</li>
    })

    return (
        <div className="gig">
            <div className="gig__title">{title}</div>
            {companyTitle()}
            <ul className="gig__descriptions">{jobDescriptions}</ul>
        </div>
    )
}