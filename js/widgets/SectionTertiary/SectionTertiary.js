import {
  Title, 
  BrandClient,
} from '../../shared/ui/index.js';

/** @typedef {import('./types').Props} Props */

/**
 * @function SectionTertiary
 * @param {'light' | 'dark'} theme
 * @param {Props} data 
 * @returns {string}
 */

export const SectionTertiary = (data, theme = 'light') => {

  const dataValues = Object.values(data);

  if (dataValues.length !== 3) return '';

  const { name, title, brands } = data;

  if (!brands[theme].length) return '';

  const className = name 
    ? name
    : 'section-tertiary';

  return `
    <section class="${className}" id="${name}">
      ${title ? Title(title, className) : ''}
        <div class="${className}__wrapper">
          <ul class="${className}__brands">
            ${
              brands.light.map((brand) => `
                <li class="${className}__brand">
                  ${BrandClient(brand, className)}
                </li>
              `).join('')
            }
          </ul>
        </div>
    </section>
  `;  
};
