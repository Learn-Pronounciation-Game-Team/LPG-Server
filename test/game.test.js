const request = require('supertest')
const app = require('../app')

describe('Generate Words | GET /word', () => {
    describe('GET /word/easy?wordmax=5', () => {
        test('Returning array of words with length = 5, and each word length <= 4', done => {
            request(app)
            .get('/word/easy')
            .query({
                wordmax: 5
            })
            .end((err, res) => {
                const { body, status } = res
                if (err) {
                    return done(err)
                }
                expect(status).toBe(200)
                expect(typeof body === 'object')
                expect(body.length === 5)
                body.forEach(word => {
                    expect(word.length).toBeLessThanOrEqual(4)
                })
                return done()
            })
        })
    })

    describe('GET /word/medium?wordmax=10', () => {
        test('Returning array of words with length = 10, and each word length >= 4 & <=6', done => {
            request(app)
            .get('/word/medium')
            .query({
                wordmax: 10
            })
            .end((err, res) => {
                const { body, status } = res
                if (err) {
                    return done(err)
                }
                expect(status).toBe(200)
                expect(typeof body === 'object')
                expect(body.length === 10)
                body.forEach(word => {
                    expect(word.length).toBeGreaterThanOrEqual(4)
                    expect(word.length).toBeLessThanOrEqual(6)
                })
                return done()
            })
        })
    })

    describe('GET /word/hard?wordmax=15', () => {
        test('Returning array of words with length = 15, and each word length >= 6', done => {
            request(app)
            .get('/word/hard')
            .query({
                wordmax: 15
            })
            .end((err, res) => {
                const { body, status } = res
                if (err) {
                    return done(err)
                }
                expect(status).toBe(200)
                expect(typeof body === 'object')
                expect(body.length === 15)
                body.forEach(word => {
                    expect(word.length).toBeGreaterThanOrEqual(6)
                })
                return done()
            })
        })
    })
})