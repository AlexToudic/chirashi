import forElements from '../core/for-elements';
import on from './on';

export function hover (elements, enter, leave) {
  forElements(elements, (element) => {
    if (enter) on(element, 'mouseenter', enter);
    if (leave) on(element, 'mouseleave', leave);
  });
}

export default hover;
