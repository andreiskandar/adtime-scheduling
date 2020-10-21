import React from 'react'
// import './global.scss'
import history from 'app/history'
import { Redirect, Route, Router as Router, Switch } from 'react-router-dom'
import routes from 'routes'


export default () => (
  <Router {...{history}}>
    <Switch>
      {routes.map(({ component, exact = true, path, }) => (
        <Route {...{ component, exact, path, }} />
      ))}
      <Redirect {...{ to: '/', }} />
    </Switch>
  </Router>
)