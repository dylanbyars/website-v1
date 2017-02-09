import React, { Component } from 'react';
import { NavFull } from './components/NavFull';
// import NavCollapsed from './components/NavCollapsed';
import { NavCollapsed1 } from './components/NavCollapsed1'
import './nav-bar.scss';

class NavBar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      navBarType: null,
      homeLink: {
        homeText: 'Dylan Byars',
        homePath: '/'
      },
      pagesLinks: [{
        text: 'Experience',
        path: "/experience"
      }, {
        text: 'Projects',
        path: "/projects"
      }]
    }
    
    this.handleWindowResize = this.handleWindowResize.bind(this)
    
  }

  handleWindowResize() {
    if (window.innerWidth < 500) {
      this.setState({navBarType: 'collapsed'})
    } else {
      this.setState({navBarType: 'full'})
    }
  }
  
  componentDidMount() {
    this.handleWindowResize()
    window.addEventListener('resize', this.handleWindowResize)
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize)
  }

  render() {

    const { homeLink, pagesLinks } = this.props
    
    if (this.state.navBarType === 'collapsed') {
      return (
        <nav>
          <NavCollapsed1 homeLink={this.state.homeLink} pagesLinks={this.state.pagesLinks} />
        </nav>
      )
    } else {
      return (
        <nav>
          <NavFull homeLink={this.state.homeLink} pagesLinks={this.state.pagesLinks} />
        </nav>
      )
    }
    
  }
}

export default NavBar;