const connectToMongo = require("../config")

class HealthModel {
  static async Check() {
    const db = await connectToMongo()
    return db.admin().command({ ping: 1 })
  }
}

module.exports = HealthModel
