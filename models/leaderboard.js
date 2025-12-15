const db = require('../config')

let Leaderboard

// Initialize connection when module is loaded, but handle errors gracefully
db().then(c => {
  const collection = process.env.NODE_ENV === 'test' ? 'leaderboardTest' : 'leaderboard'
  Leaderboard = c.collection(collection)
}).catch(err => {
  console.error('Failed to initialize Leaderboard collection:', err.message)
})

// Helper function to ensure collection is ready
async function getCollection() {
  if (!Leaderboard) {
    const c = await db()
    const collection = process.env.NODE_ENV === 'test' ? 'leaderboardTest' : 'leaderboard'
    Leaderboard = c.collection(collection)
  }
  return Leaderboard
}


class LeaderboardModel {
    static async insertOne(value) {
        const collection = await getCollection()
        return collection.insertOne(value)
    }

    static async insertMany(value) {
        const collection = await getCollection()
        return collection.insertMany(value)
    }

    static async findAll() {
        const collection = await getCollection()
        return collection.find().toArray()
    }

    static async drop() {
        const collection = await getCollection()
        return collection.drop()
    }
}

module.exports = LeaderboardModel