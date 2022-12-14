const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3001

const db = require('./db')


// middleware
app.use(cors())
app.use(express.json())
app.use(express.static(`${__dirname}/client/build`))

// controllers
const dogController = require('./controllers/dogController')

// get all dogs
app.get('/dogs', dogController.getAllDogs)
app.get('/dogs/:id', dogController.getOneDog)

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => {
  console.log(`The server is connect to port: ${PORT}`)
})