import { data } from './data.js';

import { 
  Header,
  SectionPrimary,
  SectionSecondary,
  SectionTertiary,
  SectionOrder,
} from './widgets/index.js';

import { 
  handleThemeClick,
  handleBurgerClick,
  handleModalOrderOpenClick,
  handleModalOrderCloseClick,
} from './handlers.js';

const root = document.querySelector('#root');

const { en } = data;

root.insertAdjacentHTML('beforeend', Header(en.header));
root.insertAdjacentHTML('beforeend', SectionPrimary(en.download));
root.insertAdjacentHTML('beforeend', SectionPrimary(en.warranty));
root.insertAdjacentHTML('beforeend', SectionPrimary(en.care));
root.insertAdjacentHTML('beforeend', SectionSecondary(en.cashback));
root.insertAdjacentHTML('beforeend', SectionTertiary(en.clients));
root.insertAdjacentHTML('beforeend', SectionOrder());

const $theme = document.querySelector('#theme');
$theme.addEventListener('click', handleThemeClick);

const $burger = document.querySelector('#burger');
$burger.addEventListener('click', handleBurgerClick);

const $modalOrderOpen = document.querySelector('#modal-order-open');
$modalOrderOpen.addEventListener('click', handleModalOrderOpenClick);

const $modalOrderClose = document.querySelector('#modal-order-close');
$modalOrderClose.addEventListener('click', handleModalOrderCloseClick);


