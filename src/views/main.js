import React, { Component } from 'react';
import { Link } from 'react-router';

class Main extends Component {
    render() {
        return (
            <div>
                <nav>
                    <li><Link to="/" activeClassName="active">Home</Link></li>
                </nav>
                <div className="container__app">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Main;