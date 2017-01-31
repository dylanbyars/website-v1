import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Root from './components/root';

import Home from './components/home';
import { About } from './components/about';
import { Experience } from './components/experience';
// import Projects from './components/projects';
import { Contact } from './components/contact'

// import PeriodicTable from './projects/periodic-table-app';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path={"/"} component={Root}>
          <IndexRoute component={Home} />
          <Route path={"about"} component={About} />
          <Route path={"experience"} component={Experience} />
          <Route path={"contact"} component={Contact} />
        </Route>
      </Router>
    )
  }
}

render(<App />, document.getElementById('root'));
