import React from 'react'
import { Route, NavLink, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import Main from './containers/Main'
import colors from './helpers/colors'

export default (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </div>
  </Router>
)
