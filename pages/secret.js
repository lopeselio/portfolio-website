import React from 'react'
import BaseLayout from './../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import withAuth from '../components/hoc/withAuth'

class Secret extends React.Component {
  // renderSecretPage () {
  render () {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1> You are not authenticated. Please Login to gain access.  </h1>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withAuth(Secret)
