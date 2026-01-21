// pages/cases.tsx
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumbs from '../components/Breadcrumbs';

const breadcrumbsData = [
  { label: 'Главная', href: '/' },
  { label: 'Кейсы', href: '/cases' }
];

export default function CasesPage() {
  const cases = [
    {
      id: 1,
      title: 'Увеличение客流 в салон красоты на 300%',
      category: 'Beauty',
      results: 'Рост заявок с 5 до 35 в день',
      description: 'Комплексная настройка геомаркетинга и рекламы для сети салонов в Екатеринбурге',
      href: '/cases/salon-krasoty-ekb',
      image: '/case-salon.jpg'
    },
    {
      id: 2,
      title: 'Масштабирование сети клиник в 4 города',
      category: 'Медицина',
      results: '+120 заявок в месяц на новую точку',
      description: 'Создание системы привлечения пациентов для стоматологической клиники',
      href: '/cases/stomatologiya-network',
      image: '/case-clinic.jpg'
    },
    {
      id: 3,
      title: 'Возвращение клиентов в автосервис после кризиса',
      category: 'Автосервис',
      results: '+75% клиентов за 3 месяца',
      description: 'Полная перестройка маркетинговой стратегии и внедрение геомаркетинга',
      href: '/cases/avtoservice-crisis',
      image: '/case-auto.jpg'
    },
    {
      id: 4,
      title: 'Запуск нового фитнес-клуба с нуля',
      category: 'Фитнес',
      results: '120 предзаказов абонементов за неделю',
      description: 'Маркетинговая стратегия и продвижение в картах для нового клуба премиум-класса',
      href: '/cases/fitness-club-launch',
      image: '/case-fitness.jpg'
    },
    {
      id: 5,
      title: 'Рост продаж в сети магазинов бытовой техники',
      category: 'Ритейл',
      results: '+40% локальных продаж',
      description: 'Оптимизация геопозиционирования и контекстной рекламы для сети из 12 точек',
      href: '/cases/retail-tech',
      image: '/case-retail.jpg'
    },
    {
      id: 6,
      title: 'Увеличение посещаемости SPA-салона в курортном городе',
      category: 'Beauty',
      results: '+200% бронирований в сезон',
      description: 'Сезонная стратегия продвижения и геотаргетинг для курортного бизнеса',
      href: '/cases/spa-resort',
      image: '/case-spa.jpg'
    }
  ];

  return (
    <>
      <Head>
        <title>Кейсы | Андрей Понизов — результаты клиентов в геомаркетинге</title>
        <meta name="description" content="Реальные кейсы по геомаркетингу и привлечению клиентов для офлайн-бизнеса. Салоны красоты, клиники, автосервисы — увеличение客流 на 200-300% за 3 месяца." />
        <link rel="canonical" href="https://ponizov-marketing.ru/cases" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Хлебные крошки */}
        <Breadcrumbs items={breadcrumbsData} />
        
        {/* Заголовок секции */}
        <section className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#1A3A2E] mb-4">
            Реальные кейсы клиентов
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Примеры успешного внедрения геомаркетинга и систем привлечения клиентов для офлайн-бизнеса. 
            Результаты подтверждены аналитикой и отзывами.
          </p>
        </section>

        {/* Фильтры и сортировка */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 bg-[#F5C518]/20 text-[#1A3A2E] rounded-full font-medium">Все кейсы</span>
            <button className="px-4 py-2 text-[#1A3A2E]/70 hover:text-[#1A3A2E] rounded-full hover:bg-gray-100">Beauty</button>
            <button className="px-4 py-2 text-[#1A3A2E]/70 hover:text-[#1A3A2E] rounded-full hover:bg-gray-100">Медицина</button>
            <button className="px-4 py-2 text-[#1A3A2E]/70 hover:text-[#1A3A2E] rounded-full hover:bg-gray-100">Автосервис</button>
            <button className="px-4 py-2 text-[#1A3A2E]/70 hover:text-[#1A3A2E] rounded-full hover:bg-gray-100">Фитнес</button>
            <button className="px-4 py-2 text-[#1A3A2E]/70 hover:text-[#1A3A2E] rounded-full hover:bg-gray-100">Ритейл</button>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <p className="text-gray-600">Найдено {cases.length} кейсов</p>
            <div className="flex items-center gap-2 text-sm text-[#1A3A2E]">
              <span>Сортировать:</span>
              <select className="border border-gray-300 rounded-md px-3 py-1 bg-white focus:outline-none focus:ring-2 focus:ring-[#E65C00]">
                <option>Сначала новые</option>
                <option>Сначала старые</option>
                <option>По результату</option>
              </select>
            </div>
          </div>
        </div>

        {/* Список кейсов */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {cases.map((caseItem) => (
            <article key={caseItem.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3 h-48 md:h-auto bg-gray-100 border-2 border-dashed rounded-l-xl flex items-center justify-center text-[#1A3A2E]/50">
                  {caseItem.image ? (
                    <img 
                      src={caseItem.image} 
                      alt={caseItem.title} 
                      className="w-full h-full object-cover rounded-l-xl"
                      loading="lazy"
                    />
                  ) : (
                    'Изображение кейса'
                  )}
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-[#F5C518]/20 text-[#1A3A2E] text-sm font-medium rounded-full">
                      {caseItem.category}
                    </span>
                    <span className="text-[#E65C00] font-bold">{caseItem.results}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-[#1A3A2E] mb-2 hover:text-[#E65C00] transition-colors">
                    <Link href={caseItem.href}>
                      {caseItem.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {caseItem.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Link 
                      href={caseItem.href}
                      className="text-[#E65C00] font-medium hover:text-[#D65A31] transition-colors flex items-center gap-1"
                    >
                      Подробнее о кейсе →
                    </Link>
                    <button 
                      className="text-gray-400 hover:text-[#E65C00] transition-colors"
                      aria-label="Добавить кейс в избранное"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.898a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.898a1 1 0 00-1.176 0l-3.976 2.898c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.898c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.95-.69l1.519-4.674z" />
                      </svg>
                    </button>
                  </div>
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
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Вперед</button>
          </div>
        </div>

        {/* Кейс недели */}
        <section className="bg-gradient-to-r from-[#FFF9E6] to-[#FFF4D9] rounded-2xl p-8 mb-16 border border-[#E65C00]/20">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-4 md:mb-0">
                Кейс недели: Увеличение客流 в салон красоты
              </h2>
              <span className="px-4 py-1 bg-[#E65C00] text-white rounded-full font-medium text-sm">
                +300% за 2 месяца
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gray-100 border-2 border-dashed rounded-xl h-64 flex items-center justify-center text-[#1A3A2E]/50">
                <div className="text-center p-4">
                  <div className="text-5xl font-bold text-[#E65C00] mb-2">35</div>
                  <div className="text-xl font-medium text-[#1A3A2E] mb-1">заявок в день</div>
                  <div className="text-gray-600">вместо 5 до начала работы</div>
                </div>
              </div>
              <div>
                <p className="text-gray-700 mb-4">
                  Салон красоты в Екатеринбурге обратился с проблемой: при хорошем местоположении и качественном сервисе клиенты не находили их в поиске и на картах.
                </p>
                <p className="text-gray-700 mb-4">
                  Мы полностью перестроили геомаркетинг: настроили все карты, оптимизировали выдачу в поиске и запустили таргетированную рекламу для привлечения локальной аудитории.
                </p>
                <p className="text-gray-700 mb-6">
                  За 2 месяца удалось увеличить количество заявок с 5 до 35 в день при сохранении стоимости привлечения клиента на уровне 400 рублей.
                </p>
                <Link
                  href="/cases/salon-krasoty-ekb"
                  className="inline-block px-6 py-3 bg-white text-[#1A3A2E] border-2 border-[#E65C00] rounded-lg font-medium hover:bg-[#F7D03A] transition-colors"
                >
                  Посмотреть полный кейс
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Отрасли */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-8 text-center">
            Кейсы по отраслям
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/cases?category=beauty" className="block p-6 bg-white rounded-xl border border-gray-100 hover:border-[#E65C00] hover:shadow-md transition-all">
              <h3 className="text-xl font-medium text-[#1A3A2E] mb-2">Beauty и SPA</h3>
              <p className="text-gray-600 mb-3">Салоны красоты, барбершопы, SPA-центры</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#E65C00] font-medium">12 кейсов</span>
                <span className="text-sm text-[#1A3A2E] font-medium flex items-center gap-1">
                  Подробнее →
                </span>
              </div>
            </Link>
            
            <Link href="/cases?category=medical" className="block p-6 bg-white rounded-xl border border-gray-100 hover:border-[#E65C00] hover:shadow-md transition-all">
              <h3 className="text-xl font-medium text-[#1A3A2E] mb-2">Медицина</h3>
              <p className="text-gray-600 mb-3">Клиники, стоматологии, диагностические центры</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#E65C00] font-medium">8 кейсов</span>
                <span className="text-sm text-[#1A3A2E] font-medium flex items-center gap-1">
                  Подробнее →
                </span>
              </div>
            </Link>
            
            <Link href="/cases?category=services" className="block p-6 bg-white rounded-xl border border-gray-100 hover:border-[#E65C00] hover:shadow-md transition-all">
              <h3 className="text-xl font-medium text-[#1A3A2E] mb-2">Услуги</h3>
              <p className="text-gray-600 mb-3">Автосервисы, фитнес-клубы, образование</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#E65C00] font-medium">10 кейсов</span>
                <span className="text-sm text-[#1A3A2E] font-medium flex items-center gap-1">
                  Подробнее →
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Призыв к действию */}
        <section className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-6">
            Хочу такой же результат для моего бизнеса
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Запишитесь на бесплатную консультацию, и я покажу конкретные стратегии роста, которые подойдут именно вашему бизнесу.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/consultations"
              className="px-8 py-4 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-xl text-lg hover:bg-[#F7D03A] transition-colors shadow-md"
            >
              Бесплатный аудит бизнеса
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border-2 border-[#E65C00] text-[#1A3A2E] font-medium rounded-xl text-lg hover:bg-[#FFF5E1] transition-colors"
            >
              Мои услуги
            </Link>
          </div>
        </section>

        {/* Статистика */}
        <section className="bg-white rounded-2xl border border-gray-100 p-8 mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-4">
              Статистика моих кейсов
            </h2>
            <p className="text-gray-600 mb-8">
              За 8 лет работы я помог более 150 бизнесам создать системы привлечения клиентов
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-4xl font-bold text-[#E65C00] mb-2">150+</div>
                <div className="text-gray-600">реализованных проектов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#E65C00] mb-2">92%</div>
                <div className="text-gray-600">клиентов возвращаются</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#E65C00] mb-2">200+</div>
                <div className="text-gray-600">обученных предпринимателей</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#E65C00] mb-2">300%</div>
                <div className="text-gray-600">макс. рост клиентов</div>
              </div>
            </div>
          </div>
        </section>

        {/* Финальный CTA */}
        <section className="text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-6">
              Готов применить успешный опыт к вашему бизнесу
            </h2>
            <p className="text-gray-600 mb-8">
              Проведу бесплатный аудит вашего маркетинга и покажу конкретные точки роста для привлечения клиентов через карты и рекламу.
            </p>
            <Link
              href="/consultations"
              className="inline-block px-8 py-4 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-xl text-lg hover:bg-[#F7D03A] transition-colors shadow-md hover:shadow-lg"
            >
              Записаться на бесплатный аудит
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}