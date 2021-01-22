const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/word/hard', (req, res) => {
    // console.log(req.query.wordmax);
    res.status(200).json(['wind','clay','pixies','deadass','echo'])
})

module.exports = app