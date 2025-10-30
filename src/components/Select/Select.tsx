import React from 'react';
import { TimezoneOption } from '../../features/timezone-converter/types';
import styles from './Select.module.css';

export interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: TimezoneOption[];
  id?: string;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  options,
  id,
  className = ''
}) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      id={id}
      className={`${styles.select} ${className}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};