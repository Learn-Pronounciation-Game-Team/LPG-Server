const db = require('../config/mongo')
const collection = process.env.MONGO_TEST || "leaderboard"
const Leaderboard = db.collection(collection)
const { ObjectID } = require('mongodb')

class LeaderboardModel {

}

module.exports = LeaderboardModel