if (process.env.NODE_ENV != 'production') {
    require('dotenv').config()
}
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const router = require('./routes')
app.use('/', router)

const errorHandler = require('./middlewares/errorHandler')
app.use(errorHandler)

module.exports = app