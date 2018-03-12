import styled from 'styled-components'
import Theme from '../Helpers/Theme'

function getBackgroundColor(props) {
  if (props.primary) return Theme.Primary.Fill
  else if (props.danger) return Theme.Danger.Fill
  else if (props.info) return Theme.Info.Fill
  else if (props.warning) return Theme.Warning.Fill
  else if (props.success) return Theme.Success.Fill
  return Theme.Default.Fill
}

function getTextColor(props) {
  if (props.primary) return Theme.Primary.Color
  else if (props.danger) return Theme.Danger.Color
  else if (props.info) return Theme.Info.Color
  else if (props.warning) return Theme.Warning.Color
  else if (props.success) return Theme.Success.Color
  return Theme.Default.Color
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
