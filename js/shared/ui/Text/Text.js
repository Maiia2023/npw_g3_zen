/**
 * @function Text
 * @param {string} text
 * @param {string} parentClassName
 * @returns {string}
 */

export const Text = (text, parentClassName) => {
  if (!text) return '';

  const currentClassName = parentClassName
    ? `${parentClassName}__copy` 
    : 'copy';

  return `
    <p class="${currentClassName}">${text}</p>
  `;
};
