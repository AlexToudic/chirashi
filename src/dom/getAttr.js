import { getSelector } from '../core';

export function getAttr (element, name) {
  if (typeof element == 'string') element = getSelector(element);

  return element && element.getAttribute && element.getAttribute(name);
}