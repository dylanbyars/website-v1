import React, { Component } from 'react';
import { Link } from 'react-router';

class ToggleableNav extends Component {
  
  constructor() {
    super()
    
    this.state = {
      menuOpen: false
    }
    
    this.toggleMenu = this.toggleMenu.bind(this)
    this.checkKeycode = this.checkKeycode.bind(this)
  }

  componentDidMount() {
    // listen for the escape key and close menu area if it's heard
    window.addEventListener('keydown', this.checkKeycode)
  }

  componentWillUnmount() {
    // remove the listener for the escape key when the full nav is displayed
    window.removeEventListener('keydown', this.checkKeycode)
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
    
    const links = this.props.navItems.map(({link, path }) => {
      return <Link key={link} className="nav__item--mini" activeClassName="active-link--mini" to={path} onClick={this.toggleMenu}>{link}</Link>
    })
    
    if (this.state.menuOpen) {
      return (
        <div className="toggleable-nav nav-toggle--open">
        
          <span className="nav-toggle__button" onClick={this.toggleMenu}></span>

          <nav className="nav__items--mini">
            {links}
          </nav>
          
          <div className="back-drop" onClick={this.toggleMenu}></div>
        
      </div>
      )
    } else {
      return (
        <div className="toggleable-nav nav-toggle--closed">
        
          <span className="nav-toggle__button" onClick={this.toggleMenu}></span>

          <nav className="nav__items--mini">
            {links}
          </nav>
        
      </div>
      )
    }

  }
}

export default ToggleableNav;