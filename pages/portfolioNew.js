import React from 'react'
// import Header from './../components/shared/Header'
import BaseLayout from './../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

class PortfolioNew extends React.Component {
  render () {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className='about-page' title='Create New Portfolio'>
        </BasePage>
        {/* <Header/> */}
      </BaseLayout>
    )
  }
}

export default PortfolioNew
