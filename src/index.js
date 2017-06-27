import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import ReactGA from 'react-ga';

import { Home } from './components/Home';
import { Project } from './components/projects/Project';
import PeriodicTableApp from './components/projects/components/periodic-table-app/PeriodicTableApp';
import WeatherApp from './components/projects/components/weather-app/WeatherApp';
import './styles/main.scss';

class SweetWebsite extends Component {

  componentDidMount() {
    // Initialize the google analytics element
    ReactGA.initialize('UA-83304510-1');
  }

  // a function that fires a tracking event to the google analytics element when the route changes
  logPageView() {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }

  render() {

    return (

      <Router history={browserHistory} onUpdate={this.logPageView}>
        <Route path="/" component={Home} />
        <Route component={Project}>
          <Route path="periodic-table-app" component={PeriodicTableApp} />
          <Route path="weather-app" component={WeatherApp} />
        </Route>
      </Router>

    )
  }
}

render(<SweetWebsite />, document.getElementById('root'));
