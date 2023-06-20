/**
 * @function BrandLink
 * @typedef {Object} link
 * @property {string} url
 * @property {string} type
 * @param {link} link 
 * @param {string} className 
 * @returns {string} HTML or empty
 */

export const BrandLink = (link, className) => {
  if (!link) return '';
  return`
  <a
    href="${link.url}"
    class="${className}"
  >
      ${link.type === 'apple' && IconApple ()};
      ${link.type === 'google' && IconGoogle ()};
  </a>
  `;
};
