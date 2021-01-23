const LeaderboardModel = require('../models/leaderboard')

class LeaderboardController {
    static getLeaderboard (req, res, next) {
        LeaderboardModel.findAll()
            .then(response => {
                res.status(200).json({leaderboard: response})
            })
            .catch(err => {
                next(err)
            })
    }

    static postLeaderboard (req, res, next) {
        const { name, score, difficulty } = req.body

        if (!name || !score || !difficulty) {
            next({status: 400, message: `${!name ? 'Name' : (!score ? 'Score' : 'Difficulty')} Required`})
        } else if (name.length > 10) {
            next({status: 400, message: 'Name Cannot be More Than 10 Characters'})
        } else if (difficulty !== 'Easy' && difficulty !== 'Medium' && difficulty !== 'Hard') {
            next({status: 400, message: 'Invalid Difficulty'})
        } else if (typeof score === 'string') {
            next({status: 400, message: 'Score Must be a Number'})
        } else if (!Number.isInteger(score)) {
            next({status: 400, message: 'Score Must be an Integer'})
        } else {
            const playerData = {
                name: req.body.name,
                score: +req.body.score,
                difficulty: req.body.difficulty
            }
        
            LeaderboardModel.insertOne(playerData)
                .then(response => {
                    res.status(201).json({leaderboard: response.ops[0]})
                })
                .catch(err => {
                    next(err)
                })
        }
    }
}

module.exports = LeaderboardController