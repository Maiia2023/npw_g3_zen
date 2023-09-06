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
 * @function handleNameInput
 * @param {Event} event
 * @returns {void}
 */

export const handleNameInput = (event) => {
  const { currentTarget } = event;
  const { value } = currentTarget;

  if (!value.length) {
    currentTarget.dataset.valid = false;
    currentTarget.parentElement.lassList.remove('invalid');
    currentTarget.parentElement.lassList.remove('valid');
  };

  if (value.length === 1) {
    currentTarget.dataset.valid = false;
    currentTarget.parentElement.lassList.remove('valid');
    currentTarget.parentElement.lassList.add('invalid');
  };  

  if (value.length > 1) {
    currentTarget.dataset.valid = true;
    currentTarget.parentElement.lassList.remove('invalid');
    currentTarget.parentElement.lassList.add('valid');
  };
};
