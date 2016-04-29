import setAttr from './set-attr'
import getAttr from './get-attr'

/**
 * Get attribute option from element if option is a string,
 * set attributes from option keys to option values on elements
 * if option is an object.
 * @param {string | Array | HTMLElement | window | document | SVGElement} elements - The iterable, selector or dom element
 * @param {string | Object} option - attribute name or attribute names and values association
 * @return {string | Array | HTMLElement | window | document | SVGElement} value or elements - Value for option attribute or elements for chaining
 */
export default function attr (elements, option) {
    if (typeof option == 'object')
        return setAttr(elements, option)
    else
        return getAttr(elements, option)
}
