// pages/index.tsx
'use client';
import Head from 'next/head';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import JsonLd from '../components/JsonLd';
import AdFormatsFilter from '../components/AdFormatsFilter';
import CardLinkCTA from '../components/CardLinkCTA';
import { trackMetrikaGoal, trackTelegramClick, type PageType } from '../lib/metrics';
import { initScrollDepthTracking } from '../lib/metrics-content';

const breadcrumbsData = [
  { label: 'Главная', href: '/' },
];

// Интерфейсы для типизации данных (решение ошибки TypeScript)
interface FormatItem {
  id: string;
  title: string;
  benefit: string;
  description: ReactNode;
  cta: string;
  href: string;
  image?: string;
  badge?: string;
}

interface SubCategory {
  id: 'standard' | 'premium';
  title: string;
  items: FormatItem[];
}

interface Category {
  title: string;
  items?: FormatItem[];
  subCategories?: SubCategory[];
}

export default function HomePage() {
  // ===== КЛАССЫ ИЗ STYLE GUIDE =====
  const container = "max-w-7xl mx-auto px-4";
  const h1 = "text-[28px] md:text-[32px] font-semibold mb-6 text-[#1E2837] leading-[64px] drop-shadow-sm lc-styled-text__text lc-styled-text__text_align_left";
  const h2 = "text-3xl md:text-4xl font-semibold mb-6 text-[#1E2837] leading-[64px] lc-styled-text__text lc-styled-text__text_align_left";
  const h3 = "text-xl font-semibold text-[#1A3A2E] mb-4 leading-tight";
  const glassCard = "glass-card backdrop-blur-xl bg:white/70 border-white/50 shadow-xl hover:shadow-black/10 p-8 rounded-2xl overflow-hidden";
  const glassHero = "backdrop-blur-xl bg-white/90 border border-white/60 rounded-3xl shadow-2xl p-12 md:p-16";
  const glassCTA = "backdrop-blur-xl bg-gradient-to-r from-white/70 to-white/40 rounded-3xl p-12 border border-white/50 shadow-2xl border-t border-white/30";
  const badgePrimary = "px-3 py-1 bg-[#F5C518]/40 text-[#1A3A2E] text-sm font-medium rounded-full backdrop-blur-sm border border-white/60";
  const btnPrimary =
    "inline-flex items-center justify-center px-6 py-2.5 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-lg text-sm md:text-base border border-[#E0B800] hover:bg-[#F7D03A] hover:border-[#F0C000] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C518]/60 focus-visible:ring-offset-2";
  const btnSecondary =
    "inline-flex items-center justify-center px-6 py-2.5 bg-white text-[#1A3A2E] font-medium rounded-lg text-sm md:text-base border border-[#E5E7EB] hover:bg-gray-50 hover:border-[#D1D5DB] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E65C00]/40 focus-visible:ring-offset-2";
  const linkAccent = "text-[#E65C00] font-semibold hover:text-[#D65A31] inline-flex items-center gap-2";
  const listItem = "text-gray-700 marker:text-[#E65C00]";

  // Данные кейсов
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

  const advantages = [
    {
      title: 'Прозрачность в цифрах',
      description: 'Можно в любой момент спросить "как дела?" — и я покажу, что сделано, что это дало и что делаем дальше.',
    },
    {
      title: 'Сначала измеримость',
      description: 'Если цифр нет — наводим порядок (цели/метки/аналитика), и только потом масштабируем трафик.',
    },
    {
      title: 'Взрослый отбор проектов',
      description: 'Не берусь за задачи "давайте просто запустим рекламу". Работаю там, где есть локальный спрос и понятная экономика.',
    },
  ];

  // ✅ Исправленный SEO JSON-LD для главной страницы
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Геомаркетинг и заявки из карт | Андрей Понизов",
    "description": "Помогаю локальному бизнесу получать заявки из карт и рекламы. Работаю по цифрам: измеримость, понятный план действий и прозрачная логика решений.",
    "url": "https://ponizov-marketing.ru/",
    "datePublished": "2026-02-10",
    "author": { "@type": "Person", "name": "Андрей Понизов" },
    "mainEntity": {
      "@type": "ItemList",
      "name": "Услуги геомаркетинга",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Геомаркетинг",
          "url": "https://ponizov-marketing.ru/geomarketing"
        },
        {
          "@type": "ListItem", 
          "position": 2,
          "name": "Трафик и заявки",
          "url": "https://ponizov-marketing.ru/uslugi#kontekst"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Аналитика",
          "url": "https://ponizov-marketing.ru/uslugi#strategiya"
        }
      ]
    }
  };

  const pageType: PageType = 'home';

  useEffect(() => {
    const cleanup = initScrollDepthTracking({
      page_type: pageType,
      page_slug: '/',
    });

    return cleanup;
  }, [pageType]);

  const handleTelegramHeroClick = () => {
    trackTelegramClick({
      page_type: pageType,
      page_slug: '/',
      block_id: 'hero',
      element_id: 'hero_telegram_link',
    });
  };

  const handleNavToCases = () => {
    trackMetrikaGoal('micro_nav_to_cases', {
      page_type: pageType,
      page_slug: '/',
      block_id: 'cases',
    });
  };

  return (
    <>
      <Head>
        <title>Геомаркетинг и заявки из карт | Андрей Понизов</title>
        <meta
          name="description"
          content="Помогаю локальному бизнесу получать заявки из карт и рекламы. Работаю по цифрам: измеримость, понятный план действий и прозрачная логика решений."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ponizov-marketing.ru/" />
        
        {/* ✅ WebSite schema (глобальный для сайта) */}
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Понизов Маркетинг",
              "description": "Геомаркетинг и заявки из карт для локального бизнеса",
              "url": "https://ponizov-marketing.ru/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://ponizov-marketing.ru/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        {/* ✅ WebPage schema (для этой страницы) */}
        <JsonLd data={jsonLdData} />
      </Head>

      <div className={container}>
        
        {/* SECTION 1: HERO */}
        <section className="py-12 md:py-16">
          {/* HERO с фоновым изображением 16:9 и текстом слева */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl min-h-[320px] md:min-h-[420px]">
            {/* Фоновое изображение. Замените src на свою фотографию 16:9 */}
            <div
              className="absolute inset-0 bg-cover bg-[80%_center] md:bg-[center_left]"
              style={{
                backgroundImage: "url('/images/univesal.png')",
              }}
              aria-hidden="true"
            />

            {/* Лёгкий затемнитель слева для читаемости текста */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/20 to-black/0" aria-hidden="true" />

            {/* Контент слева */}
            <div className="relative z-10 px-6 py-10 md:px-12 md:py-14 max-w-3xl">
              <div className="space-y-6 max-w-xl text-white">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight lc-styled-text__text lc-styled-text__text_align_left">
                  Продвижение организаций на Яндекс Картах{` `}
                  <span className="block md:inline">Старт за 1 час.</span>
                </h1>
                <p className="text-base md:text-lg text-white/85 leading-relaxed">
                  Помогаю бизнесу привлекать больше клиентов через геомаркетинг и оптимизацию на картах.
                  
                </p>
                
                <p className="text-sm md:text-base text-white/80">
                  Можно начать с одного слова «консультация» в&nbsp;
                  <a
                    className="font-semibold text-[#F7D03A] hover:text-white transition-colors	duration-200"
                    href="https://t.me/ponizovandrey?text=Консультация"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    onClick={handleTelegramHeroClick}
                  >
                    t.me/ponizovandrey
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: CONTENT BLOCKS */}
        <section className="py-12 md:py-16">
          <div className="mb-10 md:mb-12">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#DCCFB4] to-transparent" aria-hidden="true" />
          </div>
          <h2 className={h2}>Будьте рядом с клиентом на каждом шаге</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-1xl">
            Люди ищут салон рядом с домом, строят маршруты до круглосуточного магазина в другом районе и присматривают кафе недалеко от офиса. Расскажите о вашем бизнесе, когда они только планируют маршрут или уже перемещаются по городу.
          </p>
          
          

          {/* ✅ ТРЕХУРОВНЕВОЙ ФИЛЬТР РЕКЛАМНЫХ ФОРМАТОВ */}
          <AdFormatsFilter />

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
            <Link
              href="/cases"
              className={btnSecondary}
              onClick={handleNavToCases}
            >
              Все кейсы
            </Link>
          </div>

          <div className="mt-16 md:mt-20 mb-10 md:mb-12">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#DCCFB4] to-transparent" aria-hidden="true" />
          </div>

          <h2 className={h2}>Почему со мной работают?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl">
            Я не усложняю — делаю так, чтобы бизнес понимал, что происходит.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {advantages.map((item, index) => (
              <div key={index} className={glassCard}>
                <h3 className={h3}>{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 md:mt-20 mb-10 md:mb-12">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#DCCFB4] to-transparent" aria-hidden="true" />
          </div>

          <h2 className={h2}>Формат старта</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className={`${glassCard} flex h-full flex-col border border-[#F5C518]/20 bg-gradient-to-br from-[#FFFDF5] to-[#F7F3E8]`}>
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#E65C00]">
                    Старт без риска
                  </p>
                  <h3 className="text-xl font-semibold text-[#1A3A2E] leading-tight">
                    Бесплатный аудит
                  </h3>
                </div>
                <span className={badgePrimary}>
                  15–20 минут
                </span>
              </div>
              
              <p className="text-sm font-semibold text-[#1A3A2E] mb-3">
                Стоимость: бесплатно
              </p>
              
              <p className="text-gray-700 mb-5 leading-relaxed">
                За короткий созвон быстро покажу, что сейчас мешает получать заявки и какие 2–3 шага дадут самый быстрый эффект.
              </p>

              <p className="mb-3 text-sm font-semibold text-[#1A3A2E]">
                Что разберём
              </p>
              
              <ul className="space-y-3 list-disc pl-5">
                {["Карты: видимость, наполнение.", "Реклама: где сливается бюджет.", "Сайт: где теряются заявки."].map((item, idx) => (
                  <li key={idx} className={listItem}>
                    {item}
                  </li>
                ))}
              </ul>
              
              <a
                href="https://t.me/ponizovandrey"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className={`${btnPrimary} w-full text-center mt-10`}
                onClick={() =>
                  trackTelegramClick({
                    page_type: pageType,
                    page_slug: '/',
                    block_id: 'format_start',
                    element_id: 'free_audit_telegram_cta',
                  })
                }
              >
                Получить быстрый аудит
              </a>
            </div>

            <div className={`${glassCard} flex h-full flex-col border border-[#1A3A2E]/10 bg-gradient-to-br from-[#F7F4EA] to-[#EEE7D8]`}>
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#1A3A2E]/75">
                    Подробный разбор
                  </p>
                  <h3 className="text-xl font-semibold text-[#1A3A2E] leading-tight">
                    Платная консультация
                  </h3>
                </div>
                <span className="px-3 py-1 bg-[#1A3A2E] text-white text-sm font-medium rounded-full backdrop-blur-sm border border-[#1A3A2E]/60">
                  1,5–2 часа
                </span>
              </div>

              <p className="text-sm font-semibold text-[#1A3A2E] mb-3">
                Стоимость: 10&nbsp;000&nbsp;₽
              </p>
              
              <p className="text-gray-700 mb-5 leading-relaxed">
                Подробно разбираем экономику, спрос, воронку и точки роста, чтобы на выходе получить понятный план действий и приоритетов.
              </p>

              <p className="mb-3 text-sm font-semibold text-[#1A3A2E]">
                Что получите
              </p>
              
              <ul className="space-y-3 list-disc pl-5">
                {["Что менять в первую очередь (быстрый эффект).", "Какие гипотезы тестировать и как измерять.", "План на 1–3 месяца (без воды)."].map((item, idx) => (
                  <li key={idx} className={listItem}>
                    {item}
                  </li>
                ))}
              </ul>
              
              <a
                href="https://t.me/ponizovandrey"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className={`${btnPrimary} w-full text-center mt-10`}
                onClick={() =>
                  trackTelegramClick({
                    page_type: pageType,
                    page_slug: '/',
                    block_id: 'format_start',
                    element_id: 'paid_consultation_telegram_cta',
                  })
                }
              >
                Записаться на консультацию
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 3: CTA */}
        <section className="py-12 md:py-16">
          <div className="mb-10 md:mb-12">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#DCCFB4] to-transparent" aria-hidden="true" />
          </div>
          <CardLinkCTA pageType={pageType} pageSlug="/" blockId="card_link_cta" formId="card_link_cta" />
        </section>
      </div>
    </>
  );
}