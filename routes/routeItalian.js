const router = require('express').Router()
const GameController = require('../controller/GameController')

router.get('/easy?', GameController.generateItalianEasy)
router.get('/medium?', GameController.generateItalianMedium)
router.get('/hard?', GameController.generateItalianHard)

module.exports = router