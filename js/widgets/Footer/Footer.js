import { Text } from '../../shared/ui/index.js';
import { LogoFooter, Developer } from '../../features/index.js';

/** @typedef {import('./types').Props} Props */

/**
 * @function Footer
 * @param {Props} data 
 * @returns {string}
 */

export const Footer = (data) => {

  const dataValues = Object.values(data);
  if (dataValues.length !== 3) return '';
  const { texts, developer } = data;
  const className = 'footer';

  return `
    <footer class="${className}">
      <div class="${className}__wrapper">
        <div class="${className}__columns">
        </div>
        <div class="${className}__info">
          ${LogoFooter()}
          ${texts?.length > 0 ? texts.map((text) => Text(text, className)).join('') : ''}
          ${Developer(developer, className)}
        </div>
      </div>
    </footer>
  `;
};
