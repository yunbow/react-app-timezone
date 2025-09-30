import { useState, useEffect } from 'react';
import { WORLD_CLOCK_CITIES } from '../../Config';

interface ClockData {
  city: string;
  time: string;
  date: string;
}

export const useWorldClock = () => {
  const [clocks, setClocks] = useState<ClockData[]>([]);

  const updateClocks = () => {
    const now = new Date();
    const newClocks = WORLD_CLOCK_CITIES.map(city => {
      try {
        const timeFormatter = new Intl.DateTimeFormat('ja-JP', {
          timeZone: city.timezone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        });

        const dateFormatter = new Intl.DateTimeFormat('ja-JP', {
          timeZone: city.timezone,
          month: 'numeric',
          day: 'numeric',
          weekday: 'short'
        });

        return {
          city: city.name,
          time: timeFormatter.format(now),
          date: dateFormatter.format(now)
        };
      } catch (error) {
        console.error(`Clock update error (${city.timezone}):`, error);
        return {
          city: city.name,
          time: '--:--:--',
          date: '--'
        };
      }
    });

    setClocks(newClocks);
  };

  useEffect(() => {
    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  return clocks;
};