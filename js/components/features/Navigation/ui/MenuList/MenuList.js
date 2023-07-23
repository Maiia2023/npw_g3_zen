import { MenuItem } from './ui/MenuItem/MenuItem.js';

/** @typedef {import('../../types').MenuItem} MenuItem */

/**
 * @function MenuList
 * @param {MenuItem[]} menulist
 * @param {string} parrentClassName
 * @returns {string}
 */

export const MenuList = (menulist, parrentClassName) => {
  if (!menulist.length) return '';

  const currentClassName = parrentClassName
    ? `${parrentClassName}__menu`
    : 'menu';

  return `
    <ul class="${currentClassName}">
      ${menulist.map((menuItem) => MenuItem(menuItem, parrentClassName)).join('')}
    </ul>
  `;
};
