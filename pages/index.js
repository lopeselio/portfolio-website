import React from 'react'
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
        <a href="/blogs">Blog</a>
        <a href="/about">About</a>
        <a href="/portfolios">Portfolio</a>
        <a href="/Blog">Blog</a>
        <a href="/cv">CV</a>
      </div>
      
    )
  }
}
export default Index;