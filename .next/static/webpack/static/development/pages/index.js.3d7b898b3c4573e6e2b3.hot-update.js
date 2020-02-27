webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/shared/Header.js":
/*!*************************************!*\
  !*** ./components/shared/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Example; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;
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




var BsNavLink = function BsNavLink(props) {
  var route = props.route,
      title = props.title;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: route
  }, __jsx("a", {
    className: "nav-link"
  }, " ", title, " "));
};

var Example =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Example, _React$Component);

  function Example(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Example);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Example).call(this, props));
    _this.toggle = _this.toggle.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Example, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Navbar"], {
        className: "port-navbar port-default",
        color: "light",
        light: true,
        expand: "md"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavbarBrand"], {
        className: "port-navbar-brand",
        href: "/"
      }, "DevELIOper"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavbarToggler"], {
        onClick: this.toggle
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Collapse"], {
        isOpen: this.state.isOpen,
        navbar: true
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"], {
        className: "ml-auto",
        navbar: true
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
        className: "port-navbar-item"
      }, __jsx(BsNavLink, {
        route: "/",
        title: "Home"
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
        className: "port-navbar-item"
      }, __jsx(BsNavLink, {
        route: "/about",
        title: "About"
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
        className: "port-navbar-item"
      }, __jsx(BsNavLink, {
        route: "/portfolios",
        title: "Portfolio"
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], null, __jsx(BsNavLink, {
        route: "/blogs",
        title: "Blog"
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavItem"], null, __jsx(BsNavLink, {
        route: "/cv",
        title: "CV"
      }))))));
    }
  }]);

  return Example;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.3d7b898b3c4573e6e2b3.hot-update.js.map