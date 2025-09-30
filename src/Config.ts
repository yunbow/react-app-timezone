import { TimezoneOption, WorldClockCity } from './features/timezone-converter/types';

export const TIMEZONE_OPTIONS: TimezoneOption[] = [
  { value: 'UTC', label: '世界標準時 (UTC)' },
  { value: 'Asia/Tokyo', label: '日本標準時 (JST, UTC+9)' },
  { value: 'America/New_York', label: '米国東部時間 (EST/EDT, UTC-5/4)' },
  { value: 'America/Los_Angeles', label: '米国太平洋時間 (PST/PDT, UTC-8/7)' },
  { value: 'Europe/London', label: '英国時間 (GMT/BST, UTC+0/1)' },
  { value: 'Europe/Paris', label: '中央ヨーロッパ時間 (CET/CEST, UTC+1/2)' },
  { value: 'Asia/Shanghai', label: '中国標準時 (CST, UTC+8)' },
  { value: 'Australia/Sydney', label: 'オーストラリア東部時間 (AEST/AEDT, UTC+10/11)' },
  { value: 'Pacific/Auckland', label: 'ニュージーランド標準時 (NZST/NZDT, UTC+12/13)' },
];

export const WORLD_CLOCK_CITIES: WorldClockCity[] = [
  { name: '東京', timezone: 'Asia/Tokyo' },
  { name: 'ニューヨーク', timezone: 'America/New_York' },
  { name: 'ロンドン', timezone: 'Europe/London' },
  { name: 'シドニー', timezone: 'Australia/Sydney' },
];

export const TIMEZONE_MAP = TIMEZONE_OPTIONS.reduce((acc, tz) => {
  acc[tz.value] = tz.label;
  return acc;
}, {} as Record<string, string>);