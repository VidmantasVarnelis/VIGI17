import React from 'react';
import styles from './button.module.scss';

const Button = ({ title, size, style, onClick, variant = 'primary' }) => {
  const buttonSizeClass = size === 'sm' ? styles['size-sm'] : styles['size-lg'];
  const variantBackgroundStyles =
    variant === 'primary'
      ? styles['primary-btn']
      : variant === 'danger' && styles['danger-btn'];

  return (
    <button
      className={`${variantBackgroundStyles} ${buttonSizeClass}`}
      style={{ ...style }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
