const request = require('supertest')

process.env.NODE_ENV = 'test'

require('../src/config')
const app = require('../src/app')

describe('Call to root endpoint', () => {
  it('returns status 200 on successful call', async () => {
    const res = await request(app).get('/')
    expect(res.status).toBe(200)
  })

  it('returns text OK on successful call', async () => {
    const res = await request(app).get('/')
    expect(res.text).toBe('OK')
  })
})
