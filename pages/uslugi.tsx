// pages/uslugi.tsx
"use client";
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import FaqAccordion from '../components/FaqAccordion';
import CardLinkCTA from '../components/CardLinkCTA';
import { trackMetrikaGoal, trackTelegramClick, type PageType } from '../lib/metrics';
import { observeBlockDwell, initScrollDepthTracking } from '../lib/metrics-content';
import { buildFaqPageJsonLd } from '../lib/structured-data';

const breadcrumbsData = [
  { label: 'Главная', href: '/' },
  { label: 'Услуги и цены', href: '/uslugi' },
];

// ===== КЛАССЫ ИЗ STYLE GUIDE (КОПИРУЕМ) =====
const container = "max-w-7xl mx-auto px-4"
const h1 = "text-2xl md:text-4xl lg:text-5xl font-semibold mb-6 text-[#1E2837] leading-[64px] drop-shadow-sm lc-styled-text__text lc-styled-text__text_align_left"
const h2 = "text-2xl md:text-4xl lg:text-5xl font-semibold mb-6 text-[#1E2837] leading-[64px] lc-styled-text__text lc-styled-text__text_align_left"
const h3 = "text-xl font-semibold text-[#1A3A2E] mb-4 leading-tight"

const glassCard = 
  "glass-card backdrop-blur-xl bg:white/70 border-white/50 shadow-xl hover:shadow-black/10 p-8 rounded-2xl overflow-hidden"

const glassHero = 
  "backdrop-blur-xl bg-white/90 border border-white/60 rounded-3xl shadow-2xl p-12 md:p-16"

const glassCTA = 
  "backdrop-blur-xl bg-gradient-to-r from-white/70 to-white/40 rounded-3xl p-12 border border-white/50 shadow-2xl border-t border-white/30"

const badgePrimary = 
  "px-3 py-1 bg-[#F5C518]/40 text-[#1A3A2E] text-sm font-medium rounded-full backdrop-blur-sm border border-white/60"

const btnPrimary =
  "inline-flex items-center justify-center px-6 py-2.5 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-lg text-sm md:text-base border border-[#E0B800] hover:bg-[#F7D03A] hover:border-[#F0C000] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C518]/60 focus-visible:ring-offset-2"

const btnSecondary =
  "inline-flex items-center justify-center px-6 py-2.5 bg-white text-[#1A3A2E] font-medium rounded-lg text-sm md:text-base border border-[#E5E7EB] hover:bg-gray-50 hover:border-[#D1D5DB] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E65C00]/40 focus-visible:ring-offset-2"

const linkAccent = 
  "text-[#E65C00] font-semibold hover:text-[#D65A31] inline-flex items-center gap-2"

const listItem = "flex items-start text-gray-700"
const listBullet = "text-[#E65C00] mr-3 mt-1 text-xl font-bold shrink-0"

const coreTasks = [
  {
    id: "placement_access",
    label: "Размещение или проверка карточки компании в Яндекс Картах, настройка доступов",
  },
  {
    id: "base_profile",
    label: "Базовая упаковка профиля: категории, контакты, график работы, описание, UTM‑метки",
  },
  {
    id: "services_catalog",
    label: "Структура услуг и прайс‑листа: понятные названия, цены, связка запросов и услуг",
  },
  {
    id: "visual",
    label: "Визуальная упаковка: подбор и загрузка фото, обложка, рекомендации по контенту",
  },
  {
    id: "seo_deep",
    label: "Глубокая SEO‑оптимизация карточки под локальный поиск и сценарии клиентов",
  },
  {
    id: "competitors",
    label: "Базовый анализ конкурентов в картах и рекомендации по отстройке",
  },
  {
    id: "ads_setup",
    label: "Подключение и запуск рекламной подписки Яндекс Бизнес",
  },
  {
    id: "funnel_analytics",
    label: "Проверка воронки: от показа до заявки, где теряются клики и обращения",
  },
  {
    id: "monthly_support",
    label: "Сопровождение 1 месяц после запуска: контроль изменений и корректировки",
  },
  {
    id: "reviews_system",
    label: "Система работы с отзывами: скрипты ответов и план по сбору положительных отзывов",
  },
  {
    id: "reputation",
    label: "Работа с репутацией: фильтрация негатива, отработка и обжалование спорных отзывов",
  },
  {
    id: "growth_plan",
    label: "Индивидуальный план развития карточки на 1–3 месяца: точки роста и приоритеты",
  },
] as const;

export default function uslugiPage() {
  const pageType: PageType = 'services';
  const tariffsRef = useRef<HTMLElement | null>(null);
  const uslugi = [
    {
      id: 1,
      title: "Размещение компании на картах / оптимизация",
      kicker: "Базовый старт",
      ctaLabel: "Заказать размещение на картах",
      description: (
        <>
          Подходит, если нужно корректно разместить компанию на Яндекс Картах, привести карточку в порядок и усилить её видимость в локальном поиске.{" "}
          <strong>Без рекламного бюджета можно выйти на 30–40 новых заявок в месяц из карт:</strong>{" "}
          из них <strong>10–15 переходят в оплаты</strong> со средним чеком <strong>10 000–50 000 ₽</strong> — это дополнительно{" "}
          <strong>+100 000–500 000 ₽ ежемесячно</strong>.
        </>
      ),
      includedTasks: [
        "placement_access",
        "base_profile",
        "services_catalog",
        "visual",
      ],
      price: "20 000 ₽",
      oldPrice: "25 000 ₽",
      priceNote: "Ваш старт",
      featured: false,
    },
    {
      id: 2,
      title: "Настройка карт под ключ",
      kicker: "Оптимальный вариант",
      ctaLabel: "Заказать настройку карт под ключ",
      description: (
        <>
          Тариф для бизнеса, которому нужен не только порядок в карточке, но и быстрый запуск продвижения через рекламную подписку.{" "}
          <strong>Можно увеличить от 50 до 100 новых заявок в месяц из Яндекс Карт:</strong>{" "}
          из них <strong>30–50 переходят в оплаты</strong> со средним чеком <strong>10 000–50 000 ₽</strong> — это дополнительно{" "}
          <strong>+300 000–1 000 000 ₽ ежемесячно</strong>.
        </>
      ),
      includedTasks: [
        "placement_access",
        "base_profile",
        "services_catalog",
        "visual",
        "seo_deep",
        "competitors",
        "ads_setup",
        "funnel_analytics",
      ],
      price: "33 000 ₽",
      priceNote: "Под ключ",
      featured: true,
      priceBadge: "Популярно",
    },
    {
      id: 3,
      title: "Ваш бизнес — мой бизнес",
      kicker: "Максимальное включение",
      ctaLabel: "Заказать сопровождение",
      description: (
        <>
          Формат для тех, кому нужен не только запуск, но и сопровождение карточки после старта, чтобы не бросать её сразу после настройки.{" "}
          <strong>Без рекламного бюджета можно увеличить от 50 до 100 новых заявок в месяц из Яндекс Карт:</strong>{" "}
          из них <strong>30–50 переходят в оплаты</strong> со средним чеком <strong>10 000–50 000 ₽</strong> — это дополнительно{" "}
          <strong>+300 000–1 000 000 ₽ ежемесячно</strong>.
        </>
      ),
      includedTasks: [
        "placement_access",
        "base_profile",
        "services_catalog",
        "visual",
        "seo_deep",
        "competitors",
        "ads_setup",
        "funnel_analytics",
        "monthly_support",
        "reviews_system",
        "reputation",
        "growth_plan",
      ],
      price: "45 000 ₽",
      oldPrice: "50 000 ₽",
      priceNote: "Запуск + 1 месяц сопровождения",
      featured: false,
    },
  ];

  const faq = [
    {
      q: "Как быстро я увижу возврат?",
      a: [
        "Первые заявки с карт — через 5–7 дней после доработки карточки и фото.",
        "Окупаемость — к концу первого месяца, если менеджер перезванивает за 10 минут и салон готов принимать 10–15 клиентов.",
        "Не обещаю тысячи сразу — но 8–12 стабильных записей ежемесячно реально."
      ]
    },
    {
      q: "Почему не дешевле? Другой берёт 15 000 ₽",
      a: [
        "За 15 000 ₽ настроят карточку и забудут — без анализа конкурентов, без фото, без работы с отзывами.",
        "Через месяц потратите лишние 30 000 ₽ на бесполезный трафик.",
        "Я беру 50 000 ₽, но даю 10+ заявок в месяц по цифрам — видно в статистике сразу."
      ]
    },
    {
      q: "Как знать, что бюджет не тратится впустую?",
      a: [
        "У вас есть прямой доступ к Яндекс.Бизнесу/Директу/ВК рекламе — видите показы, клики, звонки в реальном времени.",
        "Еженедельный отчёт: заявки, стоимость лида, что поменяли.",
        "Звонок по пятницам 10 минут — только цифры: сработало, не сработало, план на неделю."
      ]
    },
    {
      q: "Что если захочу прекратить?",
      a: [
        "Расторгните в любой момент.",
        "Все правки карточки, фото, аналитика — остаются ваши.",
        "Подготовлю инструкцию 'как вести дальше самому' или передам другому."
      ]
    },
    {
      q: "Вы понимаете, как работают салоны/косметология?",
      a: [
        "Да. Знаю, что пик спроса — вечер/выходные, а летом-зимой — 'тёплый' трафик (кто искал недавно).",
        "Главный страх клиента — сделают ли \"как я хочу\", значит акцент на отзывы и фото 'до/после'.",
        "Анализировал 100+ карточек салонов."
      ]
    },
    {
      q: "Как привлекать тех, кто запишется, а не спросит цену?",
      a: [
        "Разделяем: 'теплый' (ищет 'салон + город') — на страницу с ценами + отзывы + форма телефон.",
        "'Горячий' (ближайший слот) — сразу на запись с кнопкой.",
        "Конверсия растёт с 10% до 25% — видно по статистике."
      ]
    },
    {
      q: "Какие гарантии, что сработает?",
      a: [
        "Гарантирую процесс: 10+ заявок при бюджете от 30 000 ₽ — или корректирую 0 ₽.",
        "Еженедельные отчёты — или следующий месяц без оплаты.",
        "Доступ к статистике всегда. Но результат зависит от ваших звонков и услуг — честно."
      ]
    },
    {
      q: "А если негатив в отзывах?",
      a: [
        "Негатив — сигнал. Настраиваю мониторинг: отзыв → звонок клиенту за 1 час, решаем, просим обновить.",
        "В 60% случаев переворачивается в плюс. Параллельно собираем с довольных. Негатив обжалуем в поддержке."
      ]
    },
    {
      q: "Почему именно вы, а не другой?",
      a: [
        "Работаю один — общаемся напрямую, без менеджеров.",
        "Специализируюсь на геомаркетинге — не распыляюсь."
      ]
    },
    {
      q: "Работаете с моими конкурентами в городе?",
      a: [
        "Возможно. Но не беру два салона в одном районе — конфликт интересов.",
        "Пропишем эксклюзив в договоре. Цель — сделать вас лидером по картам.",
        "Отправьте ссылку на ваш профиль, я посмотрю где вы находитесь и не будет ли пересечений"
      ]
    },
  ];

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
        <title>Услуги и цены | Андрей Понизов — геомаркетинг</title>
        <meta
          name="description"
          content="Яндекс Карты, Директ, веб-аналитика и аудит для офлайн-бизнеса. Работаю по цифрам: сначала измеримость, потом масштабирование."
        />
        <link rel="canonical" href="https://ponizov-marketing.ru/uslugi" />
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Понизов Маркетинг",
            "address": { "@type": "PostalAddress", "addressLocality": "СПб" },
            "telephone": "+79841955227",
            "description": "Маркетинговые услуги для локального бизнеса",
            "url": "https://ponizov-marketing.ru/uslugi"
          })}}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildFaqPageJsonLd(faq)),
          }}
        />
      </Head>

      <div className={container}>
        <Breadcrumbs items={breadcrumbsData} />

        {/* SECTION 1: HERO */}
        <section className="py-12 md:py-16">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl min-h-[320px] md:min-h-[420px]">
            <div
              className="absolute inset-0 bg-cover bg-[78%_center] md:bg-[center_right]"
              style={{
                backgroundImage: "url('/images/univesal.png')",
              }}
              aria-hidden="true"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/25 to-black/5" aria-hidden="true" />

            <div className="relative z-10 px-6 py-10 md:px-12 md:py-14 max-w-3xl">
              <div className="space-y-6 max-w-xl text-white">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight lc-styled-text__text lc-styled-text__text_align_left">
                  Увеличиваю рост ваших заявок понятному плану
                  <span className="block md:inline"> </span>
                </h1>
                <p className="text-base md:text-lg text-white/85 leading-relaxed">
                  Работаю так, чтобы бизнес видел: <strong>действие → цифра → вывод → шаг</strong>.
                  Начнём со ссылки — скажу, где уходят клиенты.
                </p>
                
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: CONTENT BLOCKS */}
        <section
          className="py-20"
          ref={tariffsRef}
        >
          <div className="mb-10 md:mb-12">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#DCCFB4] to-transparent" aria-hidden="true" />
          </div>
          <h2 className={h2}>Тарифы</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {uslugi.map((service) => {
              const telegramText = `Здравствуйте. Хочу заказать тариф «${service.title}» (${service.kicker}) по Яндекс Картам. Напишите, пожалуйста, как лучше стартовать.`;
              const telegramHref = `https://t.me/ponizovandrey?text=${encodeURIComponent(telegramText)}`;

              const handleTariffClick = () => {
                trackMetrikaGoal('micro_interest_service_card_click', {
                  page_type: pageType,
                  page_slug: '/uslugi',
                  block_id: 'tariffs',
                  service_id: service.id,
                });
                trackTelegramClick({
                  page_type: pageType,
                  page_slug: '/uslugi',
                  block_id: 'tariffs',
                  service_id: service.id,
                  element_id: `tariff_${service.id}_cta`,
                });
              };

              return (
              <div
                key={service.id}
                className={`flex h-full flex-col rounded-2xl border p-8 overflow-hidden transition-all duration-300 ${
                  service.featured
                    ? 'border-[#F5C518]/50 bg-gradient-to-br from-[#FFFDF2] to-[#FFF5CC] shadow-2xl shadow-[#F5C518]/10 ring-1 ring-[#F5C518]/35'
                    : 'backdrop-blur-xl bg-white/70 border-white/50 shadow-xl hover:shadow-black/10'
                }`}
              >
                <div className="flex-grow">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <p className={`mb-2 text-xs font-semibold uppercase tracking-[0.14em] ${
                        service.featured ? 'text-[#B77900]' : 'text-[#E65C00]'
                      }`}>
                        {service.kicker}
                      </p>
                      <h3 className="text-xl font-semibold text-[#1A3A2E] leading-tight">
                        {service.title}
                      </h3>
                    </div>
                    {service.priceBadge && (
                      <span className="shrink-0 rounded-full border border-[#F0C000] bg-[#F5C518] px-3 py-1 text-sm font-semibold text-[#1A3A2E] shadow-sm">
                        {service.priceBadge}
                      </span>
                    )}
                  </div>
                  
                  <p className="mb-6 leading-relaxed text-gray-700">
                    {service.description}
                  </p>

                  <p className="mb-3 text-sm font-semibold text-[#1A3A2E]">
                    Что входит
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {coreTasks.map((task) => {
                      const included = service.includedTasks?.includes(task.id);
                      return (
                        <li key={task.id} className={listItem}>
                          <span
                            className={`${listBullet} ${
                              included ? "text-[#16A34A]" : "text-gray-300"
                            }`}
                          >
                            {included ? "✓" : "•"}
                          </span>
                          <span
                            className={
                              included
                                ? "text-gray-800"
                                : "text-gray-400 line-through"
                            }
                          >
                            {task.label}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                
                <div className={`mt-auto pt-6 ${service.featured ? 'border-t border-[#F5C518]/35' : 'border-t border-white/50'}`}>
                  <div className="mb-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      {('oldPrice' in service) && service.oldPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          {service.oldPrice}
                        </span>
                      )}
                      <span className="text-3xl font-bold text-[#1A3A2E]">
                        {service.price}
                      </span>
                    </div>
                    <span className="mt-1 block text-sm text-gray-600">
                      {service.priceNote}
                    </span>
                  </div>
                  
                  <a 
                    href={telegramHref}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className={`${btnPrimary} w-full text-center block`}
                    onClick={handleTariffClick}
                  >
                    {service.ctaLabel}
                  </a>
                </div>
              </div>
            )})}
          </div>
        </section>

        {/* FAQ SECTION - АККОРДЕОН */}
        <section className="py-20">
          <div className="mb-10 md:mb-12">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#DCCFB4] to-transparent" aria-hidden="true" />
          </div>
          <h2 className={h2}>Частые вопросы</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl">
            Подробные ответы на самые важные вопросы о работе и сотрудничестве
          </p>
          
          <FaqAccordion items={faq} className="space-y-4 max-w-4xl mx-auto" />
        </section>

        {/* SECTION 3: CTA */}
        <section className="py-24">
          <div className="mb-10 md:mb-12">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#DCCFB4] to-transparent" aria-hidden="true" />
          </div>
          <CardLinkCTA pageType={pageType} pageSlug="/uslugi" blockId="card_link_cta" formId="card_link_cta" />
        </section>

        {/* Кнопка "На главную" */}
        <div className="text-center mt-12 mb-8">
          <Link href="/" className={btnSecondary}>
            ← На главную
          </Link>
        </div>
      </div>
    </>
  );
}