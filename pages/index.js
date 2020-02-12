import React from 'react';
// import Header from './../components/shared/Header';
import BaseLayout from './../components/layouts/BaseLayout';
// import SuperComponent from './../components/SuperComponents';
// import axios from 'axios';
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Index extends React.Component{
  render(){
    debugger;
 
    const {initialData, userData} = this.props;
    return(
      <BaseLayout>
        <Button color="danger">Danger!</Button>
      </BaseLayout>
      
    )
  }
}
export default Index;



// const axios = require('axios').default;

// class Index extends SuperComponent{

//   static async getInitialProps() {
//     let userData = {};
//     try{
//       const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
//       userData = response.data;
        
      

//     }catch(err) {console.error(err);}
//     // console.log('I am get getInitialProps');
   
    

//     return{initialData: [1,2,3,4], userData: userData};
//   }
//   constructor(props) {
//     // debugger;
//     super(props);
//     // debugger;

//     this.state = {
//       title: 'I am Index Page'
//     }
//     console.log('constructor');
//   }

  // componentDidMount() {
  //   console.log('componentDidMount');
  // }

  // componentDidUpdate() {
  //   console.log();
  //   console.log('componentDidUpdate');
  // }

  // componentWillUnmount() {
  //   console.log('componentWillUnmount');
  // }

  // updateTitle() {
  //   this.setState({title: 'I am Updated Index Page'})
  // }

  // render(){
  //   debugger;
    // const {title} = this.state;
    // const initialData = this.props.initialData;
//     const {initialData, userData} = this.props;
//     return(
//       <BaseLayout>
        
//       </BaseLayout>
      
//     )
//   }
// }
// export default Index;

{/* <Header title={'I am a Header component'} > 
  <h1> I am a header subtitle </h1>
</Header> */}