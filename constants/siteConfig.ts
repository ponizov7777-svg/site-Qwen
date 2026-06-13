// constants/siteConfig.ts
import { MAX_PROFILE_URL, TELEGRAM_URL, VK_URL, RUTUBE_URL } from './links';

export const SITE_CONFIG = {
  title: 'Геомаркетинг и привлечение клиентов для офлайн-бизнеса',
  description:
    'Помогаю офлайн-бизнесу стабильно привлекать клиентов через карты, рекламу и маркетинговые системы.',
  url: 'https://ponizov-marketing.ru',
  author: 'Андрей Понизов',
  copyright: `© ${new Date().getFullYear()} Понизов Андрей. Все права защищены.`,
};

export const NAV_LINKS = [
  { href: '/uslugi', label: 'Услуги и цены' },
  { href: '/geomarketing', label: 'Геомаркетинг' },
  { href: '/cases', label: 'Кейсы' },
  { href: '/blog', label: 'Полезные статьи' },
  { href: '/consultations', label: 'Консультации' },
  { href: '/about', label: 'Обо мне' },
  { href: '/contacts', label: 'Контакты' },
];

/** Навигация в подвале: главная, основные разделы и служебные страницы */
export const FOOTER_NAV_LINKS = [
  { href: '/', label: 'Главная' },
  ...NAV_LINKS,
  { href: '/partnerskaya-programma', label: 'Партнерская программа' },
];

export const SOCIAL_LINKS = [
  { href: MAX_PROFILE_URL, label: 'MAX' },
  { href: VK_URL, label: 'VK' },
  { href: RUTUBE_URL, label: 'RuTube' },
];

export const FOOTER_SOCIAL_LINKS = [
  { href: MAX_PROFILE_URL, label: 'MAX' },
  { href: TELEGRAM_URL, label: 'Telegram' },
  { href: VK_URL, label: 'VK' },
  { href: RUTUBE_URL, label: 'RuTube' },
];

/** Мобильное меню: те же href, подписи капсом */
export const MOBILE_NAV_LINKS = NAV_LINKS.map((link) => ({
  ...link,
  label: link.label.toUpperCase(),
}));
