import React from 'react'
import styled from 'styled-components'
import CheckedIcon from '../Icons/CheckedIcon'
import UnCheckedIcon from '../Icons/UnCheckedIcon'

function getFontSize(size) {
  switch (size) {
    case 'small':
      return '0.8rem'
    case 'medium':
      return '1rem'
    case 'large':
      return '1.2rem'
    default:
      return ''
  }
}

const CheckboxStyle = styled.div`
  padding-left: 10px;
  margin: 5px 0 5px 0;
`

const CheckboxLabelStyle = styled.label`
  padding-left: 10px;
  font-size: ${props => getFontSize(props.size)};
`

export default class extends React.Component {
  state = {
    isChecked: false,
  }

  handleCheckToggle = (e, onClickAction) => {
    this.setState({ isChecked: !this.state.isChecked })
    onClickAction()
  }

  render() {
    const {
      id, labelDisplay, size, onClickAction,
    } = this.props

    return (
      <div
        onClick={e => this.handleCheckToggle(e, onClickAction)}
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {this.state.isChecked ? (
          <CheckedIcon width={24} height={24} />
        ) : (
          <UnCheckedIcon width={24} height={24} />
        )}
        <CheckboxLabelStyle size={size} htmlFor={id}>
          {labelDisplay}
        </CheckboxLabelStyle>
      </div>
    )
  }
}
