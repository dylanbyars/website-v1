import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { HomeLayout } from './components/layouts/HomeLayout';
import { RoamingLayout } from './components/layouts/RoamingLayout';
import Home from './components/home/Home';
import { Experience } from './components/experience/Experience';
import Projects from './components/projects/Projects';
import PeriodicTableApp from './components/projects/components/periodic-table-app/PeriodicTableApp';
import WeatherApp from './components/projects/components/weather-app/WeatherApp';import { About } from './components/about/About';
import './styles/main.scss';

class SweetWebsite extends Component {
  render() {
    return (

      <Router history={browserHistory}>
        <Route path="/" component={HomeLayout}>
          <IndexRoute component={Home} />
          <Route component={RoamingLayout}>
            <Route path="experience" component={Experience} />
            <Route path="projects" component={Projects}>
              <Route path="periodic-table-app" component={PeriodicTableApp} />
              <Route path="weather-app" component={WeatherApp} />
            </Route>
            <Route path="about" component={About} />
          </Route>
        </Route>
      </Router>

    )
  }
}

render(<SweetWebsite />, document.getElementById('root'));
