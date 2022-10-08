const request = require('supertest')

process.env.NODE_ENV = 'test'

require('../src/config')
const app = require('../src/app')

describe('Ping the server', () => {
  it('returns status 200 on successful ping', async () => {
    const res = await request(app).get('/ping')
    expect(res.status).toBe(200)
  })

  it('returns text pong on successful ping', async () => {
    const res = await request(app).get('/ping')
    expect(res.text).toBe('pong')
  })
})
