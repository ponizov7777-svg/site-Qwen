import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { maxUrlWithPrefilledText } from '../constants/links';
import { trackMAXClick, type PageType } from '../lib/metrics';
import { initScrollDepthTracking } from '../lib/metrics-content';

const breadcrumbsData = [
  { label: 'Главная', href: '/' },
  { label: 'Партнерская программа', href: '/partnerskaya-programma' },
];

const container = 'max-w-7xl mx-auto px-4';
const h1 =
  'text-2xl md:text-4xl lg:text-5xl font-semibold mb-6 text-[#1E2837] leading-tight drop-shadow-sm lc-styled-text__text lc-styled-text__text_align_left';
const h2 =
  'text-2xl md:text-4xl lg:text-5xl font-semibold mb-6 text-[#1E2837] leading-tight lc-styled-text__text lc-styled-text__text_align_left';
const h3 = 'text-xl font-semibold text-[#1A3A2E] mb-4 leading-tight';
const glassCard =
  'glass-card backdrop-blur-xl bg-white/70 border-white/50 shadow-xl hover:shadow-black/10 transition-all duration-300 p-8 rounded-2xl overflow-hidden';
const glassCTA =
  'backdrop-blur-xl bg-gradient-to-r from-white/80 to-white/50 rounded-3xl p-8 md:p-12 border border-white/50 shadow-2xl border-t border-white/30';
const btnPrimary =
  'inline-flex items-center justify-center px-6 py-2.5 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-lg text-sm md:text-base border border-[#E0B800] hover:bg-[#F7D03A] hover:border-[#F0C000] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C518]/60 focus-visible:ring-offset-2';
const btnSecondary =
  'inline-flex items-center justify-center px-6 py-2.5 bg-black text-white font-semibold rounded-lg text-sm md:text-base border border-black shadow-lg shadow-black/20 hover:bg-[#1A3A2E] hover:border-[#E65C00] hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C518] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A3A2E]';
const listItem = 'flex items-start text-gray-700';
const listBullet = 'text-[#E65C00] mr-3 mt-1 text-xl font-bold shrink-0';

const steps = [
  {
    title: 'Вы рекомендуете',
    text: 'Передаете контакт, отправляете ссылку на сайт или просто говорите человеку, что он пришел по вашей рекомендации.',
  },
  {
    title: 'Я общаюсь с клиентом',
    text: 'Первый шаг для клиента — бесплатный аудит. Я смотрю текущую ситуацию, нахожу точки роста и показываю, что можно улучшить.',
  },
  {
    title: 'Вы получаете 30%',
    text: 'После каждой фактической оплаты клиента вам начисляется 30% партнерского вознаграждения.',
  },
] as const;

export default function PartnerskayaProgrammaPage() {
  const pageType: PageType = 'other';

  useEffect(() => {
    const cleanup = initScrollDepthTracking({
      page_type: pageType,
      page_slug: '/partnerskaya-programma',
    });

    return cleanup;
  }, [pageType]);

  return (
    <>
      <Head>
        <title>Партнерская программа | Андрей Понизов — геомаркетинг</title>
        <meta
          name="description"
          content="Партнерская программа Андрея Понизова: рекомендуйте услуги геомаркетинга и получайте 30% с каждой ежемесячной оплаты привлеченного клиента."
        />
        <link rel="canonical" href="https://ponizov-marketing.ru/partnerskaya-programma" />
      </Head>

      <div className={container}>
        <Breadcrumbs items={breadcrumbsData} />

        <section className="py-12 md:py-16">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl min-h-[360px] md:min-h-[460px]">
            <div
              className="absolute inset-0 bg-cover bg-[80%_center] md:bg-[center_left]"
              style={{
                backgroundImage: "url('/images/univesal.png')",
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-black/10" aria-hidden="true" />

            <div className="relative z-10 px-6 py-10 md:px-12 md:py-14 max-w-3xl">
              <div className="space-y-6 max-w-2xl text-white">
                <span className="inline-flex rounded-full bg-[#F5C518]/90 px-4 py-1.5 text-sm font-semibold text-[#1A3A2E]">
                  Амбассадорская программа
                </span>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight lc-styled-text__text lc-styled-text__text_align_left">
                  Рекомендуйте меня бизнесу и получайте 30% каждый месяц
                </h1>
                <p className="text-base md:text-lg text-white/85 leading-relaxed">
                  Если по вашей рекомендации клиент начинает работать со мной, вы получаете 30% от каждой его оплаты.
                  Первый шаг для клиента — бесплатный аудит, поэтому ему легко начать без обязательств и сразу увидеть
                  пользу для своего бизнеса.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={maxUrlWithPrefilledText('Хочу стать партнером')}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className={btnPrimary}
                    onClick={() =>
                      trackMAXClick({
                        page_type: pageType,
                        page_slug: '/partnerskaya-programma',
                        block_id: 'hero',
                        element_id: 'hero_partner_max',
                      })
                    }
                  >
                    Стать партнером
                  </a>
                  <Link href="/uslugi" className={btnSecondary}>
                    Посмотреть услуги
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
            <div className={glassCard}>
              <h2 className={h2}>Условия программы</h2>
              <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
                <p>
                  Партнер получает <strong className="text-[#1A3A2E]">30% с каждой фактической оплаты</strong>{' '}
                  привлеченного клиента. Если клиент оплачивает услуги каждый месяц, партнерское вознаграждение
                  начисляется каждый месяц.
                </p>
                <p>
                  Например, если клиент оплачивает сопровождение на 30 000 ₽ в месяц, партнер получает{' '}
                  <strong className="text-[#1A3A2E]">9 000 ₽ ежемесячно</strong>. Если клиентов несколько, выплаты
                  суммируются.
                </p>
                <p>
                  Вознаграждение начисляется после поступления оплаты от клиента. Если клиент прекращает работу,
                  выплаты по нему также прекращаются.
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-[#1A3A2E] p-8 text-white shadow-2xl">
              <p className="text-sm uppercase tracking-wider text-[#F5C518] mb-4">Пример расчета</p>
              <div className="space-y-5">
                <div>
                  <p className="text-white/70 text-sm">Оплата клиента</p>
                  <p className="text-4xl font-semibold">30 000 ₽</p>
                </div>
                <div className="h-px bg-white/20" />
                <div>
                  <p className="text-white/70 text-sm">Партнерское вознаграждение</p>
                  <p className="text-4xl font-semibold text-[#F5C518]">9 000 ₽</p>
                </div>
                <p className="text-white/75">
                  Это повторяется каждый месяц, пока привлеченный клиент продолжает оплачивать услуги.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <h2 className={h2}>Как это работает</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div key={step.title} className={glassCard}>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F5C518] text-[#1A3A2E] font-semibold mb-5">
                  {index + 1}
                </span>
                <h3 className={h3}>{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className={glassCTA}>
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
              <div>
                <span className="inline-flex rounded-full bg-[#F5C518]/50 px-4 py-1.5 text-sm font-semibold text-[#1A3A2E] mb-5">
                  Первый шаг для клиента
                </span>
                <h2 className={h2}>Бесплатный аудит перед началом работы</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Потенциальному клиенту не нужно сразу принимать решение об оплате. Сначала я бесплатно разбираю его
                  текущую ситуацию и показываю, где бизнес теряет заявки из карт, поиска, отзывов или рекламы.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Показываю, насколько хорошо оформлена карточка компании и что мешает получать больше обращений.',
                  'Смотрю конкурентов и объясняю, почему они могут быть выше в Яндекс Картах и локальном поиске.',
                  'Нахожу быстрые точки роста: фото, услуги, описание, отзывы, акции, метки и рекламные настройки.',
                  'Даю понятный план первых действий, чтобы владелец видел пользу еще до старта платной работы.',
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-white/70 border border-white/60 p-5 shadow-sm">
                    <div className={listItem}>
                      <span className={listBullet}>→</span>
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="grid gap-8">
            <div className={glassCard}>
              <h2 className={h2}>Что можно говорить обо мне</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Я рекомендую Андрея, потому что он не просто теоретик в продвижении. У него самого есть салон
                  красоты, который он продвигает, поэтому он понимает бизнес изнутри: как привлекать клиентов, как
                  считать заявки, как работать с картами, отзывами, рекламой и локальным продвижением.
                </p>
                <p>
                  Начать можно с бесплатного аудита: Андрей посмотрит карточку компании, конкурентов и текущие точки
                  роста. Даже если клиент пока не готов к полноценной работе, после аудита он уже понимает, что именно
                  нужно исправить, чтобы получать больше обращений.
                </p>
                <p>
                  Он на практике знает, что важно владельцу бизнеса: не красивые отчеты ради отчетов, а реальные
                  обращения, записи, звонки и клиенты.
                </p>
                <p>
                  Если вам нужно продвижение, где человек понимает не только маркетинг, но и реальные задачи
                  предпринимателя, я бы рекомендовал обратиться именно к нему.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className={glassCTA}>
            <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <h2 className={h1}>Хотите стать партнером?</h2>
                <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
                  Напишите мне в MAX фразу «Хочу стать партнером». Я закреплю за вами партнерский статус и объясню,
                  как передавать рекомендации, чтобы клиенты точно учитывались за вами.
                </p>
              </div>
              <a
                href={maxUrlWithPrefilledText('Хочу стать партнером')}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className={btnPrimary}
                onClick={() =>
                  trackMAXClick({
                    page_type: pageType,
                    page_slug: '/partnerskaya-programma',
                    block_id: 'final_cta',
                    element_id: 'partner_max',
                  })
                }
              >
                Написать в MAX
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
