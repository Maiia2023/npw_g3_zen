/**
 * @function Button
 * @param {string} buttonText 
 * @param {string} parentClassName 
 * @returns {string}
 */

export const Button = (buttonText, parentClassName) => {
  
  if (!buttonText) return '';

  const currentClassName = parentClassName
    ? `${parentClassName}__button` 
    : 'button';

  return `
    <button 
      class="${currentClassName}" 
      id="modal-order-open"
      data-modal-open="false"
      >
        ${buttonText}
    </button>
  `;
};
