/**
 * @function ModalOrder
 * @returns {string}
 */

export const ModalOrder = () => {
  return `
    <div class="modal" id="modal">
      <div class="modal-reset">
        <button class="reset-button" type="reset" id="modal-order-close" data-button="active"></button>
      </div>
      <h3 class="modal__title">Order a consulation</h3>
      <form id="order-form" class="form">
        <label class="form__field">
          <input id="input-name" type="text" placeholder="Name">
        </label>
        <label class="form__field">
          <input id="input-tel" type="tel" placeholder="Tel.">
        </label>
        <label class="form__field">
          <input id="input-email" type="email" placeholder="E-mail">
        </label>
        <label class="form__field">
          <select class="select" name="connection" id="select-connection">
            <option disabled selected value>Connection</option>
            <option value="phone">Phone</option>
            <option value="email">E-mail</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="telegram">Telegram</option>
          </select>
        </label>
        <label class="form__field">
          <input id="privacy" type="checkbox" checked name="privacy">
          <a href="#">Privacy policy</a>
        </label>
        <button type="submit"
        class="form__submit"
        disables="true"
        >
          Submit
        </button>
      </form>
    </div>
  `;
};
