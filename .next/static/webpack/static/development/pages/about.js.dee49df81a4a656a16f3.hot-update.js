webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./components/layouts/BaseLayout.js":
/*!******************************************!*\
  !*** ./components/layouts/BaseLayout.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/Header */ "./components/shared/Header.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var BaseLayout = function BaseLayout(props) {
  var className = props.className,
      children = props.children,
      isAuthenticated = props.isAuthenticated,
      user = props.user;
  var headerType = props.headerType || 'default';
  return __jsx("div", {
    className: "layout-container"
  }, headerType === 'index' && __jsx(_shared_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "port-nav-index",
    isAuthenticated: isAuthenticated,
    user: user
  }), headerType === 'default' && __jsx(_shared_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "port-nav-default",
    isAuthenticated: isAuthenticated,
    user: user
  }), __jsx("main", {
    className: "cover ".concat(className)
  }, __jsx("div", {
    className: "wrapper"
  }, children)));
};

/* harmony default export */ __webpack_exports__["default"] = (BaseLayout);

/***/ }),

/***/ "./components/shared/Header.js":
/*!*************************************!*\
  !*** ./components/shared/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Example; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_auth0__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/auth0 */ "./services/auth0.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var BsNavLink = function BsNavLink(props) {
  var route = props.route,
      title = props.title;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: route
  }, __jsx("a", {
    className: "nav-link port-navbar-link"
  }, " ", title, " "));
};

var Login = function Login() {
  return __jsx("span", {
    onClick: _services_auth0__WEBPACK_IMPORTED_MODULE_8__["default"].login,
    className: "nav-link port-navbar-link clickable"
  }, " Login ");
};

var Logout = function Logout() {
  return __jsx("span", {
    onClick: _services_auth0__WEBPACK_IMPORTED_MODULE_8__["default"].logout,
    className: "nav-link port-navbar-link clickable"
  }, " Logout");
};

var Example = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Example, _React$Component);

  var _super = _createSuper(Example);

  function Example(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Example);

    _this = _super.call(this, props);
    _this.toggle = _this.toggle.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Example, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isAuthenticated = _this$props.isAuthenticated,
          user = _this$props.user,
          className = _this$props.className; // const { isAuthenticated } = this.props

      return __jsx("div", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Navbar"], {
        className: "port-navbar port-nav-base absolute ".concat(className),
        color: "transparent",
        dark: true,
        expand: "md"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["NavbarBrand"], {
        className: "port-navbar-brand",
        href: "/"
      }, "DevELIOper"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["NavbarToggler"], {
        onClick: this.toggle
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Collapse"], {
        isOpen: this.state.isOpen,
        navbar: true
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Nav"], {
        className: "ml-auto",
        navbar: true
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["NavItem"], {
        className: "port-navbar-item"
      }, __jsx(BsNavLink, {
        route: "/",
        title: "Home"
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["NavItem"], {
        className: "port-navbar-item"
      }, __jsx(BsNavLink, {
        route: "/about",
        title: "About"
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["NavItem"], {
        className: "port-navbar-item"
      }, __jsx(BsNavLink, {
        route: "/portfolios",
        title: "Portfolio"
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["NavItem"], {
        className: "port-navbar-item"
      }, __jsx(BsNavLink, {
        route: "/blogs",
        title: "Blog"
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["NavItem"], {
        className: "port-navbar-item"
      }, __jsx(BsNavLink, {
        route: "/cv",
        title: "CV"
      })), !isAuthenticated && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["NavItem"], {
        className: "port-navbar-item"
      }, __jsx(Login, null)), isAuthenticated && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["NavItem"], {
        className: "port-navbar-item"
      }, __jsx(Logout, null))))));
    }
  }]);

  return Example;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=about.js.dee49df81a4a656a16f3.hot-update.js.map