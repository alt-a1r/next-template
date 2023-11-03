import dayjs from 'dayjs';

export const capitalizeString = (row: string | undefined = '') => {
  return row?.charAt(0).toUpperCase() + row?.slice(1);
};

export const renderDate = (date: string, format = `DD MMM 'YY`) => {
  return date ? dayjs(date).format(format) : '';
};
