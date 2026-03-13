'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';

const COOKIE_KEY = 'cookieConsent';

// Улучшенные стили кнопок
const acceptBtn =
  "flex-1 px-6 py-3 bg-[#E65C00]/90 text-[#1A3A2E] font-medium rounded-xl hover:bg-[#E65C00] transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E65C00] focus-visible:ring-offset-2 backdrop-blur-md";

const declineBtn =
  "px-6 py-3 border-2 border-[#E65C00] text-[#1A3A2E] font-medium rounded-xl hover:bg-[#FFF5E1] hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E65C00] focus-visible:ring-offset-2 backdrop-blur-md";

export default function Cookie() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem(COOKIE_KEY);
      if (!consent) setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(COOKIE_KEY, 'accepted');
      setShowBanner(false);
    }
  };

  const handleDecline = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(COOKIE_KEY, 'declined'); 
      setShowBanner(false);
    }
  };

  if (!showBanner) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 md:bottom-4 md:left-4 md:right-auto md:w-96">
        <div className="bg-gradient-to-r from-[#FFF9E6] to-[#FFF4D9] border border-[#E65C00]/20 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 mx-4 md:mx-0">
          <div className="text-sm md:text-base text-[#1A3A2E] mb-4 leading-relaxed">
            Я использую cookies для сбора обезличенных персональных данных. Они помогают настраивать рекламу и анализировать трафик. Оставаясь на сайте, вы соглашаетесь на сбор таких данных.{' '}
            <Link href="/yridicheskie/privacy-policy" className="text-[#E65C00] hover:text-[#D65A31] font-medium underline">
              Подробнее
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button onClick={handleAccept} className={acceptBtn}>
              Принять все
            </button>
            <button onClick={handleDecline} className={declineBtn}>
              Отклонить
            </button>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden" onClick={handleDecline} />
    </>
  );
}