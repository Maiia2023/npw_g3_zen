import {} from './../Column/Column.js';

import { Column } from '../Column/Column.js';

/** @typedef { import('./../ColumnItem/types').Column} Column */

/**
 * @function Columns
 * @param {Column[]} columns
 * @returns {string}
 */

export const Columns = (columns) => {
  if (!columns.length) return '';

  const className = 'footer__columns';

  return `
    <div class="${className}">
      ${columns.map((column) => Column(column.title, column.links)).join('')}
    </div>
  `;
};
