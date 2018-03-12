import React from 'react'
import styled from 'styled-components'
import Theme from '../../Helpers/Theme'

const SelectStyle = styled.select`
  margin: 5px 0 5px 0;
  font-size: 1.25rem;
  display: 'block';
  padding: 16px;
  border-radius: 2px;
  border: 1px solid ${Theme.MainColors.White};
  outline: none;
  width: 100%;
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

const OptionStyle = styled.option`
  padding: 16px;
`

export default class Select extends React.Component {
  render() {
    const { options, onChange } = this.props
    return (
      <div>
        <SelectStyle onChange={onChange}>
          {options.map(option => <OptionStyle value={option.value}>{option.display}</OptionStyle>)}
        </SelectStyle>
      </div>
    )
  }
}
