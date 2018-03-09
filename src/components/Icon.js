import styled from 'styled-components'

const iconSize = (size) => {
  if (size === 'small') return '1.0rem'
  else if (size === 'medium') return '1.5rem'
  return '2.0rem'
}

export default styled.i`
  font-size: ${props => iconSize(props.size)};
`
