const { 
    generateWords, 
    generateFrenchWords, 
    generateItalianWords, 
    generateSpanishWords
} = require('../helpers/randomWords')

class GameController {
    static generateEasy(req, res, next) {
        if (req.query.wordmax) {
            const totalWords = req.query.wordmax
            const easyWords = generateWords(totalWords, 2, 4)

            res.status(200).json(easyWords)
        } else {
            next({status: 404, message: 'Page Not Found!'})
        }
    }

    static generateFrenchEasy(req, res, next) {
        if (req.query.wordmax) {
            const totalWords = req.query.wordmax
            const easyWords = generateFrenchWords(totalWords, 2, 4)

            res.status(200).json(easyWords)
        } else {
            next({status: 404, message: 'Page Not Found!'})
        }
    }

    static generateItalianEasy(req, res, next) {
        if (req.query.wordmax) {
            const totalWords = req.query.wordmax
            const easyWords = generateItalianWords(totalWords, 2, 4)

            res.status(200).json(easyWords)
        } else {
            next({status: 404, message: 'Page Not Found!'})
        }
    }

    static generateSpanishEasy(req, res, next) {
        if (req.query.wordmax) {
            const totalWords = req.query.wordmax
            const easyWords = generateSpanishWords(totalWords, 2, 4)

            res.status(200).json(easyWords)
        } else {
            next({status: 404, message: 'Page Not Found!'})
        }
    }

    static generateMedium(req, res, next) {
        if (req.query.wordmax) {
            const totalWords = req.query.wordmax
            const mediumWords = generateWords(totalWords, 4, 6)

            res.status(200).json(mediumWords)
        } else {
            next({status: 404, message: 'Page Not Found!'})
        }
    }

    static generateFrenchMedium(req, res, next) {
        if (req.query.wordmax) {
            const totalWords = req.query.wordmax
            const mediumWords = generateFrenchWords(totalWords, 4, 6)

            res.status(200).json(mediumWords)
        } else {
            next({status: 404, message: 'Page Not Found!'})
        }
    }

    static generateItalianMedium(req, res, next) {
        if (req.query.wordmax) {
            const totalWords = req.query.wordmax
            const mediumWords = generateItalianWords(totalWords, 4, 6)

            res.status(200).json(mediumWords)
        } else {
            next({status: 404, message: 'Page Not Found!'})
        }
    }

    static generateSpanishMedium(req, res, next) {
        if (req.query.wordmax) {
            const totalWords = req.query.wordmax
            const mediumWords = generateSpanishWords(totalWords, 4, 6)

            res.status(200).json(mediumWords)
        } else {
            next({status: 404, message: 'Page Not Found!'})
        }
    }

    static generateHard(req, res, next) {
        if (req.query.wordmax) {
            const totalWords = req.query.wordmax
            const hardWords = generateWords(totalWords, 6)

            res.status(200).json(hardWords)
        } else {
            next({status: 404, message: 'Page Not Found!'})
        }
    }

    static generateFrenchHard(req, res, next) {
        if (req.query.wordmax) {
            const totalWords = req.query.wordmax
            const hardWords = generateFrenchWords(totalWords, 6)

            res.status(200).json(hardWords)
        } else {
            next({status: 404, message: 'Page Not Found!'})
        }
    }

    static generateItalianHard(req, res, next) {
        if (req.query.wordmax) {
            const totalWords = req.query.wordmax
            const hardWords = generateItalianWords(totalWords, 6)

            res.status(200).json(hardWords)
        } else {
            next({status: 404, message: 'Page Not Found!'})
        }
    }

    static generateSpanishHard(req, res, next) {
        if (req.query.wordmax) {
            const totalWords = req.query.wordmax
            const hardWords = generateSpanishWords(totalWords, 6)

            res.status(200).json(hardWords)
        } else {
            next({status: 404, message: 'Page Not Found!'})
        }
    }
}

module.exports = GameController