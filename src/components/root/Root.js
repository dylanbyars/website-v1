import React, { Component } from 'react';
import NavBar from './nav-bar/NavBar';
import { Footer } from './footer/Footer';
import './root.scss';

class Root extends Component {
    render() {
        return (
            <div className="container__root">
                <NavBar />
                <div className="root__content">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Root;