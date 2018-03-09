import React from 'react'
import styled from 'styled-components'

const Test = styled.input`
  position: absolute;
  left: -9999px;

  + label {
    position: relative;
    margin: 50px;
    display: inline-block;
    height: 2em;
    width: 4em;
    background-color: #fff;
    border-radius: 2em;
    border: 1px solid #ccc;
    cursor: pointer;
    transition: background-color 0.2s ease-out;

    &:after {
      content: '';
      background-color: #fff;
      position: absolute;
      display: block;
      height: 100%;
      width: 50%;
      border-radius: 2em;
      border: 1px solid #999;
      box-shadow: 0 1px 1px 0px #999;
      top: -1px;
      left: -1px;
      transition: left 0.2s ease-out;
    }
  }

  &:checked + label {
    background-color: #53d76a;

    &:after {
      left: calc(50% - 1px);
    }
  }
`

const toggleStyles = `
#checkbox {
	position: absolute;
	left: -9999px;
	
	+ label {
		position: relative;
		margin: 50px;
		display: inline-block;
		height: 2em;
		width: 4em;
		background-color: #FFF;
		border-radius: 2em;
		border: 1px solid #CCC;
		cursor: pointer;
		transition: background-color 0.2s ease-out;
		
		&:after {
			content: '';
			background-color: #FFF;
			position: absolute;
			display: block;
			height: 100%;
			width: 50%;
			border-radius: 2em;
			border: 1px solid #999;
			box-shadow: 0 1px 1px 0px #999;
			top: -1px;
			left: -1px;
			transition: left 0.2s ease-out;
		}
	}
	
	&:checked + label {
		background-color: #53D76A;
		
		&:after {
			left: calc(50% - 1px);
		}
	}
}
`

export default class Toggle extends React.Component {
  render() {
    const { id } = this.props
    return (
      <div id="toggles">
        {/* <style dangerouslySetInnerHTML={{ __html: toggleStyles }} /> */}
        <Test id="checkbox" type="checkbox" />
        <label htmlFor="checkbox1" />
      </div>
    )
  }
}
