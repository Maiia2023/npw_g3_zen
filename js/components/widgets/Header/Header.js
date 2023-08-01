import { Logo } from '../../features/Logo/Logo.js';
import { Navigation } from '../../features/Navigation/Navigation.js';
import { Lang } from '../../features/Lang/Lang.js';
import { Theme } from '../../features/Theme/Theme.js';
import { Burger } from '../../features/Burger/Burger.js';

/** @typedef {import('./types').HeaderData} Data */

/**
 * @function Header
 * @param {Data} data
 * @returns {string}
 */

export const Header = (data) => {

  const dataValues = Object.values(data);
  if (dataValues.length !== 3) return '';
  const { name, langs, nav } = data;
  const className = name ? name : 'header';

  return `
    <header class="${className}">
      <div class="${className}__wrapper">
        ${Logo(className)}
        ${Navigation(nav, className)}
        <div class="${className}__buttons">
          ${Lang (langs, className)}
          ${Theme(className)}
          ${Burger(className)}
        </div>
      </div>  
    </header>
  `;
};
