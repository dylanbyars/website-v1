import React, { Component } from 'react';
import { FullNav } from './components/FullNav';
import ToggleableNav from './components/ToggleableNav';

class Nav extends Component {
    constructor() {
        super()

        this.state = {
            nav: null,
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

        this.onResize = this.onResize.bind(this)
    }

    componentDidMount() {
        if (window.outerWidth > 450) {
            this.setState({nav: 'maxi'})
        } else {
            this.setState({nav: 'mini'})
        }
        window.addEventListener('resize', this.onResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize)
    }

    onResize(e) {
        if (e.target.outerWidth > 450) {
            if (this.state.nav !== 'maxi') {
                this.setState({nav: 'maxi'})
            }
        } else {
            if (this.state.nav !== 'mini') {
                this.setState({nav: 'mini'})
            }
        }
    }

    render() {
        if (this.state.nav === 'mini') {
            return (
                <ToggleableNav navItems={this.state.navItems}/>
            )
        } else {
            return (
                <FullNav navItems={this.state.navItems}/>
            )
        }
        
    }
}

export default Nav;