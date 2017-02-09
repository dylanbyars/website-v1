import React from 'react';
import { Link } from 'react-router';

export const NavFull = ({ homeLink, pagesLinks }) => {

  const { homeText, homePath } = homeLink

  const links = pagesLinks.map(({ text, path }) => {
    return (
      <div className="nav__item--full" key={text}>
        <Link to={path} className="nav__link pages__link--full">{text}</Link>
      </div>
    )
  })

  return (
    <nav className="nav--full">
      <div className="nav__home--full">
        <div className="nav__item">
          <Link to={homePath} className="nav__link home__link">{homeText}</Link>
        </div>
      </div>
      <div className="nav__pages--full">{links}</div>
    </nav>
  )
}