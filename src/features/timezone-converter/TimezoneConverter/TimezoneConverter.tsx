import React, { useState, useCallback } from 'react';
import { TimeInput } from '../components/TimeInput/TimeInput';
import { TimezoneSelect } from '../components/TimezoneSelect/TimezoneSelect';
import { ConversionResult } from '../components/ConversionResult/ConversionResult';
import { WorldClock } from '../components/WorldClock/WorldClock';
import { Button } from '../../../components/Button/Button';
import { useTimezoneConverter } from '../useTimezoneConverter';
import { useWorldClock } from '../useWorldClock';
import styles from './TimezoneConverter.module.css';

export const TimezoneConverter: React.FC = () => {
  const [sourceTime, setSourceTime] = useState('');
  const [sourceTimezone, setSourceTimezone] = useState('Asia/Tokyo');
  const [targetTimezone, setTargetTimezone] = useState('UTC');

  const { result, convert } = useTimezoneConverter();
  const worldClocks = useWorldClock();

  const getCurrentTime = (): string => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const handleConvert = useCallback(() => {
    if (!sourceTime) {
      alert('時間を入力してください');
      return;
    }

    try {
      convert(sourceTime, sourceTimezone, targetTimezone);
    } catch (error) {
      alert('変換中にエラーが発生しました');
    }
  }, [sourceTime, sourceTimezone, targetTimezone, convert]);

  const handleSetNow = useCallback(() => {
    const currentTime = getCurrentTime();
    setSourceTime(currentTime);

    if (currentTime) {
      try {
        convert(currentTime, sourceTimezone, targetTimezone);
      } catch (error) {
        console.error('Conversion error:', error);
      }
    }
  }, [sourceTimezone, targetTimezone, convert]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>タイムゾーン変換ツール</h1>

      <div className={styles.inputSection}>
        <TimeInput value={sourceTime} onChange={setSourceTime} />

        <div className={styles.timezoneSelects}>
          <TimezoneSelect
            label="変換元タイムゾーン:"
            value={sourceTimezone}
            onChange={setSourceTimezone}
            id="source-timezone"
          />
          <TimezoneSelect
            label="変換先タイムゾーン:"
            value={targetTimezone}
            onChange={setTargetTimezone}
            id="target-timezone"
          />
        </div>

        <div className={styles.buttons}>
          <Button onClick={handleConvert}>変換</Button>
          <Button type="success" onClick={handleSetNow}>現在時刻を設定</Button>
        </div>
      </div>

      <div className={styles.resultSection}>
        <h2 className={styles.sectionTitle}>変換結果</h2>
        <ConversionResult result={result} />
      </div>

      <div className={styles.worldClockSection}>
        <h2 className={styles.sectionTitle}>世界の主要都市の時間</h2>
        <WorldClock clocks={worldClocks} />
      </div>

      <footer className={styles.footer}>
        <p>© 2025 タイムゾーン変換ツール</p>
      </footer>
    </div>
  );
};