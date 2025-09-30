export function convertTimeZone(date: Date, fromTZ: string, toTZ: string): Date {
  const fromFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: fromTZ,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
  });

  const fromParts = fromFormatter.formatToParts(date);
  const fromObj = partsToObject(fromParts);

  const fromUTC = new Date(Date.UTC(
    fromObj.year,
    fromObj.month - 1,
    fromObj.day,
    fromObj.hour,
    fromObj.minute,
    fromObj.second
  ));

  const tzDiff = date.getTime() - fromUTC.getTime();

  const toFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: toTZ,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
  });

  const nowUTC = new Date(date.getTime() + tzDiff);
  const toParts = toFormatter.formatToParts(nowUTC);
  const toObj = partsToObject(toParts);

  return new Date(
    toObj.year,
    toObj.month - 1,
    toObj.day,
    toObj.hour,
    toObj.minute,
    toObj.second
  );
}

function partsToObject(parts: Intl.DateTimeFormatPart[]): Record<string, number> {
  return parts.reduce((obj, part) => {
    if (part.type !== 'literal') {
      obj[part.type] = parseInt(part.value, 10);
    }
    return obj;
  }, {} as Record<string, number>);
}