const { Dog } = require('../models')

const getAllDogs = async (req, res) => {
  let allDogs = await Dog.find({})
  res.json(allDogs)
}

module.exports = {
  getAllDogs
}