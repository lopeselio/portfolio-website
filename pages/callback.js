import React from 'react'
import BaseLayout from './../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

class Callback extends React.Component {
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
