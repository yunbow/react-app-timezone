import React from 'react';
import styles from './Input.module.css';

export interface InputProps {
  type?: string;
  value: string;
  onChange: (value: string) => void;
  id?: string;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  value,
  onChange,
  id,
  className = ''
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      id={id}
      className={`${styles.input} ${className}`}
    />
  );
};