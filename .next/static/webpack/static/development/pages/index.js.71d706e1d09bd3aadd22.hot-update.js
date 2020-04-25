webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./helpers/utils.js":
/*!**************************!*\
  !*** ./helpers/utils.js ***!
  \**************************/
/*! exports provided: getCookiesFromReq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookiesFromReq", function() { return getCookiesFromReq; });
var getCookiesFromReq = function getCookiesFromReq(req, cookieKey) {
  var cookie = req.headers.cookie.split(';').find(function (c) {
    return c.trim().startsWith("".concat(cookieKey, "="));
  });

  if (!cookie) {
    return undefined;
  }

  return cookie.split('=')[1];
};

/***/ }),

/***/ "./services/auth0.js":
/*!***************************!*\
  !*** ./services/auth0.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/dist/auth0.min.esm.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jsonwebtoken */ "./node_modules/jsonwebtoken/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/utils */ "./helpers/utils.js");









var Auth0 = /*#__PURE__*/function () {
  function Auth0() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Auth0);

    this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_3__["default"].WebAuth({
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

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Auth0, [{
    key: "handleAuthentication",
    value: function handleAuthentication() {
      var _this = this;

      return new Promise(function (resolve, reject) {
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
      var expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime()); // localStorage.setItem('access_token', authResult.accessToken)
      // localStorage.setItem('id_token', authResult.idToken)
      // localStorage.setItem('expires_at'.expiresAt)
      // Cookies.set('user', authResult.idTokenPayload)

      js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set('jwt', authResult.idToken);
      js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set('expiresAt', expiresAt);
    }
  }, {
    key: "login",
    value: function login() {
      this.auth0.authorize();
    }
  }, {
    key: "logout",
    value: function logout() {
      js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove('user');
      js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove('jwt');
      js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove('expiresAt');
      this.auth0.logout({
        returnTo: '',
        clientID: 'PRojVaD1nApgzyFqr90GZGI9kNxIj561'
      });
    }
  }, {
    key: "getJWKS",
    value: function getJWKS() {
      var res, jwks;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getJWKS$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_6___default.a.get('https://dev-fee5qd3s.auth0.com/.well-known/jwks.json'));

            case 2:
              res = _context.sent;
              jwks = res.data;
              return _context.abrupt("return", jwks);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    } // isAuthenticated () {
    //   const expiresAt = Cookies.getJSON('expiresAt')
    //   // console.log(new Date().getTime() < expiresAt)
    //   return new Date().getTime() < expiresAt
    // }

  }, {
    key: "verifyToken",
    value: function verifyToken(token) {
      var decodedToken, jwks, jwk, cert, verifiedToken, expiresAt;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function verifyToken$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!token) {
                _context2.next = 23;
                break;
              }

              decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_5___default.a.decode(token, {
                complete: true
              });

              if (decodedToken) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt("return", undefined);

            case 4:
              _context2.next = 6;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.getJWKS());

            case 6:
              jwks = _context2.sent;
              console.log(jwks);
              jwk = jwks.keys[0];
              console.log(jwk); // BUILD CERTIFICATE

              cert = jwk.x5c[0];
              cert = cert.match(/.{1,64}/g).join('\n');
              cert = "-----BEGIN CERTIFICATE-----\n".concat(cert, "\n-----END CERTIFICATE-----\n");

              if (!(jwk.kid === decodedToken.header.kid)) {
                _context2.next = 23;
                break;
              }

              _context2.prev = 14;
              verifiedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_5___default.a.verify(token, cert);
              expiresAt = verifiedToken.exp * 1000;
              return _context2.abrupt("return", verifiedToken && new Date().getTime() < expiresAt ? verifiedToken : undefined);

            case 20:
              _context2.prev = 20;
              _context2.t0 = _context2["catch"](14);
              return _context2.abrupt("return", undefined);

            case 23:
              return _context2.abrupt("return", undefined);

            case 24:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[14, 20]], Promise);
    }
  }, {
    key: "clientAuth",
    value: function clientAuth() {
      var token, verifiedToken;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function clientAuth$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // return this.isAuthenticated()
              token = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.getJSON('jwt');
              verifiedToken = this.verifyToken(token); // console.log(verifiedToken)

              return _context3.abrupt("return", verifiedToken);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "serverAuth",
    value: function serverAuth(req) {
      var token, verifiedToken;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function serverAuth$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!req.headers.cookie) {
                _context4.next = 4;
                break;
              }

              token = getCookieFromReq(req, 'jwt');
              verifiedToken = this.verifyToken(token);
              return _context4.abrupt("return", verifiedToken);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }]);

  return Auth0;
}();

var auth0Client = new Auth0();
/* harmony default export */ __webpack_exports__["default"] = (auth0Client);

/***/ })

})
//# sourceMappingURL=index.js.71d706e1d09bd3aadd22.hot-update.js.map