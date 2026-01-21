// pages/articles.tsx
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumbs from '../components/Breadcrumbs';

// Правильный формат хлебных крошек - каждый элемент имеет label и href
const breadcrumbsData = [
  { label: 'Главная', href: '/' },
  { label: 'Полезные статьи', href: '/articles' }
];

export default function ArticlesPage() {
  // Пример данных для статей (замените на реальные данные)
  const articles = [
    {
      id: 1,
      title: 'Как настроить Яндекс.Карты для привлечения клиентов',
      excerpt: 'Пошаговая инструкция по настройке организации в Яндекс.Картах для максимального притока клиентов.',
      date: '15 января 2026',
      href: '/articles/yandex-karty-nastroika',
      category: 'Геомаркетинг'
    },
    {
      id: 2,
      title: 'Контекстная реклама для офлайн-бизнеса: стратегия 2026',
      excerpt: 'Как правильно настроить контекстную рекламу для привлечения клиентов в реальный магазин или салон.',
      date: '10 января 2026',
      href: '/articles/kontekstnaya-reklama-offline',
      category: 'Реклама'
    },
    {
      id: 3,
      title: 'Анализ конкурентов в локальном маркетинге',
      excerpt: 'Как провести анализ конкурентов в вашем районе и использовать полученные данные для роста бизнеса.',
      date: '5 января 2026',
      href: '/articles/analiz-konkurentov-lokalnyy',
      category: 'Стратегия'
    },
    {
      id: 4,
      title: '5 ошибок в настройке Google Maps для бизнеса',
      excerpt: 'Распространенные ошибки при настройке Google Maps и как их избежать для привлечения клиентов.',
      date: '28 декабря 2025',
      href: '/articles/oshibki-google-maps',
      category: 'Геомаркетинг'
    },
    {
      id: 5,
      title: 'Как измерить ROI от геомаркетинга',
      excerpt: 'Практические методы оценки эффективности инвестиций в геомаркетинг для офлайн-бизнеса.',
      date: '20 декабря 2025',
      href: '/articles/roi-geomarketing',
      category: 'Аналитика'
    },
    {
      id: 6,
      title: 'Сезонные стратегии продвижения для beauty-бизнеса',
      excerpt: 'Как адаптировать маркетинговую стратегию под разные сезоны для салонов красоты и спа.',
      date: '15 декабря 2025',
      href: '/articles/seasonnye-strategii-beauty',
      category: 'Beauty'
    }
  ];

  return (
    <>
      <Head>
        <title>Полезные статьи по маркетингу | Андрей Понизов</title>
        <meta name="description" content="Практические статьи по геомаркетингу, привлечению клиентов и развитию офлайн-бизнеса. Советы эксперта с 8-летним опытом." />
        <link rel="canonical" href="https://ponizov-marketing.ru/articles" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Хлебные крошки */}
        <Breadcrumbs items={breadcrumbsData} />
        
        {/* Заголовок секции */}
        <section className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#1A3A2E] mb-4">
            Полезные статьи по маркетингу
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Практические руководства, кейсы и стратегии для владельцев офлайн-бизнеса. 
            Только проверенные методы, которые работают в 2026 году.
          </p>
        </section>

        {/* Фильтры и сортировка */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 bg-[#F5C518]/20 text-[#1A3A2E] rounded-full font-medium">Все статьи</span>
            <button className="px-4 py-2 text-[#1A3A2E]/70 hover:text-[#1A3A2E] rounded-full hover:bg-gray-100">Геомаркетинг</button>
            <button className="px-4 py-2 text-[#1A3A2E]/70 hover:text-[#1A3A2E] rounded-full hover:bg-gray-100">Реклама</button>
            <button className="px-4 py-2 text-[#1A3A2E]/70 hover:text-[#1A3A2E] rounded-full hover:bg-gray-100">Стратегия</button>
            <button className="px-4 py-2 text-[#1A3A2E]/70 hover:text-[#1A3A2E] rounded-full hover:bg-gray-100">Аналитика</button>
            <button className="px-4 py-2 text-[#1A3A2E]/70 hover:text-[#1A3A2E] rounded-full hover:bg-gray-100">Beauty</button>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <p className="text-gray-600">Найдено {articles.length} статей</p>
            <div className="flex items-center gap-2 text-sm text-[#1A3A2E]">
              <span>Сортировать:</span>
              <select className="border border-gray-300 rounded-md px-3 py-1 bg-white focus:outline-none focus:ring-2 focus:ring-[#E65C00]">
                <option>Сначала новые</option>
                <option>Сначала старые</option>
                <option>Популярные</option>
              </select>
            </div>
          </div>
        </div>

        {/* Список статей */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[#F5C518]/20 text-[#1A3A2E] text-sm font-medium rounded-full">
                    {article.category}
                  </span>
                  <time className="text-sm text-gray-500">{article.date}</time>
                </div>
                <h2 className="text-xl font-semibold text-[#1A3A2E] mb-3 hover:text-[#E65C00] transition-colors">
                  <Link href={article.href}>
                    {article.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <Link 
                    href={article.href}
                    className="text-[#E65C00] font-medium hover:text-[#D65A31] transition-colors flex items-center gap-1"
                  >
                    Читать статью →
                  </Link>
                  <button 
                    className="text-gray-400 hover:text-[#E65C00] transition-colors"
                    aria-label="Добавить в избранное"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.898a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.898a1 1 0 00-1.176 0l-3.976 2.898c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.898c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.95-.69l1.519-4.674z" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Пагинация */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-50 disabled:opacity-50">Назад</button>
            <button className="px-4 py-2 border border-[#E65C00] bg-[#FFF9E6] text-[#1A3A2E] rounded-lg font-medium hover:bg-[#F7D03A]">1</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">...</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">12</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Вперед</button>
          </div>
        </div>

        {/* Подписка на новые статьи */}
        <section className="bg-gradient-to-r from-[#FFF9E6] to-[#FFF4D9] rounded-2xl p-8 mb-16 border border-[#E65C00]/20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-4">
              Получайте новые статьи первыми
            </h2>
            <p className="text-gray-700 mb-6">
              Подпишитесь на рассылку и получайте практические советы по маркетингу для вашего бизнеса каждую неделю.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E65C00]"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-lg hover:bg-[#F7D03A] transition-colors whitespace-nowrap"
              >
                Подписаться
              </button>
            </form>
            <p className="text-sm text-gray-600 mt-2">Никакого спама. Только полезный контент.</p>
          </div>
        </section>

        {/* Темы для изучения */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-8 text-center">
            Популярные темы для изучения
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/geomarketing" className="block p-6 bg-white rounded-xl border border-gray-100 hover:border-[#E65C00] hover:shadow-md transition-all">
              <h3 className="text-xl font-medium text-[#1A3A2E] mb-2">Геомаркетинг</h3>
              <p className="text-gray-600 mb-3">Настройка и продвижение в Яндекс.Картах, Google Maps, 2ГИС</p>
              <span className="text-sm text-[#E65C00] font-medium flex items-center gap-1">
                Узнать больше →
              </span>
            </Link>
            
            <Link href="/services" className="block p-6 bg-white rounded-xl border border-gray-100 hover:border-[#E65C00] hover:shadow-md transition-all">
              <h3 className="text-xl font-medium text-[#1A3A2E] mb-2">Реклама</h3>
              <p className="text-gray-600 mb-3">Контекстная и таргетированная реклама для офлайн-бизнеса</p>
              <span className="text-sm text-[#E65C00] font-medium flex items-center gap-1">
                Узнать больше →
              </span>
            </Link>
            
            <Link href="/consultations" className="block p-6 bg-white rounded-xl border border-gray-100 hover:border-[#E65C00] hover:shadow-md transition-all">
              <h3 className="text-xl font-medium text-[#1A3A2E] mb-2">Стратегия</h3>
              <p className="text-gray-600 mb-3">Разработка маркетинговых стратегий и воронок привлечения</p>
              <span className="text-sm text-[#E65C00] font-medium flex items-center gap-1">
                Узнать больше →
              </span>
            </Link>
          </div>
        </section>

        {/* Призыв к действию */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-6">
            Готовы развивать свой бизнес?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Запишитесь на бесплатную консультацию, и я помогу вам определить самые эффективные точки роста для вашего бизнеса.
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