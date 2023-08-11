import {
  Logo,
  Navigation,
  Lang,
  Theme,
  Burger
} from '../../features/index.js';

/** @typedef {import('./types').Props} Props */

/**
 * @function Header
 * @param {Props} data
 * @returns {string}
 */

export const Header = (data) => {

  const dataValues = Object.values(data);
  if (dataValues.length !== 3) return '';
  const { name, langs, nav } = data;
  const className = name ? name : 'header';

  return `
    <header class="${className}" id="header">
      <div class="${className}__wrapper">
        ${Logo(className)}
        ${Navigation(nav, className)}
        <div class="${className}__buttons">
          ${Lang(className)}
          ${Theme(className)}
          ${Burger(className)}
        </div>
      </div>  
    </header>
  `;
};
