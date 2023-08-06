import { IconMoon } from './ui/IconMoon.js';
import { IconSun } from './ui/IconSun.js';

/**
 * @function Theme
 * @param {string} parentClassName
 * @param {'light' | 'dark'} theme
 * @returns {string}
 */

export const Theme = (parentClassName, theme = 'light') => {

  const currentClassName = parentClassName
    ? `${parentClassName}__theme`
    : 'theme';

  return `
    <button 
      class="${currentClassName}" 
      id="theme" 
      data-theme="${theme}"
    >
      ${theme === 'light' ? IconMoon() : IconSun()}
    </button>
  `;
};
