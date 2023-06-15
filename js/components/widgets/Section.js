import { Title } from '../ui/Title.js';
import { Text } from '../ui/Text.js';
import { Image } from '../ui/Image.js';

/**
 * @function Section
 * 
 * @typedef {Object} ImageType
 * @property {string} source
 * @property {string} description
 * 
 * @typedef {Object} TitleType
 * @property {number} priority
 * @property {string} content
 * 
 * @typedef {Object} DataType
 * @property {string} name
 * @property {TitleType} title
 * @property {string[]} texts
 * @property {ImageType} image
 * 
 * @param {DataType} data
 * @returns {string} html or empty
 */

export const Section = (data) => {
  if (!data) return '';

  const { name: currentClassName, title, texts, image } = data;

  return `
    <section class="${currentClassName}">
      ${title ? Title(title, currentClassName) : ''}
      ${texts.length ? texts.map((text) => Text(text, currentClassName)).join('') : ''}
      ${image ? Image(image, currentClassName) : ''}
    </section>
  `;
};
