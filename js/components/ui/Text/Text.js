/**
 * Компонет для создания параграфа
 * @function Text
 * @param {string} text - контент для параграфа
 * @param {string} parentClassName - родительский класс для параграфа
 * @returns {string} HTML строка
 */

export const Text = (text, parentClassName) => {
  const currentClassName = parentClassName
    ? `${parentClassName}__copy` 
    : 'copy';

  return `
    <p class="${currentClassName}">
      ${text}
    </p>
  `;
};
