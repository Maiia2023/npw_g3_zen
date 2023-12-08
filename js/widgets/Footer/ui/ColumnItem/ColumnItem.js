/** @typedef {import('./types').ColumnItem } ColumnItem */

/**
 * @function ColumnItem
 * @param {ColumnItem} columnItem
 * @param {string} parentClassName 
 * @returns {string}
 */

export const ColumnItem = (columnItem, parentClassName) => {
  if (Object.keys(columnItem).length !== 3) return '';
  const { type, url, content } = columnItem;

  const currentClassName = parentClassName
    ? `${parentClassName}__item`
    : 'column-item';

  return `
    <li class="${currentClassName}">
      <a href="${url}">${content}</a>
    </li>
  `;
};
