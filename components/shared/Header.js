import React from 'react';
import Link from 'next/link'

import '../../styles/main.scss'


class Header extends React.Component {
  render() {
    debugger;
    const title = this.props.title; 
    return(
      <React.Fragment>
        <p>{title}</p>
        {this.props.children}
        <p className='customClass'>I am styled p element</p>
        <p className='customClassFromFile'>I am styled p element</p>
        <Link href = "/">
          <a style={{'fontSize':'20px'}}> Home</a>
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
        <style jsx>
          {
            `
            a {
              font-size: 20px
            };
            .customClass {
              color: red;
              font-size: 20px;
            }
            `
          }
        </style>

      </React.Fragment>

    )
  }
}
export default Header;