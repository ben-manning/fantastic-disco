const express = require('express')

const app = express()
const PORT = process.env.PORT || 3001

const db = require('./db')
const { Dog } = require('./models')

// get all dogs
app.get('/dogs', async (req, res) => {
  let allDogs = await Dog.find({})
  res.json(allDogs)
})

// get one dog
app.get('/dogs/:id', async (req, res) => {
  let foundDog = await Dog.findById(req.params.id)

  res.json(foundDog)
})

app.listen(PORT, () => {
  console.log(`The server is connect to port: ${PORT}`)
})