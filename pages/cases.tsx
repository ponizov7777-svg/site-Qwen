// pages/cases.tsx
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumbs from '../components/Breadcrumbs';

const breadcrumbsData = [
  { label: 'Главная', href: '/' },
  { label: 'Кейсы', href: '/cases' }
];

export default function CasesPage() {
  /**
   * Источник истины: Keisy.xlsx
   * Сейчас без отдельных страниц кейсов — все ведём на /consultations
   *
   * Картинки-заглушки:
   * public/images/1.webp
   * public/images/2.webp
   * public/images/3.webp
   * public/images/4.webp
   */
  const cases = [
    {
      id: 1,
      title: 'Beauty, Санкт‑Петербург: 2–3 → 15–20 новых клиентов в месяц через Яндекс Бизнес',
      category: 'Beauty',
      results: '2–3 → 15–20 клиентов/мес',
      period: '2018–2026',
      cost: '12 000 ₽/мес',
      description:
        'Не было профиля в Яндекс Бизнесе и была зависимость от СММ. Собрал воронку: упаковка профиля, оформление, система запроса отзывов, рекламная подписка.',
      proofLabel: 'Организация в Яндекс Картах',
      proofHref:
        'https://yandex.ru/maps/org/studiya_anny_ponizovoy/28555260176/?indoorLevel=1&ll=30.440195%2C60.066015&z=17',
      href: '/consultations',
      image: '/images/1.webp'
    },
    {
      id: 2,
      title: 'Медицина, Санкт‑Петербург: реклама 300 000 ₽/мес без окупаемости → 358% окупаемость',
      category: 'Медицина',
      results: 'Окупаемость 358%',
      period: 'сен 2024 – апр 2025',
      cost: '100 000 ₽ (по данным кейса)',
      description:
        'Был слабый сайт и Директ “в минус” при расходе 300 000 ₽/мес. Подлечил сайт, пересобрал кампании; параллельно сделал новый сайт — и реклама стала окупаться.',
      proofLabel: 'Проект остановился из‑за разногласий руководства (результат был до закрытия).',
      proofHref: '',
      href: '/consultations',
      image: '/images/2.webp'
    },
    {
      id: 3,
      title: 'Медицина, Санкт‑Петербург: сайт + коллтрекинг + аналитика + Директ (правильный старт)',
      category: 'Медицина',
      results: 'Система измеримости',
      period: 'июл 2025 – ноя 2025',
      cost: 'сайт 150 000 ₽ + Директ 50 000 ₽/мес × 3',
      description:
        'Собрал базу: сайт, коллтрекинг, аналитика, запуск Яндекс Директ. Кейс про старт “по-взрослому”, чтобы дальше можно было управлять цифрами.',
      proofLabel: 'Сайт проекта',
      proofHref: 'https://drhamza.ru',
      href: '/consultations',
      image: '/images/3.webp'
    },
    {
      id: 4,
      title: 'HoReCa, Кострома: запуск кофейни + 1300 подписчиков ВК',
      category: 'HoReCa',
      results: '1300 подписчиков',
      period: 'авг 2025 – дек 2025',
      cost: '150 000 ₽',
      description:
        'Стратегия запуска: исследование ЦА и конкурентов, сообщество ВК, профиль в Яндекс Картах и 2ГИС. Сначала спрос и ожидание — потом масштабирование.',
      proofLabel: 'Сообщество ВК',
      proofHref: 'https://vk.com/coffeeinstitute',
      href: '/consultations',
      image: '/images/4.webp'
    }
  ];

  return (
    <>
      <Head>
        <title>Кейсы | Андрей Понизов — измеримые результаты для офлайн-бизнеса</title>
        <meta
          name="description"
          content="Кейсы по геомаркетингу, трафику и стратегии для офлайн-бизнеса. Только реальные результаты: период, расходы, логика решений. Без «успешного успеха»."
        />
        <link rel="canonical" href="https://ponizov-marketing.ru/cases" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs items={breadcrumbsData} />

        {/* HERO */}
        <section className="py-16 md:py-20 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-[#1A3A2E] mb-6">
            Кейсы с цифрами и контекстом
          </h1>

          <p className="text-lg text-gray-600 mb-4">
            Здесь только настоящие кейсы: что было, что стало, период и расходы.
            Если у результата нет опоры на факты — я такой кейс не публикую.
          </p>

          <p className="text-gray-600">
            Если вы хотите не “попробовать рекламу”, а понять, что реально даст рост в вашем бизнесе —
            логично начинать с платной консультации: разбор по цифрам + план действий.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <Link
              href="/consultations"
              className="px-8 py-4 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-xl hover:bg-[#F7D03A] transition-colors shadow-md"
            >
              Платная консультация (разбор по цифрам)
            </Link>

            <Link
              href="/consultations"
              className="px-8 py-4 border-2 border-[#E65C00] text-[#1A3A2E] font-medium rounded-xl hover:bg-[#FFF5E1] transition-colors"
            >
              Бесплатный аудит (если хотите старт попроще)
            </Link>
          </div>
        </section>

        {/* КЕЙСЫ */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {cases.map((caseItem) => (
            <article
              key={caseItem.id}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="md:flex">
                <div className="md:w-1/3 h-48 md:h-auto bg-gray-100">
                  <img
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="p-6 md:w-2/3">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-[#F5C518]/20 text-[#1A3A2E] text-sm font-medium rounded-full">
                      {caseItem.category}
                    </span>
                    <span className="text-[#E65C00] font-bold">
                      {caseItem.results}
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold text-[#1A3A2E] mb-2">
                    {caseItem.title}
                  </h2>

                  <div className="text-sm text-gray-600 mb-3">
                    <span className="mr-3">Период: {caseItem.period}</span>
                    <span>Расходы: {caseItem.cost}</span>
                  </div>

                  <p className="text-gray-600 mb-4">
                    {caseItem.description}
                  </p>

                  {/* Proof */}
                  {caseItem.proofHref ? (
                    <a
                      href={caseItem.proofHref}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#E65C00] font-medium hover:text-[#D65A31] transition-colors inline-flex items-center gap-1"
                    >
                      {caseItem.proofLabel} →
                    </a>
                  ) : (
                    <div className="text-sm text-gray-600">
                      {caseItem.proofLabel}
                    </div>
                  )}

                  <div className="mt-6">
                    <Link
                      href={caseItem.href}
                      className="text-[#E65C00] font-medium hover:text-[#D65A31] transition-colors"
                    >
                      Хочу разбор под мой бизнес →
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ФИЛОСОФИЯ */}
        <section className="max-w-4xl mb-20">
          <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-4">
            Почему эти кейсы не подойдут всем
          </h2>

          <ul className="text-gray-700 space-y-3">
            <li className="flex items-start"><span className="text-[#E65C00] mr-2 mt-1">•</span>Я работаю там, где есть локальный спрос и можно считать результат.</li>
            <li className="flex items-start"><span className="text-[#E65C00] mr-2 mt-1">•</span>Сначала измеримость (цели/метки/KPI), потом масштабирование.</li>
            <li className="flex items-start"><span className="text-[#E65C00] mr-2 mt-1">•</span>Не продаю рекламу “в вакуум”: если мешает сайт/обработка/экономика — это правим.</li>
            <li className="flex items-start"><span className="text-[#E65C00] mr-2 mt-1">•</span>Фокус не на трафике, а на заявках и деньгах.</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-gray-100 bg-gradient-to-r from-[#FFF9E6] to-[#FFF4D9] rounded-2xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6 text-[#1A3A2E]">
              Хотите понять, возможен ли такой результат в вашем бизнесе?
            </h2>

            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              На платной консультации я собираю картину по цифрам и даю план действий:
              что делать в первую очередь, что даст быстрый эффект и как это контролировать.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/consultations"
                className="px-8 py-4 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-xl text-lg hover:bg-[#F7D03A] transition-colors shadow-md"
              >
                Записаться на консультацию
              </Link>

              <Link
                href="/contacts"
                className="px-8 py-4 border-2 border-[#1A3A2E] text-[#1A3A2E] font-medium rounded-xl text-lg hover:bg-white transition-colors"
              >
                Задать вопрос
              </Link>
            </div>

            <p className="text-sm text-gray-600 mt-4">
              Можно просто написать и скинуть скрин — отвечу по делу.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
