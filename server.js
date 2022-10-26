const express = require('express')

const app = express()
const PORT = process.env.PORT || 3001

const db = require('./db')
const { Dog } = require('./models')


app.get('/dogs', (req, res) => {
  res.send('this is the dogs route')
})

app.listen(PORT, () => {
  console.log(`The server is connect to port: ${PORT}`)
})