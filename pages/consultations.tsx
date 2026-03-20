// pages/consultations.tsx
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
  { label: 'Консультации', href: '/consultations' },
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
  "text-[#E65C00] font-semibold hover:text-[#D65A31] transition-all duration-300 inline-flex items-center gap-2 group-hover:translate-x-1"

const listItem = "flex items-start text-gray-700"
const listBullet = "text-[#E65C00] mr-3 mt-1 text-xl font-bold shrink-0"

export default function ConsultationsPage() {
  const pageType: PageType = 'consultations';
  useEffect(() => {
    const cleanup = initScrollDepthTracking({
      page_type: pageType,
      page_slug: '/consultations',
    });

    return cleanup;
  }, [pageType]);

  const steps = [
    {
      num: "01",
      title: "Смотрим текущую картину",
      text: "Карты, реклама, сайт, воронка, работа с заявками. Ищем слабое место и усиливаем его.",
    },
    {
      num: "02",
      title: "Фиксируем, что измеряем",
      text: "Чтобы не гадать: какие цифры считаем, где смотрим, что считаем результатом на ближайшие 2–4 недели.",
    },
    {
      num: "03",
      title: "Делаем план",
      text: "Намечаем первые шаги, формируем ключевые гипотезы, формируем итоговые показатели.",
    },
  ];

  const faq = [
    {
      q: "Почему ты не гарантируешь количество клиентов?",
      a: "Между показом в картах и записью — несколько звеньев. Я контролирую первые: карточку, фото, отзывы, видимость. Вы — звонки, приём клиентов, качество услуг. Гарантия «100 записей» — обман. Я гарантирую процесс: 10+ заявок при бюджете от 30 000 ₽. Конверсию закрываем вместе — я помогу с текстами для ответов, вы — скоростью.",
    },
    {
      q: "Что именно ты контролируешь, а что — я?",
      a: "Я отвечаю за поток: оптимизация карточки в Яндекс.Картах, фото, отзывы, аналитика видимости. Вы — за конверсию: ответ за 10 минут, запись клиентов, цены, сервис. Точка передачи — заявка из карт. Если заявок мало — разбираю свою часть. Если не записываются — вашу. Честно, по цифрам.",
    },
    {
      q: "Почему 10 000 ₽ за консультацию? Другие берут 3 000 ₽.",
      a: "За 3 000 ₽ скажут «добавьте фото» и «больше отзывов». За 10 000 ₽ разбираю вашу карточку: где теряете видимость, где должны быть кнопки их работоспособность, что мешает заявкам, план на месяц с цифрами. Это диагностика по статистике — не мотивация. Если не продолжите со мной — план остаётся у вас и реализуете своими силами.",
    },
    {
      q: "Ты понимаешь специфику салонов/косметологии?",
      a: "Да. Знаю, что пик — вечер/выходные, летом-зимой работаем с «тёплым» трафиком (кто искал 1–3 мес. назад). Главный страх клиента — будут делать долго или плохой мастер — акцент на отзывы и фото работ. Перед встречой гляну вашу карточку и 3 соседей.",
    },
    {
      q: "Как быстро будут первые результаты?",
      a: "Первые заявки — через 5–7 дней после правок карточки. Стабильный поток (8–12 записей в месяц) — к концу первого месяца. Не обещаю сотни сразу — это развод. Но рост при бюджете 30–50 000 ₽ реален. Главное — отвечаете на звонки и сообщения.",
    },
    {
      q: "Что будет, если я захочу прекратить?",
      a: "Расторгните когда угодно. Все правки карточки, фото, аналитика — остаются ваши. Подготовлю инструкцию «как вести дальше самому» или передам другому. Никаких замков — бизнес ваш.",
    },
    {
      q: "Ты работаешь с моими конкурентами в городе?",
      a: "Возможно. Не беру два салона в одном районе — конфликт интересов. Пропишу эксклюзив в договоре. Цель — сделать вашу карточку лидером по картам в районе/городе.",
    },
  ];

  const consultationFaq = [
    {
      q: "Чем бесплатный аудит отличается от платного разбора?",
      a: (
        <>
          <span className="font-semibold text-[#1A3A2E]">Бесплатный — 15–20 минут</span>, чтобы понять, где теряются клиенты и какие 2–3 шага дадут самый быстрый эффект.{" "}
          <span className="font-semibold text-[#1A3A2E]">Платный — 1,5 часа глубокого разбора</span> с планом действий и логикой по цифрам.
        </>
      ),
    },
    {
      q: "Можно ли просто прислать ссылку, без созвона?",
      a: (
        <>
          Да.{" "}
          <span className="font-semibold text-[#1A3A2E]">
            Отправьте ссылку карточки, статистики или рекламы
          </span>{" "}
          — я скажу, куда смотреть в первую очередь и что обычно чинится быстро.
        </>
      ),
    },
    {
      q: "Что подготовить к платному разбору?",
      a: (
        <>
          <span className="font-semibold text-[#1A3A2E]">Минимум:</span> ссылку на карточку, сайт (если есть), доступ или ссылку по рекламе (если есть).{" "}
          <span className="font-semibold text-[#1A3A2E]">Плюс база</span>: город, услуга, примерный чек, маржа (если знаешь) и как сейчас приходят заявки.
        </>
      ),
    },
    {
      q: "После консультации ты берёшь в работу проект?",
      a: (
        <>
          Если есть понимание по бюджету и ожиданиям —{" "}
          <span className="font-semibold text-[#1A3A2E]">можно идти в сопровождение</span>. Если нет — я честно скажу и{" "}
          <span className="font-semibold text-[#1A3A2E]">
            оставлю план, который можно внедрять своими силами или с командой
          </span>
          .
        </>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Консультации по геомаркетингу | Андрей Понизов</title>
        <meta
          name="description"
          content="Бесплатный аудит (15 мин) или платная консультация (1,5 ч). Отправьте ссылку на карточку — скажу, где теряются клиенты и что делать."
        />
        <link rel="canonical" href="https://ponizov-marketing.ru/consultations" />
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Консультация по маркетингу",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Понизов Маркетинг"
            },
            "description": "Бесплатный аудит 15-20 минут и платная консультация 1,5 часа за 10 000 ₽",
            "offers": [
              {
                "@type": "Offer",
                "name": "Бесплатный аудит",
                "description": "15-20 минут, быстрый разбор ситуации"
              },
              {
                "@type": "Offer",
                "name": "Платная консультация",
                "price": "10000",
                "priceCurrency": "RUB",
                "description": "1,5 часа глубокого разбора с планом действий"
              }
            ]
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
                  Консультации по геомаркетингу
                </h1>
                <p className="text-base md:text-lg text-white/85 leading-relaxed">
                  Два формата: быстрый бесплатный аудит и платная консультация 1,5 часа.
                  Без «мотивационных» созвонов — только разбор по статистике и понятный план действий.
                </p>
                
                <p className="text-sm md:text-base text-white/80">
                Можно начать с одного слова «консультация» в{" "}
                  <a
                    href="https://t.me/ponizovandrey"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="font-semibold text-[#F7D03A] hover:text-white transition-colors duration-200"
                    onClick={() =>
                      trackTelegramClick({
                        page_type: pageType,
                        page_slug: '/consultations',
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
        <section id="formats" className="py-20">
          <h2 className={h2}>Форматы</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl">
            Выбирайте по задаче: подсветить проблемы или разобрать и сделать план.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Бесплатный аудит */}
            <div className={`${glassCard} flex flex-col h-full`}>
              <div className="flex justify-between items-start mb-6">
                <h3 className={h3}>Бесплатный аудит</h3>
                <span className={badgePrimary}>
                  15–20 минут
                </span>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
                Быстро смотрю текущую ситуацию и называю 2–3 приоритета: что мешает заявкам прямо сейчас.
              </p>
              
              <ul className="space-y-2 mb-8">
                {["Карты, видимость, карточка.", "Реклама: где съедает бюджет (если она есть).", "Сайт/обработка: где теряются заявки."].map((item, idx) => (
                  <li key={idx} className={listItem}>
                    <span className={listBullet}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="https://t.me/ponizovandrey"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className={`${btnPrimary} w-full text-center mt-auto`}
                onClick={() =>
                  trackTelegramClick({
                    page_type: pageType,
                    page_slug: '/consultations',
                    block_id: 'formats',
                    element_id: 'free_audit_telegram_cta',
                  })
                }
              >
                Отправить ссылку в Telegram
              </a>
            </div>

            {/* Платная консультация */}
            <div className={`${glassCard} flex flex-col h-full`}>
              <div className="flex justify-between items-start mb-6">
                <h3 className={h3}>Платная консультация</h3>
                <span className="px-3 py-1 bg-[#1A3A2E] text-white text-sm font-medium rounded-full backdrop-blur-sm border border-[#1A3A2E]/60">
                  10 000 ₽
                </span>
              </div>
              
              <p className="text-gray-700 mb-2 leading-relaxed flex-grow">
                Платная консультация 1,5 часа: разбираем цифры и логику, собираем понятный план действий.
              </p>
              <p className="text-sm text-gray-600 mb-6">Длительность: 1,5 часа</p>
              
              <ul className="space-y-2 mb-8">
                {["Где теряются заявки и почему?", "Что делать в каком порядке (приоритеты)?", "Что измеряем, чтобы не гадать?"].map((item, idx) => (
                  <li key={idx} className={listItem}>
                    <span className={listBullet}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="https://t.me/ponizovandrey?text=Здравствуйте! Хочу Записаться на консультацию"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className={`${btnPrimary} w-full text-center mt-auto`}
                onClick={() =>
                  trackTelegramClick({
                    page_type: pageType,
                    page_slug: '/consultations',
                    block_id: 'formats',
                    element_id: 'paid_consultation_telegram_cta',
                  })
                }
              >
                Записаться на консультацию
              </a>
            </div>
          </div>

          <div className="mt-16 md:mt-20 mb-10 md:mb-12">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#DCCFB4] to-transparent" aria-hidden="true" />
          </div>

          <h2 className={h2}>Как проходит Разбор</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl">
            
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((s, i) => (
              <div key={i} className={glassCard}>
                <div className="text-2xl font-bold tracking-widest text-[#1A3A2E]/60 mb-4">
                  {s.num}
                </div>
                <h3 className={h3}>{s.title}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {s.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 md:mt-20 mb-10 md:mb-12">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#DCCFB4] to-transparent" aria-hidden="true" />
          </div>

          <h2 className={h2}>Вопросы и ответы</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl">
            Коротко и по делу.
          </p>
          
          {/* Аккордеон с вопросами о работе */}
          <div className="mb-16">
            <FaqAccordion items={faq} className="space-y-4 max-w-4xl mx-auto" />
          </div>

          <h3 className="text-2xl font-semibold mb-6 text-[#1A3A2E]">Вопросы по консультациям</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {consultationFaq.map((item, i) => (
              <div key={i} className={glassCard}>
                <h3 className={h3}>{item.q}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
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
                  page_slug: '/consultations',
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