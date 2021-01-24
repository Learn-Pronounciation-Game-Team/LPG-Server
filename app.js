require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const router = require('./routes')
app.use('/', router)

const errorHandler = require('./middlewares/errorHandler')
app.use(errorHandler)

module.exports = app