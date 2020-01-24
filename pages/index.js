import React from 'react';
import Link from 'next/link';
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
        <Link href = "/">
          <a> Home</a>
        </Link>
        <Link href = "/about">
          <a> About</a>
        </Link>
        <Link href = "/portfolio">
          <a> Portfolio</a>
        </Link>
        <Link href = "/blogs">
          <a> Blog</a>
        </Link>
        <Link href = "/cv">
          <a> CV</a>
        </Link>
      </div>
      
    )
  }
}
export default Index;