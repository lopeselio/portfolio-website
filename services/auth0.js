import auth0 from 'auth0-js'

class Auth0 {
  constructor () {
    this.auth0 = new auth0.WebAuth({
      domain: 'dev-fee5qd3s.auth0.com',
      clientId: 'PRojVaD1nApgzyFqr90GZGI9kNxIj561',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openid'
    })
    this.login = this.login.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
  }

  handleAuthentication () {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
        // history.replace('/home')
      } else if (err) {
        // history.replace('/home')
        console.log(err)
      }
    })
  }

  login () {
    this.auth0.authorize()
  }
}

const auth0Client = new Auth0()

export default auth0Client
