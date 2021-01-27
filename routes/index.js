const router = require('express').Router()
const routerGame = require('./routeGame')
const routeFrench = require('./routeFrench')
const routeItalian = require('./routeItalian')
const routeSpanish = require('./routeSpanish')
const routeLeaderboard = require('./routeLeaderboard')

router.use('/word', routerGame)
router.use('/mot', routeFrench)
router.use('/parola', routeItalian)
router.use('/palabra', routeSpanish)
router.use('/leaderboard', routeLeaderboard)

module.exports = router