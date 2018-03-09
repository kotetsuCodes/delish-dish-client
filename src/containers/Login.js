import React, { Component } from 'react'
import TextInput from '../components/Form/TextInput'
import Password from '../components/Form/Password'
import Button from '../components/Button'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  handleLoginSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)

    fetch('http://127.0.0.1:5000/account/login', {
      headers: new Headers({
        'content-type': 'application/json',
      }),
      method: 'POST',
      body: JSON.stringify({ Email: this.state.username, Password: this.state.password }),
    })
      .then((response) => {
        if (response && response.ok) alert('Login successful')
        else alert('Something bad happened')
      })
      .catch((error) => {
        alert('Something really bad happened')
      })
  }

  handleUsernameChange = (e) => {
    console.log(e.target)
    this.setState({
      username: e.target.value,
    })
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <div>username from state: {this.state.username}</div>
        <div>password from state: {this.state.password}</div>

        <form onSubmit={e => this.handleLoginSubmit(e)}>
          <TextInput onChange={e => this.handleUsernameChange(e)} placeholder="Email Address" />
          <Password onChange={e => this.handlePasswordChange(e)} placeholder="Password" />
          <Button>Login</Button>
        </form>
      </div>
    )
  }
}
