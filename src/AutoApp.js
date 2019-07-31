import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GlobalHeader from './components/global-header/global-header';
import ListingPage from './components/listing-page/listing-page';
import AboutPage from './components/about-page/about-page';

import 'bootstrap/dist/css/bootstrap.css';
import './auto-app.css';

function AutoApp() {
  return (
    <div className="AutoApp">
      <GlobalHeader />
      <Switch>
        <Route path="/listing" component={ListingPage} />
        <Route path="/about" component={AboutPage} />
        {/* set listing page to default */}
        <Route component={ListingPage} />
      </Switch>
    </div>
  );
}

export default AutoApp;
