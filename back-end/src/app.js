const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// Start our express server
const app = express()

// Define a ENV port or increment the default Vue.js port number (8080)
const port = process.env.PORT || 8081

/*
  Just as a reminder, a quick list of common RESTful methods and meanings:
  GET    - Retrieve a resource
  POST   - Create a resource
  PUT    - Create a resource. However, if it exist already, update it
  PATCH  - Update a partial resource (saves bandwidth over PUT)
  DELETE - Delete a resource
*/

// Initialize the middleware
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

app.listen(port, async () => {
  console.log(`Sever successfully started on port ${port}.`)
})
