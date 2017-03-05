import React from 'react';

export const About = () => {
    return (
        <div className="about page">

            <div className="page__sub-header">About this site</div>
            <div className="about__section">
                <p>Stay tuned for a detailed write up all about putting this website together.</p>
            </div>

            <div className="page__sub-header">About me</div>
            <div className="about__section">
                <div className="about__img">
                    <img src="https://i.imgur.com/wDSPIvj.jpg" alt="Dylan"/>
                    <p className="img-caption">* Me posing with world-renowned forehead model Gla Bella (right).</p>
                </div>
                <p>Thanks for checking out my site!</p>
                <br/>
                <p>I'm an aspiring junior frontend web developer itching to join a team of pixel-pushers in the Northern Virginia/Washington D.C. area.</p>
                <br/>
                <p>If you think I'd make a nice addition to your team, please <a className="inline-link" href="mailto:dylan@dylanbyars.com">send me a note!</a></p>
            </div>

            {/*<div className="about__write-up page__blurb">
                <p>Oh boy did I sure learn a whole heap building this hear website. I'll tell you hwhat!</p>
            </div>*/}

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