import React from 'react';
import BaseLayout from './../../components/layouts/BaseLayout'
import { withRouter } from 'next/router';
import axios from 'axios';

class Portfolio extends React.Component {
  render() {
    
    return(
      <BaseLayout>
        <h1> I am Portfolio Page </h1>
        <h2>{this.props.router.query.id}</h2>
      </BaseLayout>
    )
  }
} 

export default withRouter(Portfolio);