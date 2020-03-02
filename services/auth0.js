import auth0 from 'auth0-js'

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "dev-fee5qd3s.auth0.com",
    clientId: "d9aoCo41TUAQ9Zxc7AP2QQlj1Ps7aNOg",
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid'
  
  })

  login() {
    this.auth0.authorize();
  }
}