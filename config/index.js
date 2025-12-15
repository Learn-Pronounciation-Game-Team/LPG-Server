const { MongoClient } = require("mongodb")
const uri = process.env.URI_MONGODB || "mongodb://localhost:27017"
const database = process.env.MONGO_DB || "finalproject"

// Create a MongoClient instance.
const client = new MongoClient(uri)

let isConnecting = false
let connectionPromise = null

// Connect to the MongoDB server.
async function connectToMongo() {
  // If already connecting, return the existing promise
  if (connectionPromise) {
    return connectionPromise
  }

  // If not connecting, start a new connection
  if (!isConnecting) {
    isConnecting = true
    connectionPromise = client.connect()
      .then(() => {
        console.log("Connected to MongoDB")
        isConnecting = false
        return client.db(database)
      })
      .catch((error) => {
        console.error("Error connecting to MongoDB:", error.message)
        isConnecting = false
        connectionPromise = null
        throw error
      })
  }

  return connectionPromise
}

// Call the connectToMongo function to initiate the connection.
module.exports = connectToMongo
