// pages/geomarketing.tsx
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumbs from '../components/Breadcrumbs';

const breadcrumbsData = [
  { label: 'Главная', href: '/' },
  { label: 'Геомаркетинг', href: '/geomarketing' }
];

export default function GeomarketingPage() {
  const services = [
    {
      title: 'Яндекс.Карты',
      description: 'Полная настройка организации, управление отзывами, работа с сервисами, продвижение в поиске и на картах.',
      icon: '📱'
    },
    {
      title: 'Google Maps',
      description: 'Оптимизация бизнес-профиля, управление рейтингом и отзывами, интеграция с другими сервисами Google.',
      icon: '📍'
    },
    {
      title: '2ГИС',
      description: 'Настройка карточки организации, управление контактами, продвижение в каталоге и на карте.',
      icon: '🗺️'
    },
    {
      title: 'Локальный поиск',
      description: 'Оптимизация видимости в поисковых системах для локальных запросов, работа с картами и сниппетами.',
      icon: '🔍'
    }
  ];

  const results = [
    {
      title: '+300% клиентов',
      description: 'средний рост заявок после комплексной настройки геомаркетинга'
    },
    {
      title: '15-25 заявок/день',
      description: 'среднее количество заявок с карт для салонов красоты и клиник'
    },
    {
      title: '400-700 ₽',
      description: 'средняя стоимость привлечения клиента через геомаркетинг'
    },
    {
      title: '3-4 недели',
      description: 'средний срок достижения стабильного роста заявок'
    }
  ];

  const cases = [
    {
      title: 'Салон красоты в Екатеринбурге',
      result: '+300% заявок за 2 месяца',
      description: 'Полная настройка всех карт и локального поиска. Рост с 5 до 35 заявок в день.',
      href: '/cases/salon-krasoty-ekb'
    },
    {
      title: 'Стоматологическая клиника',
      result: '+120 заявок в месяц',
      description: 'Оптимизация видимости в картах и локальном поиске для новой клиники.',
      href: '/cases/stomatologiya-network'
    },
    {
      title: 'Автосервис в Челябинске',
      result: '+75% клиентов за 3 месяца',
      description: 'Восстановление репутации в картах после кризиса и привлечение новых клиентов.',
      href: '/cases/avtoservice-crisis'
    }
  ];

  return (
    <>
      <Head>
        <title>Геомаркетинг для офлайн-бизнеса | Андрей Понизов</title>
        <meta name="description" content="Геомаркетинг для офлайн-бизнеса: настройка Яндекс.Карт, Google Maps, 2ГИС. Привлечение клиентов через локальный поиск, увеличение видимости в картах для салонов красоты, клиник и сервисных компаний." />
        <link rel="canonical" href="https://ponizov-marketing.ru/geomarketing" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Хлебные крошки */}
        <Breadcrumbs items={breadcrumbsData} />
        
        {/* Заголовок секции */}
        <section className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#1A3A2E] mb-4">
            Геомаркетинг для офлайн-бизнеса
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Системный подход к привлечению клиентов через карты и локальный поиск. 
            Настройка, оптимизация и продвижение в Яндекс.Картах, Google Maps, 2ГИС для стабильного роста бизнеса.
          </p>
        </section>

        {/* Основное содержимое */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Левая колонка: описание геомаркетинга */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-4">
                Что такое геомаркетинг и зачем он нужен бизнесу
              </h2>
              <p className="text-gray-700 mb-4">
                Геомаркетинг — это комплекс методов привлечения клиентов через локальные каналы: карты, локальный поиск, геотаргетированную рекламу. 
                Это не просто «настроить карты», а создать систему, которая будет стабильно приносить клиентов из вашего района или города.
              </p>
              <p className="text-gray-700">
                78% клиентов ищут бизнесы поблизости на картах и в поиске. Без правильной настройки геомаркетинга вы теряете до 60% потенциальных клиентов, которые могли бы найти ваш бизнес.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-4">
                Как работает моя система геомаркетинга
              </h2>
              <p className="text-gray-700 mb-4">
                Я не просто настраиваю карты — создаю комплексную систему привлечения клиентов:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span><span className="font-medium">Аудит текущей ситуации:</span> анализ видимости в картах, отзывы, позиции в поиске</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span><span className="font-medium">Настройка всех геосервисов:</span> Яндекс.Карты, Google Maps, 2ГИС с оптимизацией под ваш бизнес</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span><span className="font-medium">Работа с репутацией:</span> управление отзывами, ответы на негатив, стимулирование позитивных отзывов</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span><span className="font-medium">Интеграция с рекламой:</span> контекстная реклама с геотаргетингом для ускорения результатов</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span><span className="font-medium">Аналитика и оптимизация:</span> отслеживание заявок, конверсий, роста видимости</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Правая колонка: статистика и результаты */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-[#FFF9E6] to-[#FFF4D9] rounded-2xl p-6 border border-[#E65C00]/20">
              <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-6 text-center">
                Результаты моих клиентов
              </h2>
              
              <div className="grid grid-cols-2 gap-4">
                {results.map((result, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-lg border border-gray-100">
                    <div className="text-2xl font-bold text-[#E65C00] mb-2">{result.title}</div>
                    <div className="text-sm text-gray-600">{result.description}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-4">
                Почему стандартная настройка не работает
              </h2>
              <p className="text-gray-700 mb-4">
                Большинство бизнесов сталкиваются с проблемами при самостоятельной настройке геомаркетинга:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span><span className="font-medium">Неполная настройка:</span> только базовые поля, без оптимизации под алгоритмы карт</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span><span className="font-medium">Отсутствие аналитики:</span> нет отслеживания, откуда приходят клиенты и какие действия работают</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span><span className="font-medium">Игнорирование отзывов:</span> негативные отзывы без ответов отпугивают 94% потенциальных клиентов</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span><span className="font-medium">Отсутствие системности:</span> работа только с одним сервисом (обычно Яндекс.Карты), игнорируя другие каналы</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Услуги по геомаркетингу */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-8 text-center">
            Услуги по геомаркетингу
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-xl border border-gray-100 hover:border-[#E65C00] transition-all">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-medium text-[#1A3A2E] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  href="/consultations" 
                  className="text-[#E65C00] font-medium hover:text-[#D65A31] transition-colors flex items-center gap-1"
                >
                  Подробнее о настройке →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Процесс работы */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-4">
              Как проходит работа по геомаркетингу
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Пошаговая система настройки и запуска геомаркетинга для вашего бизнеса
            </p>
          </div>
          
          <div className="relative">
            {/* Линия процесса */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#E65C00]/30 transform -translate-x-1/2"></div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((step) => (
                <div 
                  key={step} 
                  className={`relative ${
                    step % 2 === 1 ? 'md:text-right' : 'md:text-left'
                  }`}
                >
                  {/* Точка процесса */}
                  <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#F5C518] border-4 border-white flex items-center justify-center text-[#1A3A2E] font-bold text-xl z-10">
                    {step}
                  </div>
                  
                  <div className="bg-white rounded-xl border border-gray-100 p-6 mb-8 relative z-10">
                    {step === 1 && (
                      <>
                        <h3 className="text-xl font-semibold text-[#1A3A2E] mb-3">Аудит и анализ</h3>
                        <p className="text-gray-600">
                          Проводим полный анализ текущей ситуации: видимость в картах, отзывы, позиции в поиске, конкуренция в районе. 
                          Определяем точки роста и риски.
                        </p>
                      </>
                    )}
                    {step === 2 && (
                      <>
                        <h3 className="text-xl font-semibold text-[#1A3A2E] mb-3">Стратегия и план</h3>
                        <p className="text-gray-600">
                          Разрабатываем индивидуальную стратегию геомаркетинга для вашего бизнеса с конкретными шагами, сроками и KPI. 
                          Определяем приоритетные каналы и бюджет.
                        </p>
                      </>
                    )}
                    {step === 3 && (
                      <>
                        <h3 className="text-xl font-semibold text-[#1A3A2E] mb-3">Настройка и запуск</h3>
                        <p className="text-gray-600">
                          Полная настройка всех геосервисов: Яндекс.Карты, Google Maps, 2ГИС. 
                          Оптимизация под алгоритмы, настройка аналитики, запуск рекламных кампаний.
                        </p>
                      </>
                    )}
                    {step === 4 && (
                      <>
                        <h3 className="text-xl font-semibold text-[#1A3A2E] mb-3">Аналитика и рост</h3>
                        <p className="text-gray-600">
                          Еженедельный анализ результатов, оптимизация настроек, работа с отзывами. 
                          Постепенное увеличение заявок и снижение стоимости привлечения клиента.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Кейсы по геомаркетингу */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-4">
              Кейсы по геомаркетингу
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Реальные примеры результатов работы с клиентами в сфере геомаркетинга
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <article key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-[#F5C518]/20 text-[#1A3A2E] text-sm font-medium rounded-full">
                      Кейс
                    </span>
                    <span className="text-[#E65C00] font-bold">{caseItem.result}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1A3A2E] mb-3">
                    <Link href={caseItem.href} className="hover:text-[#E65C00] transition-colors">
                      {caseItem.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {caseItem.description}
                  </p>
                  <Link 
                    href={caseItem.href}
                    className="text-[#E65C00] font-medium hover:text-[#D65A31] transition-colors flex items-center gap-1"
                  >
                    Подробнее о кейсе →
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/cases"
              className="inline-block px-6 py-3 border-2 border-[#E65C00] text-[#1A3A2E] font-medium rounded-lg hover:bg-[#FFF5E1] transition-colors"
            >
              Все кейсы по геомаркетингу
            </Link>
          </div>
        </section>

        {/* Призыв к действию */}
        <section className="bg-gradient-to-r from-[#FFF9E6] to-[#FFF4D9] rounded-2xl p-8 mb-20 border border-[#E65C00]/20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-4">
              Хочу такой же результат для моего бизнеса
            </h2>
            <p className="text-gray-700 mb-6">
              Проведу бесплатный аудит вашего геомаркетинга и покажу конкретные точки роста для привлечения клиентов через карты.
            </p>
            <Link
              href="/consultations"
              className="inline-block px-8 py-4 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-xl text-lg hover:bg-[#F7D03A] transition-colors shadow-md hover:shadow-lg"
            >
              Бесплатный аудит геомаркетинга
            </Link>
            <p className="text-sm text-gray-600 mt-3">
              15-20 минут, без обязательств, только конкретные рекомендации
            </p>
          </div>
        </section>

        {/* Часто задаваемые вопросы */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-8 text-center">
            Часто задаваемые вопросы о геомаркетинге
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="border border-gray-100 rounded-xl overflow-hidden">
              <button className="w-full text-left p-5 bg-white hover:bg-[#FFF9E6] transition-colors">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-[#1A3A2E]">Сколько времени нужно для результатов?</span>
                  <span className="text-[#E65C00]">+</span>
                </div>
              </button>
            </div>
            
            <div className="border border-gray-100 rounded-xl overflow-hidden">
              <button className="w-full text-left p-5 bg-white hover:bg-[#FFF9E6] transition-colors">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-[#1A3A2E]">Какой бюджет нужен для старта?</span>
                  <span className="text-[#E65C00]">+</span>
                </div>
              </button>
            </div>
            
            <div className="border border-gray-100 rounded-xl overflow-hidden">
              <button className="w-full text-left p-5 bg-white hover:bg-[#FFF9E6] transition-colors">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-[#1A3A2E]">Можно ли настроить всё самому?</span>
                  <span className="text-[#E65C00]">+</span>
                </div>
              </button>
            </div>
            
            <div className="border border-gray-100 rounded-xl overflow-hidden">
              <button className="w-full text-left p-5 bg-white hover:bg-[#FFF9E6] transition-colors">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-[#1A3A2E]">Как измерить эффективность геомаркетинга?</span>
                  <span className="text-[#E65C00]">+</span>
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* Связанные услуги */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-8 text-center">
            Связанные услуги
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services" className="block p-6 bg-white rounded-xl border border-gray-100 hover:border-[#E65C00] hover:shadow-md transition-all">
              <h3 className="text-xl font-medium text-[#1A3A2E] mb-2">Все услуги и цены</h3>
              <p className="text-gray-600 mb-3">Комплексное продвижение для офлайн-бизнеса: геомаркетинг, реклама, стратегия</p>
              <span className="text-sm text-[#E65C00] font-medium flex items-center gap-1">
                Подробнее →
              </span>
            </Link>
            
            <Link href="/consultations" className="block p-6 bg-white rounded-xl border border-gray-100 hover:border-[#E65C00] hover:shadow-md transition-all">
              <h3 className="text-xl font-medium text-[#1A3A2E] mb-2">Платные консультации</h3>
              <p className="text-gray-600 mb-3">Глубокий анализ вашего бизнеса и разработка индивидуальной стратегии</p>
              <span className="text-sm text-[#E65C00] font-medium flex items-center gap-1">
                Подробнее →
              </span>
            </Link>
            
            <Link href="/articles?category=geomarketing" className="block p-6 bg-white rounded-xl border border-gray-100 hover:border-[#E65C00] hover:shadow-md transition-all">
              <h3 className="text-xl font-medium text-[#1A3A2E] mb-2">Статьи по геомаркетингу</h3>
              <p className="text-gray-600 mb-3">Практические руководства и советы по настройке карт и локального поиска</p>
              <span className="text-sm text-[#E65C00] font-medium flex items-center gap-1">
                Читать статьи →
              </span>
            </Link>
          </div>
        </section>

        {/* Финальный CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-6">
            Готов увеличить ваши клиенты с карт уже сегодня
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