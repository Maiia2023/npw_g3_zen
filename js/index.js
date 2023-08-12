import { data } from './data.js';

import { 
  Header,
  SectionPrimary,
  SectionSecondary }
from './widgets/index.js';

import { 
  handleThemeClick,
} from './handlers.js';

const root = document.querySelector('#root');

const { en } = data;

root.insertAdjacentHTML('beforeend', Header(en.header));
root.insertAdjacentHTML('beforeend', SectionPrimary(en.download));
root.insertAdjacentHTML('beforeend', SectionPrimary(en.warranty));
root.insertAdjacentHTML('beforeend', SectionPrimary(en.care));
root.insertAdjacentHTML('beforeend', SectionSecondary(en.cashback));

const $theme = document.querySelector('#theme');
$theme.addEventListener('click', handleThemeClick);

