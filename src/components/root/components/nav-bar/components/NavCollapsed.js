import React, { Component } from 'react';
import { Link } from 'react-router';

class NavCollapsed extends Component {
  constructor(props) {
    super(props)

    this.state = ({
      menuOpen: false
    })

    this.toggleMenu = this.toggleMenu.bind(this)

  }

  // toggles the menuOpen variable. When the state updates, the whole element is rerendered. 
  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  render() {

    const {
      homeText,
      homePath
    } = this.props.homeLink
    
    const links = this.props.pagesLinks.map(({
      text,
      path
    }) => {
      return (
        <div className="collapsed">
          <Link key={text} to={path} className="nav__link collapsed__display--page">{text}</Link>
        </div>
      )
    })

    return (
      <nav className="nav--collapsed">
        <div className="nav__home--collapsed">
          <div className="menu-icon" onClick={this.toggleMenu}>
            <svg viewBox="0 0 24 24">
              <path fill="#000000" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>
          </div>
        </div>

        <div className="nav__menu--collapsed">
          
          {
            !this.state.menuOpen && 
            <div className="collapsed__display collapsed__display--home">
              <Link className="nav__link collapsed__brand" to={homePath}>DB</Link>
            </div>
          }
          
          {
            this.state.menuOpen && 
            <div className="collapsed__display collapsed__display--links">{links}</div>
          }
          
        </div>
      </nav>
    )
  }
}

export default NavCollapsed;