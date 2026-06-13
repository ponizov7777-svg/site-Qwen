'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import FaqAccordion from '../../components/FaqAccordion';
import CardLinkCTA from '../../components/CardLinkCTA';
import { type PageType } from '../../lib/metrics';
import { observeBlockDwell, initScrollDepthTracking } from '../../lib/metrics-content';
import { buildFaqPageJsonLd } from '../../lib/structured-data';
import { SERVICE_FAQ, SERVICES } from '../../lib/servicesCatalog';

const breadcrumbsData = [
  { label: 'Главная', href: '/' },
  { label: 'Услуги и цены', href: '/uslugi' },
];

const container = 'max-w-7xl mx-auto px-4';
const h2 =
  'text-2xl md:text-4xl lg:text-5xl font-semibold mb-6 text-[#1E2837] leading-[64px] lc-styled-text__text lc-styled-text__text_align_left';
const btnPrimary =
  'inline-flex items-center justify-center px-6 py-2.5 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-lg text-sm md:text-base border border-[#E0B800] hover:bg-[#F7D03A] hover:border-[#F0C000] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C518]/60 focus-visible:ring-offset-2';
const btnSecondary =
  'inline-flex items-center justify-center px-6 py-2.5 bg-white text-[#1A3A2E] font-medium rounded-lg text-sm md:text-base border border-[#E5E7EB] hover:bg-gray-50 hover:border-[#D1D5DB] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E65C00]/40 focus-visible:ring-offset-2';

export default function UslugiHubPage() {
  const pageType: PageType = 'services';
  const tariffsRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!tariffsRef.current) return;

    observeBlockDwell(tariffsRef.current, {
      goalId: 'micro_content_tariffs_dwell_10s',
      dwellMs: 10000,
      params: {
        page_type: pageType,
        page_slug: '/uslugi',
        block_id: 'tariffs',
      },
    });
  }, [pageType]);

  useEffect(() => {
    const cleanup = initScrollDepthTracking({
      page_type: pageType,
      page_slug: '/uslugi',
    });

    return cleanup;
  }, [pageType]);

  return (
    <>
      <Head>
        <title>Услуги и цены | Андрей Понизов - геомаркетинг</title>
        <meta
          name="description"
          content="Услуги по Яндекс Картам: упаковка карточки, настройка под ключ и ежемесячное ведение для стабильного потока заявок."
        />
        <link rel="canonical" href="https://ponizov-marketing.ru/uslugi" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildFaqPageJsonLd(SERVICE_FAQ)),
          }}
        />
      </Head>

      <div className={container}>
        <Breadcrumbs items={breadcrumbsData} />

        <section className="py-12 md:py-16">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl min-h-[320px] md:min-h-[420px]">
            <div
              className="absolute inset-0 bg-cover bg-[78%_center] md:bg-[center_right]"
              style={{
                backgroundImage: "url('/images/univesal.png')",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/25 to-black/5"
              aria-hidden="true"
            />
            <div className="relative z-10 px-6 py-10 md:px-12 md:py-14 max-w-3xl">
              <div className="space-y-6 max-w-xl text-white">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight lc-styled-text__text lc-styled-text__text_align_left">
                  Увеличиваю рост ваших заявок по понятному плану
                </h1>
                <p className="text-base md:text-lg text-white/85 leading-relaxed">
                  Выберите формат работы и откройте страницу каждой услуги с деталями.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20" ref={tariffsRef}>
          <div className="mb-10 md:mb-12">
            <div
              className="h-px w-full bg-gradient-to-r from-transparent via-[#DCCFB4] to-transparent"
              aria-hidden="true"
            />
          </div>
          <h2 className={h2}>Услуги</h2>
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {SERVICES.map((service) => {
              return (
                <div
                  key={service.slug}
                  className={`flex h-full flex-col rounded-2xl border p-8 overflow-hidden transition-all duration-300 ${
                    service.featured
                      ? 'border-[#F5C518]/50 bg-gradient-to-br from-[#FFFDF2] to-[#FFF5CC] shadow-2xl ring-1 ring-[#F5C518]/35'
                      : 'backdrop-blur-xl bg-white/70 border-white/50 shadow-xl hover:shadow-black/10'
                  }`}
                >
                  <div className="flex-grow">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div>
                        <p
                          className={`mb-2 text-xs font-semibold uppercase tracking-[0.14em] ${
                            service.featured ? 'text-[#B77900]' : 'text-[#E65C00]'
                          }`}
                        >
                          {service.kicker}
                        </p>
                        <h3 className="text-xl font-semibold text-[#1A3A2E] leading-tight">
                          {service.title}
                        </h3>
                      </div>
                      {service.priceBadge ? (
                        <span className="shrink-0 rounded-full border border-[#F0C000] bg-[#F5C518] px-3 py-1 text-sm font-semibold text-[#1A3A2E] shadow-sm">
                          {service.priceBadge}
                        </span>
                      ) : null}
                    </div>

                    <p className="mb-6 leading-relaxed text-gray-700">{service.teaser}</p>

                  </div>

                  <div
                    className={`mt-auto pt-6 ${
                      service.featured ? 'border-t border-[#F5C518]/35' : 'border-t border-white/50'
                    }`}
                  >
                    <div className="mb-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        {service.oldPrice ? (
                          <span className="text-sm text-gray-400 line-through">{service.oldPrice}</span>
                        ) : null}
                        <span className="text-3xl font-bold text-[#1A3A2E]">{service.price}</span>
                      </div>
                      <span className="mt-1 block text-sm text-gray-600">{service.priceNote}</span>
                    </div>

                    <div className="grid gap-3">
                      <Link href={`/uslugi/${service.slug}`} className={`${btnSecondary} w-full`}>
                        Подробнее об услуге
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="py-20">
          <div className="mb-10 md:mb-12">
            <div
              className="h-px w-full bg-gradient-to-r from-transparent via-[#DCCFB4] to-transparent"
              aria-hidden="true"
            />
          </div>
          <h2 className={h2}>Частые вопросы</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl">
            Подробные ответы на самые частые вопросы о формате работы.
          </p>
          <FaqAccordion items={SERVICE_FAQ} className="space-y-4 max-w-4xl mx-auto" />
        </section>

        <section className="py-24">
          <div className="mb-10 md:mb-12">
            <div
              className="h-px w-full bg-gradient-to-r from-transparent via-[#DCCFB4] to-transparent"
              aria-hidden="true"
            />
          </div>
          <CardLinkCTA pageType={pageType} pageSlug="/uslugi" blockId="card_link_cta" formId="card_link_cta" />
        </section>

      </div>
    </>
  );
}
