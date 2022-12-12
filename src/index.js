import DOM from './DOM';
import { materialIcons } from './DOM';

function component() {
  
  document.head.insertAdjacentElement('afterbegin',materialIcons());
  const elements = DOM();
  for(const element of elements) {
    document.body.appendChild(element);
  }
}

component();