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
    <section class="${className}">
      ${title ? Title(title, className) : ''}
      ${texts.length > 0 ? texts.map((text) => Text(text, className)).join('') : ''}
      ${apple ? BrandLink(apple, 'apple', className) : ''}
      ${google ? BrandLink(google, 'google', className) : ''}
      ${image ? Image(image, className) : ''}
    </section>
  `;
};
