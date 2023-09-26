import { data } from './data.js';

import { 
  Header,
  SectionPrimary,
  SectionSecondary,
  SectionTertiary,
  SectionOrder,
  Footer,
} from './widgets/index.js';

import { 
  handleThemeClick,
  handleBurgerClick,
  handleModalOrderOpenClick,
  handleModalOrderCloseClick,
  handleNameInput,
  handleTelInput,
  handleEmailInput,
  handleConnectionChange,
  handleOrderFormClick,
  handleOrderFormKeyup,
  handleOrderFormSubmit,
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
root.insertAdjacentHTML('beforeend', Footer(en.footer));

const $theme = document.querySelector('#theme');
$theme.addEventListener('click', handleThemeClick);

const $burger = document.querySelector('#burger');
$burger.addEventListener('click', handleBurgerClick);

const $modalOrderOpen = document.querySelector('#modal-order-open');
$modalOrderOpen.addEventListener('click', handleModalOrderOpenClick);

const $modalOrderClose = document.querySelector('#modal-order-close');
$modalOrderClose.addEventListener('click', handleModalOrderCloseClick);


const $orderForm = document.querySelector('#order-form');
$orderForm.addEventListener('click', handleOrderFormClick);
$orderForm.addEventListener('keyup', handleOrderFormKeyup);
$orderForm.addEventListener('submit', handleOrderFormSubmit);

const $inputName = document.querySelector('#input-name');
$inputName.addEventListener('input', handleNameInput);

const $inputTel = document.querySelector('#input-tel');
$inputTel.addEventListener('input', handleTelInput);

const $inputEmail = document.querySelector('#input-email');
$inputEmail.addEventListener('input', handleEmailInput);

const $Connection = document.querySelector('#select-connection');
$Connection.addEventListener('change', handleConnectionChange);
