import styled from 'styled-components'
import theme from '../helpers/theme'

function getBackgroundColor(props) {
  if (props.primary) return theme.primary.fill
  else if (props.danger) return theme.danger.fill
  else if (props.info) return theme.info.fill
  else if (props.warning) return theme.warning.fill
  else if (props.success) return theme.success.fill
  return theme.default.fill
}

function getTextColor(props) {
  if (props.primary) return theme.primary.color
  else if (props.danger) return theme.danger.color
  else if (props.info) return theme.info.color
  else if (props.warning) return theme.warning.color
  else if (props.success) return theme.success.color
  return theme.default.color
}

function getPadding(props) {
  if (props.extraSmall) return '4px'
  else if (props.small) return '8px'
  else if (props.medium) return '10px'
  else if (props.large) return '14px'
  return '16px'
}

export default styled.button`
  cursor: pointer;
  font-size: 1rem;
  margin: 5px;
  background-color: ${props => getBackgroundColor(props)};
  color: ${props => getTextColor(props)};
  padding: ${props => getPadding(props)};
  border: none;
  border-radius: 4px;

  &:focus {
    outline: none;
  }
`
