import React from 'react'
import BaseLayout from './../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import withAuth from '../components/hoc/withAuth'
import { getSecretData } from '../actions'
class Secret extends React.Component {
  // renderSecretPage () {
  static getInitialProps () {
    const superSecretValue = 'Super Secret Value'
    return { superSecretValue }
  }

  state = {
    secretData: []
  }

  async componentDidMount () {
    const secretData = await getSecretData()
    const sercretData = res.data
    this.setState({
      sercretData
    })
  }

  displaySecretData () {
    const { secretData } = this.state
    if (secretData && secretData.length > 0) {
      return secretData.map((data, index) => {
        return (
          <div key={index}>
            <p> {data.title} </p>
            <p> {data.description} </p>
          </div>
        )
      })
    }
    return null
  }

  render () {
    const { superSecretValue } = this.props
    // console.log(this.state)
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1> I am Secret Page </h1>
          <p> Secret Content Here </p>
          <h2> {superSecretValue} </h2>
          { this.displaySecretData() }
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withAuth(Secret)
