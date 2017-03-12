import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ReactGA from 'react-ga';

import { HomeLayout } from './components/layouts/HomeLayout';
import { RootLayout } from './components/layouts/RootLayout';
import { Home } from './components/home/Home';
import { Experience } from './components/experience/Experience';
import { Projects } from './components/projects/Projects';
import PeriodicTableApp from './components/projects/components/periodic-table-app/PeriodicTableApp';
import WeatherApp from './components/projects/components/weather-app/WeatherApp';
import CellularAutomaton from './components/projects/components/cellular-automaton-widget/CellularAutomaton';
import { About } from './components/about/About';
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
        <Route path="/" component={HomeLayout}>
          <IndexRoute component={Home} />
          <Route component={RootLayout}>
            <Route path="experience" component={Experience} />
            <Route path="projects" component={Projects}>
              <Route path="periodic-table-app" component={PeriodicTableApp} />
              <Route path="weather-app" component={WeatherApp} />
              <Route path="cellular-automaton-widget" component={CellularAutomaton} />
            </Route>
            <Route path="about" component={About} />
          </Route>
        </Route>
      </Router>

    )
  }
}

render(<SweetWebsite />, document.getElementById('root'));
