import styled from 'styled-components'
import Theme from '../../Helpers/Theme'

export default styled.input`
  margin: 5px 0 5px 0;
  width: 97.5%;
  border-radius: 2px;
  border: 1px solid ${Theme.MainColors.White};
  outline: none;
  padding: 16px;
  font-size: 1.25rem;

  transition: border 500ms;

  &:focus {
    outline: none;
    border: 1px solid ${Theme.MainColors.DarkBlue};
  }

  &:hover {
    outline: none;
    border: 1px solid ${Theme.MainColors.DarkBlue};
  }
`
