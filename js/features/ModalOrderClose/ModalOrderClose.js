import { Button } from '../../shared/ui/index.js';
import { IconClose } from '../../shared/icons/index.js';

/**
 * @function ModalOrderClose
 * @returns {string}
 */

export const ModalOrderClose = () => {
  const buttonProps = {
    buttonId:'modal-order-close',
    className: 'order-close',
    children: IconClose(),
  };
  return `
    ${Button(buttonProps)}
  `;
};
