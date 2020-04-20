
// Mi{ddleWare
exports.checkJWT = function (req, res, next) {
  const isValidToken = false

  if (isValidToken) {
    res.user = {
      name: 'Elio',
      lastname: 'Lopes'
    }
    next()
  } else {
    return res.status(401).send({ title: 'Not Authorized', detail: 'Please login in order to get our data' })
  }
}
