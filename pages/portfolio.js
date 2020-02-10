import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';

class Portfolios extends React.Component {
  static async getInitialProps() {
    let posts = [];
    try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      posts = response.data;
    }catch(err) {
      console.error(err);
    }
    return{posts};
  }
  render() {
    debugger;
    console.log(this.props);
    return(
      <BaseLayout>
      <h1> I am Portfolio Page </h1>
      </BaseLayout>
    )
  }
} 

export default Portfolios;