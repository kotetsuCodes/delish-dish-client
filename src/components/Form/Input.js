import styled from 'styled-components'
import Theme from '../../Helpers/Theme'

export default styled.input`
  margin: 5px 0 5px 0;
  width: 97.5%;
  border-radius: 4px;
  border: 1px solid rgb(220, 220, 220);
  outline: none;
  padding: 10px;
  font-size: 0.8rem;

  transition: border 300ms, box-shadow 300ms;

  &:focus {
    border: 1px solid rgb(24, 126, 148);
    box-shadow: 0 0 0 2px rgba(24, 126, 148, 0.2);
  }
`
