process.env.NODE_ENV = 'test'

describe('Sanity test', () => {
  it('returns 4 when adding 2 and 2', () => {
    const res = 2 + 2
    expect(res).toBe(4)
  })
})
