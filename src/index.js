import getInfo from './openweather';
import DOM from './DOM';
import { materialIcons } from './DOM';

function component() {
  document.head.appendChild(materialIcons());
  const elements = DOM();
  for(const element of elements) {
    document.body.appendChild(element);
  }
}

component();