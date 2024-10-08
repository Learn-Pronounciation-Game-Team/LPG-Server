const { MongoClient } = require("mongodb")
const uri = process.env.URI_MONGODB || "mongodb://localhost:27017"
const database = process.env.MONGO_DB || "finalproject"

// Create a MongoClient instance.
const client = new MongoClient(uri, { useUnifiedTopology: true })

// Connect to the MongoDB server.
async function connectToMongo() {
  if (!client.isConnected()) {
    // Check if client is already connected
    try {
      await client.connect()
      console.log("Connected to MongoDB")

      // Once connected, you can access the database.
      return client.db(database)
    } catch (error) {
      console.error("Error connecting to MongoDB:", error)
    }
  }

  return client.db(database) // Return the connected database instance
}

// Call the connectToMongo function to initiate the connection.
module.exports = connectToMongo
