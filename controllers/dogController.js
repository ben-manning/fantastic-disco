const { Dog } = require('../models')

const getAllDogs = async (req, res) => {
  let allDogs = await Dog.find({})
  res.json(allDogs)
}

const getOneDog = async (req, res) => {
  let oneDog = await Dog.findById(req.params.id)
  res.json(oneDog)
}

module.exports = {
  getAllDogs,
  getOneDog
}