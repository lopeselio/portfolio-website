import React from 'react'
// import Header from './../components/shared/Header'
import BaseLayout from './../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import withAuth from '../components/hoc/withAuth'
import PortfolioCreateForm from '../components/portfolios/PortfolioCreateForm'

class PortfolioNew extends React.Component {
  render () {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className='portfolio-create-page' title='Create New Portfolio'>
          <PortfolioCreateForm />
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withAuth('siteOwner')(PortfolioNew)
