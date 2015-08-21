import { getSelector } from '../core';

export function getWidth (element) {
  if (typeof element == 'string') element = getSelector(element);

  return element && element.offsetWidth;
}
