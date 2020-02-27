webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/shared/Header.js":
/*!*************************************!*\
  !*** ./components/shared/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

// import React from 'react'
// import Link from 'next/link'
// import '../../styles/main.scss'
// class Header extends React.Component {
//   render () {
//     return (
//       <>
__jsx(Link, {
  href: "/"
}, __jsx("a", {
  style: {
    fontSize: '20px'
  }
}, " Home")); //         <Link href='/about'>
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





var Example = function Example(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var toggle = function toggle() {
    return setIsOpen(!isOpen);
  };

  return __jsx("div", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    color: "light",
    light: true,
    expand: "md"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavbarBrand"], {
    href: "/"
  }, "Elio Jordan Lopes"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavbarToggler"], {
    onClick: toggle
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
    isOpen: isOpen,
    navbar: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    className: "mr-auto",
    navbar: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, __jsx(Link, {
    href: "/"
  }, __jsx("a", null, " Home"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    href: "https://github.com/reactstrap/reactstrap"
  }, "GitHub"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavbarText"], null, "Simple Text"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Example);

/***/ })

})
//# sourceMappingURL=index.js.b94352c5e5de02305525.hot-update.js.map