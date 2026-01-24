// utils/navigation.js

/**
 * Основные ссылки навигации
 * Используются в компонентах Header, Footer, MobileMenu
 */
export const navLinks = [
  { href: '/', label: 'Главная' },
  { href: '/services', label: 'Услуги и цены' },
  { href: '/geomarketing', label: 'Геомаркетинг' },
  { href: '/cases', label: 'Кейсы' },
  { href: '/articles', label: 'Полезные статьи' },
  { href: '/consultations', label: 'Консультации' },
  { href: '/about', label: 'Обо мне' },
  { href: '/contacts', label: 'Контакты' },
];

/**
 * Ссылки на социальные сети
 * Используются в компонентах Header, Footer, MobileMenu
 */
export const socialLinks = [
  { href: 'https://max.ru/u/f9LHodD0cOKv94u0uUQGsTH7c9Cibtp9qAEtmFpgYQ-QfGsVeYNyc7M34aU', label: 'Max' },
  { href: 'https://t.me/ponizovandrey', label: 'Telegram' },
  { href: 'https://vk.com/andrey_anatolyevich_marketing', label: 'VK' },
  { href: 'https://rutube.ru/channel/73592687/', label: 'RuTube' },
];

/**
 * Вспомогательные функции навигации
 */

/**
 * Проверяет, является ли текущий путь активным
 * @param {string} pathname - Текущий путь (обычно из router.pathname)
 * @param {string} href - Путь для проверки
 * @returns {boolean} - true, если путь активен
 */
export const isActiveLink = (pathname, href) => {
  // Для главной страницы особая логика
  if (href === '/') {
    return pathname === '/';
  }
  // Для остальных - проверка начала строки, чтобы /contacts был активен на /contacts, но не на /contacts/something
  return pathname === href || pathname.startsWith(`${href}/`);
};

/**
 * Возвращает метаданные для страницы на основе пути
 * Может быть использована в getStaticProps/getServerSideProps
 * @param {string} pathname - Путь страницы
 * @returns {Object} - Объект с title, description и другими метаданными
 */
export const getPageMetadata = (pathname) => {
  const metadataMap = {
    '/': {
      title: 'Понизов Андрей - Геомаркетинг для бизнеса',
      description: 'Профессиональная настройка Яндекс.Карт, Google Maps, 2ГИС и локального поиска для привлечения клиентов в ваш бизнес. Увеличение видимости в поиске с конкретными результатами.'
    },
    '/services': {
      title: 'Услуги и цены - Понизов Андрей',
      description: 'Услуги по геомаркетингу: настройка Яндекс.Карт, Google Maps, 2ГИС, SEO для карт. Прозрачные цены и четкие результаты.'
    },
    '/geomarketing': {
      title: 'Геомаркетинг для бизнеса - Понизов Андрей',
      description: 'Профессиональная настройка Яндекс.Карт, Google Maps, 2ГИС и локального поиска для привлечения клиентов в ваш бизнес. Увеличение видимости в поиске с конкретными результатами.'
    },
    '/cases': {
      title: 'Кейсы - Понизов Андрей',
      description: 'Реальные примеры работ по геомаркетингу: как увеличивали поток клиентов для салонов, клиник, магазинов и других бизнесов.'
    },
    '/articles': {
      title: 'Полезные статьи - Понизов Андрей',
      description: 'Статьи о геомаркетинге, SEO, продвижении бизнеса на картах и в локальном поиске.'
    },
    '/consultations': {
      title: 'Консультации - Понизов Андрей',
      description: 'Бесплатная консультация и аудит вашего бизнеса на предмет эффективности геомаркетинга.'
    },
    '/about': {
      title: 'Обо мне - Понизов Андрей',
      description: 'Информация о специалисте по геомаркетингу Понизове Андрее. Опыт, образование, подход к работе.'
    },
    '/contacts': {
      title: 'Контакты - Понизов Андрей',
      description: 'Как связаться с Понизовым Андреем. Форма обратной связи, телефон, Telegram, VK, email.'
    },
  };

  // Возвращаем метаданные для текущего пути или дефолтные
  return metadataMap[pathname] || {
    title: 'Понизов Андрей - Геомаркетинг для бизнеса',
    description: 'Профессиональная настройка Яндекс.Карт, Google Maps, 2ГИС и локального поиска для привлечения клиентов в ваш бизнес.'
  };
};