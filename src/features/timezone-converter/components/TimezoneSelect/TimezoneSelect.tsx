import React from 'react';
import { Select } from '../../../../components/Select/Select';
import { Label } from '../../../../components/Label/Label';
import { TIMEZONE_OPTIONS } from '../../../../Config';
import styles from './TimezoneSelect.module.css';

export interface TimezoneSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  id?: string;
}

export const TimezoneSelect: React.FC<TimezoneSelectProps> = ({
  label,
  value,
  onChange,
  id
}) => {
  return (
    <div className={styles.timezoneSelect}>
      <Label htmlFor={id}>{label}</Label>
      <Select
        value={value}
        onChange={onChange}
        options={TIMEZONE_OPTIONS}
        id={id}
      />
    </div>
  );
};