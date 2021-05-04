import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './views/Home'

import { routes } from './settings'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={routes.home} component={Home} />
    </Switch>
  </BrowserRouter>
)

export default Routes
