webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./components/BasePage.js":
/*!********************************!*\
  !*** ./components/BasePage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var BasePage = function BasePage(props) {
  var className = props.className,
      title = props.title; // const className = props.className || ''

  return __jsx("div", {
    className: "base-page ".concat(className)
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, title && __jsx("div", {
    className: "page-header"
  }, __jsx("h1", {
    className: "page-header-title"
  }, title)), props.children));
};

BasePage.defaultProps = {
  className: ''
};
BasePage.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (BasePage);

/***/ })

})
//# sourceMappingURL=about.js.697367187702e71de81f.hot-update.js.map