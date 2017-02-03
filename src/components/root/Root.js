import React, { Component } from 'react';
import NavigationBar from './navigation-bar/NavigationBar';
import { Footer } from './footer/Footer';
import './root.scss';

class Root extends Component {
    render() {
        return (
            <div className="container__root">
                <NavigationBar />
                <div className="root__content">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Root;