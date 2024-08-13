import dayjs from 'dayjs';

export const formatDateForCreatedAtField = (date: string) => {
  return dayjs(date).format('DD.MM.YYYY HH:mm:ss');
};
