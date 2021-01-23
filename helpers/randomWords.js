const randomWords = require('random-words')

function generateWords(total, minLength, maxLength) {
    const words = [...new Set(randomWords({exactly: 1000, maxLength: maxLength}))].filter(word => word.length >= minLength)
    
    return words.slice(0, total)
}

module.exports = generateWords