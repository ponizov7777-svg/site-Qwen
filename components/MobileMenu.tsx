// components/MobileMenu.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { MOBILE_MENU_CONFIG } from '@/utils/mobileMenuConfig';
import { MOBILE_NAV_LINKS, SOCIAL_LINKS } from '@/constants/siteConfig';
import { MAX_PROFILE_URL } from '@/constants/links';
import { btnPrimary } from '@/constants/styles';
import { trackBlogNavToCasesIfApplicable } from '@/lib/metrics';

export default function MobileMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const lastScrollYRef = useRef(0);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleToggleMenu = () => setIsOpen((prev) => !prev);
    window.addEventListener('toggleMobileMenu', handleToggleMenu as EventListener);
    return () => window.removeEventListener('toggleMobileMenu', handleToggleMenu as EventListener);
  }, []);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('mobileMenuState', { detail: { isOpen } }));
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => e.key === 'Escape' && closeMenu();
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (!isOpen) {
        lastScrollYRef.current = window.scrollY;
        return;
      }
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollYRef.current;
      const pastThreshold = currentScrollY > MOBILE_MENU_CONFIG.headerHeight * 2;
      if (isScrollingDown && pastThreshold) closeMenu();
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 768 && closeMenu();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isOpen) return null;

  const headerH = MOBILE_MENU_CONFIG.headerHeight;

  // Соц-кнопки в стиле вторичной кнопки из hero-блока
  const socialBtn =
    'inline-flex items-center justify-center px-4 py-2 bg-white/10 text-white font-medium rounded-lg text-xs ' +
    'border border-white/30 hover:bg-white/15 transition-colors duration-200 ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40';

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[9998] md:hidden bg-black/60 backdrop-blur-sm"
        style={{ opacity: MOBILE_MENU_CONFIG.backdropOpacity }}
        onClick={closeMenu}
        role="presentation"
      />

      {/* Menu */}
      <motion.div
        id="mobile-menu"
        className="fixed right-0 z-[9999] md:hidden w-1/2 max-w-xs min-w-[260px]
                  rounded-l-3xl rounded-b-3xl
                  border-b border-gray-200
                  shadow-xl
                  bg-[#FFF9E6]/80"
        style={{
          top: headerH,
          maxHeight: `calc(100vh - ${headerH}px)`,
        }}
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        aria-label="Мобильное меню"
      >
        {/* Навигация */}
        <nav className="px-4 py-6" aria-label="Мобильная навигация">
          <div className="flex flex-col">
            {MOBILE_NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    trackBlogNavToCasesIfApplicable(link.href, pathname, 'mobile_menu');
                    closeMenu();
                  }}
                  className="py-3 text-lg font-semibold text-[#1A3A2E]
                            border-b border-white/60 last:border-0
                            hover:text-[#E65C00]
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E65C00]
                            rounded-lg px-2 -mx-2"
                >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* CTA + соцсети */}
        <div className="px-4 pb-8 pt-2 border-t border-white/60">
          <a
            href={MAX_PROFILE_URL}
            target="_blank"
            rel="nofollow noopener noreferrer"
            onClick={closeMenu}
            className={`block w-full text-center ${btnPrimary}`}
          >
            Бесплатный аудит
          </a>

          {/* соцсети */}
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="nofollow noopener noreferrer"
                onClick={closeMenu}
                className={socialBtn}
                aria-label={`Ссылка на ${link.label}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}