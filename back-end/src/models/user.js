const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  user: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

const User = module.exports = mongoose.model('User', userSchema)
