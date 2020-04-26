webpackHotUpdate("static\\development\\pages\\portfolios.js",{

/***/ "./pages/portfolios.js":
/*!*****************************!*\
  !*** ./pages/portfolios.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layouts/BaseLayout */ "./components/layouts/BaseLayout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_BasePage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/BasePage */ "./components/BasePage.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var Portfolios = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Portfolios, _React$Component);

  var _super = _createSuper(Portfolios);

  function Portfolios() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Portfolios);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Portfolios, [{
    key: "renderPosts",
    value: function renderPosts(posts) {
      return posts.map(function (post, index) {
        return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
          md: "4"
        }, __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
          key: index
        }, __jsx("span", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Card"], {
          className: "portfolio-card"
        }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["CardHeader"], {
          className: "portfolio-card-header"
        }, "Some Position ", index), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["CardBody"], null, __jsx("p", {
          className: "portfolio-card-city"
        }, " Some Location ", index, " "), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["CardTitle"], {
          className: "portfolio-card-title"
        }, "Some Company ", index), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["CardText"], {
          className: "portfolio-card-text"
        }, "Some Description ", index), __jsx("div", {
          className: "readMore"
        }, " "))))));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var posts = this.props.posts;
      console.log(this.props);
      return __jsx(_components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_7__["default"], this.props.auth, __jsx(_components_BasePage__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "portfolio-page",
        title: "Portfolios"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, this.renderPosts(posts))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps() {
      var posts, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              posts = [];
              _context.prev = 1;
              _context.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('https://jsonplaceholder.typicode.com/posts'));

            case 4:
              response = _context.sent;
              posts = response.data;
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.error(_context.t0);

            case 11:
              return _context.abrupt("return", {
                posts: posts.splice(0, 10)
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 8]], Promise);
    }
  }]);

  return Portfolios;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Portfolios);

/***/ })

})
//# sourceMappingURL=portfolios.js.fef60f3ce8bd49322eda.hot-update.js.map