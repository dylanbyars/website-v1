import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Root from './components/root/Root';
import Home from './components/home/Home';
import { Experience } from './components/experience/Experience';
import Projects from './components/projects/Projects';

class SweetWebsite extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path={"/"} component={Root}>
          <IndexRoute component={Home} />
          <Route path={"experience"} component={Experience} />
          <Route path={"projects"} component={Projects} />
        </Route>
      </Router>
    )
  }
}

render(<SweetWebsite />, document.getElementById('root'));
