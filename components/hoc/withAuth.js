import React from 'react'
import BaseLayout from './../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'


export default function (Component) {
  return class withAuth extends React.Component {
    renderProtectedPage() {
      const { isAuthenticated } = this.props.auth
      if (isAuthenticated) {
        return ( <Component {...this.props} />)
      }else {
        return (
          <BaseLayout {...this.props.auth}>
            <BasePage>
              <h1> You are not authenticated. Please Login to gain access.  </h1>
            </BasePage>
          </BaseLayout>
        )
      }
    }
    }
    render() {
      return this.renderProtectedPage()
    }
  }
}
