/** @typedef {import('./types').Brand} Brand */

/**
 * @function BrandClient
 * @param {Brand} brand
 * @param {string} parentClassName
 * @returns {string}
 */

export const BrandClient = (brand, parentClassName) => {
  
  if (Object.values(brand).length !== 2) return '';

  const {source, description} = brand;

  const currentClassName = parentClassName
    ? `${parentClassName}__brand` 
    : 'brand';

  return `
    <img
      data-type="brand"
      src="${source}"
      alt="${description}"
    />
  `;
};
