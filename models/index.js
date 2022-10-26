const mongoose = require('mongoose')
const dogSchema = require('./dog')

const Dog = mongoose.model('Dog', dogSchema)

module.exports = {
  Dog
}