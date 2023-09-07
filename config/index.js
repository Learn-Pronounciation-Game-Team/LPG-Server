const { MongoClient } = require('mongodb');
const uri = process.env.URI_MONGODB || "mongodb://localhost:27017";
const database = process.env.MONGO_DB || "finalproject";

// Create a MongoClient instance.
const client = new MongoClient(uri, { useUnifiedTopology: true });

// Connect to the MongoDB server.
async function connectToMongo() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    // Once connected, you can access the database.
    const db = client.db(database);
    
    // Export the db instance for use in other parts of your application.
    module.exports = db;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

// Call the connectToMongo function to initiate the connection.
connectToMongo();