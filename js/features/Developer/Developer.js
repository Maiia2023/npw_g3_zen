import { IconDev } from '../../shared/icons/index.js';

/** @typedef {import('./types').Dev} Dev */

/**
 * @function Developer
 * @param {Dev} dev
 * @returns {string}
 */

export const Developer = (dev) => {

  const { url } = dev;
  const className = 'footer';

  return `
    <a href="${url}" class="${className}__dev">
      ${IconDev()}
    </a>
  `;
};
