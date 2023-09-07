const db = require('../config')

let Leaderboard
db().then(c => {
  const collection = process.env.NODE_ENV === 'test' ? 'leaderboardTest' : 'leaderboard'
  Leaderboard = c.collection(collection)
})


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