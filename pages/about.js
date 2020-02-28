import React from 'react'
// import Header from './../components/shared/Header'
import BaseLayout from './../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

class About extends React.Component {
  render () {
    return (
      <BaseLayout>
        <BasePage className='base-page'>
          <h1> I am About Page </h1>
        </BasePage>
        {/* <Header/> */}
      </BaseLayout>
    )
  }
}

export default About
