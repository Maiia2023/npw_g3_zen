import { Title } from '../../ui/Title/Title.js';
import { Text } from '../../ui/Text/Text.js';
import { Image } from '../../ui/Image/Image.js';
import { BrandLink } from '../../ui/Brandlink/Brandlink.js';

/** @typedef {import('../../../schema/types').SectionPrimary } Data */

/**
 * @function SectionPrimary
 * @param {Data} data
 * @returns {string}
 */

export const SectionPrimary = (data) => {

  const dataValues = Object.values(data);

  if (dataValues.length !== 4 && dataValues.length !== 5) return '';

  const { name, title, texts, image, links } = data;

  const { apple, google } = links;

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
