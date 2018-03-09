import React from 'react'
import { Route, NavLink, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import Main from './containers/Main'
import Login from './containers/Login'
import auth from './helpers/auth'
import colors from './helpers/colors'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (!auth.checkToken(auth.getToken()).error ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      ))
    }
  />
)

export default (
  <Router>
    <div>
      <Switch>
        <Route exact path="/Login" component={Login} />
        <PrivateRoute exact path="/" component={Main} />
      </Switch>
    </div>
  </Router>
)
