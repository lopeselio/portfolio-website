webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./services/auth0.js":
/*!***************************!*\
  !*** ./services/auth0.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/dist/auth0.min.esm.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jsonwebtoken */ "./node_modules/jsonwebtoken/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_6__);








var Auth0 =
/*#__PURE__*/
function () {
  function Auth0() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Auth0);

    this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_4__["default"].WebAuth({
      domain: 'dev-fee5qd3s.auth0.com',
      clientID: 'PRojVaD1nApgzyFqr90GZGI9kNxIj561',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openid profile'
    });
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this); // this.isAuthenticated = this.isAuthenticated.bind(this)
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Auth0, [{
    key: "handleAuthentication",
    value: function handleAuthentication() {
      var _this = this;

      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
        _this.auth0.parseHash(function (err, authResult) {
          if (authResult && authResult.accessToken && authResult.idToken) {
            _this.setSession(authResult); // history.replace('/home')


            resolve();
          } else if (err) {
            // history.replace('/home')
            reject(err);
            console.log(err);
          }
        });
      });
    }
  }, {
    key: "setSession",
    value: function setSession(authResult) {
      var expiresAt = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(authResult.expiresIn * 1000 + new Date().getTime()); // localStorage.setItem('access_token', authResult.accessToken)
      // localStorage.setItem('id_token', authResult.idToken)
      // localStorage.setItem('expires_at'.expiresAt)
      // Cookies.set('user', authResult.idTokenPayload)


      js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set('jwt', authResult.idToken);
      js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set('expiresAt', expiresAt);
    }
  }, {
    key: "login",
    value: function login() {
      this.auth0.authorize();
    }
  }, {
    key: "logout",
    value: function logout() {
      js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove('user');
      js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove('jwt');
      js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove('expiresAt');
      this.auth0.logout({
        returnTo: '',
        clientID: 'PRojVaD1nApgzyFqr90GZGI9kNxIj561'
      });
    }
  }, {
    key: "isAuthenticated",
    value: function isAuthenticated() {
      var expiresAt = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.getJSON('expiresAt'); // console.log(new Date().getTime() < expiresAt)

      return new Date().getTime() < expiresAt;
    }
  }, {
    key: "verifyToken",
    value: function verifyToken(token) {
      if (token) {
        var decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_6___default.a.decode(token);
        var expiresAt = decodedToken.exp * 1000;
        return decodedToken && new Date().getTime() < expiresAt ? decodedToken : undefined;
      }

      return undefined;
    }
  }, {
    key: "clientAuth",
    value: function clientAuth() {
      // return this.isAuthenticated()
      var token = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.getJSON('jwt');
      var verifiedToken = this.verifyToken(token);
      console.log(verifiedToken);
      return token;
    }
  }, {
    key: "serverAuth",
    value: function serverAuth(req) {
      if (req.headers.cookie) {
        var tokenCookie = req.headers.cookie.split(';').find(function (c) {
          return c.trim().startsWith('jwt=');
        }); // const cookies = req.handlers.cookie
        // console.log(cookies)
        // const splittedCookies = cookies.split(';')
        // console.log(splittedCookies)
        // const expiresAtCookie = splittedCookies.find(c => c.trim().startsWith('expiresAt='))
        // console.log(expiresAtCookie)
        // const expiresAtArray = expiresAtCookie.split('=')
        // console.log(expiresAtArray)
        // const expiresAt = expiresAtArray[1]
        // console.log(expiresAt)

        if (!tokenCookie) {
          return undefined;
        }

        var token = tokenCookie.split('=')[1];
        var verifiedToken = this.verifyToken(token); // return new Date().getTime() < expiresAt

        return verifiedToken;
      }
    }
  }]);

  return Auth0;
}();

var auth0Client = new Auth0();
/* harmony default export */ __webpack_exports__["default"] = (auth0Client);

/***/ })

})
//# sourceMappingURL=index.js.5587b5df54e27fa63c5a.hot-update.js.map