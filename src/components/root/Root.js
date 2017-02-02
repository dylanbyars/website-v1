import React, { Component } from 'react';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';

class Root extends Component {
    render() {
        return (
            <div className="container__root">
                <Header />
                <div className="root__content">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Root;