import { ModalOrderForm } from '../../features/index.js';

/**
 * @function SectionOrder
 * @returns {string}
 */

export const SectionOrder = () => {

  return `
    <section class="section-order" id="section-order">
      <div class="modal" id="modal-order">
        <h3 class="modal__title">
          Order a consulation
        </h3>
        ${ModalOrderForm()}
      </div>
    </section>
  `;
};
