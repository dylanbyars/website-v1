import React from 'react';

export const Gig = ({ title, company, companySite, description }) => {

    const companyTitle = () => {
        if (companySite) {
            return <div className="gig__company"><a href={companySite}>{company}<i className="fa fa-external-link" /></a></div>
        } else {
            return <div className="gig__company">{company}</div>
        }
    }

    const jobDescriptions = description.map(blurb => {
        return <li className="gig__description">{blurb}</li>
    })

    return (
        <div className="gig">
            <div className="gig__header">
                <h4 className="gig__title">{title}</h4>
                {companyTitle()}
            </div>
            <ul className="gig__descriptions">{jobDescriptions}</ul>
        </div>
    )
}