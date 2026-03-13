 'use client';

import React, { useState } from 'react';
import { trackLinkSubmit, type PageType } from '../lib/metrics';

interface CardLinkCTAProps {
  pageType: PageType;
  pageSlug: string;
  blockId?: string;
  formId?: string;
}

export default function CardLinkCTA({
  pageType,
  pageSlug,
  blockId = 'card_link_form',
  formId = 'card_link_form',
}: CardLinkCTAProps) {
  const [cardLink, setCardLink] = useState('');
  const [cardLinkError, setCardLinkError] = useState('');

  const normalizeCardLink = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return '';

    const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;

    try {
      return new URL(withProtocol).toString();
    } catch {
      return '';
    }
  };

  const handleCardLinkSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedLink = normalizeCardLink(cardLink);

    if (!normalizedLink) {
      setCardLinkError('Вставьте корректную ссылку на карточку.');
      return;
    }

    setCardLinkError('');

    trackLinkSubmit({
      page_type: pageType,
      page_slug: pageSlug,
      block_id: blockId,
      form_id: formId,
    });

    const message = `Здравствуйте! Отправляю ссылку на карточку:\n${normalizedLink}`;
    const telegramUrl = `https://t.me/ponizovandrey?text=${encodeURIComponent(message)}`;

    window.open(telegramUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="backdrop-blur-xl bg-gradient-to-r from-white/70 to-white/40 rounded-3xl p-12 border border-white/50 shadow-2xl border-t border-white/30 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[#1E2837] leading-[64px] lc-styled-text__text lc-styled-text__text_align_left">
        Первый шаг — ссылка на карточку
      </h2>
      <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl mx-auto">
        Покажу где теряете клиентов и что даст первый рост. Без навязывания.
      </p>
      <form onSubmit={handleCardLinkSubmit} className="max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <label className="sr-only" htmlFor="card-link">
            Ссылка на карточку
          </label>
          <input
            id="card-link"
            type="url"
            inputMode="url"
            autoComplete="url"
            placeholder="Вставьте ссылку на карточку"
            value={cardLink}
            onChange={(event) => {
              setCardLink(event.target.value);
              if (cardLinkError) setCardLinkError('');
            }}
            className="w-full rounded-lg border border-white/60 bg-white/90 px-5 py-3 text-base text-[#1A3A2E] shadow-sm outline-none transition focus:border-[#1A3A2E]/30 focus:ring-2 focus:ring-[#1A3A2E]/10"
          />
          <button
            type="submit"
            className="inline-flex shrink-0 items-center justify-center px-6 py-2.5 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-lg text-sm md:text-base border border-[#E0B800] hover:bg-[#F7D03A] hover:border-[#F0C000] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C518]/60 focus-visible:ring-offset-2"
          >
            Отправить ссылку
          </button>
        </div>
        {cardLinkError ? (
          <p className="mt-3 text-sm text-[#B42318]">{cardLinkError}</p>
        ) : (
          <p className="mt-3 text-sm text-gray-600" />
        )}
      </form>
      <p className="text-lg font-semibold text-gray-600 mt-8">
        Ответ в течение 15 минут
      </p>
    </div>
  );
}

