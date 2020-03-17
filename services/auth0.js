import auth0 from 'auth0-js'
import Cookies from 'js-cookie'

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
    this.handleAuthentication = this.handleAuthentication.bind(this)
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

  logout () {
    Cookies.remove('user', authResult.idTokenPayload)
    Cookies.remove('jwt', authResult.idToken)
    Cookies.remove('expiresAt', expiresAt)

    this.auth0.logout({
      returnTo: '',
      clientID: 'PRojVaD1nApgzyFqr90GZGI9kNxIj561'
    })
  }

  login () {
    this.auth0.authorize()
  }
}

const auth0Client = new Auth0()

export default auth0Client
