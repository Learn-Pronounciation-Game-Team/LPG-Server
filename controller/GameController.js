const randomWords = require('../helpers/randomWords')

class GameController {
    static generateEasy(req, res, next) {
        if (req.query.wordmax) {
            const totalWords = req.query.wordmax
            const easyWords = randomWords(totalWords, 2, 4)

            res.status(200).json(easyWords)
        } else {
            next({status: 404, message: 'Page Not Found!'})
        }
        
    }

    static generateMedium(req, res, next) {
        if (req.query.wordmax) {
            const totalWords = req.query.wordmax
            const easyWords = randomWords(totalWords, 4, 6)

            res.status(200).json(easyWords)
        } else {
            next({status: 404, message: 'Page Not Found!'})
        }
    }

    static generateHard(req, res, next) {
        if (req.query.wordmax) {
            const totalWords = req.query.wordmax
            const easyWords = randomWords(totalWords, 6)

            res.status(200).json(easyWords)
        } else {
            next({status: 404, message: 'Page Not Found!'})
        }
    }
}

module.exports = GameController