import React from 'react'
import BaseLayout from './../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import auth0Client from '../services/auth0'

class Callback extends React.Component {
  async componentDidMount () {
    await auth0Client.handleAuthentication()
  }

  render () {
    return (
      <BaseLayout>
        <BasePage>
          <h1> You are Logging In ... <br />
          Verifting Login Data...
          </h1>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default Callback
