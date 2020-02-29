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
  NavItem
  // NavLink
  // NavbarText
} from 'reactstrap'

const BsNavLink = (props) => {
  const { route, title } = props

  return (
    <Link href={route}>
      <a className='nav-link port-navbar-link'> {title} </a>
    </Link>
  )
}

const Login = () => {
  return (
    <span className='nav-link port-navbar-link clickable'> Login </span>
  )
}

const Logout = () => {
  return (
    <span className='nav-link port-navbar-link clickable'> Logout</span>
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
        <Navbar className='port-navbar port-default absolute' color='transparent' dark expand='md'>
          <NavbarBrand className='port-navbar-brand' href='/'>DevELIOper</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem className='port-navbar-item'>
                <BsNavLink route='/' title='Home' />
              </NavItem>
              <NavItem className='port-navbar-item'>
                <BsNavLink route='/about' title='About' />
              </NavItem>
              <NavItem className='port-navbar-item'>
                <BsNavLink route='/portfolios' title='Portfolio' />
              </NavItem>
              <NavItem className='port-navbar-item'>
                <BsNavLink route='/blogs' title='Blog' />
              </NavItem>
              <NavItem className='port-navbar-item'>
                <BsNavLink route='/cv' title='CV' />
              </NavItem>
              <NavItem className='port-navbar-item'>
                <Login />
              </NavItem>
              <NavItem className='port-navbar-item'>
                <Logout />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
