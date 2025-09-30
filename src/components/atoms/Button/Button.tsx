import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps {
  type?: 'primary' | 'success';
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  onClick,
  children,
  className = ''
}) => {
  return (
    <button
      className={`${styles.button} ${styles[type]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};