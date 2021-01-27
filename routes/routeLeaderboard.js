const router = require('express').Router()
const LeaderboardController = require('../controller/LeaderboardController')

router.get('/', LeaderboardController.getLeaderboard)
router.post('/', LeaderboardController.postLeaderboard)

module.exports = router