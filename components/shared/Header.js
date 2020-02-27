// import React from 'react'
// import Link from 'next/link'

// import '../../styles/main.scss'

// class Header extends React.Component {
//   render () {
//     return (
//       <>
// <Link href='/'>
//   <a style={{ fontSize: '20px' }}> Home</a>
// </Link>
//         <Link href='/about'>
//           <a> About</a>
//         </Link>
//         <Link href='/portfolios'>
//           <a> Portfolio</a>
//         </Link>
//         <Link href='/blogs'>
//           <a> Blog</a>
//         </Link>
//         <Link href='/cv'>
//           <a> CV</a>
//         </Link>
//         {/* <NextLink route='test' params={{id:'2'}}>Test 2</NextLink>
//         <NextLink route='test' params={{id:'5'}}>Test 5</NextLink> */}

//         <style jsx>
//           {
//             `
//             a {
//               font-size: 20px
//             };
//             .customClass {
//               color: red;
//               font-size: 20px;
//             }
//             `
//           }
//         </style>

//       </>

//     )
//   }
// }
// export default Header

import React from 'react'
import Link from 'next/link'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // NavLink
  // NavbarText
} from 'reactstrap'

const BsNavLink = (props) => {
  const { route, title } = props

  return (
    <Link href={route}>
      <a className='nav-link'> {title} </a>
    </Link>
  )
}

export default class Example extends React.Component {
  constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    return (
      <div>
        <Navbar color='light' light expand='md'>
          <NavbarBrand className='title-brand' href='/'>DevELIOper</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <BsNavLink route='/' title='Home' />
              </NavItem>
              <NavItem>
                <BsNavLink route='/about' title='About' />
              </NavItem>
              <NavItem>
                <BsNavLink route='/portfolios' title='Portfolio' />
              </NavItem>
              <NavItem>
                <BsNavLink route='/blogs' title='Blog' />
              </NavItem>
              <NavItem>
                <BsNavLink route='/cv' title='CV' />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
