import React from 'react';
// import Header from './../components/shared/Header';
import BaseLayout from './../components/layouts/BaseLayout';
import SuperComponent from './../components/SuperComponents';
import axios from 'axios';

// const axios = require('axios').default;

class Index extends SuperComponent{

  static getInitialProps() {
    // console.log('I am get getInitialProps');
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(
      (data) => console.log(data)
    )
    .catch(err => console.error(err))

    return{initialData: [1,2,3,4]};
  }
  constructor(props) {
    // debugger;
    super(props);
    // debugger;

    this.state = {
      title: 'I am Index Page'
    }
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log();
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  updateTitle() {
    this.setState({title: 'I am Updated Index Page'})
  }

  render(){
    debugger;
    const {title} = this.state;
    const initialData = this.props.initialData;
    return(
      <BaseLayout>
        <h1 className='fromPage'> I am Index Page from Class Component</h1>
        <h2>{title}</h2>
        <button onClick = { () => this.updateTitle() }> Change Title</button>
      </BaseLayout>
      
    )
  }
}
export default Index;

{/* <Header title={'I am a Header component'} > 
  <h1> I am a header subtitle </h1>
</Header> */}