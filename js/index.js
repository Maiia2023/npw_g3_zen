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
  handleNameInput,
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
const $burger = document.querySelector('#burger');
$theme.addEventListener('click', handleThemeClick);
$burger.addEventListener('click', handleBurgerClick);

const $inputName = document.querySelector('#input-name');
$inputName.addEventListener('input', handleNameInput);

const $inputTel = document.querySelector('#input-tel');

const $inputEmail = document.querySelector('#input-email');

const $selectConnection = document.querySelector('#select-connection');

const $orderForm = document.querySelector('#order-form');
$orderForm.addEventListener('keyup', () => console.log('form keyup'));
$orderForm.addEventListener('click', () => console.log('form click'));
