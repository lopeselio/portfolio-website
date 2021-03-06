import React from 'react'
import BaseLayout from './../components/layouts/BaseLayout'
import { withRouter } from 'next/router'
// import axios from 'axios'

class Test extends React.Component {
  static async getInitialProps ({ query }) {
    const testId = query.id

    return { testId }
  }

  render () {
    const { testId } = this.props
    return (
      <BaseLayout {...this.props.auth}>
        <h1>I am Test Page with ID of {testId}</h1>
      </BaseLayout>
    )
  }
}

export default withRouter(Test)
