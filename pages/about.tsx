// pages/about.tsx
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { trackLinkSubmit, trackTelegramClick, type PageType } from '../lib/metrics';
import { initScrollDepthTracking } from '../lib/metrics-content';

const breadcrumbsData = [
  { label: 'Главная', href: '/' },
  { label: 'Обо мне', href: '/about' }
];

export default function AboutPage() {
  // ===== КОНТЕЙНЕРЫ =====
  const container = "max-w-7xl mx-auto px-4"
  // ===== ТИПОГРАФИКА =====
  const h1 = "text-2xl md:text-4xl lg:text-5xl font-semibold mb-6 text-[#1E2837] leading-[64px] drop-shadow-sm lc-styled-text__text lc-styled-text__text_align_left"
  const h2 = "text-2xl md:text-4xl lg:text-5xl font-semibold mb-6 text-[#1E2837] leading-[64px] lc-styled-text__text lc-styled-text__text_align_left"
  const h3 = "text-xl font-semibold text-[#1A3A2E] mb-4 leading-tight"
  // ===== GLASSMORPHISM КАРТОЧКИ =====
  const glassCard = 
    "glass-card backdrop-blur-xl bg:white/70 border-white/50 shadow-xl hover:shadow-black/10 p-8 rounded-2xl overflow-hidden"
  const glassCardWithButton = 
    "glass-card backdrop-blur-xl bg:white/70 border-white/50 shadow-xl hover:shadow-black/10 p-8 rounded-2xl overflow-hidden flex flex-col h-full"
  const glassHero = 
    "backdrop-blur-xl bg-white/90 border border-white/60 rounded-3xl shadow-2xl p-12 md:p-16"
  const glassCTA = 
    "backdrop-blur-xl bg-gradient-to-r from-white/70 to-white/40 rounded-3xl p-12 border border-white/50 shadow-2xl border-t border-white/30"
  // ===== КЛАССЫ ДЛЯ СИММЕТРИЧНОГО РАСПОЛОЖЕНИЯ =====
  const cardContent = "flex-grow"  // Для контента внутри карточки
  const cardButtonContainer = "mt-auto pt-6" // Для блока с кнопкой
  const cardButton = "w-full text-center block" // Для кнопок в карточках
  // ===== БЕЙДЖИ =====
  const badgePrimary = 
    "px-3 py-1 bg-[#F5C518]/40 text-[#1A3A2E] text-sm font-medium rounded-full backdrop-blur-sm border border-white/60"
  // ===== КНОПКИ =====
  const btnPrimary =
    "inline-flex items-center justify-center px-6 py-2.5 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-lg text-sm md:text-base border border-[#E0B800] hover:bg-[#F7D03A] hover:border-[#F0C000] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C518]/60 focus-visible:ring-offset-2"
  const btnSecondary =
    "inline-flex items-center justify-center px-6 py-2.5 bg-white text-[#1A3A2E] font-medium rounded-lg text-sm md:text-base border border-[#E5E7EB] hover:bg-gray-50 hover:border-[#D1D5DB] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E65C00]/40 focus-visible:ring-offset-2"
  // ===== ССЫЛКИ =====
  const linkAccent = 
    "text-[#E65C00] font-semibold hover:text-[#D65A31] inline-flex items-center gap-2"
  // ===== СПИСКИ =====
  const listItem = "flex items-start text-gray-700"
  const listBullet = "text-[#E65C00] mr-3 mt-1 text-xl font-bold shrink-0"

  const pageType: PageType = 'other';

  useEffect(() => {
    const cleanup = initScrollDepthTracking({
      page_type: pageType,
      page_slug: '/about',
    });

    return cleanup;
  }, [pageType]);

  return (
    <>
      <Head>
        <title>Обо мне | Андрей Понизов — геомаркетинг</title>
        <meta
          name="description"
          content="Андрей Понизов — геомаркетинг, трафик и понятная аналитика для бизнеса. Прозрачный подход, логика решений и измеримый результат."
        />
        <link rel="canonical" href="https://ponizov-marketing.ru/about" />
      </Head>

      <div className={container}>
        <Breadcrumbs items={breadcrumbsData} />

        {/* HERO */}
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
                  Обо мне — коротко и по делу
                </h1>
                <p className="text-base md:text-lg text-white/85 leading-relaxed">
                  В предпринимательстве более 10 лет. Работаю с локальным бизнесом (beauty, медицина, косметология, HoReCa)
                  и выстраиваю продвижение так, чтобы вы получали больше качественных заявок.
                </p>
                <p className="text-sm md:text-base text-white/80">
                Можно начать с одного слова «консультация» в{" "}
                  <a
                    href="https://t.me/ponizovandrey"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="font-semibold text-[#F7D03A] hover:text-white transition-colors	duration-200"
                    onClick={() =>
                      trackTelegramClick({
                        page_type: pageType,
                        page_slug: '/about',
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

        {/* Главная секция: Фото + ценности + процесс */}
        <section className="py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Левая колонка */}
            <div className="flex flex-col h-full gap-8">
              {/* Фото */}
              <div className={`${glassCard} flex-shrink-0 flex flex-col`}>
                <img
                  src="/images/about.jpg"
                  alt="Андрей Понизов"
                  className="w-full h-64 object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>

              {/* Ценности */}
              <div className={`${glassCardWithButton}`}>
                <h2 className={h2}>
                  Что для меня важно в работе
                </h2>

                <div className={cardContent}>
                  <div className="space-y-4 mb-6">
                    <div className={listItem}>
                      <span className={listBullet}>→</span>
                      <span className="text-gray-700">
                        Прозрачность: по цифрам видно, что сделано и что это дало.
                      </span>
                    </div>
                    <div className={listItem}>
                      <span className={listBullet}>→</span>
                      <span className="text-gray-700">
                        Управляемость: сначала аналитика, потом масштабирование.
                      </span>
                    </div>
                    <div className={listItem}>
                      <span className={listBullet}>→</span>
                      <span className="text-gray-700">
                        Взрослый подход: без обещаний "100 клиентов за неделю", только логика и тесты.
                      </span>
                    </div>
                    <div className={listItem}>
                      <span className={listBullet}>→</span>
                      <span className="text-gray-700">
                        Работа с теми, кто понимает цель и готов действовать заранее.
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {['Beauty', 'Медицина', 'Косметология', 'HoReCa', 'Локальный спрос'].map((t, i) => (
                      <span key={i} className={badgePrimary}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className={cardButtonContainer}>
                  
                </div>
              </div>
            </div>

            {/* Правая колонка */}
            <div className="space-y-8">
              {/* Как думаю */}
              <div className={`${glassCardWithButton}`}>
                <div className={cardContent}>
                  <h2 className={h2}>
                    Как я думаю 
                  </h2>
                  <p className="text-gray-700 mb-4 text-lg">
                    Я не работаю ради отчёта. Мне важно, чтобы бизнес видел 
                    <strong className="text-[#1A3A2E]"> рост числа клиентов</strong>.
                  </p>
                  <p className="text-gray-700">
                    Если что-то нельзя измерить — сначала наводим порядок: цели, метки, базовые KPI. 
                    Только потом смотрим, что работает или не работает.
                  </p>
                </div>
              </div>

              {/* Процесс */}
              <div className={`${glassCardWithButton}`}>
                <div className={cardContent}>
                  <h2 className={h2}>
                    Как выглядит работа
                  </h2>
                  <div className="grid md:grid-cols-1 gap-6">
                    <div className={glassCard}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className={badgePrimary}>01</span>
                        <div className="font-semibold text-xl text-[#1A3A2E]">Смотрю картину</div>
                      </div>
                      <p className="text-gray-600">
                        Откуда идут заявки, что происходит в картах/на сайте/в рекламе, где теряются клиенты.
                      </p>
                    </div>
                    <div className={glassCard}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className={badgePrimary}>02</span>
                        <div className="font-semibold text-xl text-[#1A3A2E]">Настраиваю аналитику</div>
                      </div>
                      <p className="text-gray-600">
                        Метрику, цели, KPI — чтобы любое решение было видно в статистике.
                      </p>
                    </div>
                    <div className={glassCard}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className={badgePrimary}>03</span>
                        <div className="font-semibold text-xl text-[#1A3A2E]">Оптимизирую по цифрам</div>
                      </div>
                      <p className="text-gray-600">
                        Что отключаем, что усиливаем, что масштабируем — без гаданий.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Сертификаты */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className={`${glassCard} flex flex-col items-center text-center`}>
                  <img 
                    src="/images/Сертификат-Директ-Про.webp" 
                    alt="Сертификат Яндекс Директ Про"
                    className="w-full max-w-xs h-44 object-contain rounded-2xl shadow-xl bg-gradient-to-br from-white/80 to-amber-50/50 p-4 mb-4"
                    loading="lazy"
                  />
                  <p className="text-sm font-semibold text-[#1A3A2E]">Директ Про</p>
                </div>
                <div className={`${glassCard} flex flex-col items-center text-center`}>
                  <img 
                    src="/images/Сертификат Яндекс Бизнес.webp" 
                    alt="Сертификат Яндекс Бизнес"
                    className="w-full max-w-xs h-44 object-contain rounded-2xl shadow-xl bg-gradient-to-br from-white/80 to-amber-50/50 p-4 mb-4"
                    loading="lazy"
                  />
                  <p className="text-sm font-semibold text-[#1A3A2E]">Яндекс Бизнес</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Компетенции */}
        <section className="py-20">
          <div className="mb-10 md:mb-12">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#DCCFB4] to-transparent" aria-hidden="true" />
          </div>
          <div className="text-center mb-16">
            <h2 className={h2}>Мои компетенции</h2>
            <p className="text-gray-600">Геомаркетинг, трафик, аналитика — всё для локального бизнеса</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`${glassCardWithButton}`}>
              <div className={cardContent}>
                <h3 className={h3}>Геомаркетинг</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Локальный спрос и карты: делаю так, чтобы вас чаще находили рядом — и это видно в кассе.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Яндекс.Карты', 'Google Maps', '2ГИС', 'Локальный поиск'].map((skill, i) => (
                    <span key={i} className={badgePrimary}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className={`${glassCardWithButton}`}>
              <div className={cardContent}>
                <h3 className={h3}>Трафик</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Реклама, где понятно что покупаем и сколько стоит заявка. Сначала считаем, потом масштабируем.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Яндекс.Директ', 'VK реклама', 'Авито реклама', 'ROI'].map((skill, i) => (
                    <span key={i} className={badgePrimary}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className={`${glassCardWithButton}`}>
              <div className={cardContent}>
                <h3 className={h3}>Аналитика</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  План работ и приоритеты: что даёт быстрый эффект, что рост дальше, как контролируем.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Яндекс Метрика', 'Вебвизор', 'CRM', 'Коллтрекинг'].map((skill, i) => (
                    <span key={i} className={badgePrimary}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Принципы */}
        <section className="py-20">
          <div className="mb-10 md:mb-12">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#DCCFB4] to-transparent" aria-hidden="true" />
          </div>
          <div className="text-center mb-16">
            <h2 className={h2}>Принципы работы</h2>
            <p className="text-gray-600">Чтобы сразу было понятно, как работаем</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className={glassCard}>
              <blockquote className="text-xl text-gray-800 italic leading-relaxed border-l-4 border-[#E65C00]/50 pl-6 py-4">
                Я не обещаю чудес. Делаю порядок в цифрах и понятный план действий.
              </blockquote>
            </div>
            <div className={glassCard}>
              <blockquote className="text-xl text-gray-800 italic leading-relaxed border-l-4 border-[#E65C00]/50 pl-6 py-4">
                Решения только по цифрам. Нет цифр — сначала их создаём.
              </blockquote>
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
                  page_slug: '/about',
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