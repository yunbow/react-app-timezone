import { useState, useCallback } from 'react';
import { convertTimeZone } from './timezoneConverter';
import { ConversionResult } from './types';
import { TIMEZONE_MAP } from '../../Config';

export const useTimezoneConverter = () => {
  const [result, setResult] = useState<ConversionResult | null>(null);

  const formatDateTime = (date: Date): { time: string; date: string } => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const time = `${hours}:${minutes}`;

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
    const weekday = weekdays[date.getDay()];
    const dateStr = `${year}年${month}月${day}日 (${weekday})`;

    return { time, date: dateStr };
  };

  const convert = useCallback((sourceTimeStr: string, sourceTimezone: string, targetTimezone: string) => {
    try {
      const sourceDate = new Date(sourceTimeStr);

      if (isNaN(sourceDate.getTime())) {
        throw new Error('Invalid date');
      }

      const convertedTime = convertTimeZone(sourceDate, sourceTimezone, targetTimezone);
      const { time, date } = formatDateTime(convertedTime);
      const timezone = TIMEZONE_MAP[targetTimezone] || targetTimezone;

      setResult({ time, date, timezone });
    } catch (error) {
      console.error('Conversion error:', error);
      setResult(null);
      throw error;
    }
  }, []);

  return { result, convert };
};