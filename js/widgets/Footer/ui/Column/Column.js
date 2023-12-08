import { Title } from '../../../../shared/ui/index.js';
import { ColumnList } from '../ColumnList/ColumnList.js';

/** @typedef { import('./../ColumnItem/types').ColumnItem} ColumnItem */

/**
 * @function Column
 * @param {ColumnItem[] | []} columnList
 * @param {Title} title
 * @return {string}
 */

export const Column = (title, columnList) => {
  if (!title || !columnList.length) return '';
  const className = 'column';

  return `
    <div class="${className}">
      ${title ? Title(title, className) : ''}
      ${ColumnList(columnList)}
    </div>
  `;
};
