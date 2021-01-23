const router = require('express').Router()
const GameController = require('../controller/GameController')

router.get('/easy?', GameController.generateEasy)
router.get('/medium?', GameController.generateMedium)
router.get('/hard?', GameController.generateHard)

module.exports = router