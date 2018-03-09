import styled from 'styled-components'

function getFontSize(props) {
  if (props.extraSmall) return '1.5rem'
  else if (props.small) return '2rem'
  else if (props.medium) return '2.5rem'
  else if (props.large) return '3rem'
  return '3.75rem'
}

function getFontWeight(props) {
  if (props.extraSmall) return '400'
  else if (props.small) return '500'
  else if (props.medium) return '600'
  else if (props.large) return '700'
  return '800'
}

export default styled.div`
  margin: 10px 0 10px 0;
  font-size: ${props => getFontSize(props)};
  font-weight: ${props => getFontWeight(props)};
`
