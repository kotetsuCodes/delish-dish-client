import jwtDecode from 'jwt-decode'

export default {
  getToken() {
    return localStorage.getItem('authToken')
  },
  setToken(authToken) {
    localStorage.setItem('authToken', authToken)
  },
  checkToken(token) {
    try {
      console.log('token', token)

      if (token !== undefined) {
        return {}
      }
      // const profile = jwtDecode(token)
      // const { exp } = profile

      // console.log(exp)

      // if (exp * 1000 > new Date().getTime()) {
      // return {
      // ...profile,
      // token,
      // expiresAt: new Date(exp),
      // }
      // }
      return { error: 'Token expired' }
    } catch (e) {
      return { error: 'Server Error' }
    }
  },
}
