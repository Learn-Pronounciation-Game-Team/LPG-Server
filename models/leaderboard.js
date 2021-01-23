const db = require('../config')
const collection = process.env.MONGO_TEST || "leaderboard"
const Leaderboard = db.collection(collection)

class LeaderboardModel {
    static insertOne(value) {
        return Leaderboard.insertOne(value)
    }

    static insertMany(value) {
        return Leaderboard.insertMany(value)
    }

    static findAll() {
        return Leaderboard.find().toArray()
    }

    static drop() {
        return Leaderboard.drop()
    }
}

module.exports = LeaderboardModel