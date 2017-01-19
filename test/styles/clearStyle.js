import { assert } from 'chai'
import Chirashi from 'chirashi'

describe('chirashi#clearStyle', () => {
  it('should be a function', () => {
    assert.isFunction(Chirashi.clearStyle)
  })

  it('should clear element\'s style property', () => {
    let div = document.createElement('div')
    div.classList.add('clear-style', 'test')

    Object.assign(div.style, {
      display: 'block',
      position: 'relative',
      top: '10px'
    })

    Chirashi.clearStyle(div, 'display, position')
    assert.equal(div.style.display, '', 'should clear using string')

    Chirashi.clearStyle(div, ['top'])
    assert.equal(div.style.top, '', 'should clear using array')
  })
})
