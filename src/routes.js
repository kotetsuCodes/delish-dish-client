import React from 'react'
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import Recipes from './containers/Recipes'
import ShoppingLists from './containers/ShoppingLists'
import Ingredients from './containers/Ingredients'
import Login from './containers/Login'
import auth from './Helpers/auth'
import {
  Sidebar,
  SideNav,
  SideNavItem,
  SideNavLink,
  activeLink,
} from './components/Sidebar/Sidebar'
import Icon from './components/Icon'

const MainSideBar = (
  <Sidebar width="200px">
    <SideNav>
      <SideNavItem>
        <SideNavLink to="/Recipes" activeClassName={activeLink}>
          <Icon size="small" className="fas fa-book" /> Recipes
        </SideNavLink>
      </SideNavItem>
      <SideNavItem>
        <SideNavLink to="/ShoppingLists">
          <Icon size="small" className="fas fa-book" /> Shopping Lists
        </SideNavLink>
      </SideNavItem>
      <SideNavItem>
        <SideNavLink to="/Ingredients">
          <Icon size="small" className="fas fa-book" /> Ingredients
        </SideNavLink>
      </SideNavItem>
    </SideNav>
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
        <PrivateRoute exact path="/Ingredients" component={Ingredients} sidebar={MainSideBar} />
      </Switch>
    </div>
  </Router>
)
