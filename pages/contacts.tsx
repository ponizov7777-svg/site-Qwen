// pages/contacts.tsx
"use client";
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import FaqAccordion from '../components/FaqAccordion';
import { trackLinkSubmit, trackTelegramClick, type PageType } from '../lib/metrics';
import { initScrollDepthTracking } from '../lib/metrics-content';
import { buildFaqPageJsonLd } from '../lib/structured-data';

const breadcrumbsData = [
  { label: 'Главная', href: '/' },
  { label: 'Контакты', href: '/contacts' },
];

// ===== КЛАССЫ ИЗ STYLE GUIDE (КОПИРУЕМ) =====
const container = "max-w-7xl mx-auto px-4"
const h1 = "text-2xl md:text-4xl lg:text-5xl font-semibold mb-6 text-[#1E2837] leading-[64px] drop-shadow-sm lc-styled-text__text lc-styled-text__text_align_left"
const h2 = "text-2xl md:text-4xl lg:text-5xl font-semibold mb-6 text-[#1E2837] leading-[64px] lc-styled-text__text lc-styled-text__text_align_left"
const h3 = "text-xl font-semibold text-[#1A3A2E] mb-4 leading-tight"

const glassCard = 
  "glass-card backdrop-blur-xl bg-white/70 border-white/50 shadow-xl hover:shadow-black/10 transition-all duration-300 p-8 rounded-2xl overflow-hidden"

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

export default function ContactsPage() {
  const pageType: PageType = 'contacts';
  useEffect(() => {
    const cleanup = initScrollDepthTracking({
      page_type: pageType,
      page_slug: '/contacts',
    });

    return cleanup;
  }, [pageType]);

  const socials = [
    {
      title: "Telegram",
      subtitle: "@ponizovandrey",
      href: "https://t.me/ponizovandrey",
      badge: "TG",
    },
    {
      title: "VK",
      subtitle: "andrey_anatolyevich_marketing",
      href: "https://vk.com/andrey_anatolyevich_marketing",
      badge: "VK",
    },
    {
      title: "RuTube",
      subtitle: "ponizov-marketing",
      href: "https://rutube.ru/channel/73592687/",
      badge: "RT",
    },
    {
      title: "MAX",
      subtitle: "ponizovandrey",
      href: "https://max.ru/u/f9LHodD0cOKv94u0uUQGsTH7c9Cibtp9qAEtmFpgYQ-QfGsVeYNyc7M34aU",
      badge: "MAX",
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
        "Гарантирую процесс: 10+ заявок при бюджете от 30 000 ₽.",
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

  return (
    <>
      <Head>
        <title>Контакты | Андрей Понизов — геомаркетинг</title>
        <meta
          name="description"
          content="Контакты: Telegram и соцсети, плюс форма для заявки. Напишите, что за бизнес и какая задача — подскажу, с чего начать."
        />
        <link rel="canonical" href="https://ponizov-marketing.ru/contacts" />
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Контакты Понизов Маркетинг",
            "description": "Контакты для связи по вопросам геомаркетинга и продвижения локального бизнеса",
            "url": "https://ponizov-marketing.ru/contacts",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "telephone": "+79841955227",
              "availableLanguage": "Russian"
            }
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
              className="absolute inset-0 bg-cover bg-[80%_center] md:bg-[center_left]"
              style={{
                backgroundImage: "url('/images/univesal.png')",
              }}
              aria-hidden="true"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/25 to-black/5" aria-hidden="true" />

            <div className="relative z-10 px-6 py-10 md:px-12 md:py-14 max-w-3xl">
              <div className="space-y-6 max-w-xl text-white">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight lc-styled-text__text lc-styled-text__text_align_left">
                  Связаться и обсудить задачу
                </h1>
                <p className="text-base md:text-lg text-white/85 leading-relaxed">
                  Проще всего написать в Telegram и отправить ссылку на карточку или статистику.
                  Я скажу, где теряются клиенты и что сделать первым шагом.
                </p>
                
                <p className="text-sm md:text-base text-white/80">
                  Telegram:{" "}
                  <a
                    href="https://t.me/ponizovandrey"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="font-semibold text-[#F7D03A] hover:text-white transition-colors duration-200"
                    onClick={() =>
                      trackTelegramClick({
                        page_type: pageType,
                        page_slug: '/contacts',
                        block_id: 'hero',
                        element_id: 'hero_telegram_link',
                      })
                    }
                  >
                    t.me/ponizovandrey
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-16 md:mt-20 mb-10 md:mb-12">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#DCCFB4] to-transparent" aria-hidden="true" />
        </div>

        {/* SECTION 2: CONTENT BLOCKS */}
        <section className="py-20">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Соцсети */}
            <div className={`${glassCard} flex flex-col h-full`}>
              <div className="flex-grow">
                <h2 className={h2}>Где меня найти</h2>
                <div className="space-y-4">
                  {socials.map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="flex items-center gap-4 p-4 border-2 border-[#E65C00] rounded-xl hover:bg-white/80 transition-all duration-300 group"
                      onClick={
                        s.title === 'Telegram'
                          ? () =>
                              trackTelegramClick({
                                page_type: pageType,
                                page_slug: '/contacts',
                                block_id: 'socials',
                                element_id: 'contacts_social_telegram',
                              })
                          : undefined
                      }
                    >
                      <div className="w-12 h-12 rounded-full bg-[#E65C00]/10 flex items-center justify-center border border-[#E65C00]/30 group-hover:bg-[#E65C00]/20 transition-all duration-300">
                        <span className="text-sm font-bold text-[#E65C00]">{s.badge}</span>
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium text-[#1A3A2E]">{s.title}</p>
                        <p className="text-gray-600 truncate">{s.subtitle}</p>
                      </div>
                      <span className="ml-auto text-[#E65C00] font-medium group-hover:translate-x-1 transition-all duration-300">→</span>
                    </a>
                  ))}
                </div>
              </div>
              <div className="mt-auto pt-6 border-t border-white/50">
                <Link href="/consultations" className={`${btnPrimary} w-full text-center block`}>
                  Записаться на консультацию
                </Link>
              </div>
            </div>

            {/* FAQ - Аккордеон */}
            <div className={`${glassCard} flex flex-col h-full`}>
              <div className="flex-grow">
                <div className="mb-10 md:mb-12">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-[#DCCFB4] to-transparent" aria-hidden="true" />
                </div>
                <h2 className={h2}>Вопросы</h2>
                <FaqAccordion items={faq} className="space-y-4" />
              </div>
              <div className="mt-auto pt-6 border-t border-white/50">
                <Link href="/consultations" className={linkAccent}>
                  Посмотреть форматы консультаций →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: CTA */}
        <section className="py-12 md:py-16">
          <div className="mb-10 md:mb-12">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#DCCFB4] to-transparent" aria-hidden="true" />
          </div>
          <div className="backdrop-blur-xl bg-gradient-to-r from-white/70 to-white/40 rounded-3xl p-12 border border-white/50 shadow-2xl border-t border-white/30 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[#1E2837] leading-[64px] lc-styled-text__text lc-styled-text__text_align_left">
              Первый шаг — ссылка на карточку
            </h2>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl mx-auto">
              Покажу где теряете клиентов и что даст первый рост. Без навязывания.
            </p>
            <form
              className="max-w-2xl mx-auto"
              onSubmit={(event) => {
                event.preventDefault();
                trackLinkSubmit({
                  page_type: pageType,
                  page_slug: '/contacts',
                  block_id: 'card_link_form',
                  form_id: 'card_link_form',
                });
              }}
            >
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
                  className="w-full rounded-lg border border-white/60 bg-white/90 px-5 py-3 text-base text-[#1A3A2E] shadow-sm outline-none transition focus:border-[#1A3A2E]/30 focus:ring-2 focus:ring-[#1A3A2E]/10"
                />
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center px-6 py-2.5 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-lg text-sm md:text-base border border-[#E0B800] hover:bg-[#F7D03A] hover:border-[#F0C000] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C518]/60 focus-visible:ring-offset-2"
                >
                  Отправить ссылку
                </button>
              </div>
              <p className="mt-3 text-sm text-gray-600" />
            </form>
            <p className="text-lg font-semibold text-gray-600 mt-8">
              Ответ в течение 15 минут
            </p>
          </div>
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