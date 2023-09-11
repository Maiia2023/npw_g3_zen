/**
 * @function Button
 * @param {ButtonProps} props 
 * @returns {string}
 */

export const Button = (props) => {

  const { className, buttonId, customId, children } = props;
  
  if (!children) return '';

  const currentClassName = className
    ? `button ${className}` 
    : 'button';

  const currentId = buttonId
    ? `${buttonId}` 
    : ''; 
    
  const currentCustomId = customId
    ? `${customId}` 
    : ''; 

  return `
    <button 
      class="${currentClassName}"
      id="${currentId}"
      data-customId="${currentCustomId}"
    >
      ${children}
    </button>
  `;
};
