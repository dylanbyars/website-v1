import React, { Component } from 'react';
import { Link } from 'react-router';
import './navigation-bar.scss';

class NavigationBar extends Component {

  render() {

    return (
      <nav className="container__navbar">
        <div className="navbar__items">
          <div className="navbar__item navbar__home">
            <Link to="/" className="navbar__link">Dylan Byars</Link>
          </div>
          <div className="navbar__pages">
            <div className="navbar__item">
              <Link to="/experience" className="navbar__link" activeClassName="navbar__link--active">Experience</Link>
            </div>
            <div className="navbar__item navbar__page">
              <Link to="/projects" className="navbar__link" activeClassName="navbar__link--active">Projects</Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;