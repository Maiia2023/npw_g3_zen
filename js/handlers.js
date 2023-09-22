import { data } from './data.js';
import { IconSun, IconMoon } from './shared/icons/index.js';

/**
 * @function handleThemeClick
 * @param {Event} event
 * @returns {void}
 */

export const handleThemeClick = (event) => {
  const { currentTarget } = event;
  const { theme } = currentTarget.dataset;
  const $root = document.getElementById('root');
  const $header = document.getElementById('header');
  const { brands } = data.en.clients;

  const $brands = [...document.querySelectorAll('img[data-type="brand"]')];

  if (theme === 'light') {
    currentTarget.dataset.theme = 'dark';
    currentTarget.innerHTML = IconSun();

    $root.classList.add('dark');
    $root.classList.remove('light');

    $header.classList.add('dark');
    $header.classList.remove('light');

    $brands.forEach(($brand, index) => {
      $brand.src = brands['dark'][index].source;
    });
  };

  if (theme === 'dark') {
    currentTarget.dataset.theme = 'light';
    currentTarget.innerHTML = IconMoon();

    $root.classList.add('light');
    $root.classList.remove('dark');

    $header.classList.add('light');
    $header.classList.remove('dark');

    $brands.forEach(($brand, index) => {
      $brand.src = brands['light'][index].source;
    });
  };
};

/**
 * @function handleBurgerClick
 * @param {Event} event
 * @returns {void}
 */

export const handleBurgerClick = (event) => {
  const {currentTarget} = event;
  currentTarget.classList.contains('active');
  const $menu = document.querySelector('#menu');
  
  if (currentTarget.classList.contains('active')) {
    $menu.classList.add('active');
  };

  if (!currentTarget.classList.contains('active')) {
    $menu.classList.remove('active');
  };
};

/**
 * @function handleModalOrderOpenClick
 * @param {Event} event
 * @returns {void}
 */

export const handleModalOrderOpenClick = ({ currentTarget }) => {
  const $sectionModalOrder = document.getElementById('section-order');
  $sectionModalOrder.classList.add('visible');
  currentTarget.disabled = true;
};

/**
 * @function handleModalCloseOrderClick
 * @param {Event} event
 * @returns {void}
 */

export const handleModalOrderCloseClick = ({ currentTarget }) => {
  const $sectionModalOrder = document.getElementById('section-order');
  const $modalOrderOpen = document.querySelector('#modal-order-open');
  $sectionModalOrder.classList.remove('visible');
  $modalOrderOpen.disabled = false;
};

/**
 * @function handleOrderFormClick
 * @param {Event}
 * @returns {void} 
 */

export const handleOrderFormClick = ({ currentTarget }) => {
  const $submit = document.querySelector('#submit');
  const isNameValid = currentTarget.elements.name.dataset.valid === 'true';
  const isTelValid = currentTarget.elements.tel.dataset.valid === 'true';
  const isEmailValid = currentTarget.elements.email.dataset.valid === 'true';
  const isConnectionValid = currentTarget.elements.connection.dataset.valid === 'true';
  const isPrivacyChecked = currentTarget.elements.privacy.checked;

  const isFieldsValid = 
    isNameValid &&
    isTelValid &&
    isEmailValid &&
    isConnectionValid &&
    isPrivacyChecked;

  $submit.disabled = !isFieldsValid;
};

/**
 * @function handleOrderFormKeyup
 * @param {Event}
 * @returns {void} 
 */

export const handleOrderFormKeyup = ({ currentTarget }) => {
  const $submit = document.querySelector('#submit');
  const isNameValid = currentTarget.elements.name.dataset.valid === 'true';
  const isTelValid = currentTarget.elements.tel.dataset.valid === 'true';
  const isEmailValid = currentTarget.elements.email.dataset.valid === 'true';
  const isConnectionValid = currentTarget.elements.connection.dataset.valid === 'true';
  const isPrivacyChecked = currentTarget.elements.privacy.checked;

  const isFieldsValid = 
    isNameValid &&
    isTelValid &&
    isEmailValid &&
    isConnectionValid &&
    isPrivacyChecked;

  $submit.disabled = !isFieldsValid;
};

/**
 * @function handleOrderFormSubmit
 * @param {Event}
 * @returns {void} 
 */

export const handleOrderFormSubmit = (event) => {
  event.preventDefault();
  const { elements } = event.currentTarget;  
  const order = {
    name: elements.name.value,
    tel: elements.tel.value,
    email: elements.email.value,
    connection: elements.connection.value,
  };
};

/**
 * @function handleNameInput
 * @param {Event} event
 * @returns {void}
 */

export const handleNameInput = ({ currentTarget }) => {
  const { value } = currentTarget;

  if (!value.length) {
    currentTarget.dataset.valid = false;
    currentTarget.parentElement.classList.remove('valid');
    currentTarget.parentElement.classList.remove('invalid');
  };
  if (value.length === 1) {
    currentTarget.dataset.valid = false;
    currentTarget.parentElement.classList.remove('valid');
    currentTarget.parentElement.classList.add('invalid');
  };
  if (value.length > 1) {
    currentTarget.dataset.valid = true;
    currentTarget.parentElement.classList.remove('invalid');
    currentTarget.parentElement.classList.add('valid');
  };
};

/**
 * @function handleTellInput
 * @param {Event} event
 * @returns {void}
 */

export const handleTelInput = ({ currentTarget }) => {
const { value }= currentTarget;
  const regexpTel = /^[0-9]{11}$/;

  if (!value.length) {
    currentTarget.dataset.valid = false;
    currentTarget.parentElement.classList.remove('invalid');
    currentTarget.parentElement.classList.remove('valid');
  };
  if (value.length && value.length !== 11) {
    currentTarget.dataset.valid = false;
    currentTarget.parentElement.classList.remove('valid');
    currentTarget.parentElement.classList.add('invalid');
  };
  if (regexpTel.test(value)) {
    currentTarget.dataset.valid = true;
    currentTarget.parentElement.classList.remove('invalid');
    currentTarget.parentElement.classList.add('valid');
  };
};

/**
 * @function handleEmailInput
 * @param {Event} event
 * @returns {void}
 */

export const handleEmailInput = ({ currentTarget }) => {
  const { value } = currentTarget;
  const regexpEmail = /^\S+@\S+\.\S{2,4}$/i;

  if (!value.length) {
    currentTarget.dataset.valid = false;
    currentTarget.parentElement.classList.remove('valid');
    currentTarget.parentElement.classList.remove('invalid');
  };
  if (value.length) {
    currentTarget.dataset.valid = false;
    currentTarget.parentElement.classList.remove('valid');
    currentTarget.parentElement.classList.add('invalid');
  };
  if (regexpEmail.test(value)) {
    currentTarget.dataset.valid = true;
    currentTarget.parentElement.classList.remove('invalid');
    currentTarget.parentElement.classList.add('valid');
  };
};

/**
 * @function handleConnectionChange
 * @param {Event} event
 * @returns {void}
 */

export const handleConnectionChange = ({currentTarget}) => {
  const { value } = currentTarget;

  if (!value.length) {
    currentTarget.dataset.valid = false;
    currentTarget.parentElement.classList.remove('valid');
    currentTarget.parentElement.classList.remove('invalid');
  };
  if (value.length) {
    currentTarget.dataset.valid = true;
    currentTarget.parentElement.classList.remove('invalid');
    currentTarget.parentElement.classList.add('valid');
  };
