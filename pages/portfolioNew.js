import React from 'react'
// import Header from './../components/shared/Header'
import BaseLayout from './../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

class About extends React.Component {
  render () {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className='about-page' title='I am About Page'>
        </BasePage>
        {/* <Header/> */}
      </BaseLayout>
    )
  }
}

export default About
