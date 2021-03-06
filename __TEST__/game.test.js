const { expect } = require('@jest/globals')
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
                expect(typeof body).toBe('object')
                expect(body).toHaveLength(5)
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
                expect(typeof body).toBe('object')
                expect(body).toHaveLength(10)
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
                expect(typeof body).toBe('object')
                expect(body).toHaveLength(15)
                body.forEach(word => {
                    expect(word.length).toBeGreaterThanOrEqual(6)
                })
                return done()
            })
        })
    })

    describe('GET /word', () => {
        test('Returning status 404 with Page Not Found message', done => {
            request(app)
            .get('/word/easy')
            .query({
                wordmaxxxx: 5
            })
            .end((err, res) => {
                const { body, status } = res
                if (err) {
                    return done(err)
                }
                expect(status).toBe(404)
                expect(typeof body).toBe('object')
                expect(body).toHaveProperty('message', 'Page Not Found!')
                return done()
            })
        })
    })

    describe('GET /word', () => {
        test('Returning status 404 with Page Not Found message', done => {
            request(app)
            .get('/word/medium')
            .query({
                randomWord: 5
            })
            .end((err, res) => {
                const { body, status } = res
                if (err) {
                    return done(err)
                }
                expect(status).toBe(404)
                expect(typeof body).toBe('object')
                expect(body).toHaveProperty('message', 'Page Not Found!')
                return done()
            })
        })
    })

    describe('GET /word', () => {
        test('Returning status 404 with Page Not Found message', done => {
            request(app)
            .get('/word/hard')
            .query({
                asdf: 5
            })
            .end((err, res) => {
                const { body, status } = res
                if (err) {
                    return done(err)
                }
                expect(status).toBe(404)
                expect(typeof body).toBe('object')
                expect(body).toHaveProperty('message', 'Page Not Found!')
                return done()
            })
        })
    })
})

describe('Generate French Words | GET /mot', () => {
    describe('GET /mot/easy?wordmax=5', () => {
        test('Returning array of french words with length = 5, and each word length <= 4', done => {
            request(app)
            .get('/mot/easy')
            .query({
                wordmax: 5
            })
            .end((err, res) => {
                const { body, status } = res
                if (err) {
                    return done(err)
                }
                expect(status).toBe(200)
                expect(typeof body).toBe('object')
                expect(body).toHaveLength(5)
                body.forEach(word => {
                    expect(word.length).toBeLessThanOrEqual(4)
                })
                return done()
            })
        })
    })

    describe('GET /mot/medium?wordmax=10', () => {
        test('Returning array of french words with length = 10, and each word length >= 4 & <=6', done => {
            request(app)
            .get('/mot/medium')
            .query({
                wordmax: 10
            })
            .end((err, res) => {
                const { body, status } = res
                if (err) {
                    return done(err)
                }
                expect(status).toBe(200)
                expect(typeof body).toBe('object')
                expect(body).toHaveLength(10)
                body.forEach(word => {
                    expect(word.length).toBeGreaterThanOrEqual(4)
                    expect(word.length).toBeLessThanOrEqual(6)
                })
                return done()
            })
        })
    })

    describe('GET /mot/hard?wordmax=15', () => {
        test('Returning array of french words with length = 15, and each word length >= 6', done => {
            request(app)
            .get('/mot/hard')
            .query({
                wordmax: 15
            })
            .end((err, res) => {
                const { body, status } = res
                if (err) {
                    return done(err)
                }
                expect(status).toBe(200)
                expect(typeof body).toBe('object')
                expect(body).toHaveLength(15)
                body.forEach(word => {
                    expect(word.length).toBeGreaterThanOrEqual(6)
                })
                return done()
            })
        })
    })

    describe('GET /mot', () => {
        test('Returning status 404 with Page Not Found message', done => {
            request(app)
            .get('/mot/easy')
            .query({
                wordmaxxxx: 5
            })
            .end((err, res) => {
                const { body, status } = res
                if (err) {
                    return done(err)
                }
                expect(status).toBe(404)
                expect(typeof body).toBe('object')
                expect(body).toHaveProperty('message', 'Page Not Found!')
                return done()
            })
        })
    })

    describe('GET /mot', () => {
        test('Returning status 404 with Page Not Found message', done => {
            request(app)
            .get('/mot/medium')
            .query({
                randomWord: 5
            })
            .end((err, res) => {
                const { body, status } = res
                if (err) {
                    return done(err)
                }
                expect(status).toBe(404)
                expect(typeof body).toBe('object')
                expect(body).toHaveProperty('message', 'Page Not Found!')
                return done()
            })
        })
    })

    describe('GET /mot', () => {
        test('Returning status 404 with Page Not Found message', done => {
            request(app)
            .get('/mot/hard')
            .query({
                asdf: 5
            })
            .end((err, res) => {
                const { body, status } = res
                if (err) {
                    return done(err)
                }
                expect(status).toBe(404)
                expect(typeof body).toBe('object')
                expect(body).toHaveProperty('message', 'Page Not Found!')
                return done()
            })
        })
    })
})

describe('Generate Italian Words | GET /parola', () => {
    describe('GET /parola/easy?wordmax=5', () => {
        test('Returning array of italian words with length = 5, and each word length <= 4', done => {
            request(app)
            .get('/parola/easy')
            .query({
                wordmax: 5
            })
            .end((err, res) => {
                const { body, status } = res
                if (err) {
                    return done(err)
                }
                expect(status).toBe(200)
                expect(typeof body).toBe('object')
                expect(body).toHaveLength(5)
                body.forEach(word => {
                    expect(word.length).toBeLessThanOrEqual(4)
                })
                return done()
            })
        })
    })

    describe('GET /parola/medium?wordmax=10', () => {
        test('Returning array of italian words with length = 10, and each word length >= 4 & <=6', done => {
            request(app)
            .get('/parola/medium')
            .query({
                wordmax: 10
            })
            .end((err, res) => {
                const { body, status } = res
                if (err) {
                    return done(err)
                }
                expect(status).toBe(200)
                expect(typeof body).toBe('object')
                expect(body).toHaveLength(10)
                body.forEach(word => {
                    expect(word.length).toBeGreaterThanOrEqual(4)
                    expect(word.length).toBeLessThanOrEqual(6)
                })
                return done()
            })
        })
    })

    describe('GET /parola/hard?wordmax=15', () => {
        test('Returning array of italian words with length = 15, and each word length >= 6', done => {
            request(app)
            .get('/parola/hard')
            .query({
                wordmax: 15
            })
            .end((err, res) => {
                const { body, status } = res
                if (err) {
                    return done(err)
                }
                expect(status).toBe(200)
                expect(typeof body).toBe('object')
                expect(body).toHaveLength(15)
                body.forEach(word => {
                    expect(word.length).toBeGreaterThanOrEqual(6)
                })
                return done()
            })
        })
    })

    describe('GET /parola', () => {
        test('Returning status 404 with Page Not Found message', done => {
            request(app)
            .get('/parola/easy')
            .query({
                wordmaxxxx: 5
            })
            .end((err, res) => {
                const { body, status } = res
                if (err) {
                    return done(err)
                }
                expect(status).toBe(404)
                expect(typeof body).toBe('object')
                expect(body).toHaveProperty('message', 'Page Not Found!')
                return done()
            })
        })
    })

    describe('GET /parola', () => {
        test('Returning status 404 with Page Not Found message', done => {
            request(app)
            .get('/parola/medium')
            .query({
                randomWord: 5
            })
            .end((err, res) => {
                const { body, status } = res
                if (err) {
                    return done(err)
                }
                expect(status).toBe(404)
                expect(typeof body).toBe('object')
                expect(body).toHaveProperty('message', 'Page Not Found!')
                return done()
            })
        })
    })

    describe('GET /parola', () => {
        test('Returning status 404 with Page Not Found message', done => {
            request(app)
            .get('/parola/hard')
            .query({
                asdf: 5
            })
            .end((err, res) => {
                const { body, status } = res
                if (err) {
                    return done(err)
                }
                expect(status).toBe(404)
                expect(typeof body).toBe('object')
                expect(body).toHaveProperty('message', 'Page Not Found!')
                return done()
            })
        })
    })
})

describe('Generate Spanish Words | GET /palabra', () => {
    describe('GET /palabra/easy?wordmax=5', () => {
        test('Returning array of spanish words with length = 5, and each word length <= 4', done => {
            request(app)
            .get('/palabra/easy')
            .query({
                wordmax: 5
            })
            .end((err, res) => {
                const { body, status } = res
                if (err) {
                    return done(err)
                }
                expect(status).toBe(200)
                expect(typeof body).toBe('object')
                expect(body).toHaveLength(5)
                body.forEach(word => {
                    expect(word.length).toBeLessThanOrEqual(4)
                })
                return done()
            })
        })
    })

    describe('GET /palabra/medium?wordmax=10', () => {
        test('Returning array of spanish words with length = 10, and each word length >= 4 & <=6', done => {
            request(app)
            .get('/palabra/medium')
            .query({
                wordmax: 10
            })
            .end((err, res) => {
                const { body, status } = res
                if (err) {
                    return done(err)
                }
                expect(status).toBe(200)
                expect(typeof body).toBe('object')
                expect(body).toHaveLength(10)
                body.forEach(word => {
                    expect(word.length).toBeGreaterThanOrEqual(4)
                    expect(word.length).toBeLessThanOrEqual(6)
                })
                return done()
            })
        })
    })

    describe('GET /palabra/hard?wordmax=15', () => {
        test('Returning array of spanish words with length = 15, and each word length >= 6', done => {
            request(app)
            .get('/palabra/hard')
            .query({
                wordmax: 15
            })
            .end((err, res) => {
                const { body, status } = res
                if (err) {
                    return done(err)
                }
                expect(status).toBe(200)
                expect(typeof body).toBe('object')
                expect(body).toHaveLength(15)
                body.forEach(word => {
                    expect(word.length).toBeGreaterThanOrEqual(6)
                })
                return done()
            })
        })
    })

    describe('GET /palabra', () => {
        test('Returning status 404 with Page Not Found message', done => {
            request(app)
            .get('/palabra/easy')
            .query({
                wordmaxxxx: 5
            })
            .end((err, res) => {
                const { body, status } = res
                if (err) {
                    return done(err)
                }
                expect(status).toBe(404)
                expect(typeof body).toBe('object')
                expect(body).toHaveProperty('message', 'Page Not Found!')
                return done()
            })
        })
    })

    describe('GET /palabra', () => {
        test('Returning status 404 with Page Not Found message', done => {
            request(app)
            .get('/palabra/medium')
            .query({
                randomWord: 5
            })
            .end((err, res) => {
                const { body, status } = res
                if (err) {
                    return done(err)
                }
                expect(status).toBe(404)
                expect(typeof body).toBe('object')
                expect(body).toHaveProperty('message', 'Page Not Found!')
                return done()
            })
        })
    })

    describe('GET /palabra', () => {
        test('Returning status 404 with Page Not Found message', done => {
            request(app)
            .get('/palabra/hard')
            .query({
                asdf: 5
            })
            .end((err, res) => {
                const { body, status } = res
                if (err) {
                    return done(err)
                }
                expect(status).toBe(404)
                expect(typeof body).toBe('object')
                expect(body).toHaveProperty('message', 'Page Not Found!')
                return done()
            })
        })
    })
})