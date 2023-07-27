import { IconLogo } from './IconLogo.js';

/**
 * @function Logo
 * @param {string} parentClassName 
 * @returns {string}
 */

export const Logo = (parentClassName) => {

  const currentClassName = parentClassName 
    ? `${parentClassName}__logo` 
    : 'logo';

  return `
    <button class="${currentClassName}" id="logo">
      ${IconLogo()}
    </button>
  `;
};
