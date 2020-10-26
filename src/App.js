import React from 'react';
// import './global.scss'
import history from 'app/history';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import routes from 'routes';
import './global.scss';

export default () => (
  <Router {...{ history }}>
    <Switch>
      {routes.map(({ component, exact = true, path }, idx) => (
        <Route key={idx} {...{ component, exact, path }} />
      ))}
      <Redirect {...{ to: '/' }} />
    </Switch>
  </Router>
);
