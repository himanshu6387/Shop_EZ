const express = require('express')
const connectDB = require('./config/database')
const dotenv = require('dotenv')
dotenv.config({})
const app = express()

connectDB()

app.get('/', (req, res) => {
  res.send('Hello World')
})

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})