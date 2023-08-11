/**
 * @function Burger
 * @param {string} parentClassName 
 * @returns {string}
 */

export const Burger = (parentClassName) => {

  const currentClassName = parentClassName
    ? `${parentClassName}__burger`
    : 'burger';

  return `
    <button class="${currentClassName}" id="burger">
      <span></span>
    </button>
  `;
};
