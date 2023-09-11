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
 * @function handleButtonModalCloseOrderClick
 * @param {Event} event
 * @returns {void}
 */

export const handleButtonModalCloseOrderClick = ({ currentTarget }) => {
  const isModalClose = currentTarget.dataset.modalClose === 'false';
  const $order = document.getElementById('order');
  
  if (!isModalClose) {
    currentTarget.dataset.modalClose = 'true';
    $order.classList.remove('active');
  };
  if (isModalClose) {
    currentTarget.dataset.modalClose = 'false';
  };
};


/**
 * @function handleNameInput
 * @param {Event} event
 * @returns {void}
 */

export const handleNameInput = (event) => {
  const {currentTarget} = event;
  const {value} = currentTarget;
  // currentTarget.classList.add('valid');
  console.log(currentTarget);
  console.log({value});
};
