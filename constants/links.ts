export const MAX_PROFILE_URL =
  'https://max.ru/u/f9LHodD0cOKv94u0uUQGsTH7c9Cibtp9qAEtmFpgYQ-QfGsVeYNyc7M34aU';

export const TELEGRAM_URL = 'https://t.me/ponizovandrey';

export const VK_URL = 'https://vk.com/andrey_anatolyevich_marketing';

export const RUTUBE_URL = 'https://rutube.ru/channel/73592687/';

export function maxUrlWithPrefilledText(text: string): string {
  return `${MAX_PROFILE_URL}?text=${encodeURIComponent(text)}`;
}
