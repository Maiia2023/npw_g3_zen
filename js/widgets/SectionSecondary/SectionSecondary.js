import { ModalOrderOpen } from '../../features/index.js';
import { Title, Text } from '../../shared/ui/index.js';

/** @typedef {import('./types').Props } Props */

/**
 * @function SectionSecondary
 * @param {Props} data 
 * @returns {string}
 */

export const SectionSecondary = (data) => {
  
  const dataValues = Object.values(data);

  if (dataValues.length !== 4) return '';

  const { name, title, texts, buttonText } = data;

  const className = name 
    ? name 
    : 'section-secondary';

  return `
    <section class="${className}">
      <div class="${className}__wrapper">
        <div class="${className}__text-block">
          ${title ? Title(title, className) : ''}
          ${texts.length > 0 ? texts.map((text) => Text(text, className)).join('') : '' }
          ${ModalOrderOpen(buttonText)}
        </div>
      </div>
    </section>
  `;
};
