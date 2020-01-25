import React from 'react';
// import Header from './../components/shared/Header';
import BaseLayout from './../components/layouts/BaseLayout'
// const Index = () => {
//   return(
//     <h1> I am Index Page </h1>
//   )
// }


class Index extends React.Component{

  render(){
    return(
      <BaseLayout>
        <h1> I am Index Page from Class Component</h1>
        
      </BaseLayout>
      
    )
  }
}
export default Index;

// <Header title={'I am a Header component'} > 
//   <h1> I am a header subtitle </h1>
// </Header>