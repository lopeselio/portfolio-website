import React from 'react';
import BaseLayout from './../../components/layouts/BaseLayout'
import { withRouter } from 'next/router';
import axios from 'axios';

class Test extends React.Component {
  static async getInitialProps(context) {
    
    return{};
  }

  render() {     
    return(
      <BaseLayout>
        <h1>I am Test Page</h1>
      </BaseLayout>
    )
  }
} 

export default withRouter(Test);