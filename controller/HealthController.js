const HealthModel = require("../models/health")

class HealthController {
  static async check(req, res, next) {
    try {
      await HealthModel.Check()
      res.status(200).json({ message: "Service is healthy" })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = HealthController
