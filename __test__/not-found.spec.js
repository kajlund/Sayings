const request = require('supertest')

process.env.NODE_ENV = 'test'

require('../src/config')
const app = require('../src/app')

describe('When hitting unknown route', () => {
  it('returns status 404', async () => {
    const res = await request(app).get('/pings')
    expect(res.status).toBe(404)
  })

  it('returns an error object', async () => {
    const res = await request(app).get('/pings')
    const expected = {
      success: false,
      message: 'Not Found',
      data: null,
      errors: {
        notFound: 'Not Found',
      },
    }
    expect(res.body).toMatchObject(expected)
  })
})
