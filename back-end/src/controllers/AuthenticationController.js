const User = require('../models/user')

module.exports = {
  // Create the user, if already in use, send user name already in use error
  async register (req, res) {
    try {
      const userCredentials = req.body
      const user = await User.create(userCredentials).exec()
      res.send(user.toJSON())
    } catch(err) {
      res.status(400).send({
        error: 'This user name already exists.'
      })
    }
  }
}
