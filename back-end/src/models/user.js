const mongoose = require('mongoose')
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true })

userSchema.pre('save', async function (next) {
  const user = this
  const SALT_FACTOR = 10

  if (!user.isModified('password')) {
    return next()
  }

  try {
    const salt = await bcrypt.genSaltAsync(SALT_FACTOR)
    const hash = await bcrypt.hashAsync(user.password, salt, null)

    user.password = hash;

    next()
  } catch (err) {
       next(err)
   }

  return next()
})

userSchema.methods.comparePassword = function(password) {
  return bcrypt.compareAsync(password, this.password)
}

const User = module.exports = mongoose.model('User', userSchema)
