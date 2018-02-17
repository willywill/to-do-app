const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const config = require('./config/config.json')

// Start our express server
const app = express()

// Define a ENV port or increment the default Vue.js port number (8080)
const port = process.env.PORT || config.port

// Connect our database
mongoose.Promise = global.Promise
mongoose.connect(config.db.url, { useMongoClient: true })

const db = mongoose.connection
db.once('open', () => console.log(`Sever successfully connected to the database.`))
db.on('error', () => console.log('There was an error in the database.'))


// Initialize the middleware
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./passport')
require('./routes')(app)

app.listen(port, async () => {
  console.log(`Server successfully started on port ${port}.`)
})
