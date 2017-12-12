const passport = require('passport')

module.exports = function (req, res, next) {
  passport.authenticate('jwt', function (error, user) {
    if (error || !user) {
      res.status(403).send({
        error: 'You are unauthorized to access this resource.'
      })
      res.redirect('/login')
    } else {
      req.user = user
      next()
    }
  })(req, res, next)
}
