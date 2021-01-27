const { MongoClient } = require('mongodb')
const uri = process.env.URI_MONGODB || "mongodb://localhost:27017"
const client = new MongoClient(uri, { useUnifiedTopology: true })
const database = "learn-pronunciation-game-db"

var db

function connect(callback){
  client.connect(function(err){
    if(err){
      console.log("connection to mongodb failed", err)
    }
    else {
      console.log("succesfully connect to mongodb")
      db = client.db(database)
    }
    callback(err)
  })
}

function getDatabase(){
  return db
}

module.exports = {
  connect, getDatabase
}