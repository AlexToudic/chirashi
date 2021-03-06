import forEach from './forEach'
import getElements from './getElements'

/**
 * Iterates over dom elements and apply callback on each one.
 * @param {(string|Array|NodeList|HTMLCollection|Window|Node)} elements - The iterable, selector or elements. Note that it'll be passed to getElements.
 * @param {forElementsCallback} callback - The function to call for each element.
 * @return {Array} iterable - The getElements' result for chaining.
 * @example //esnext
 * import { createElement, append, forElements } from 'chirashi'
 * const sushi = createElement('.sushi')
 * const unagi = createElement('.unagi')
 * const yakitori = createElement('.yakitori')
 * const sashimi = createElement('.sashimi')
 * append(document.body, [sushi, unagi, yakitori, sashimi])
 * forElements('div', console.log) //returns: [<div class="sushi"></div>, <div class="unagi"></div>, <div class="yakitori"></div>, <div class="sashimi"></div>]
 * // logs:
 * // <div class="sushi"></div> 0
 * // <div class="unagi"></div> 1
 * // <div class="yakitori"></div> 2
 * // <div class="sashimi"></div> 3
 * forElements([yakitori, sashimi], console.log) //returns: [<div class="yakitori"></div>, <div class="sashimi"></div>]
 * // logs:
 * // <div class="yakitori"></div> 0
 * // <div class="sashimi"></div> 1
 * @example //es5
 * var sushi = Chirashi.createElement('.sushi')
 * var unagi = Chirashi.createElement('.unagi')
 * var yakitori = Chirashi.createElement('.yakitori')
 * var sashimi = Chirashi.createElement('.sashimi')
 * Chirashi.append(document.body, [sushi, unagi, yakitori, sashimi])
 * Chirashi.forElements('div', console.log) //returns: [<div class="sushi"></div>, <div class="unagi"></div>, <div class="yakitori"></div>, <div class="sashimi"></div>]
 * // logs:
 * // <div class="sushi"></div> 0
 * // <div class="unagi"></div> 1
 * // <div class="yakitori"></div> 2
 * // <div class="sashimi"></div> 3
 * Chirashi.forElements([yakitori, sashimi], console.log) //returns: [<div class="yakitori"></div>, <div class="sashimi"></div>]
 * // logs:
 * // <div class="yakitori"></div> 0
 * // <div class="sashimi"></div> 1
 */
export default function forElements (elements, callback) {
  return forEach(getElements(elements), callback)
}

/**
 * Callback to apply on element.
 * @callback forElementsCallback
 * @param {Window | document | HTMLElement | SVGElement | Text} element
 * @param {number} index - Index of element in elements.
 */
