import auth0 from 'auth0-js'
import Cookies from 'js-cookie'
// import jwt from 'jsonwebtoken'

class Auth0 {
  constructor () {
    this.auth0 = new auth0.WebAuth({
      domain: 'dev-fee5qd3s.auth0.com',
      clientID: 'PRojVaD1nApgzyFqr90GZGI9kNxIj561',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openid profile'
    })
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
  }

  handleAuthentication () {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult)
          // history.replace('/home')
          resolve()
        } else if (err) {
          // history.replace('/home')
          reject(err)
          console.log(err)
        }
      })
    })
  }

  setSession (authResult) {
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime())
    // localStorage.setItem('access_token', authResult.accessToken)
    // localStorage.setItem('id_token', authResult.idToken)
    // localStorage.setItem('expires_at'.expiresAt)
    Cookies.set('user', authResult.idTokenPayload)
    Cookies.set('jwt', authResult.idToken)
    Cookies.set('expiresAt', expiresAt)
  }

  login () {
    this.auth0.authorize()
  }

  logout () {
    Cookies.remove('user')
    Cookies.remove('jwt')
    Cookies.remove('expiresAt')

    this.auth0.logout({
      returnTo: '',
      clientID: 'PRojVaD1nApgzyFqr90GZGI9kNxIj561'
    })
  }

  isAuthenticated () {
    const expiresAt = Cookies.getJSON('expiresAt')
    // console.log(new Date().getTime() < expiresAt)
    return new Date().getTime() < expiresAt
  }

  clientAuth () {
    return this.isAuthenticated()
  }

  serverAuth (req) {
    if (req.headers.cookie) {
      const expiresAtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('expiresAt='))

      // const cookies = req.handlers.cookie
      // console.log(cookies)
      // const splittedCookies = cookies.split(';')
      // console.log(splittedCookies)
      // const expiresAtCookie = splittedCookies.find(c => c.trim().startsWith('expiresAt='))
      // console.log(expiresAtCookie)
      // const expiresAtArray = expiresAtCookie.split('=')
      // console.log(expiresAtArray)
      // const expiresAt = expiresAtArray[1]
      // console.log(expiresAt)

      if (!expiresAtCookie) { return undefined }

      const expiresAt = expiresAtCookie.split('=')[1]

      return new Date().getTime() < expiresAt
    }
  }
}

const auth0Client = new Auth0()

export default auth0Client
