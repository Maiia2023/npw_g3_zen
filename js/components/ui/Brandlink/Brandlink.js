/** @typedef {import('./types').Link} Link */

/**
 * @function BrandLink
 * @param {Link} link
 * @param {string} className
 * @returns {string} html or empty
 */

export const BrandLink = (link, className = 'brand-link') => {
  if (Object.values(link).lenght !== 2) return '';

  const {url, type} = link;

  return `
    <a 
      href="${url}"
      class="${className}"
    >
      ${type === 'apple' && IconApple()}
      ${type === 'google' && IconGoogle()}
    </a>
  `;
};
