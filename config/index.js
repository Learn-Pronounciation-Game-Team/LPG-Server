const { MongoClient } = require('mongodb')
const uri = process.env.URI_MONGODB || "mongodb://localhost:27017"
const client = new MongoClient(uri, { useUnifiedTopology: true })
const database = process.env.MONGO_DB || "finalproject"

client.connect()

const db = client.db(database)
module.exports = db