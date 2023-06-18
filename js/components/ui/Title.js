/**
 * @typedef {Object} DataType
 * @property {string | number} priority
 * @property {string} content
 */

/**
 * Компонент для создания заголовка
 * @function Title
 * @param {DataType} data
 * @param {string} parentClassName 
 * @returns {string} - HTML or empty
 */

export const Title = (data, parentClassName) => {
  if (Object.values(data).length !== 2) return '';

  const {priority, content} = data;
  const currentClassName = parentClassName
    ? `${parentClassName}__title`
    : 'title';

  switch (priority) {
    case 6: return `<h6 class="${currentClassName}">${content}</h6>`;
    case 5: return `<h5 class="${currentClassName}">${content}</h5>`;
    case 4: return `<h4 class="${currentClassName}">${content}</h4>`;
    case 3: return `<h3 class="${currentClassName}">${content}</h3>`;
    case 2: return `<h2 class="${currentClassName}">${content}</h2>`;
    default : return `<h1 class="${currentClassName}">${content}</h1>`;
  };
};
