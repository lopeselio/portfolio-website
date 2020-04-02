import React from 'react'
import BaseLayout from './../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

class Blog extends React.Component {
  render () {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1> I am Blog Page </h1>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default Blog
