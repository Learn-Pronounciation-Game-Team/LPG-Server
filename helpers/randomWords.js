const randomWords = require('random-words')
const frenchWords = require('an-array-of-french-words')
const italianWords = require('an-array-of-italian-words')
const spanishWords = require('an-array-of-spanish-words')

function generateWords(total, minLength, maxLength) {
    const words = [...new Set(randomWords({exactly: 1000, maxLength: maxLength}))].filter(word => word.length >= minLength)
    
    return words.slice(0, total)
}

function generateFrenchWords(total, minLength, maxLength) {
    let words

    if (maxLength) {
        words = frenchWords.filter(word => word.length >= minLength && word.length <= maxLength)
    } else {
        words = frenchWords.filter(word => word.length >= minLength)
    }

    const randomWords = []
    while(randomWords.length < total) {
        randomWords.push(words[Math.floor(Math.random() * words.length)])
    }

    return randomWords
}

function generateItalianWords(total, minLength, maxLength) {
    let words

    if (maxLength) {
        words = italianWords.filter(word => word.length >= minLength && word.length <= maxLength)
    } else {
        words = italianWords.filter(word => word.length >= minLength)
    }

    const randomWords = []
    while(randomWords.length < total) {
        randomWords.push(words[Math.floor(Math.random() * words.length)])
    }

    return randomWords
}

function generateSpanishWords(total, minLength, maxLength) {
    let words

    if (maxLength) {
        words = spanishWords.filter(word => word.length >= minLength && word.length <= maxLength)
    } else {
        words = spanishWords.filter(word => word.length >= minLength)
    }

    const randomWords = []
    while(randomWords.length < total) {
        randomWords.push(words[Math.floor(Math.random() * words.length)])
    }

    return randomWords
}

module.exports = {
    generateWords,
    generateFrenchWords,
    generateItalianWords,
    generateSpanishWords
}