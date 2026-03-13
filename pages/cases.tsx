// pages/cases.tsx
"use client";
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { trackLinkSubmit, trackTelegramClick, type PageType } from '../lib/metrics';
import { initScrollDepthTracking } from '../lib/metrics-content';

const breadcrumbsData = [
  { label: 'Главная', href: '/' },
  { label: 'Кейсы', href: '/cases' }
];

// ===== КЛАССЫ ИЗ STYLE GUIDE (КОПИРУЕМ) =====
const container = "max-w-7xl mx-auto px-4"
const h1 = "text-2xl md:text-4xl lg:text-5xl font-semibold mb-6 text-[#1E2837] leading-[64px] drop-shadow-sm"
const h2 = "text-2xl md:text-4xl lg:text-5xl font-semibold mb-6 text-[#1E2837] leading-[64px]"
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

const linkAccent = 
  "text-[#E65C00] font-semibold hover:text-[#D65A31] transition-all duration-300 inline-flex items-center gap-2 group-hover:translate-x-1"

const listItem = "flex items-center text-gray-700"
const listBullet = "text-[#E65C00] mr-3 text-lg font-bold shrink-0"

export default function CasesPage() {
  const pageType: PageType = 'cases';
  useEffect(() => {
    const cleanup = initScrollDepthTracking({
      page_type: pageType,
      page_slug: '/cases',
    });

    return cleanup;
  }, [pageType]);

  const cases = [
    {
      id: 1,
      title: 'С нуля в карты: как появиться в выдаче и начать получать заявки',
      category: 'Размещение и первый поток',
      results: '0 → 8–12 заявок/мес из карт',
      period: '1 месяц',
      cost: 'Единовременно 20 000 ₽',
      description:
        'Карточки не было вообще: люди искали услуги в районе, но бренд просто не существовал в локальной выдаче. Мы решили вынести компанию в Яндекс Карты как отдельный канал заявок: оформили профиль, услуги, фото и контакты так, чтобы его можно было найти по живым запросам пользователей.',
      proofLabel: 'Профиль появился в топ‑выдаче Яндекс Карт по основным запросам района.',
      proofHref: '',
      href: '/consultations',
      details: [
        'Провёл аудит локального спроса: какие формулировки и районы дают целевой трафик',
        'Создал и верифицировал профиль в Яндекс Бизнес, настроил категории и географию',
        'Собрал базовую упаковку: услуги, цены, график работы, контакты, первые фото',
        'Добавил простые офферы и UTM‑метки, чтобы было видно, что именно приводит заявки',
      ],
      questions: [
        'Нужно ли вообще размещаться на картах, если уже есть сайт?',
        'Даст ли мне сама по себе карточка хоть какие‑то заявки?',
        'Что сделать в первый месяц, чтобы понять, работает ли геомаркетинг для моего бизнеса?',
      ]
    },
    {
      id: 2,
      title: 'Карточка есть, заявок нет: как упаковка и отзывы оживили профиль',
      category: 'Упаковка и репутация',
      results: '3–5 → 18–22 заявки/мес',
      period: '2 месяца',
      cost: 'Единовременно 20 000 ₽',
      description:
        'Карточка существовала больше года: случайные фото, 2–3 отзыва и общие формулировки в описании. В выдаче профиль показывался, но люди почти не выбирали его на фоне конкурентов. Мы привели карточку к виду «понятно кому, что и за сколько» и сделали так, чтобы отзывы начали работать на доверие.',
      proofLabel: 'Рост заявок прослеживается по статистике Яндекс Бизнес и увеличению количества отзывов.',
      proofHref: '',
      href: '/consultations',
      details: [
        'Переписали название и описание под реальные запросы и страхи клиентов',
        'Структурировали услуги и цены: убрали «кашу», добавили понятные позиции и примеры',
        'Подготовили и загрузили фотопакет: первый экран, интерьер, процесс, результаты',
        'Внедрили мягкий сценарий запроса отзыва после посещения, подключили работу с негативом',
      ],
      questions: [
        'Почему из моей карточки мало звонков, хотя она есть в Яндекс Картах?',
        'Что делать, если мало отзывов или есть старый негатив?',
        'Как понять, что именно в карточке отпугивает клиентов и как это исправить?',
      ]
    },
    {
      id: 3,
      title: 'Максимум без бюджета: рост заявок за счёт SEO и контента в карточке',
      category: 'Рост без рекламы',
      results: '8–10 → 20–25 заявок/мес без подписки',
      period: '2–3 месяца',
      cost: 'Единовременно 20 000 ₽',
      description:
        'Клиент не был готов сразу вкладываться в рекламу: цель — сначала выжать максимум из бесплатной выдачи. Карточка уже была оформлена, но без системной SEO‑проработки и регулярных обновлений. Мы сфокусировались на семантике, структуре услуг и контенте внутри профиля.',
      proofLabel: 'По статистике Яндекс Бизнес — рост показов, кликов и целевых действий без роста рекламного бюджета.',
      proofHref: '',
      href: '/consultations',
      details: [
        'Собрали семантику под карточку: запросы «рядом», ниши, услуги, боли клиентов',
        'Переписали услуги и описания с учётом ключевых фраз и логики поиска на картах',
        'Добавили новости, акции и регулярные обновления, чтобы профиль «жил» и ранжировался выше',
        'Оптимизировали фото и первый экран карточки под конверсию в звонок/запись',
      ],
      questions: [
        'Можно ли вырасти в картах без подключения рекламной подписки?',
        'Что даёт SEO внутри карточки и как его делать по‑простому?',
        'Нужно ли вести новости и акции в Яндекс Картах, или это «маркетинговые игрушки»?',
      ]
    },
    {
      id: 4,
      title: 'Когда бесплатного мало: подключение рекламной подписки и масштабирование',
      category: 'Масштабирование и аналитика',
      results: '20–25 → 40+ заявок/мес',
      period: '1–2 месяца после подключения',
      cost: 'Бюджет 6 000 ₽/мес + работа',
      description:
        'Карточка уже давала стабильные заявки из органики, но бизнесу нужно было больше объёма и предсказуемости. Мы подготовили профиль к рекламе, подключили подписку Яндекс Бизнес и выстроили аналитику так, чтобы видеть, во что превращаются показы и клики.',
      proofLabel: 'Статистика по заявкам и звонкам из рекламной подписки Яндекс Бизнес.',
      proofHref: '',
      href: '/consultations',
      details: [
        'Провели аудит готовности карточки к платному трафику: офферы, услуги, отзывы, рейтинг',
        'Настроили рекламную подписку Яндекс Бизнес: гео, сценарии показов, дневные лимиты',
        'Связали заявки с рекламой через UTM‑метки и цели, чтобы считать стоимость лида',
        'Еженедельно оптимизировали кампанию и карточку по фактическим данным',
      ],
      questions: [
        'Когда имеет смысл подключать рекламную подписку, а когда рано?',
        'Как не слить бюджет в Яндекс Бизнес и понимать, что реклама окупается?',
        'Что именно нужно донастроить в карточке перед запуском рекламы?',
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Кейсы с цифрами и результатами | Андрей Понизов</title>
        <meta
          name="description"
          content="Реальные кейсы по Яндекс Картам, Директу и аналитике. Только цифры, период, расходы и логика решений — без «успешного успеха»"
        />
        <link rel="canonical" href="https://ponizov-marketing.ru/cases" />
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Кейсы по маркетингу Понизов Маркетинг",
            "description": "Реальные кейсы по продвижению локального бизнеса",
            "url": "https://ponizov-marketing.ru/cases",
            "numberOfItems": 4,
            "itemListElement": cases.map((caseItem, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "CreativeWork",
                "name": caseItem.title,
                "description": caseItem.description
              }
            }))
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
                  Кейсы с цифрами и контекстом
                </h1>
                <p className="text-base md:text-lg text-white/85 leading-relaxed">
                  Здесь только настоящие кейсы: что было, что стало, период(ы) и расходы.
                  Если у результата нет опоры на факты — я такой кейс не публикую.
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
                        page_slug: '/cases',
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
          <h2 className={`${h2} lc-styled-text__text lc-styled-text__text_align_left`}>
            Реализованные проекты
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl">
            Каждый кейс — отдельный сценарий: от появления в картах до масштабирования подписки.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {cases.map((caseItem) => (
              <article key={caseItem.id} className={`${glassCard} flex flex-col h-full`}>
                {/* Заголовок */}
                <div className="mb-4">
                  <h3 className={h3}>{caseItem.title}</h3>
                </div>

                {/* Результаты и сроки */}
                <div className="mb-4">
                  <div className="text-2xl font-bold text-[#E65C00] mb-2">
                    {caseItem.results}
                  </div>
                  <div className="text-gray-700 mb-2">
                    <span className="font-medium">Период:</span> {caseItem.period}
                  </div>
                  <div className="text-gray-700 mb-4">
                    <span className="font-medium">Расходы:</span> {caseItem.cost}
                  </div>
                </div>

                {/* Основной контент */}
                <div className="flex-grow">
                  {/* Описание */}
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {caseItem.description}
                  </p>

                  {/* Что было сделано */}
                  {caseItem.details && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-[#1A3A2E] mb-3">Что было сделано:</h4>
                      <ul className="space-y-2">
                        {caseItem.details.map((detail, idx) => (
                          <li key={idx} className={listItem}>
                            <span className={listBullet}>•</span>
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Какие вопросы и возражения закрывает кейс */}
                  {caseItem.questions && (
                    <div className="mb-0">
                      <h4 className="font-semibold text-[#1A3A2E] mb-3">
                        Какие были вопросы на старте:
                      </h4>
                      <ul className="space-y-2">
                        {caseItem.questions.map((q, idx) => (
                          <li key={idx} className={listItem}>
                            <span className={listBullet}>?</span>
                            <span className="text-gray-700">{q}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Доказательство результата */}
                <div className="mt-6 pt-4 border-t border-white/50">
                  {caseItem.proofHref ? (
                    <a
                      href={caseItem.proofHref}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="text-[#E65C00] font-semibold hover:text-[#D65A31] transition-all duration-300 inline-flex items-center gap-2 text-sm bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm"
                    >
                      {caseItem.proofLabel} →
                    </a>
                  ) : (
                    <div className="text-sm text-gray-700 font-medium">
                      {caseItem.proofLabel}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SECTION 3: CTA */}
        <section className="py-12 md:py-16">
          <div className="mb-10 md:mb-12">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#DCCFB4] to-transparent" aria-hidden="true" />
          </div>
          <div className="backdrop-blur-xl bg-gradient-to-r from-white/70 to-white/40 rounded-3xl p-12 border border-white/50 shadow-2xl border-t border-white/30 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 lc-styled-text__text lc-styled-text__text_align_left leading-[64px] text-[#1E2837]">
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
                  page_slug: '/cases',
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