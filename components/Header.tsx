// components/Header.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/constants/siteConfig';
import { MAX_PROFILE_URL } from '@/constants/links';
import { IconMax, IconPhone, IconMenu } from '@/components/Icons';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(window.scrollY > 10);
    let raf = 0;
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      raf = window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 10);
        ticking = false;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (raf) cancelAnimationFrame(raf);
    };
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
              {NAV_LINKS.map((link) => {
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
                href={MAX_PROFILE_URL}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 bg-[#F5C518] text-[#1A3A2E] font-semibold text-sm rounded-lg hover:bg-[#F7D03A] transition-colors shadow-sm"
              >
                Написать в MAX
              </a>

              {/* Иконки для связи на мобилке */}
              <div className="flex items-center gap-3 md:hidden">
                <a
                  href={MAX_PROFILE_URL}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label="Написать в MAX"
                  className="text-[#1A3A2E] hover:text-[#E65C00] transition-colors"
                >
                  <IconMax />
                </a>
                <a
                  href="tel:+79841955227"
                  aria-label="Позвонить"
                  className="text-[#1A3A2E] hover:text-[#E65C00] transition-colors"
                >
                  <IconPhone />
                </a>
              </div>

              {/* Бургер меню */}
              <button
                type="button"
                className="md:hidden text-gray-700 hover:text-[#E65C00] p-1"
                onClick={() => window.dispatchEvent(new CustomEvent('toggleMobileMenu'))}
                aria-label={isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
              >
                <IconMenu open={isMobileMenuOpen} className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
