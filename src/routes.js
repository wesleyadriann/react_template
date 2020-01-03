import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './views/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
