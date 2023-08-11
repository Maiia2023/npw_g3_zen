/** @typedef {import('./types').Image} Image */

/**
 * @function Image
 * @param {Image} image
 * @param {string} parentClassName
 * @returns {string} html or empty
 */

export const Image = (image, parentClassName) => {
  if (Object.values(image).length !== 2) return '';
  
  const {source, description} = image;

  const currentClassName = parentClassName 
    ? `${parentClassName}__image` 
    : 'image';

  return `
    <img 
      class="${currentClassName}"
      src="${source}"
      alt="${description}"
    >
  `;
};
