const router = require("express").Router()
const HealthController = require("../controller/HealthController")

router.get("/check", HealthController.check)

module.exports = router
