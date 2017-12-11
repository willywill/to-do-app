const Validator = require('joi')

module.exports = {
  async register (req, res, next) {
    const schema = {
      userName: Validator.string(),
      password: Validator.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const {error, value} = Validator.validate(req.body, schema)

    if(error != null || error != undefined) {
      switch (error.details[0].context.key) {
        case 'userName':
          res.status(400).send({
            error: 'This username is already in use.'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Your password must be 8-32 characters in length.'
          })
          break
        default:
        res.status(400).send({
          error: 'Could not register your user account. Please try again.'
        })
      }
    } else {
      next()
    }
  }
}
