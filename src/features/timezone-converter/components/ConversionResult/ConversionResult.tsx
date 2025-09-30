import React from 'react';
import { ConversionResult as ConversionResultType } from '../../types';
import styles from './ConversionResult.module.css';

export interface ConversionResultProps {
  result: ConversionResultType | null;
}

export const ConversionResult: React.FC<ConversionResultProps> = ({ result }) => {
  return (
    <div className={styles.resultDisplay}>
      <div className={styles.resultTime}>
        {result?.time || '--'}
      </div>
      <div className={styles.resultDate}>
        {result?.date || '--'}
      </div>
      <div className={styles.resultTimezone}>
        {result?.timezone || '--'}
      </div>
    </div>
  );
};