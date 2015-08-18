import forEach from '../core/forEach';

export function setSize (elements, width, height) {
  if (typeof width == 'number') width += 'px';
  if (typeof height == 'number') height += 'px';

  forEach(elements, (element) => {
    element.style.width = width;
    element.style.height = height;
  });
}
