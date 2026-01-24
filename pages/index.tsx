// pages/index.tsx
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumbs from '../components/Breadcrumbs';

const breadcrumbsData = [
  { label: 'Главная', href: '/' },
];

export default function HomePage() {
  // Данные для кейсов
  const cases = [
    {
      title: 'Салон красоты в Екатеринбурге',
      result: '+300%',
      description: 'Рост заявок с 5 до 35 в день за 2 месяца'
    },
    {
      title: 'Клиника в Челябинске',
      result: '+120 заявок',
      description: 'Новых пациентов в месяц на новую точку'
    },
    {
      title: 'Автосервис',
      result: '+75%',
      description: 'Увеличение клиентов за 3 месяца после кризиса'
    }
  ];

  // Данные для преимуществ
  const advantages = [
    {
      title: '8+ лет опыта',
      description: 'Работаю с геомаркетингом с 2015 года'
    },
    {
      title: '150+ проектов',
      description: 'Реализованных для бизнеса в beauty, медицине, услугах'
    },
    {
      title: '92% клиентов',
      description: 'Возвращаются за дальнейшей помощью'
    }
  ];

  return (
    <>
      <Head>
        <title>Геомаркетинг для офлайн-бизнеса | Андрей Понизов</title>
        <meta
          name="description"
          content="Геомаркетинг и привлечение клиентов для офлайн-бизнеса: beauty, медицина, автосервисы. Андрей Понизов помогает увеличить客流 через Яндекс.Карты, Google Maps и контекстную рекламу."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ponizov-marketing.ru/" />
        <meta property="og:title" content="Геомаркетинг и привлечение клиентов для офлайн-бизнеса" />
        <meta
          property="og:description"
          content="Геомаркетинг и привлечение клиентов для офлайн-бизнеса: beauty, медицина, автосервисы. Увеличиваем客流 через правильную настройку карт и рекламы."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ponizov-marketing.ru/" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Геомаркетинг и привлечение клиентов для офлайн-бизнеса" />
        <meta name="twitter:description" content="Геомаркетинг и привлечение клиентов для офлайн-бизнеса: beauty, медицина, автосервисы. Увеличиваем客流 через правильную настройку карт и рекламы." />
        <meta name="twitter:image" content="/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Андрей Понизов",
            "url": "https://ponizov.ru",
            "image": "/og-image.jpg",
            "sameAs": [
              "https://t.me/ponizovandrey",
              "https://vk.com/andrey_anatolyevich_marketing",
              "https://rutube.ru/channel/73592687/",
              "https://max.ru/u/f9LHodD0cOKv94u0uUQGsTH7c9Cibtp9qAEtmFpgYQ-QfGsVeYNyc7M34aU"
            ],
            "jobTitle": "Эксперт по геомаркетингу и привлечению клиентов для офлайн-бизнеса",
            "worksFor": {
              "@type": "Organization",
              "name": "Андрей Понизов — геомаркетинг"
            }
          })}
        </script>
      </Head>

      <Breadcrumbs items={breadcrumbsData} />

      <main className="max-w-7xl mx-auto px-4">
        {/* Первый экран */}
        <section id="hero" className="py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6 text-[#1A3A2E]">
              Геомаркетинг и системное привлечение клиентов
              <br />
              для офлайн-бизнеса
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Помогаю владельцам beauty, медицины и сервисных компаний стабильно привлекать клиентов через Яндекс.Карты, Google Maps и контекстную рекламу.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/consultations"
                className="px-8 py-4 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-xl hover:bg-[#F7D03A] transition-colors shadow-md"
              >
                Бесплатный аудит бизнеса
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border-2 border-[#E65C00] text-[#1A3A2E] font-medium rounded-xl hover:bg-[#FFF5E1] transition-colors"
              >
                Услуги и цены
              </Link>
            </div>
          </div>
          <div className="relative h-[360px] md:h-[480px] bg-gray-100 border-2 border-dashed rounded-2xl flex items-center justify-center text-[#1A3A2E]/50">
            <div className="text-center p-4">
              <div className="text-6xl font-bold text-[#E65C00] mb-2">35</div>
              <div className="text-2xl font-semibold text-[#1A3A2E] mb-1">заявок в день</div>
              <div className="text-gray-600">вместо 5 до начала работы</div>
            </div>
          </div>
        </section>

        {/* Чем помогаю */}
        <section className="py-20 border-t border-gray-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4 text-[#1A3A2E]">С чем я помогаю</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Комплексный подход к привлечению клиентов для вашего офлайн-бизнеса
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4 text-[#E65C00]">📱</div>
              <h3 className="text-xl font-semibold mb-2 text-[#1A3A2E]">Геомаркетинг</h3>
              <p className="text-gray-600 mb-4">
                Настройка и продвижение в Яндекс.Картах, Google Maps, 2ГИС.
              </p>
              <Link href="/geomarketing" className="text-[#E65C00] font-medium hover:text-[#D65A31] transition-colors flex items-center gap-1">
                Подробнее →
              </Link>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4 text-[#E65C00]">🎯</div>
              <h3 className="text-xl font-semibold mb-2 text-[#1A3A2E]">Реклама</h3>
              <p className="text-gray-600 mb-4">
                Контекстные кампании с геотаргетингом для офлайн-конверсий.
              </p>
              <Link href="/services#kontekstnaya-reklama" className="text-[#E65C00] font-medium hover:text-[#D65A31] transition-colors flex items-center gap-1">
                Подробнее →
              </Link>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4 text-[#E65C00]">📊</div>
              <h3 className="text-xl font-semibold mb-2 text-[#1A3A2E]">Стратегия</h3>
              <p className="text-gray-600 mb-4">
                Разработка маркетинговых стратегий и воронок привлечения клиентов.
              </p>
              <Link href="/services#strategiya" className="text-[#E65C00] font-medium hover:text-[#D65A31] transition-colors flex items-center gap-1">
                Подробнее →
              </Link>
            </div>
          </div>
        </section>

        {/* Кейсы клиентов */}
        <section className="py-20 border-t border-gray-100 bg-gradient-to-b from-[#FFF9E6] to-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4 text-[#1A3A2E]">Результаты клиентов</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Реальные примеры работы с разными бизнесами
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {cases.map((item, index) => (
              <article key={index} className="bg-white rounded-xl border border-gray-100 p-6 hover:border-[#E65C00] transition-colors">
                <div className="text-4xl font-bold text-[#E65C00] mb-2">{item.result}</div>
                <h3 className="text-xl font-semibold text-[#1A3A2E] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </article>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="/cases"
              className="inline-block px-8 py-4 border-2 border-[#E65C00] text-[#1A3A2E] font-medium rounded-xl hover:bg-[#FFF5E1] transition-colors"
            >
              Все кейсы
            </Link>
          </div>
        </section>

        {/* Преимущества */}
        <section className="py-20 border-t border-gray-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4 text-[#1A3A2E]">Почему клиенты выбирают меня</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Опыт и подход, которые дают измеримые результаты для вашего бизнеса
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-4xl font-bold text-[#E65C00] mb-3">{item.title}</div>
                <p className="text-gray-600 max-w-xs mx-auto">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Формат работы */}
        <section className="py-20 border-t border-gray-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4 text-[#1A3A2E]">Формат работы</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Выберите наиболее подходящий вариант для старта
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
              <span className="px-4 py-1 bg-[#F5C518]/20 text-[#1A3A2E] rounded-full font-medium mb-4 inline-block">
                15-20 минут
              </span>
              <h3 className="text-2xl font-semibold mb-4 text-[#1A3A2E]">Бесплатный аудит</h3>
              <p className="text-gray-700 mb-6">
                Быстрый анализ текущей ситуации в вашем бизнесе. Выявление основных точек роста и конкретных рекомендаций по улучшению.
              </p>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span>Анализ видимости в картах и поиске</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span>Оценка текущих рекламных каналов</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span>Рекомендации по первым шагам</span>
                </li>
              </ul>
              <Link
                href="/consultations"
                className="inline-block px-6 py-3 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-lg hover:bg-[#F7D03A] transition-colors shadow-md"
              >
                Записаться на бесплатный аудит
              </Link>
            </div>
            <div className="p-8 bg-gradient-to-r from-[#1A3A2E] to-[#255A40] text-white rounded-2xl">
              <span className="px-4 py-1 bg-[#E65C00]/20 text-white rounded-full font-medium mb-4 inline-block">
                30 минут
              </span>
              <h3 className="text-2xl font-semibold mb-4">Платная консультация</h3>
              <p className="text-gray-100 mb-6">
                Глубокий разбор вашего бизнеса с разработкой индивидуальной стратегии привлечения клиентов. Получите готовый план действий с конкретными шагами.
              </p>
              <ul className="space-y-3 mb-8 text-gray-200">
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2 mt-1">•</span>
                  <span>Детальный анализ конкурентов и рынка</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2 mt-1">•</span>
                  <span>Разработка стратегии на 3-6 месяцев</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F5C518] mr-2 mt-1">•</span>
                  <span>Создание системы отслеживания результатов</span>
                </li>
              </ul>
              <div className="text-2xl font-bold mb-2">10 000 ₽</div>
              <Link
                href="/consultations"
                className="inline-block px-6 py-3 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-lg hover:bg-[#F7D03A] transition-colors"
              >
                Записаться на платную консультацию
              </Link>
            </div>
          </div>
        </section>

        {/* Отзывы */}
        <section className="py-20 border-t border-gray-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4 text-[#1A3A2E]">Отзывы клиентов</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Что говорят владельцы бизнеса о работе со мной
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#E65C00]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.898a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.898a1 1 0 00-1.176 0l-3.976 2.898c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.898c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.95-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "За месяц работы с Андреем количество заявок выросло со средних 5-7 в день до 25-30. Отлично разбирается в геомаркетинге и рекламе."
              </p>
              <p className="font-medium text-[#1A3A2E]">Ольга, салон красоты в Екатеринбурге</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#E65C00]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.898a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.898a1 1 0 00-1.176 0l-3.976 2.898c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.898c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.95-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "Андрей помог нам запустить сеть клиник в 3 новых городах. За 2 месяца вышли на окупаемость. Рекомендую как профессионала своего дела."
              </p>
              <p className="font-medium text-[#1A3A2E]">Максим, сеть стоматологических клиник</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#E65C00]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.898a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.898a1 1 0 00-1.176 0l-3.976 2.898c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.898c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.95-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "Профессиональный подход и конкретные результаты. За три месяца увеличили客流 на 75% после кризиса. Спасибо за эффективную работу!"
              </p>
              <p className="font-medium text-[#1A3A2E]">Дмитрий, автосервис в Челябинске</p>
            </div>
          </div>
        </section>

        {/* Финальный CTA */}
        <section className="py-20 border-t border-gray-100 bg-gradient-to-r from-[#FFF9E6] to-[#FFF4D9] rounded-2xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6 text-[#1A3A2E]">
              Готов помочь и вашему бизнесу расти
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Запишитесь на бесплатную консультацию, и я помогу вам определить самые перспективные точки роста для привлечения клиентов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/consultations"
                className="px-8 py-4 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-xl text-lg hover:bg-[#F7D03A] transition-colors shadow-md"
              >
                Бесплатный аудит бизнеса
              </Link>
              <Link
                href="/contacts"
                className="px-8 py-4 border-2 border-[#1A3A2E] text-[#1A3A2E] font-medium rounded-xl text-lg hover:bg-white transition-colors"
              >
                Связаться со мной
              </Link>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Отвечаю в течение 24 часов. Консультация без обязательств.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}