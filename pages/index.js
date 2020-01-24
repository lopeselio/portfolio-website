import React from 'react';
import Header from './../components/shared/Header'
// const Index = () => {
//   return(
//     <h1> I am Index Page </h1>
//   )
// }


class Index extends React.Component{

  render(){
    return(
      <div>
        <h1> I am Index Page from Class Component</h1>
        <Header/> 
      </div>
      
    )
  }
}
export default Index;