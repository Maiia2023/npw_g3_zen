/**
 * @function Lang
 * @param {string} parentClassName 
 * @returns {string}
 */

export const Lang = (parentClassName) => {

  const currentClassName =  parentClassName 
    ? `${parentClassName}__lang` 
    : 'lang';

  return `
    <select class="${currentClassName}" id="lang">
      <option value="ru">RU</option>
      <option value="en">EN</option>
    </select>
  `;
};
