const jwt = require('express-jwt')
const jwksRsa = require('jwks-rsa')
// MiddleWare
const namespace = 'http://www.localhost:3000/'

exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true, // Default Value
    rateLimit: true,
    jwksRequestsPerMinute: 50,
    // cacheMaxEntries: 5, // Default value
    // cacheMaxAge: ms('10m'), // Default value
    jwksUri: 'https://dev-fee5qd3s.auth0.com/.well-known/jwks.json'
  }),
  audience: 'PRojVaD1nApgzyFqr90GZGI9kNxIj561',
  issuer: 'https://dev-fee5qd3s.auth0.com/',
  algorithms: ['RS256']
})

exports.checkRole = role => (req, res, next) => {
  const user = req.user

  if (user && (user[namespace + 'role'] === role)) {
    next()
  } else {
    return res.status(401).send({ title: 'Not Authorized', detail: 'You are not authorized to access this data' })
  }
}
