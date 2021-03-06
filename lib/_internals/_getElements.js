import _chirasizeArray from './_chirasizeArray'
import _nodelistToArray from './_nodelistToArray'

const reg = /^[.#]?[\w-_]+$/

export default function _getElements (from, selector) {
  if (selector.search(reg) === 0) {
    switch (selector[0]) {
      case '.':
        return _nodelistToArray(from.getElementsByClassName(selector.slice(1)))
      case '#':
        const element = from === document ? from.getElementById(selector.slice(1)) : from.querySelector(selector)
        return _chirasizeArray(element ? [element] : [])
      default:
        return _nodelistToArray(from.getElementsByTagName(selector))
    }
  }

  return _nodelistToArray(from.querySelectorAll(selector))
}
