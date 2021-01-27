const request = require('supertest')
const app = require('../app.js')
const LeaderboardModel = require('../models/leaderboard')

beforeAll(done => {
  LeaderboardModel.insertMany([
    {
      name: 'Tester',
      score: 20,
      difficulty: 'Medium',
      language: 'English'
    },
    {
      name: 'Mencoba',
      score: 13,
      difficulty: 'Easy',
      language: 'French'
    },
    {
      name: 'Cheater',
      score: 99,
      difficulty: 'Hard',
      language: 'Italian'
    }
  ]).then(data => {
    done()
  }).catch(err => done(err))
})

afterAll(done => {
  LeaderboardModel.drop()
  .then(data => {
    done()
  }).catch(err => done(err))
})

describe('GET /leaderboard', () => {
  test('Total length is 3', (done) => {
    request(app)
      .get('/leaderboard')
      .end((err,res) => {
        if (err) return done(err)
        expect(res.status).toBe(200)
        expect(res.body.leaderboard.length).toBe(3)
        done()
      })
  })

  test('Find index 0 is Tester', (done) => {
    request(app)
      .get('/leaderboard')
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).toBe(200)
        expect(res.body).toHaveProperty(['leaderboard', 0, 'name'], 'Tester')
        done()
      })
  })

  test('Find Mencoba language is French', (done) => {
    request(app)
      .get('/leaderboard')
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).toBe(200)
        expect(res.body.leaderboard[1].language).toBe('French')
        done()
      })
  })

  test('Find Cheater score is not 13', (done) => {
    request(app)
      .get('/leaderboard')
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).toBe(200)
        expect(res.body.leaderboard[2].score).not.toBe(13)
        done()
      })
  })

  test('Must have a key: name, score, difficulty, language', (done) => {
    request(app)
      .get('/leaderboard')
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).toBe(200)
        res.body.leaderboard.forEach(list => {
          expect(list).toHaveProperty('name')
          expect(list).toHaveProperty('score')
          expect(list).toHaveProperty('difficulty')
          expect(list).toHaveProperty('language')
        })
        done()
      })
  })
})

describe('POST /leaderboard', () => {
  test('Success adding to leaderboard', (done) => {
    request(app)
      .post('/leaderboard')
      .send({
        name: 'Test Post',
        score: 30,
        difficulty: 'Hard',
        language: 'Spanish'
      })
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).toBe(201)
        expect(res.body).toHaveProperty(['leaderboard', 'name'], 'Test Post')
        expect(res.body).toHaveProperty(['leaderboard', 'score'], 30)
        expect(res.body).toHaveProperty(['leaderboard', 'difficulty'], 'Hard')
        expect(res.body).toHaveProperty(['leaderboard', 'language'], 'Spanish')
        done()
      })
  })

  test('Name Required', (done) => {
    request(app)
      .post('/leaderboard')
      .send({
        score: 30,
        difficulty: 'Hard',
        language: 'English'
      })
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).toBe(400)
        expect(res.body.message).toBe('Name Required')
        done()
      })
  })

  test('Score Required', (done) => {
    request(app)
      .post('/leaderboard')
      .send({
        name: 'helloworld',
        difficulty: 'Hard',
        language: 'French'
      })
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).toBe(400)
        expect(res.body.message).toBe('Score Required')
        done()
      })
  })

  test('Difficulty Required', (done) => {
    request(app)
      .post('/leaderboard')
      .send({
        name: 'miasma',
        score: 30,
        language: 'Italian'
      })
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).toBe(400)
        expect(res.body.message).toBe('Difficulty Required')
        done()
      })
  })

  test('Language Required', (done) => {
    request(app)
      .post('/leaderboard')
      .send({
        name: 'miasma',
        score: 30,
        difficulty: 'Hard',
      })
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).toBe(400)
        expect(res.body.message).toBe('Language Required')
        done()
      })
  })

  test('Name is too long', (done) => {
    request(app)
      .post('/leaderboard')
      .send({
        name: 'INIKARAKTERTERLALUPANJANG',
        score: 30,
        difficulty: 'Hard',
        language: 'Italian'
      })
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).toBe(400)
        expect(res.body.message).toBe('Name Cannot be More Than 10 Characters')
        done()
      })
  })

  test('Invalid Difficulty', (done) => {
    request(app)
      .post('/leaderboard')
      .send({
        name: 'NoobMaster',
        score: 30,
        difficulty: 'Ngawur',
        language: 'French'
      })
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).toBe(400)
        expect(res.body.message).toBe('Invalid Difficulty')
        done()
      })
  })

  test('Invalid Language', (done) => {
    request(app)
      .post('/leaderboard')
      .send({
        name: 'NoobMaster',
        score: 30,
        difficulty: 'Easy',
        language: 'Indonesia'
      })
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).toBe(400)
        expect(res.body.message).toBe('Invalid Language')
        done()
      })
  })

  test('Score Must be a Number', (done) => {
    request(app)
      .post('/leaderboard')
      .send({
        name: 'NoobMaster',
        score: '40',
        difficulty: 'Easy',
        language: 'Spanish'
      })
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).toBe(400)
        expect(res.body.message).toBe('Score Must be a Number')
        done()
      })
  })

  test('Score Must be an Integer', (done) => {
    request(app)
      .post('/leaderboard')
      .send({
        name: 'NoobMaster',
        score: 3.14,
        difficulty: 'Easy',
        language: 'English'
      })
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).toBe(400)
        expect(res.body.message).toBe('Score Must be an Integer')
        done()
      })
  })

  test('Score Must not negative', (done) => {
    request(app)
      .post('/leaderboard')
      .send({
        name: 'Negative',
        score: -1,
        difficulty: 'Easy',
        language: 'Spanish'
      })
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).toBe(400)
        expect(res.body.message).toBe('Score Must not Negative')
        done()
      })
  })
})