import { ColumnItem } from '../ColumnItem/ColumnItem.js';

/** @typedef { import ('../ColumnItem/types').ColumnItem} ColumnItem */

/**
 * @function ColumnList
 * @param {ColumnItem[]| []} columnList
 * @returns {string}
 */

export const ColumnList = (columnList) => {
  
  if (!columnList.length) return '';

  const className = 'column';

  return `
    <ul class="${className}__list">
      ${columnList.map((columnItem) => ColumnItem(columnItem)).join('')}
    </ul>
  `;
};
