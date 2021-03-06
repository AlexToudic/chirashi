import { assert } from 'chai'
import { next } from 'chirashi'

describe('chirashi#next', () => {
  it('should be a function', () => {
    assert.isFunction(next)
  })

  it('should return element\'s next', () => {
    const maki = document.createElement('div')
    maki.id = 'next-maki'
    const salmon = document.createElement('div')
    maki.appendChild(salmon)
    const cheese = document.createElement('div')
    maki.appendChild(cheese)

    assert.equal(next(salmon), cheese)
  })
})
