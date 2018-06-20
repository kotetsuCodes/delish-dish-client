import React from 'react'
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import Recipes from './containers/Recipes'
import ShoppingLists from './containers/ShoppingLists'
import Ingredients from './containers/Ingredients'
import Login from './containers/Login'
import auth from './helpers/auth'
import { Sidebar, NavItem } from './components/Sidebar/Sidebar'
import CloudIcon from './components/Icons/CloudIcon'

const MainSideBar = (
  <Sidebar width="200px">
    <NavItem linkTo="/Recipes" linkText="Dishes" icon={<CloudIcon width={24} height={24} />} />
    <NavItem
      linkTo="/ShoppingLists"
      linkText="Shopping Lists"
      icon={<CloudIcon width={24} height={24} />}
    />
    <NavItem
      linkTo="/Ingredients"
      linkText="Ingredients"
      icon={<CloudIcon width={24} height={24} />}
    />
  </Sidebar>
)

const Body = styled.div`
  margin-left: 200px;
`

const PrivateRoute = ({ component: Component, sidebar, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (!auth.checkToken(auth.getToken()).error ? (
        <div>
          {sidebar},
          <Body>
            <Component {...props} />
          </Body>
        </div>
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
        <Route exact path="/Login" component={Login} history />
        <PrivateRoute exact path="/Recipes" component={Recipes} sidebar={MainSideBar} />
        <PrivateRoute exact path="/ShoppingLists" component={ShoppingLists} sidebar={MainSideBar} />
        {/* <PrivateRoute exact path="/Ingredients" component={Ingredients} sidebar={MainSideBar} /> */}
      </Switch>
    </div>
  </Router>
)
