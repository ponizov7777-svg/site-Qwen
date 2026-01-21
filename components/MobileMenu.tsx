// components/MobileMenu.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Импортируем ссылки из Header.tsx или определим их здесь
// ВАЖНО: Эти данные дублируются из Header.tsx.
// В идеале, их стоит вынести в общий файл (например, utils/links.ts) и импортировать оттуда в Header и MobileMenu.
const navLinks = [
  { href: '/services', label: 'УСЛУГИ И ЦЕНЫ' },
  { href: '/geomarketing', label: 'ГЕОМАРКЕТИНГ' },
  { href: '/cases', label: 'КЕЙСЫ' },
  { href: '/articles', label: 'СТАТЬИ' },
  { href: '/consultations', label: 'КОНСУЛЬТАЦИИ' },
  { href: '/about', label: 'ОБО МНЕ' },
  { href: '/contacts', label: 'КОНТАКТЫ' },
];

const socialLinks = [
  {
    href: 'https://max.ru/u/f9LHodD0cOKv94u0uUQGsTH7c9Cibtp9qAEtmFpgYQ-QfGsVeYNyc7M34aU', // Убраны пробелы
    label: 'Max',
  },
  {
    href: 'https://t.me/ponizovandrey', // Убраны пробелы
    label: 'Telegram',
  },
  {
    href: 'https://vk.com/andrey_anatolyevich_marketing', // Убраны пробелы
    label: 'VK',
  },
  {
    href: 'https://rutube.ru/channel/73592687/', // Убраны пробелы
    label: 'RuTube',
  },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Слушаем кастомное событие для открытия/закрытия
  useEffect(() => {
    const handleToggleMenu = () => {
      setIsOpen(prev => !prev);
    };

    window.addEventListener('toggleMobileMenu', handleToggleMenu);

    return () => {
      window.removeEventListener('toggleMobileMenu', handleToggleMenu);
    };
  }, []);

  // Дополнительно: закрытие меню при изменении размера экрана (если пользователь увеличил окно)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Не рендерим меню, если оно закрыто
  if (!isOpen) {
    return null;
  }

  return (
    <div className="md:hidden border-t border-gray-200 bg-white">
      <nav className="px-4 py-6 flex flex-col gap-4" aria-label="Мобильная навигация">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-gray-800 py-2 border-b border-gray-100 last:border-0"
            onClick={() => setIsOpen(false)} // Закрываем меню при клике на ссылку
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="px-4 py-4 border-t border-gray-200 flex flex-wrap gap-4">
        {/* Кнопка "Бесплатный аудит" для мобильных */}
        <Link
          href="/consultations"
          className="px-4 py-2 bg-[#D65A31] text-white font-bold rounded-lg text-sm shadow-[3px_3px_0px_0px_#1E3A2F] hover:shadow-[4px_4px_0px_0px_#1E3A2F] transform hover:-translate-y-0.5 transition-all duration-200 relative overflow-hidden"
          onClick={() => setIsOpen(false)} // Закрываем меню при клике
        >
          <span className="relative z-10">БЕСПЛАТНЫЙ АУДИТ</span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#1E3A2F] to-transparent opacity-20"></span>
        </Link>

        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#1E3A2F] font-bold text-xs w-8 h-8 rounded-full border-2 border-[#1E3A2F] flex items-center justify-center hover:bg-[#1E3A2F] hover:text-[#FFD700] transition-all duration-200"
            onClick={() => setIsOpen(false)} // Закрываем меню при клике (опционально для внешних ссылок)
            aria-label={`Ссылка на ${link.label}`}
          >
            {link.label.substring(0, 2).toUpperCase()}
          </a>
        ))}
      </div>
    </div>
  );
}