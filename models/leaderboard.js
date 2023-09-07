const db = require('../config')
const collection = process.env.NODE_ENV === 'test' ? 'leaderboardTest' : 'leaderboard'
const Leaderboard = db.collection ? db.collection(collection) : {}

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