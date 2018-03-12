import styled from 'styled-components'
import Theme from '../../Helpers/Theme'

function getBackgroundColor(alertType) {
  switch (alertType.toLowerCase()) {
    case 'info':
      return Theme.Info.Fill
    case 'success':
      return Theme.Success.Fill
    case 'warning':
      return Theme.Warning.Fill
    case 'danger':
      return Theme.Danger.Fill
    default:
      return Theme.Info.Fill
  }
}

export default styled.div`
  background-color: ${props => getBackgroundColor(props.alertType)};
  color: ${Theme.Primary.Color};
  padding: 32px;
  border-radius: 4px;
  margin: 2px;
  opacity: 0.75;
`
