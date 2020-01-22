import React from 'react'
// const Index = () => {
//   return(
//     <h1> I am Index Page </h1>
//   )
// }


class Index extends React.Component{

  render(){
    return(
      React.createElement(
        "h1",
        {
          className:"title"
        },
        "I am Index Page from Class Component. Currently in progress "
      )
      
    )
  }
}
export default Index;