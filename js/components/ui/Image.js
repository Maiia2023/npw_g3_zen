/**
 * @function Image
 * @typedef {Object} Image
 * @property {string} source
 * @property {string} description
 * @param {Image} image 
 * @param {string} parentClassName 
 * @returns {string} HTML or empty
 */

export const Image = (image, parentClassName) => {
  if (Object.values(image).length !== 2) return '';

  const currentClassName = parentClassName
    ? `${parentClassName}__image`
    : 'image';

  return `
  <img 
    class="${currentClassName}"
    src="${image.source}"
    alt="${image.description}"
    >
  `;
};
