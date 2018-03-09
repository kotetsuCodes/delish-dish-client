import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'

const CheckboxStyle = styled.div`
  padding-left: 16px;
  margin: 5px 0 5px 0;
`

const CheckboxLabelStyle = styled.label`
  padding-left: 16px;
  margin: 5px;
`

const checkIcon = styled.i`
  font-size: 2rem;
`

export default class extends React.Component {
  render() {
    const {
      id, labelDisplay, isChecked, size, handleClick,
    } = this.props

    console.log('checkbox re-rendering')
    console.log(`checkbox is ${isChecked}`)

    return (
      <div onClick={e => handleClick(e)}>
        {isChecked ? (
          <Icon size={size} className="far fa-check-square" />
        ) : (
          <Icon size={size} className="far fa-square" />
        )}
        <CheckboxLabelStyle htmlFor={id}>{labelDisplay}</CheckboxLabelStyle>
      </div>
    )
  }
}
