const router = require('express').Router()
const routerGame = require('./routeGame')
const routeLeaderboard = require('./routeLeaderboard')

router.use('/word', routerGame)
router.use('/leaderboard', routeLeaderboard)

module.exports = router