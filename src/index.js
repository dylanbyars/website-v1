import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Main from './views/main'
import Home from './components/home';

render(
  <Router history={browserHistory}>
    <Route component={Main}>
      <Route path="/" component={Home} />
    </Route>
  </Router>,
  document.getElementById('root')
);
