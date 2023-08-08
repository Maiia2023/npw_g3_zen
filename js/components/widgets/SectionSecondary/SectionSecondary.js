import { Title } from '../../ui/Title/Title.js';
import { Text } from '../../ui/Text/Text.js';
import { Button } from '../../ui/Button/Button.js';

/** @typedef { import('../../../schema/types').SectionSecondary } Data */

/**
 * @function SectionSecondary
 * @param {Data} data 
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
          ${buttonText ? Button(buttonText, className) : ''}
        </div>
      </div>
    </section>
  `;
};
