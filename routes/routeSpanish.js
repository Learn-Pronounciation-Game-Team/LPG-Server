const router = require('express').Router()
const GameController = require('../controller/GameController')

router.get('/easy?', GameController.generateSpanishEasy)
router.get('/medium?', GameController.generateSpanishMedium)
router.get('/hard?', GameController.generateSpanishHard)

module.exports = router