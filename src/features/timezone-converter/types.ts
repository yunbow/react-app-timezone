export interface TimezoneOption {
  value: string;
  label: string;
}

export interface ConversionResult {
  time: string;
  date: string;
  timezone: string;
}

export interface WorldClockCity {
  name: string;
  timezone: string;
}

export interface TimezoneConversionProps {
  sourceTime: string;
  sourceTimezone: string;
  targetTimezone: string;
}