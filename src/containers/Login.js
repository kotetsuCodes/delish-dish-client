import React, { Component } from 'react'
import auth from '../helpers/auth'
import TextInput from '../components/Form/TextInput'
import Password from '../components/Form/Password'
import Button from '../components/Button'
import Alert from '../components/Alert/Alert'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      loginMessage: '',
    }
  }

  componentWillMount = () => {
    if (!auth.checkToken(auth.getToken()).error) this.props.history.push('/recipes')
  }

  handleLoginSubmit = (e) => {
    e.preventDefault()

    if (this.state.username.length < 1 || this.state.password.length < 1) {
      this.setState({ loginMessage: 'Username and password must not be blank' })
      return
    }

    fetch(`${process.env.REACT_APP_API_BASE_URL}/auth_user`, {
      headers: new Headers({
        'content-type': 'application/json',
      }),
      method: 'POST',
      body: JSON.stringify({ email: this.state.username, password: this.state.password }),
    })
      .then(response => response.json())
      .then((res) => {
        auth.setToken(res.auth_token)
        this.props.history.push('/recipes')
      })
      .catch((error) => {
        this.setState({
          loginMessage: 'Oops...something isn\'t right',
        })
      })
  }

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value,
      loginMessage: '',
    })
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
      loginMessage: '',
    })
  }

  render() {
    const { loginMessage } = this.state
    return (
      <div>
        <form onSubmit={e => this.handleLoginSubmit(e)}>
          <TextInput onChange={e => this.handleUsernameChange(e)} placeholder="Email Address" />
          <Password
            type="password"
            onChange={e => this.handlePasswordChange(e)}
            placeholder="Password"
          />
          <Button primary style={{ display: 'block', width: '100%' }}>
            Login
          </Button>
        </form>

        {loginMessage.length > 0 ? <Alert alertType="danger">{loginMessage}</Alert> : null}
      </div>
    )
  }
}
