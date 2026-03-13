// components/Header.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/uslugi', label: 'Услуги и цены' },
  { href: '/geomarketing', label: 'Геомаркетинг' },
  { href: '/cases', label: 'Кейсы' },
  { href: '/blog', label: 'Статьи' },
  { href: '/consultations', label: 'Консультации' },
  { href: '/contacts', label: 'Контакты' },
  { href: '/about', label: 'Обо мне' },
];

// Стили кнопки: минималистичный вариант
const btnPrimary =
  "inline-flex items-center justify-center px-6 py-2.5 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-lg text-sm md:text-base border border-[#E0B800] hover:bg-[#F7D03A] hover:border-[#F0C000] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C518]/60 focus-visible:ring-offset-2";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMobileMenuState = (event: Event) => {
      const customEvent = event as CustomEvent<{ isOpen?: boolean }>;
      setIsMobileMenuOpen(Boolean(customEvent.detail?.isOpen));
    };
    window.addEventListener('mobileMenuState', handleMobileMenuState as EventListener);
    return () => window.removeEventListener('mobileMenuState', handleMobileMenuState as EventListener);
  }, []);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border-b border-white/40 shadow-sm' 
          : 'bg-white/65 backdrop-blur-lg border-b border-white/30'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Логотип */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Понизов Маркетинг"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-base sm:text-lg font-semibold text-[#1A3A2E]">
                Понизов Маркетинг
              </span>
            </Link>

            {/* Десктопная навигация */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                      isActive
                        ? 'text-[#E65C00] bg-orange-50'
                        : 'text-gray-700 hover:text-[#E65C00] hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA кнопка */}
            <div className="flex items-center gap-4">
              <a
                href="https://t.me/ponizovandrey"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 bg-[#F5C518] text-[#1A3A2E] font-semibold text-sm rounded-lg hover:bg-[#F7D03A] transition-colors shadow-sm"
              >
                Написать в Telegram
              </a>

              {/* Иконки для связи на мобилке */}
              <div className="flex items-center gap-3 md:hidden">
                <a
                  href="https://t.me/ponizovandrey"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label="Написать в Telegram"
                  className="text-[#1A3A2E] hover:text-[#E65C00] transition-colors"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M21.255 2.255c.3-.117.63-.117.93 0 .608.236.91.96.674 1.568l-6.17 16.03c-.32.831-1.24 1.24-2.055.897-.357-.153-.64-.46-.785-.825l-2.02-5.09 4.466-4.466c.238-.238.238-.623 0-.86-.237-.238-.622-.238-.86 0l-5.08 2.02-5.09-2.02c-.367-.148-.672-.428-.825-.786-.343-.814.065-1.734.896-2.054l16.03-6.17Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="tel:+79841955227"
                  aria-label="Позвонить"
                  className="text-[#1A3A2E] hover:text-[#E65C00] transition-colors"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M17.707 14.293a1 1 0 0 0-1.414 0l-1.586 1.586c-.301.302-.765.37-1.139.163-1.117-.617-2.258-1.78-3.266-3.266-.206-.3-.174-.706.073-.974l1.506-1.647a1 1 0 0 0-.04-1.404L7.52 5.126a1 1 0 0 0-1.3-.07C5.03 5.99 4.5 6.95 4.5 8c0 4.69 5.81 11.5 10.5 11.5 1.05 0 2.01-.53 2.944-1.72a1 1 0 0 0-.07-1.3l-2.167-2.187Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>

              {/* Бургер меню */}
              <button
                type="button"
                className="md:hidden text-gray-700 hover:text-[#E65C00] p-1"
                onClick={() => window.dispatchEvent(new CustomEvent('toggleMobileMenu'))}
                aria-label={isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}