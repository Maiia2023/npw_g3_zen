import { ModalOrder } from '../../features/index.js';

/**
 * @function Order
 * @returns {string}
 */

export const Order = () => {

  return `
    <section class="order" id="order">
      ${ModalOrder()}
    </section>
  `;
};
