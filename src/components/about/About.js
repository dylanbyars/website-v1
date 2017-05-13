import React from 'react';

export const About = () => {
    return (
        <div className="about page">
            <div className="page__sub-header">About me</div>
            <div className="about__section">
                <div className="about__text">
                    <p>Thanks for checking out my site!</p>
                    <br/>
                    <p>I'm a frontend web developer currently working in the Northern Virginia / Washington D.C. area.</p>
                </div>
                <img className="about__img" src="http://i.imgur.com/5pxNy4u.jpg" alt="Dylan"/>
            </div>
        </div>
    )
}