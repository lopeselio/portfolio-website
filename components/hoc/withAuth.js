import React from 'react'

export default function (Component) {
  return class withAuth extends React.Component {
    render () {
      return <Component {...this.props} />
    }
  }
}
