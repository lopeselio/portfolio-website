import React from 'react';
// import Header from './../components/shared/Header';
import BaseLayout from './../components/layouts/BaseLayout'
import SuperComponent from './../components/SuperComponents'
// const Index = () => {
//   return(
//     <h1> I am Index Page </h1>
//   )
// }


class Index extends SuperComponent{

  static getInitialProps() {
    console.log('I am get getInitialProps');
    return{};
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