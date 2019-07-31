import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import NotfoundPage from './components/not-found-page/not-found-page';
import AutoApp from './AutoApp';

const router = (
  <Router>
    <Switch>
      <Route path="/" component={AutoApp} />
      <Route component={NotfoundPage} />
    </Switch>
  </Router>
);

ReactDOM.render(router, document.getElementById('root'));
