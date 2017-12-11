const User = require('../models/user')
const jsonToken = require('jsonwebtoken')
const config = require('../config/config.json')

function signUser (user) {
  const ONE_DAY = 60 * 60 * 24
  return jsonToken.sign(user, config.authentication.secretKey, {
    expiresIn: ONE_DAY
  })
}

module.exports = {
  // Create the user, if already in use, send user name already in use error
  async register (req, res) {
    try {
      const userCredentials = req.body
      const user = await User.create(userCredentials)
      res.send(user.toJSON())
    } catch(err) {
      console.log(err)
      res.status(400).send({
        error: 'This username is already in use.'
      })
    }
  },
  async login (req, res) {
    try {
      const {userName, password} = req.body
      const query = { userName: userName }
      const user = await User.findOne(query).exec()

      if(!user) {
        res.status(403).send({
          error: 'The login information was not correct. Try again.'
        })
      }

      const isPasswordValid = await user.comparePassword(password)

      if(!isPasswordValid) {
        res.status(403).send({
          error: 'The login information was not correct. Try again.'
        })
      }

      const userJSON = user.toJSON()
      res.send({
        user: userJSON,
        token: signUser(userJSON)
      })
    } catch(err) {
      console.log(err)
      res.status(500).send({
        error: 'The login could not be processed. Try again.'
      })
    }
  }
}
