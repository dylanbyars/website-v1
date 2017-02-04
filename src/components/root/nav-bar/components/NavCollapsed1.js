import React from 'react';
import { Link } from 'react-router';

export const NavCollapsed1 = ({ homeLink, pagesLinks }) => {

    const { homeText, homePath } = homeLink
    
    const links = pagesLinks.map( ({ text, path }) => {
      return (
        <div className="collapsed">
          <Link key={text} to={path} className="nav__link collapsed__display--page">{text}</Link>
        </div>
      )
    })

    return (
      <nav className="nav--collapsed1">
        <div className="nav__menu--collapsed">
          
          <div className="collapsed__display collapsed__display--home">
            <Link className="nav__link collapsed__brand" to={homePath}>DB</Link>
          </div>

          <div className="collapsed__display collapsed__display--links">
            {links}
          </div>
          
        </div>
      </nav>
    )
}