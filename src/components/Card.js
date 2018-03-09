import styled from 'styled-components'

export const Card = styled.div`
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  border-radius: ${props => props.borderRadius || '6px'};
  background-color: ${props => props.backgroundColor};
  padding: 15px 30px;
  color: ${props => props.textColor};
`

export const CardContent = styled.div``

export const CardTitle = styled.div`
  color: ${props => props.textColor || '#FFFFFF'};
  font-size: 1rem;
  font-weight: 400;
  margin: 10px 0 10px 0;
`
