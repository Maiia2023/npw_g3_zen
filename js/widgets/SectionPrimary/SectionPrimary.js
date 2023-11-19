import {
  Title,
  Text,
  Image,
} from '../../shared/ui/index.js';

import { BrandLink } from '../../features/index.js';

/** @typedef {import('./types').Props } Props */

/**
 * @function SectionPrimary
 * @param {Props} data
 * @returns {string}
 */

export const SectionPrimary = (data) => {

  const dataValues = Object.values(data);

  if (dataValues.length !== 4 && dataValues.length !== 5) return '';

  const { name, title, texts, image, links } = data;

  const { apple, google } = links || {};

  const className = name
    ? name
    : 'section-primary';

  return `
    <section class="${className}" id="${name}">
      <div class="${className}__wrapper">
        <div class="${className}__text-block">
          ${title ? Title(title, className) : ''}
          ${texts.length > 0 ? texts.map((text) => Text(text, className)).join('') : ''}
          <div class="${className}__links">
            ${apple ? BrandLink(apple, 'apple', className) : ''}
            ${google ? BrandLink(google, 'google', className) : ''}
          </div>
        </div>
        ${image ? Image(image, className) : ''}
      </div>
    </section>
  `;
};
