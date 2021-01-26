const router = require('express').Router()
const GameController = require('../controller/GameController')

router.get('/easy?', GameController.generateFrenchEasy)
router.get('/medium?', GameController.generateFrenchMedium)
router.get('/hard?', GameController.generateFrenchHard)

module.exports = router