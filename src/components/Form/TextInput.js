import styled from 'styled-components'
import theme from '../../helpers/theme'

export default styled.input`
  margin: 5px 0 5px 0;
  width: 97.5%;
  border-radius: 2px;
  border: 1px solid ${theme.mainColors.white};
  outline: none;
  padding: 16px;
  font-size: 1.25rem;

  transition: border 500ms;

  &:focus {
    outline: none;
    border: 1px solid ${theme.mainColors.darkBlue};
  }

  &:hover {
    outline: none;
    border: 1px solid ${theme.mainColors.darkBlue};
  }
`
