const AuthenticationController = require('./controllers/AuthenticationController')

module.exports = (app) => {
  // Create an example route for the register page
  app.post('/register', AuthenticationController.register)
}
