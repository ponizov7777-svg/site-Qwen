// utils/mobileMenuConfig.ts
export const MOBILE_MENU_CONFIG = {
  headerHeight: 64, // px (h-16)
  backdropOpacity: 0.6, // 0-1 (60% — более тёмное затемнение фона)
  backdropBlur: '20px', // CSS blur value
  menuBgOpacity: 0.98, // 0-1 (98% - почти непрозрачный)
  animationDuration: 300, // ms
};

export const navLinks = [
  { href: '/uslugi', label: 'УСЛУГИ И ЦЕНЫ' },
  { href: '/geomarketing', label: 'ГЕОМАРКЕТИНГ' },
  { href: '/cases', label: 'КЕЙСЫ' },
  { href: '/blog', label: 'СТАТЬИ' },
  { href: '/about', label: 'ОБО МНЕ' },
  { href: '/contacts', label: 'КОНТАКТЫ' },
];

export const socialLinks = [
  { href: 'https://max.ru/u/f9LHodD0cOKv94u0uUQGsTH7c9Cibtp9qAEtmFpgYQ-QfGsVeYNyc7M34aU', label: 'Max' },
  { href: 'https://t.me/ponizovandrey', label: 'Telegram' },
  { href: 'https://vk.com/andrey_anatolyevich_marketing', label: 'VK' },
  { href: 'https://rutube.ru/channel/73592687/', label: 'RuTube' },
];
