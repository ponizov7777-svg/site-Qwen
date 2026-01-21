// components/Header.tsx
import Link from 'next/link';
import { useState } from 'react';

// Определяем ссылки прямо в этом файле
const navLinks = [
  { href: '/services', label: 'Услуги и цены' },
  { href: '/geomarketing', label: 'Геомаркетинг' },
  { href: '/cases', label: 'Кейсы' },
  { href: '/articles', label: 'Полезные статьи' },
  { href: '/consultations', label: 'Консультации' },
  { href: '/about', label: 'Обо мне' },
  { href: '/contacts', label: 'Контакты' },
];

const socialLinks = [
  {
    href: 'https://max.ru/u/f9LHodD0cOKv94u0uUQGsTH7c9Cibtp9qAEtmFpgYQ-QfGsVeYNyc7M34aU',
    label: 'Max',
  },
  {
    href: 'https://t.me/ponizovandrey',
    label: 'Telegram',
  },
  {
    href: 'https://vk.com/andrey_anatolyevich_marketing',
    label: 'VK',
  },
  {
    href: 'https://rutube.ru/channel/73592687/',
    label: 'RuTube',
  },
];

export default function Header({ pathname = '/' }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E65C00] shadow-sm">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        {/* Логотип */}
        <Link 
          href="/" 
          className="text-lg font-semibold text-[#1A3A2E] hover:text-[#E65C00] transition-colors"
        >
          Понизов Андрей
        </Link>

        {/* Навигация (десктоп) */}
        <nav
          className="hidden md:flex gap-6"
          aria-label="Основная навигация"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-[#E65C00]' 
                    : 'text-[#1A3A2E] hover:text-[#E65C00]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Правая часть: CTA + соцсети (десктоп) */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/consultations"
            className="px-4 py-2 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-md text-sm hover:bg-[#F7D03A] transition-colors"
          >
            Бесплатный аудит
          </Link>
          
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#1A3A2E] hover:text-[#E65C00] transition-colors"
              aria-label={`Ссылка на ${link.label}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Кнопка бургера (только для мобильных) */}
        <button
          type="button"
          className="md:hidden text-[#1A3A2E] focus:outline-none focus:ring-2 focus:ring-[#E65C00] rounded-md p-2"
          aria-label="Открыть меню"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="block w-6 h-0.5 bg-[#1A3A2E] mb-1"></span>
          <span className="block w-6 h-0.5 bg-[#1A3A2E] mb-1"></span>
          <span className="block w-6 h-0.5 bg-[#1A3A2E]"></span>
        </button>
      </div>

      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-6 flex flex-col gap-4" aria-label="Мобильная навигация">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-lg font-medium py-2 border-b border-gray-100 ${
                  pathname === link.href ? 'text-[#E65C00]' : 'text-[#1A3A2E]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-4 py-4 border-t border-gray-200">
            <Link
              href="/consultations"
              className="block w-full text-center px-4 py-3 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-md mb-4 hover:bg-[#F7D03A] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Бесплатный аудит
            </Link>
            <div className="flex flex-wrap gap-3 justify-center">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#1A3A2E] hover:text-[#E65C00] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}