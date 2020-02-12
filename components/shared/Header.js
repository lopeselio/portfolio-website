import React from 'react';
import Link from 'next/link';
import {Link as NextLink} from '../../routes'

import '../../styles/main.scss'


class Header extends React.Component {
  render() {
    debugger;
    const title = this.props.title; 
    return(
      <React.Fragment>
        <Link href = "/">
          <a style={{'fontSize':'20px'}}> Home</a>
        </Link>
        <Link href = "/about">
          <a> About</a>
        </Link>
        <Link href = "/portfolios">
          <a> Portfolio</a>
        </Link>
        <Link href = "/blogs">
          <a> Blog</a>
        </Link>
        <Link href = "/cv">
          <a> CV</a>
        </Link>
        {/* <NextLink route='test' params={{id:'2'}}>Test 2</NextLink>
        <NextLink route='test' params={{id:'5'}}>Test 5</NextLink> */}

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