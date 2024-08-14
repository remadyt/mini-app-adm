import dayjs, { Dayjs } from 'dayjs';

type Nullable<T> = T | null;

export const formatDate = (date?: Nullable<string | Dayjs | Date>, format = DateFormats.FullDate): Nullable<string> => {
  const formattedDate = dayjs(date);

  if (!date || !formattedDate.isValid()) {
    return null;
  }

  return formattedDate.format(format);
};

export enum DateFormats {
  Time = 'HH:mm:ss',
  Date = 'DD.MM.YYYY',
  FullDate = 'DD.MM.YYYY HH:mm:ss',
  DateTime = 'DD.MM.YYYY HH:mm',
  UtcFormattedTimestamp = 'YYYY-MM-DDTHH:mm:ss.SSS[Z]',
  DateMonthYear = 'D MMM YYYY',
}
