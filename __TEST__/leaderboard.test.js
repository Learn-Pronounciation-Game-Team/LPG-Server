const request = require('supertest')
const app = require('../app.js')
const { LeaderboardModel } = require('../models')

beforeAll(done => {
  LeaderboardModel.insertMany([
    {
      name: 'Tester',
      score: 20,
      difficulty: 'Medium'
    },
    {
      name: 'Mencoba',
      score: 13,
      difficulty: 'Easy'
    },
    {
      name: 'Cheater',
      score: 99,
      difficulty: 'Hard'
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

  test('Must have a key: name, score, difficulty', (done) => {
    request(app)
      .post('/leaderboard')
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).toBe(200)
        res.body.leaderboard.forEach(list => {
          expect(list).toHaveProperty('name')
          expect(list).toHaveProperty('score')
          expect(list).toHaveProperty('difficulty')
        })
        done()
      })
  })
})

describe('POST /leaderboard', () => {
  test('Success add to leader board', (done) => {
    request(app)
      .post('/leaderboard')
      .send({
        name: 'Test Post',
        score: 30,
        difficulty: 'Hard'
      })
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).toBe(201)
        expect(res.body).toHaveProperty(['leaderboard', 'name'], 'Test Post')
        expect(res.body).toHaveProperty(['leaderboard', 'score'], '30')
        expect(res.body).toHaveProperty(['leaderboard', 'difficulty'], 'Hard')
        done()
      })
  })

  test('Name Required', (done) => {
    request(app)
      .post('/leaderboard')
      .send({
        score: 30,
        difficulty: 'Hard'
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
        difficulty: 'Hard'
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
        score: 30
      })
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).toBe(400)
        expect(res.body.message).toBe('Difficulty Required')
        done()
      })
  })

  test('Name is to long', (done) => {
    request(app)
      .post('/leaderboard')
      .send({
        name: 'INIKARAKTERTERLALUPANJANG',
        score: 30,
        difficulty: 'Hard'
      })
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).toBe(400)
        expect(res.body.message).toBe('Name Cannot More Than 10 Characters')
        done()
      })
  })

  test('Difficulty Invalid', (done) => {
    request(app)
      .post('/leaderboard')
      .send({
        name: 'NoobMaster',
        score: 30,
        difficulty: 'Ngawur'
      })
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).toBe(400)
        expect(res.body.message).toBe('Difficulty Invalid')
        done()
      })
  })

  test('Score Must be a Number', (done) => {
    request(app)
      .post('/leaderboard')
      .send({
        name: 'NoobMaster',
        score: '40',
        difficulty: 'Easy'
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
        difficulty: 'Easy'
      })
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).toBe(400)
        expect(res.body.message).toBe('Score Must be an Integer')
        done()
      })
  })
})