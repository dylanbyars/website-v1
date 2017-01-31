import React, { Component } from 'react';

import { Header } from './header';
import { Footer } from './footer';

class Root extends Component {
    render() {
        return (
            <div className="main-layout">
                <Header />
                <div className="app-content">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Root;