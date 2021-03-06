import { assert } from 'chai'
import { removeClass } from 'chirashi'

describe('chirashi#removeClass', () => {
  it('should be a function', () => {
    assert.isFunction(removeClass)
  })

  it('should apply class on element', () => {
    const maki = document.createElement('div')
    maki.classList.add('salmon')
    maki.classList.add('cheese')
    removeClass(maki, 'cheese', 'salmon')

    assert.isFalse(maki.classList.contains('cheese'))
    assert.isFalse(maki.classList.contains('salmon'))
  })
})
