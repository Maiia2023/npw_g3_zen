import { IconLogoFooter } from '../../shared/icons/index.js';

/**
 * @function LogoFooter
 * @returns {string}
 */

export const LogoFooter = () => {

  const className = 'footer';

  return `
    <button class="${className}__logo" id="logo-footer">
      ${IconLogoFooter()}
    </button>
  `;
};
