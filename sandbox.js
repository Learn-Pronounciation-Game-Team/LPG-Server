const randomWords = require('random-words')

console.log(randomWords({exactly:50, maxLength:10}).filter(word => word.length > 7 && word.length <= 10));