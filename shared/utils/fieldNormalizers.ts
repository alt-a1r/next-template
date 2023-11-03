import { urlRegex } from '@/constants/regex';

const phoneReplaceRegex = /(?!^\+)[^\d\r\n]+/g;

export const normalizePhone = (phone = '') => {
  const cleared = phone.replace(phoneReplaceRegex, '');

  if (cleared && !cleared.startsWith('+')) {
    return `+${cleared}`;
  }
  return cleared;
};

export const normalizeNumber = (value = '') => value.replace(/\D/g, '');

export const getOrigin = (link: string) => {
  const cleared = (link || '').replace(/http:\/\/|https:\/\//, '');
  return cleared.split('/')[0];
};

export const normalizeExternalLink = (link: string) => {
  if (urlRegex.test(link || '')) {
    return link;
  }

  return `https://${(link || '').replace(/^\//, '')}`;
};
