import React, { Component } from 'react';
import debounce from 'lodash/debounce';
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
        // adding a debounce function to the event listener so that the window resize event isn't called constantly while the window's actually being resized.
        window.addEventListener('resize', debounce(this.onResize, 300, {leading: true, trailing: false}))
    }

    componentWillUnmount() {
        // remove event listener when component's unmounted when returning to the home page
        window.removeEventListener('resize', debounce(this.onResize, 150, {leading: true, trailing: false}))
    }

    onResize(e) {
        console.log('resized from Nav element')
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