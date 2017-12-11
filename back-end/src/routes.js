/*
  Just as a reminder, a quick list of common RESTful methods and meanings:
  GET    - Retrieve a resource
  POST   - Create a resource
  PUT    - Create a resource. However, if it exist already, update it
  PATCH  - Update a partial resource (saves bandwidth over PUT)
  DELETE - Delete a resource
*/

const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  // Validate the data before hitting the backend end-point
  app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)

  app.post('/login', AuthenticationController.login)

}
