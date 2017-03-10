import React from 'react';
import { Link } from 'react-router';

export const FullNav = ({ navItems }) => {
    
    const links = navItems.map(({link, path }) => {
        if (link !== 'Home') {
            return <Link key={link} className="nav__item--maxi" activeClassName="active-link--maxi" to={path}>{link}</Link>
        }
    })
    
    return (
        <nav className="full-nav">
            <div className="full-nav__links">
                {links}
            </div>
            <div className="full-nav__home">
                <Link className="home__link" to="/">Dylan Byars</Link>
            </div>
        </nav>
    )
}