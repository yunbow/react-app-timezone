import React from 'react';
import { Input } from '../../../../components/Input/Input';
import { Label } from '../../../../components/Label/Label';
import styles from './TimeInput.module.css';

export interface TimeInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const TimeInput: React.FC<TimeInputProps> = ({ value, onChange }) => {
  return (
    <div className={styles.timeInput}>
      <Label htmlFor="source-time">時間:</Label>
      <Input
        type="datetime-local"
        value={value}
        onChange={onChange}
        id="source-time"
      />
    </div>
  );
};