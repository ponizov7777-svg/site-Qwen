// pages/about.tsx
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumbs from '../components/Breadcrumbs';

// ПРАВИЛЬНО: У всех элементов, кроме, возможно, первого, есть href.
// Для текущей страницы 'href' указывает на её адрес.
const breadcrumbsData = [ // Переименовал переменную для ясности
  { label: 'Главная', href: '/' },
  { label: 'Обо мне', href: '/about' } // <-- Добавлен href
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Обо мне | Андрей Понизов — геомаркетинг для офлайн-бизнеса</title>
        <meta
          name="description"
          content="Андрей Понизов — эксперт по геомаркетингу и привлечению клиентов для офлайн-бизнеса. Опыт работы, кейсы и подход к решению задач."
        />
      </Head>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Хлебные крошки */}
        <Breadcrumbs items={breadcrumbsData} /> {/* Передаём правильный массив */}

        {/* Остальной контент... */}
        <section className="mb-16">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#1A3A2E] mb-6">
            Андрей Понизов — эксперт по геомаркетингу
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Помогаю владельцам офлайн-бизнеса привлекать клиентов через карты, рекламу и системный маркетинг с 2015 года.
          </p>
        </section>

        {/* ... остальной JSX ... */}

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Левая колонка: фото и краткая информация */}
          <div className="space-y-6">
            <div className="bg-gray-100 border-2 border-dashed rounded-xl h-80 flex items-center justify-center text-[#1A3A2E]/50">
              Фотография будет здесь
            </div>

            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <h2 className="text-xl font-semibold text-[#1A3A2E] mb-4">Кратко обо мне</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#E65C00] mr-2">•</span>
                  <span>Эксперт по геомаркетингу с [[НУЖЕН ФАКТ: опыт в годах]]</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E65C00] mr-2">•</span>
                  <span>Работал с [[НУЖЕН ФАКТ: количество проектов]] проектами в beauty, медицине и услугах</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E65C00] mr-2">•</span>
                  <span>Создал систему привлечения клиентов через карты</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E65C00] mr-2">•</span>
                  <span>Обучил [[НУЖЕН ФАКТ: обучено предпринимателей]] предпринимателей маркетингу</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Правая колонка: история и опыт */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-4">Мой путь в маркетинге</h2>
              <p className="text-gray-700 mb-4">
                В 2015 году начал помогать местному салону красоты увеличить поток клиентов через карты. За месяц мы выросли с [[НУЖЕН ФАКТ: рост с X до Y]] заявок в день. Это стало отправной точкой моего пути в геомаркетинге.
              </p>
              <p className="text-gray-700 mb-4">
                Работал в digital-агентствах, управлял бюджетами до [[НУЖЕН ФАКТ: бюджеты (макс)]] в месяц, вел проекты для клиник, салонов, автосервисов и других офлайн-бизнесов. Понял, что системный подход дает лучшие результаты, чем разовые кампании.
              </p>
              <p className="text-gray-700">
                Сейчас помогаю бизнесу не просто увеличить поток клиентов, а создать предсказуемую систему привлечения клиентов, которая работает даже в кризис.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-4">Мой подход к работе</h2>
              <p className="text-gray-700 mb-4">
                Я не продаю «волшебные таблетки» и не обещаю [[НУЖЕН ФАКТ: пример обещаний (число)]] клиентов за неделю. Моя задача — разобраться в вашем бизнесе, выявить точки роста и предложить конкретные решения, которые уже работают для похожих компаний.
              </p>
              <p className="text-gray-700">
                Работаю честно и прозрачно: показываю примеры из практики, объясняю логику решений и фокусируюсь на реальных результатах — увеличении клиентов и прибыли.
              </p>
            </div>
          </div>
        </div>

        {/* Опыт и навыки */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-8 text-center">
            Мой опыт и навыки
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium text-[#1A3A2E] mb-3">Геомаркетинг</h3>
              <p className="text-gray-600 mb-4">
                Настройка и продвижение в Яндекс.Картах, Google Maps, 2ГИС. Увеличение видимости в локальном поиске.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Яндекс.Карты', 'Google Maps', '2ГИС', 'Локальный поиск'].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#F5C518]/20 text-[#1A3A2E] text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium text-[#1A3A2E] mb-3">Контекстная реклама</h3>
              <p className="text-gray-600 mb-4">
                Настройка и оптимизация рекламных кампаний в Яндекс.Директ и Google Ads с фокусом на офлайн-конверсии.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Яндекс.Директ', 'Google Ads', 'Таргетинг', 'ROI'].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#F5C518]/20 text-[#1A3A2E] text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium text-[#1A3A2E] mb-3">Стратегия</h3>
              <p className="text-gray-600 mb-4">
                Разработка маркетинговых стратегий и воронок привлечения клиентов для стабильного роста бизнеса.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Стратегия', 'Аналитика', 'Воронки', 'Масштабирование'].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#F5C518]/20 text-[#1A3A2E] text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Призыв к действию */}
        <section className="bg-gradient-to-r from-[#FFF9E6] to-[#FFF4D9] rounded-2xl p-8 mb-20 border border-[#E65C00]/20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-4">
              Готов помочь вашему бизнесу расти
            </h2>
            <p className="text-gray-700 mb-6">
              Проведу бесплатный аудит вашего маркетинга и покажу конкретные точки роста для привлечения клиентов.
            </p>
            <Link
              href="/consultations"
              className="inline-block px-8 py-4 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-xl text-lg hover:bg-[#F7D03A] transition-colors shadow-md hover:shadow-lg"
            >
              Записаться на бесплатный аудит
            </Link>
          </div>
        </section>

        {/* Философия */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-8 text-center">
            Моя философия в работе
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-xl border border-gray-100">
              <blockquote className="text-gray-700 italic border-l-4 border-[#E65C00] pl-4 py-2">
                «Маркетинг — это не про красивые баннеры и виральность. Это про систему, которая стабильно приносит клиентов и прибыль»
              </blockquote>
            </div>

            <div className="p-6 bg-white rounded-xl border border-gray-100">
              <blockquote className="text-gray-700 italic border-l-4 border-[#E65C00] pl-4 py-2">
                «Лучшие результаты дают решения, которые учитывают специфику конкретного бизнеса, а не шаблонные тактики»
              </blockquote>
            </div>
          </div>
        </section>

        {/* Доверие */}
        <section className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-4">
            Почему мне доверяют
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Я прозрачен в работе: показываю реальные кейсы, объясняю решения и фокусируюсь на результате. Мои клиенты остаются со мной годами, потому что видят рост бизнеса после внедрения моих рекомендаций.
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#E65C00] mb-2">[[НУЖЕН ФАКТ: количество проектов]]</div>
              <div className="text-gray-600">реализованных проектов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#E65C00] mb-2">[[НУЖЕН ФАКТ: доля клиентов в %]]</div>
              <div className="text-gray-600">клиентов возвращаются</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#E65C00] mb-2">[[НУЖЕН ФАКТ: обучено предпринимателей]]</div>
              <div className="text-gray-600">обученных предпринимателей</div>
            </div>
          </div>
        </section>

        {/* Финальный CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-6">
            Начните расти уже сегодня
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Запишитесь на бесплатную консультацию, и я помогу вам определить самые перспективные точки роста для вашего бизнеса.
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
              className="px-8 py-4 border-2 border-[#E65C00] text-[#1A3A2E] font-medium rounded-xl text-lg hover:bg-[#FFF5E1] transition-colors"
            >
              Связаться со мной
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
