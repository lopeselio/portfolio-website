webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/layouts/BaseLayout */ "./components/layouts/BaseLayout.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-typed */ "./node_modules/react-typed/dist/react-typed.js");
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_typed__WEBPACK_IMPORTED_MODULE_9__);






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;





var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Index).call(this, props));
    _this.roles = ['Developer', 'Tech Lover', 'Avid Reader', 'Designer', 'Illustrator', 'ReactJS', 'Data Science Enthusiast', 'Team Player'];
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, [{
    key: "render",
    value: function render() {
      var _this$props$auth = this.props.auth,
          isAuthenticated = _this$props$auth.isAuthenticated,
          user = _this$props$auth.user;
      return __jsx(_components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: "cover"
      }, this.props.auth), __jsx("div", {
        className: "main-section"
      }, __jsx("div", {
        className: "background-image"
      }, __jsx("img", {
        src: "/static/images/background-index.png"
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        md: "6"
      }, __jsx("div", {
        className: "hero-section"
      }, __jsx("div", {
        className: "flipper"
      }, __jsx("div", {
        className: "back"
      }, __jsx("div", {
        className: "hero-section-content"
      }, __jsx("h2", null, " Full Stack Web Developer "), __jsx("div", {
        className: "hero-section-content-intro"
      }, "Have a look at my portfolio and job history.")), __jsx("img", {
        className: "image",
        src: "/static/images/section-1.png"
      }), __jsx("div", {
        className: "shadow-custom"
      }, __jsx("div", {
        className: "shadow-inner"
      }, " ")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        md: "6",
        className: "hero-welcome-wrapper"
      }, __jsx("div", {
        className: "hero-welcome-text"
      }, __jsx("h1", null, "Hey", isAuthenticated && __jsx("span", null, " ", __jsx("b", null, " ", user.name, " "), " "), "Welcome to the portfolio website of ", __jsx("b", null, "Elio Jordan Lopes"), ".", __jsx("br", null), __jsx("br", null), "Get informed, collaborate and discover projects I work on!")), __jsx(react_typed__WEBPACK_IMPORTED_MODULE_9___default.a, {
        loop: true,
        typeSpeed: 60,
        backSpeed: 60,
        strings: this.roles,
        backDelay: 1000,
        loopCount: 0,
        showCursor: true,
        className: "self-typed",
        cursorChar: "|"
      }), __jsx("div", {
        className: "hero-welcome-bio"
      }, __jsx("h1", null, "Have a look at my work.")))))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.d145a19fa82ffa521e52.hot-update.js.map