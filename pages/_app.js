import React from 'react'
import App, { Container } from 'next/app'
// Stylings
import 'bootstrap/dist/css/bootstrap.min.css'
import './../styles/main.scss'
import auth0 from './../services/auth0'

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}
    const isAuthenticated = process.browser ? auth0.clientAuth() : auth0.serverAuth(ctx.req)
    // console.log(isAuthenticated)

    // let isAuthenticated;

    // if (process.browser) {
    //   isAuthenticated = 'clientAuth();'
    // } else {
    //   isAuthenticated = 'serverAuth();'
    // }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    const auth = { isAuthenticated }
    return { pageProps, auth }
  }

  render () {
    const { Component, pageProps, auth } = this.props
    return (
      <Container>
        <Component {...pageProps} auth={auth} />
      </Container>
    )
  }
}
