const { Leaderboard } = require('../config')

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