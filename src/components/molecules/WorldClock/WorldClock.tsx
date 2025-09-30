import React from 'react';
import styles from './WorldClock.module.css';

interface ClockData {
  city: string;
  time: string;
  date: string;
}

export interface WorldClockProps {
  clocks: ClockData[];
}

export const WorldClock: React.FC<WorldClockProps> = ({ clocks }) => {
  return (
    <div className={styles.clocksContainer}>
      {clocks.map((clock) => (
        <div key={clock.city} className={styles.clock}>
          <div className={styles.city}>{clock.city}</div>
          <div className={styles.time}>{clock.time}</div>
          <div className={styles.date}>{clock.date}</div>
        </div>
      ))}
    </div>
  );
};