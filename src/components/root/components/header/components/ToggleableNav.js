import React, { Component } from 'react';
import { Link } from 'react-router';
import './toggleable-nav.scss';

class ToggleableNav extends Component {
  
  constructor() {
    super()
    
    this.state = {
      menuOpen: false,
      navItems: [
        {link: 'Home',
        path: '/'},
        {link: 'Experience',
        path: '/experience'},
        {link: 'Projects',
        path: '/projects'},
        {link: 'About',
        path: '/about'}
      ]
    }
    
    this.toggleMenu = this.toggleMenu.bind(this)
    
  }
  
  toggleMenu() {
    this.setState({menuOpen: !this.state.menuOpen})
  }
  
  render() {
    
    const navItems = this.state.navItems.map(({link, path }) => {
      return <Link key={link} className="nav__item" to={path} onClick={this.toggleMenu}>{link}</Link>
    })
    
    if (this.state.menuOpen) {
      return (
        <div className="nav-toggle nav-toggle--open">
        
          <span className="nav-toggle__button" onClick={this.toggleMenu}></span>

          <nav className="nav__items">
            {navItems}
          </nav>
          
          <div className="back-drop" onClick={this.toggleMenu}></div>
        
      </div>
      )
    } else {
      return (
        <div className="nav-toggle nav-toggle--closed">
        
          <span className="nav-toggle__button" onClick={this.toggleMenu}></span>

          <nav className="nav__items">
            {navItems}
          </nav>
        
      </div>
      )
    }

  }
}

export default ToggleableNav;