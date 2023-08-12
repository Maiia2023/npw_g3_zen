import { IconApple, IconGoogle } from '../../shared/Icons/index.js';

/** @typedef {import('./types.js').Link} Link */

/**
 * @function BrandLink
 * @param {Link} link
 * @param {'apple' | 'google'} type
 * @param {string} parentClassName
 * @returns {string} html or empty
 */

export const BrandLink = (link, type, parentClassName) => {

  if (!('url' in link)) return '';

  const { url } = link;

  const currentClassName = parentClassName
    ? `${parentClassName}__link`
    : 'link';

  return `
    <a 
      href="${url}"
      class="${currentClassName}"
    >
      ${type === 'apple' ? IconApple() : IconGoogle()}
    </a>
  `;
};
