import React, { Component } from 'react';
import { Link } from 'react-router';

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
        path: '/about'},
        // maybe make this so it jumps to the Holla section that'll be in the bottom of each page in the footer.
        // {link: 'Contact',
        // path: '#'}
      ]
    }
    
    this.toggleMenu = this.toggleMenu.bind(this)
    this.checkKeycode = this.checkKeycode.bind(this)
  }

  componentDidMount() {
    // listen for the escape key and close menu area if it's heard
    window.addEventListener('keydown', this.checkKeycode)
  }

  // Closes the menu area if user hits the escape key when the menu is open
  checkKeycode(e) {
    if (e.code === 'Escape' && this.state.menuOpen) {
      this.toggleMenu()
    }
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