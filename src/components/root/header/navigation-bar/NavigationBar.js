import React, { Component } from 'react';
import { Link } from 'react-router';
import './navigation-bar.scss';

class NavigationBar extends Component {

  render() {

    return (
      <nav className="container__navbar">
        <div className="navbar__item">
          <Link to="/" className="navbar__link" activeClassName={"navbar__link--active"}>Home</Link>
        </div>
        <div className="navbar__item">
          <Link to="/experience" className="navbar__link" activeClassName="navbar__link--active">Experience</Link>
        </div>
        <div className="navbar__item">
          <Link to="/projects" className="navbar__link" activeClassName="navbar__link--active">Projects</Link>
        </div>
        <div className="navbar__item">
          <Link to="/contact" className="navbar__link" activeClassName="navbar__link--active">Contact</Link>        
        </div>
      </nav>
    );
  }
}

export default NavigationBar;