import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Theme from '../../helpers/theme'

export const SideNav = styled.ul`
  margin-top: 50px;
  list-style-type: 'none';
`

export const SideNavItem = styled.li``

export const activeLink = 'active'

export const SideNavLink = styled(NavLink).attrs({
  activeLink,
})`
  background-color: ${Theme.MainColors.Pink};
  padding: 8px;

  &:hover {
    background-color: ${Theme.Blue};
  }

  text-decoration: none;
  color: black;
  height: 100%;
  display: block;

  &:visited {
    color: black;
  }

  &.${activeLink} {
    background-color: ${Theme.MainColors.LighterPink};
  }
`

export const Sidebar = styled.div`
  width: ${props => props.width || '200px'};
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${props => props.fill || Theme.MainColors.Pink};
  height: 100vh;
`
