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
  }), __jsx(_shared_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "port-nav-default",
    isAuthenticated: isAuthenticated,
    user: user
  }), "}", __jsx("main", {
    className: "cover ".concat(className)
  }, __jsx("div", {
    className: "wrapper"
  }, children)));
};

/* harmony default export */ __webpack_exports__["default"] = (BaseLayout);

/***/ })

})
//# sourceMappingURL=about.js.e72d648ab5373f14226c.hot-update.js.map