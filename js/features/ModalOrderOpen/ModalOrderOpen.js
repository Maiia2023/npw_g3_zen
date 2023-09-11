import { Button } from '../../shared/ui/index.js';

/**
 * @function ModalOrderOpen
 * @param {string | undefined} buttonText 
 * @returns {string}
 */

export const ModalOrderOpen = (buttonText) => {
  const currentChildren = buttonText
    ? buttonText
    : 'Order a consultation';

  const buttonProps = {
    buttonId: 'modal-order-open',
    children: currentChildren,
    className: 'order-open',
  };

  return `
    ${Button(buttonProps)}
  `;
};
