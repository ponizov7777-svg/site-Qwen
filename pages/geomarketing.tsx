// pages/geomarketing.tsx
"use client";
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import FaqAccordion from '../components/FaqAccordion';
import CardLinkCTA from '../components/CardLinkCTA';
import { trackTelegramClick, type PageType } from '../lib/metrics';
import { initScrollDepthTracking } from '../lib/metrics-content';

const breadcrumbsData = [
  { label: 'Главная', href: '/' },
  { label: 'Геомаркетинг', href: '/geomarketing' },
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
  "px-8 py-4 bg-[#F5C518]/90 text-[#1A3A2E] font-semibold rounded-2xl text-lg hover:bg-[#F7D03A]/90 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 backdrop-blur-md border border-white/50"

const btnSecondary = 
  "px-8 py-4 bg-white/90 backdrop-blur-xl border-2 border-[#E65C00]/50 text-[#1A3A2E] font-semibold rounded-2xl hover:bg-white hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-0.5 transition-all duration-300"

const listItem = "flex items-start text-gray-700"
const listBullet = "text-[#E65C00] mr-3 mt-1 text-xl font-bold shrink-0"

// Тот же набор задач, что и на странице «Услуги и цены»
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
// Тарифы, скопированные 1:1 с /uslugi
const uslugiTariffs = [
  {
    id: 1,
    title: "Размещение компании на картах / оптимизация",
    kicker: "Базовый старт",
    ctaLabel: "Заказать размещение",
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
    ctaLabel: "Заказать настройку под ключ",
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
] as const;

export default function GeomarketingPage() {
  const pageType: PageType = 'geomarketing';
  useEffect(() => {
    const cleanup = initScrollDepthTracking({
      page_type: pageType,
      page_slug: '/geomarketing',
    });

    return cleanup;
  }, [pageType]);

  const blocks = [
    {
      title: 'Яндекс Карты',
      description: 'Карточка организации, услуги, фото, отзывы и структура — чтобы вас находили в локальном поиске и доверяли.',
      num: '01',
    },
    {
      title: 'Google Maps',
      description: 'Профиль и репутация в Google. Подходит не всем нишам, но когда нужно — подключаем и приводим в порядок.',
      num: '02',
    },
    {
      title: '2ГИС',
      description: 'Карточка и контакты, аккуратная упаковка и контроль качества — как отдельный источник обращений.',
      num: '03',
    },
    {
      title: 'Локальный спрос',
      description: 'Собираем "где вас ищут" и "за что выбирают", чтобы карточка и сайт отвечали на реальный запрос.',
      num: '04',
    },
  ];

  const cases = [
    {
      title: 'Запуск салона красоты в Санкт-Петербурге',
      image: '/images/Anna.png',
      description: (
        <>
          Запустил локальное продвижение салона красоты в Санкт-Петербурге: оформил карточку в Яндекс Картах и подготовил точку к приёму первых клиентов.{' '}
          <span className="font-semibold text-[#1A3A2E]">
            Результат — рост с 5 до 35 клиентов в месяц
          </span>
          , при этом{' '}
          <span className="font-semibold text-[#1A3A2E]">
            Яндекс Карты стали основным источником обращений.
          </span>
        </>
      ),
    },
    {
      title: 'Запуск маникюрного салона в Санкт-Петербурге',
      image: '/images/morevetta.png',
      description: (
        <>
          Комплексно подготовил маникюрный салон к запуску в Санкт-Петербурге: оформил карточку, настроил рекламную подписку Яндекс Бизнес, проработал услуги, объявления, акцию и онлайн-запись, а также внедрил сбор отзывов.{' '}
          <span className="font-semibold text-[#1A3A2E]">
            За счёт локального продвижения Яндекс Карты стали основным каналом привлечения клиентов.
          </span>
        </>
      ),
    },
    {
      title: 'Запуск кофейни в Костроме',
      image: '/images/Coffee.png',
      description: (
        <>
          Для запуска кофейни в Костроме изучил спрос, оформили и заполнил профили в Яндекс Картах и 2ГИС, подготовил площадки к открытию и первым обращениям.{' '}
          <span className="font-semibold text-[#1A3A2E]">
            Это позволило заранее сформировать локальную видимость и упростить путь клиента до первого визита.
          </span>
        </>
      ),
    },
  ];

  const faqGeomarketing = [
    {
      q: "Что такое геомаркетинг и почему он работает?",
      a: "Геомаркетинг — это привлечение клиентов через Яндекс.Карты, 2ГИС, Google Карты. Когда человек ищет 'салон красоты рядом', он уже готов записаться. Не нужно убеждать — нужно быть первым в списке. 65% клиентов выбирают из топ-3 карточек, и мы ставим вас в этот топ.",
    },
    
    {
      q: "Как быстро появятся первые заявки?",
      a: "Первые заявки — через 5–7 дней после оптимизации карточки. Стабильный поток (8–12 записей в месяц) — к концу первого месяца. Это не сотни сразу, но это реальные клиенты, которые искали вас рядом.",
    },
    {
      q: "Вы гарантируете результат?",
      a: "Гарантирую процесс: 10+ заявок при бюджете от 30 000 ₽. Не могу гарантировать 100 записей — между показом и записью есть звонки и качество услуг. Но гарантирую прозрачность: доступ к статистике и отчёт каждую неделю.",
    },
    {
      q: "Что именно вы делаете с моей карточкой?",
      a: "1. Анализ конкурентов: почему они выше. 2. Оптимизация названия, описания, фото, услуг. 3. Настройка рубрик и услуг. 4. Работа с отзывами. 5. Анализ геоданных: откуда идут клиенты. Карточка должна не просто быть — она должна продавать.",
    },
    {
      q: "А если у меня нет фото и отзывов?",
      a: "Без фото карточка теряет 40% кликов. Без отзывов — 60% доверия. Я помогаю с фотосъёмкой (найму проверенного фотографа) и системой сбора отзывов. Это и красиво и работает.",
    },
    {
      q: "Вы понимаете специфику салонов/косметологии?",
      a: "Да. Знаю, что летом и зимой — 'тёплый' трафик (кто искал 1–3 месяца назад). Знаю, что клиент боится плохого мастера — значит акцент на отзывах и фото работ. Знаю, что конкуренция — не только с другими салонами, а с желанием сделать самой. Показываем выгоду записи, а не скидку.",
    },
    {
      q: "Как измерить, что деньги не уходят впустую?",
      a: "У вас прямой доступ к Яндекс.Бизнесу: видите показы, клики, звонки. Еженедельный отчёт: сколько заявок, стоимость лида, что поменяли. Звонок 10 минут по пятницам — только цифры.",
    },
    
    {
      q: "Как начать?",
      a: "Шаг 1: Отправьте ссылку на карточку в Telegram. Шаг 2: Я скажу 2–3 точки роста 0 ₽. Шаг 3: Если видите пользу — подписываем договор и начинаем. Без долгих созвонов — только конкретика по цифрам.",
    },
  ];

  return (
    <>
      <Head>
        <title>Геомаркетинг для офлайн-бизнеса | Андрей Понизов</title>
        <meta
          name="description"
          content="Геомаркетинг: заявки из карт и локального поиска. Упаковка карточки, отзывы, видимость и понятная аналитика — без тумана, по цифрам."
        />
        <link rel="canonical" href="https://ponizov-marketing.ru/geomarketing" />
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Геомаркетинг",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Понизов Маркетинг",
              "address": { "@type": "PostalAddress", "addressLocality": "СПб" }
            },
            "description": "Упаковка карточек в Яндекс.Картах, Google Maps, 2ГИС для локального бизнеса"
          })}}
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
                  Геомаркетинг для офлайн‑бизнеса
                </h1>
                <p className="text-base md:text-lg text-white/85 leading-relaxed">
                  Помогаю получать заявки из карт и локального поиска: Яндекс.Карты, 2ГИС, Google Maps.
                  Фокус на видимость, отзывы и понятную аналитику.
                </p>
                
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: CONTENT BLOCKS */}
        <section className="py-20">
          <div className="mb-10 md:mb-12">
            <div
              className="h-px w-full bg-gradient-to-r from-transparent via-[#DCCFB4] to-transparent"
              aria-hidden="true"
            />
          </div>
          <h2 className={h2}>Что я называю геомаркетингом</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl">
            Это стратегия продвижения, при которой я учитываю географическое положение потенциальных клиентов для эффективного взаимодействия.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className={glassCard}>
              <h3 className={h3}>Проблема, которую вижу чаще всего</h3>
              <p className="text-gray-700 leading-relaxed">
                Карточка вроде есть, но она "пустая": слабые фото, их мало, неясные услуги, нет отзывов или на негатив никто не отвечает.
                В итоге рядом вас видят, но не выбирают.
              </p>
            </div>
            
            <div className={glassCard}>
              <h3 className={h3}>Мой подход</h3>
              <p className="text-gray-700 leading-relaxed">
                Сначала смотрю, как вас находят (и за что выбирают), потом навожу порядок в карточке и в измеримости,
                и только после этого усиливаю то, что работает и поправляю то, что не работает.
              </p>
            </div>
          </div>

          <div className="mt-16 md:mt-20 mb-10 md:mb-12">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#DCCFB4] to-transparent" aria-hidden="true" />
          </div>

          <h2 className={h2}>Что входит в мою работу</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl">
            Исследование локаций с высоким потенциалом продаж, привлечение локального трафика, прогноз эффективности вложений.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {blocks.map((b, i) => (
              <div key={i} className={glassCard}>
                <div className="text-2xl font-bold tracking-widest text-[#1A3A2E]/60 mb-4">
                  {b.num}
                </div>
                <h3 className={h3}>{b.title}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 md:mt-20 mb-10 md:mb-12">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#DCCFB4] to-transparent" aria-hidden="true" />
          </div>

          <h2 className={h2}>Мои запуски</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {cases.map((item, index) => (
              <article key={index} className={`${glassCard} h-full`}>
                <div className="grid h-full gap-6 md:grid-cols-[minmax(0,1fr)_96px] md:items-start">
                  <div className="grid h-full md:grid-rows-[88px_1fr] md:gap-y-4">
                    <div className="min-h-[88px]">
                      <h3 className="text-xl font-semibold text-[#1A3A2E] leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                  <div className="mx-auto md:mx-0 w-24 shrink-0 self-start">
                    <div className="aspect-[9/18]">
                      {item.image ? (
                        <div className="flex h-full items-center justify-center overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="max-w-full max-h-full w-auto h-auto object-contain"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className="flex h-full items-center justify-center rounded-[1.2rem] bg-[#F7F3E8] px-2 text-center">
                          <span className="text-xs font-medium leading-snug text-[#1A3A2E]/55">
                            Изображение телефона
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center">
            <Link href="/cases" className={btnSecondary}>
              Все кейсы
            </Link>
          </div>

          <div className="mt-16 md:mt-20 mb-10 md:mb-12">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#DCCFB4] to-transparent" aria-hidden="true" />
          </div>

          {/* Тарифы — блок 1:1 как на /uslugi */}
          <h2 className={h2}>Тарифы</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {uslugiTariffs.map((service) => {
              const telegramText = `Здравствуйте. Хочу заказать тариф «${service.title}» (${service.kicker}) по Яндекс Картам. Напишите, пожалуйста, как лучше стартовать.`;
              const telegramHref = `https://t.me/ponizovandrey?text=${encodeURIComponent(telegramText)}`;
              
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
                    {"priceBadge" in service && service.priceBadge && (
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
                      const included =
                        !!service.includedTasks &&
                        (service.includedTasks as readonly string[]).includes(task.id);
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
                    onClick={() =>
                      trackTelegramClick({
                        page_type: pageType,
                        page_slug: '/geomarketing',
                        block_id: 'tariffs',
                        service_id: service.id,
                        element_id: `tariff_${service.id}_cta`,
                      })
                    }
                  >
                    {service.ctaLabel}
                  </a>
                </div>
              </div>
            )})}
          </div>

          <div className="mt-16 md:mt-20 mb-10 md:mb-12">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#DCCFB4] to-transparent" aria-hidden="true" />
          </div>

          <h2 className={h2}>Частые вопросы о геомаркетинге</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl">
            Подробные ответы на ключевые вопросы
          </p>
          
          {/* Аккордеон с основными вопросами о геомаркетинге */}
          <div className="py-20">
            <FaqAccordion items={faqGeomarketing} className="space-y-4 max-w-4xl mx-auto" />
          </div>
        </section>

        {/* SECTION 3: CTA */}
        <section className="py-24">
          <div className="mb-10 md:mb-12">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#DCCFB4] to-transparent" aria-hidden="true" />
          </div>
          <CardLinkCTA pageType={pageType} pageSlug="/geomarketing" blockId="card_link_cta" formId="card_link_cta" />
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