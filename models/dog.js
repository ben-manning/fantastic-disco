const { Schema } = require('mongoose')

const dogSchema = new Schema(
  {
    name: { type: String, required: true},
    breed: { type: String, required: true},
    age: { type: String, required: true}
  },
  { timestamps: true }
)

module.exports = dogSchema