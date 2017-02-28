import React from 'react';

export const About = () => {
    return (
        <div className="about">

            <div className="page__header">
                <div className="page__title">About</div>
            </div>

            <div className="about__blurb">
                <img className="about__img" src="https://i.imgur.com/wDSPIvj.jpg" alt="Dylan"/>
                <p>Thanks for checking out my site!</p>
                <br/>
                <p>I'm an aspiring junior frontend web developer itching to join a team of pixel-pushers in the Northern Virginia/Washington D.C. area.</p>
                <br/>
                <p>If you think I'd make a nice addition to your team, please <a href="mailto:dylan@dylanbyars.com">send me a note!</a></p>
            </div>

            {/*<div className="about__blogs">
                <p className="blogs-blurb">Here's a collection of some of the web development blogs I read regularly. Hopefully you'll enjoy them, too!</p>
                <ul className="blog-list">
                    <li>
                        <a href="https://www.css-tricks.com">CSS Tricks</a>
                        <div className="blog-description"></div>
                    </li>
                    <li>
                        <a href="https://www.medium.com/javascript-scene">Javascript Scene on Medium</a>
                        <div className="blog-description"></div>
                    </li>
                    <li>
                        <a href="https://scotch.io/">Scotch IO</a>
                        <div className="blog-description"></div>
                    </li>
                    <li><a href="https://www.kirupa.com/">Kirupa</a>
                    <div className="blog-description"></div></li>
                    <li><a href="http://webfieldmanual.com/">Web Field Manual</a>
                    <div className="blog-description"></div></li>
                </ul>
            </div>*/}

            {/*Include this somehow => https://www.youtube.com/watch?v=xJMD5R8stRc*/}
        </div>
    )
}