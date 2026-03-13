// pages/blog.tsx
"use client";
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { trackLinkSubmit, type PageType } from '../lib/metrics';
import { initScrollDepthTracking } from '../lib/metrics-content';

const breadcrumbsData = [
  { label: 'Главная', href: '/' },
  { label: 'Статьи', href: '/blog' }
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
  "px-8 py-4 bg-[#F5C518]/90 text-[#1A3A2E] font-semibold rounded-2xl text-lg hover:bg-[#F7D03A]/90 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 backdrop-blur-md border border-white/50"

const btnSecondary = 
  "px-8 py-4 bg-white/90 backdrop-blur-xl border-2 border-[#E65C00]/50 text-[#1A3A2E] font-semibold rounded-2xl hover:bg-white hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-0.5 transition-all duration-300"

const linkAccent = 
  "text-[#E65C00] font-semibold hover:text-[#D65A31] inline-flex items-center gap-2"

const listItem = "flex items-start text-gray-700"
const listBullet = "text-[#E65C00] mr-3 mt-1 text-xl font-bold shrink-0"

const categories = ['Все материалы', 'Геомаркетинг', 'Реклама', 'Веб-аналитика', 'Аналитика', 'Beauty'];

export default function blogPage() {
  const pageType: PageType = 'blog';
  const [activeFilter, setActiveFilter] = useState('Все материалы');
  
  const blog = [
    {
      id: 1,
      title: 'Как на самом деле работают Яндекс.Карты для привлечения клиентов',
      excerpt: 'Разбор логики ранжирования, факторов видимости и ошибок, из-за которых бизнес не получает заявки.',
      date: '25.12.2025',
      href: '/blog/yandex-karty',
      category: 'Геомаркетинг'
    },
    {
      id: 2,
      title: 'Контекстная реклама для офлайн-бизнеса: что масштабировать, а что отключать',
      excerpt: 'Веб-аналитика работы с рекламой, если важны заявки, а не отчёты и клики.',
      date: '23.01.2026',
      href: '/blog/context-offline',
      category: 'Реклама'
    },
    {
      id: 3,
      title: 'Как анализировать локальных конкурентов и находить точки роста',
      excerpt: 'Практический подход к анализу спроса, а не копированию чужих решений.',
      date: '02.02.2026',
      href: '/blog/analiz-lokalnyh-konkurentov',
      category: 'Веб-аналитика'
    },
    {
      id: 4,
      title: 'Типовые ошибки в Yandex Maps и 2Gis, которые стоят бизнесу денег',
      excerpt: 'Почему карточка есть, а заявок нет — и как это исправлять системно.',
      date: '10.02.2026',
      href: '/blog/oshibki-maps',
      category: 'Геомаркетинг'
    },
    {
      id: 5,
      title: 'Как считать реальную окупаемость геомаркетинга',
      excerpt: 'Методика оценки ROI для офлайн-бизнеса без самообмана.',
      date: '14.02.2026',
      href: '/blog/geomarketing-roi',
      category: 'Аналитика'
    },
    {
      id: 6,
      title: 'Сезонные стратегии для beauty-бизнеса: где зарабатываются деньги',
      excerpt: 'Как планировать маркетинг, а не реагировать на спад постфактум.',
      date: '10.01.2026',
      href: '/blog/beauty-seasons',
      category: 'Beauty'
    }
  ];

  useEffect(() => {
    const cleanup = initScrollDepthTracking({
      page_type: pageType,
      page_slug: '/blog',
    });

    return cleanup;
  }, [pageType]);

  const filteredblog = activeFilter === 'Все материалы' 
    ? blog 
    : blog.filter(article => article.category === activeFilter);

  return (
    <>
      <Head>
        <title>Аналитика и статьи | Андрей Понизов</title>
        <meta
          name="description"
          content="Статьи, аналитика и стратегии привлечения клиентов для локального бизнеса. Без воды, шаблонов и теории ради теории."
        />
        <link rel="canonical" href="https://ponizov-marketing.ru/blog" />
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Статьи по интернет-маркетингу | Андрей Понизов",
            "description": "Практические материалы по маркетингу для бизнеса",
            "url": "https://ponizov-marketing.ru/blog",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": breadcrumbsData.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.label,
                "item": `https://ponizov-marketing.ru${item.href}`
              }))
            }
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
                  Статьи по интернет‑маркетингу для бизнеса
                </h1>
                <p className="text-base md:text-lg text-white/85 leading-relaxed">
                  Здесь я разбираю не инструменты, а решения:
                  почему одни бизнесы получают стабильный поток заявок из карт и рекламы,
                  а другие нет — несмотря на бюджеты.
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
          {/* Кому полезны материалы */}
          <div className={`${glassCard} mb-12 max-w-3xl`}>
            <p className="text-gray-700 leading-relaxed">
              Материалы будут полезны владельцам бизнеса и руководителям, которые готовы разбираться в цифрах, ограничениях и экономике.
              
            </p>
          </div>

          <h2 className={h2}>Материалы по категориям</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl">
            
          </p>
          
          {/* Фильтры */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-5 py-2 rounded-full font-medium backdrop-blur-sm border ${
                    activeFilter === category
                      ? `${badgePrimary} bg-[#F5C518]/70 hover:bg-[#F5C518]/80`
                      : 'bg-white/60 border-white/50 text-[#1A3A2E] hover:bg-white/80 hover:border-white/70 hover:shadow-md'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Статьи */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {filteredblog.map(article => (
              <article key={article.id} className={`${glassCard} flex flex-col h-full`}>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className={badgePrimary}>
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-600 font-medium">
                      {article.date}
                    </span>
                  </div>

                  <h3 className={h3}>
                    <Link href={article.href} className="hover:text-[#E65C00]">
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-gray-700 mb-6 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
                
                
              </article>
            ))}
          </div>

          {/* Состояние пустого фильтра */}
          {filteredblog.length === 0 && (
            <div className={`${glassCard} text-center py-10`}>
              <p className="text-xl text-gray-500 mb-6">По данной категории пока нет материалов</p>
              <button
                onClick={() => setActiveFilter('Все материалы')}
                className={`${btnSecondary} px-6 py-3 text-base`}
              >
                Показать все материалы
              </button>
            </div>
          )}
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
                  page_slug: '/blog',
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