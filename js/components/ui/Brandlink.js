/**
 * @typedef {Object} link
 * @property {string} url
 * @property {string} type
 */

/**
 * @function BrandLink
 * @param {link} link 
 * @param {string} className 
 * @returns {string} HTML or empty
 */

export const BrandLink = (link, className) => {
  if (Object.values(link).length !== 2) return '';

  const {url, type} = link;

  return`
    <a
      href="${url}"
      class="${className}"
    >
      ${type === 'apple' && IconApple ()};
      ${type === 'google' && IconGoogle ()};
    </a>
  `;
};
