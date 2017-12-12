const passport = require('passport')
const User = require('./models/user')

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const config = require('./config/config.json')

passport.use(
  new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.authentication.secretKey
  }, async function (jwtPayload, done) {
    try {
      const {userName, password} = jwtPayload
      const query = { userName: userName }
      const user = await User.findOne(query).exec()

      if (!user) {
        return done(new Error(), false)
      }

      return done(null, user)

    } catch (error) {
      return done(new Error(), false)
    }
  })
)

module.exports = null
