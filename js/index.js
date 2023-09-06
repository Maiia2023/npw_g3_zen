import { data } from './data.js';

import { 
  Header,
  SectionPrimary,
  SectionSecondary,
  SectionTertiary,
  Order,
} from './widgets/index.js';

import { 
  handleThemeClick,
  handleBurgerClick,
  handleButtonModalOpenOrderClick,
} from './handlers.js';

const root = document.querySelector('#root');

const { en } = data;

root.insertAdjacentHTML('beforeend', Header(en.header));
root.insertAdjacentHTML('beforeend', SectionPrimary(en.download));
root.insertAdjacentHTML('beforeend', SectionPrimary(en.warranty));
root.insertAdjacentHTML('beforeend', SectionPrimary(en.care));
root.insertAdjacentHTML('beforeend', SectionSecondary(en.cashback));
root.insertAdjacentHTML('beforeend', SectionTertiary(en.clients));
root.insertAdjacentHTML('beforeend', Order());

const $theme = document.querySelector('#theme');
$theme.addEventListener('click', handleThemeClick);

const $burger = document.querySelector('#burger');
$burger.addEventListener('click', handleBurgerClick);

const $buttonModalOpenOrder = document.querySelector('#modal-order-open');
$buttonModalOpenOrder.addEventListener('click', handleButtonModalOpenOrderClick);

