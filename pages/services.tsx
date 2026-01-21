// pages/services.tsx
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumbs from '../components/Breadcrumbs';

const breadcrumbsData = [
  { label: 'Главная', href: '/' },
  { label: 'Услуги и цены', href: '/services' }
];

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: 'Геомаркетинг',
      description: 'Комплексная настройка и продвижение в Яндекс.Картах, Google Maps, 2ГИС для привлечения клиентов из вашего района.',
      details: [
        'Полная настройка карточек организаций во всех геосервисах',
        'Оптимизация под алгоритмы поиска и карт',
        'Работа с отзывами и репутацией',
        'Аналитика и отслеживание заявок'
      ],
      price: 'от 35 000 ₽',
      priceDetails: 'в зависимости от количества точек и географии',
      href: '/geomarketing'
    },
    {
      id: 2,
      title: 'Контекстная реклама',
      description: 'Настройка и ведение рекламных кампаний в Яндекс.Директ и Google Ads с фокусом на офлайн-конверсии.',
      details: [
        'Геотаргетинг по районам и радиусу',
        'Ключевые слова для локального поиска',
        'Ретаргетинг посетителей сайта и карт',
        'Оптимизация ставок под офлайн-конверсии'
      ],
      price: 'от 25 000 ₽/мес',
      priceDetails: '+ бюджет на рекламу (от 40 000 ₽/мес)',
      href: '/services#kontekstnaya-reklama'
    },
    {
      id: 3,
      title: 'Стратегия привлечения',
      description: 'Разработка комплексной маркетинговой стратегии для стабильного роста客流 с разных каналов.',
      details: [
        'Анализ текущей ситуации и конкурентов',
        'Построение воронки привлечения клиентов',
        'Распределение бюджета между каналами',
        'KPI и система отслеживания результатов'
      ],
      price: 'от 80 000 ₽',
      priceDetails: 'включает разработку стратегии и план на 3-6 месяцев',
      href: '/services#strategiya'
    },
    {
      id: 4,
      title: 'Аудит маркетинга',
      description: 'Комплексная диагностика текущих маркетинговых каналов с рекомендациями по улучшению.',
      details: [
        'Анализ присутствия в геосервисах',
        'Оценка рекламных кампаний',
        'Проверка сайта и воронки продаж',
        'Рекомендации по улучшению и приоритеты'
      ],
      price: 'от 15 000 ₽',
      priceDetails: 'включает отчет с конкретными рекомендациями',
      href: '/services#audit'
    }
  ];

  const packages = [
    {
      title: 'Старт',
      description: 'Для начинающих или малого бизнеса',
      price: '135 000 ₽',
      items: [
        'Настройка всех геосервисов (Яндекс.Карты, Google Maps, 2ГИС)',
        'Контекстная реклама на 1 месяц (бюджет от 40 000 ₽/мес)',
        'Еженедельная аналитика и оптимизация',
        '3 консультации в течение месяца'
      ],
      cta: 'Выбрать пакет'
    },
    {
      title: 'Профи',
      description: 'Для быстрого роста и масштабирования',
      price: '285 000 ₽',
      popular: true,
      items: [
        'Все из пакета "Старт"',
        'Стратегия привлечения на 3 месяца',
        'Контекстная реклама на 3 месяца (бюджет от 50 000 ₽/мес)',
        'Работа с репутацией и отзывы',
        'Ежедневная оптимизация и поддержка',
        '8 консультаций в течение 3 месяцев'
      ],
      cta: 'Выбрать пакет'
    },
    {
      title: 'Бизнес',
      description: 'Для крупного бизнеса или сети точек',
      price: 'индивидуально',
      items: [
        'Все из пакета "Профи"',
        'Настройка для 5+ точек или городов',
        'Полное ведение рекламных кампаний',
        'Месячный аудит и корректировка стратегии',
        'Личный менеджер и приоритетная поддержка',
        'Неограниченное количество консультаций'
      ],
      cta: 'Узнать стоимость'
    }
  ];

  const faq = [
    {
      question: 'Как определяется стоимость услуг?',
      answer: 'Стоимость зависит от специфики вашего бизнеса, количества точек, географии присутствия и текущего состояния маркетинговых каналов. После бесплатной диагностики я предоставлю точное коммерческое предложение.'
    },
    {
      question: 'Сколько времени нужно для результатов?',
      answer: 'Первые результаты по геомаркетингу обычно видны через 2-3 недели, по рекламе — через 1-2 недели. Стабильный рост客流 формируется за 1-3 месяца комплексной работы.'
    },
    {
      question: 'Можно ли выбрать только одну услугу?',
      answer: 'Да, вы можете выбрать любую отдельную услугу. Однако максимальный эффект достигается при комплексном подходе, когда все каналы привлечения работают синхронно.'
    },
    {
      question: 'Как происходит оплата?',
      answer: 'Оплата производится поэтапно: 50% предоплата при старте проекта, 50% — после первой недели работы. Для долгосрочного сотрудничества возможна помесячная оплата.'
    }
  ];

  return (
    <>
      <Head>
        <title>Услуги и цены | Андрей Понизов — геомаркетинг для офлайн-бизнеса</title>
        <meta name="description" content="Услуги по геомаркетингу и привлечению клиентов для офлайн-бизнеса: настройка карт, контекстная реклама, стратегия. Цены от 15 000 ₽. Бесплатная диагностика." />
        <link rel="canonical" href="https://ponizov-marketing.ru/services" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Хлебные крошки */}
        <Breadcrumbs items={breadcrumbsData} />
        
        {/* Заголовок секции */}
        <section className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#1A3A2E] mb-4">
            Услуги и цены
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Системный подход к привлечению клиентов для офлайн-бизнеса. 
            Цены фиксированные, без скрытых платежей. Возможно индивидуальное формирование пакета услуг.
          </p>
        </section>

        {/* Основное содержимое */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Левая колонка: описание услуг */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-4">
                Основные услуги
              </h2>
              <p className="text-gray-700 mb-4">
                Я работаю напрямую с владельцами бизнеса и предлагаю комплексные решения для привлечения клиентов. 
                Все услуги адаптированы под специфику офлайн-бизнеса и направлены на увеличение прибыли.
              </p>
              <p className="text-gray-700">
                Стоимость услуг рассчитывается индивидуально после бесплатной диагностики вашего бизнеса. 
                Это позволяет предложить максимально точное решение под ваши задачи и бюджет.
              </p>
            </div>
            
            {/* Список услуг */}
            <div className="space-y-6">
              {services.map((service) => (
                <article key={service.id} className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-[#1A3A2E]">{service.title}</h3>
                    <Link
                      href={service.href}
                      className="text-[#E65C00] text-sm font-medium hover:text-[#D65A31] transition-colors"
                      aria-label={`Подробнее об услуге ${service.title}`}
                    >
                      Подробнее →
                    </Link>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <span className="text-[#E65C00] mr-2 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="font-bold text-[#1A3A2E]">{service.price}</div>
                    <div className="text-sm text-gray-500">{service.priceDetails}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          
          {/* Правая колонка: пакеты услуг и CTA */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-[#FFF9E6] to-[#FFF4D9] rounded-2xl p-8 border border-[#E65C00]/20">
              <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-6 text-center">
                Готовые решения для бизнеса
              </h2>
              
              <div className="space-y-6">
                {packages.map((pkg, index) => (
                  <div 
                    key={index} 
                    className={`rounded-xl border p-6 ${pkg.popular ? 'border-[#E65C00] bg-[#FFF9E6]' : 'border-gray-200 bg-white'}`}
                  >
                    {pkg.popular && (
                      <div className="text-center mb-2">
                        <span className="px-3 py-1 bg-[#E65C00] text-white text-sm rounded-full font-medium">
                          Популярный
                        </span>
                      </div>
                    )}
                    <h3 className="text-xl font-semibold text-[#1A3A2E] text-center mb-2">{pkg.title}</h3>
                    <p className="text-gray-600 text-center mb-4 text-sm">{pkg.description}</p>
                    <div className="text-2xl font-bold text-[#1A3A2E] text-center mb-4">{pkg.price}</div>
                    
                    <ul className="space-y-2 mb-6">
                      {pkg.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-[#E65C00] mr-2 mt-1">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="text-center">
                      <Link
                        href="/consultations"
                        className={`inline-block px-6 py-3 rounded-lg font-medium text-center w-full ${
                          pkg.popular
                            ? 'bg-[#1A3A2E] text-white hover:bg-[#224D3C]'
                            : 'bg-[#F5C518] text-[#1A3A2E] hover:bg-[#F7D03A]'
                        } transition-colors`}
                      >
                        {pkg.cta}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-[#1A3A2E] mb-4">
                Как рассчитывается стоимость
              </h2>
              <p className="text-gray-700 mb-4">
                Цена зависит от нескольких факторов:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span><span className="font-medium">Количество точек:</span> Стоимость растет пропорционально количеству филиалов или локаций</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span><span className="font-medium">География:</span> Один город, регион или несколько городов</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span><span className="font-medium">Текущее состояние:</span> От настройки с нуля до оптимизации существующих каналов</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span><span className="font-medium">Срочность:</span> Стандартные сроки или срочное внедрение</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                Для точного расчета стоимости запишитесь на бесплатную диагностику.
              </p>
            </div>
          </div>
        </div>

        {/* Детальные описания услуг */}
        <section id="kontekstnaya-reklama" className="mb-20">
          <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-8 text-center">
            Детали по ключевым услугам
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="text-xl font-medium text-[#1A3A2E] mb-4">Контекстная реклама</h3>
              <p className="text-gray-700 mb-4">
                Я настраиваю рекламные кампании с фокусом на привлечение клиентов в реальное заведение. 
                Это не просто клики и показы, а реальные посетители вашего бизнеса.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Средний бюджет</div>
                  <div className="font-medium text-[#1A3A2E]">от 40 000 ₽/мес</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Срок запуска</div>
                  <div className="font-medium text-[#1A3A2E]">3-5 дней</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Стоимость клиента</div>
                  <div className="font-medium text-[#1A3A2E]">300-600 ₽</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Возврат инвестиций</div>
                  <div className="font-medium text-[#1A3A2E]">2-4 недели</div>
                </div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-gray-700">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span>Настройка кампаний в Яндекс.Директ и Google Ads</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span>Геотаргетинг с точностью до района и улицы</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span>Оптимизация под звонки и заявки на сайте</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span>Ретаргетинг посетителей карт и сайта</span>
                </li>
              </ul>
              <Link 
                href="/consultations" 
                className="text-[#E65C00] font-medium hover:text-[#D65A31] transition-colors flex items-center gap-1"
              >
                Заказать контекстную рекламу →
              </Link>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="text-xl font-medium text-[#1A3A2E] mb-4">Стратегия привлечения</h3>
              <p className="text-gray-700 mb-4">
                Разрабатываю индивидуальную стратегию привлечения клиентов, которая учитывает специфику вашего бизнеса, 
                конкурентов и целевую аудиторию.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Срок разработки</div>
                  <div className="font-medium text-[#1A3A2E]">7-10 дней</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Включает</div>
                  <div className="font-medium text-[#1A3A2E]">12-15 страниц</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Консультации</div>
                  <div className="font-medium text-[#1A3A2E]">4 сессии</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Гарантии</div>
                  <div className="font-medium text-[#1A3A2E]">Доработка до результата</div>
                </div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-gray-700">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span>Анализ текущей ситуации и конкурентов</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span>Определение точек роста и приоритетов</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span>Построение воронки привлечения клиентов</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span>План действий на 3-6 месяцев с KPI</span>
                </li>
              </ul>
              <Link 
                href="/consultations" 
                className="text-[#E65C00] font-medium hover:text-[#D65A31] transition-colors flex items-center gap-1"
              >
                Разработать стратегию →
              </Link>
            </div>
          </div>
        </section>

        {/* Кейсы */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-4">
              Результаты клиентов
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Реальные кейсы и результаты после внедрения услуг по привлечению клиентов
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl border border-gray-100 p-6 text-center">
              <div className="text-4xl font-bold text-[#E65C00] mb-2">+300%</div>
              <p className="font-medium text-[#1A3A2E] mb-2">заявок с карт</p>
              <p className="text-gray-600">Салон красоты после настройки геомаркетинга</p>
              <Link href="/cases" className="text-[#E65C00] text-sm mt-2 inline-block hover:text-[#D65A31] transition-colors">
                Посмотреть кейсы →
              </Link>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-100 p-6 text-center">
              <div className="text-4xl font-bold text-[#E65C00] mb-2">400 ₽</div>
              <p className="font-medium text-[#1A3A2E] mb-2">стоимость клиента</p>
              <p className="text-gray-600">Автосервис после настройки рекламы</p>
              <Link href="/cases" className="text-[#E65C00] text-sm mt-2 inline-block hover:text-[#D65A31] transition-colors">
                Посмотреть кейсы →
              </Link>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-100 p-6 text-center">
              <div className="text-4xl font-bold text-[#E65C00] mb-2">25</div>
              <p className="font-medium text-[#1A3A2E] mb-2">новых клиентов/день</p>
              <p className="text-gray-600">Клиника после комплексного продвижения</p>
              <Link href="/cases" className="text-[#E65C00] text-sm mt-2 inline-block hover:text-[#D65A31] transition-colors">
                Посмотреть кейсы →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-8 text-center">
            Вопросы и ответы об услугах
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faq.map((item, index) => (
              <div key={index} className="border border-gray-100 rounded-xl overflow-hidden">
                <button className="w-full text-left p-5 bg-white hover:bg-[#FFF9E6] transition-colors">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-[#1A3A2E]">{item.question}</span>
                    <span className="text-[#E65C00]">+</span>
                  </div>
                  <div className="text-gray-600 mt-2 hidden">{item.answer}</div>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Призыв к действию */}
        <section className="bg-gradient-to-r from-[#FFF9E6] to-[#FFF4D9] rounded-2xl p-8 mb-20 border border-[#E65C00]/20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-4">
              Как начать работу
            </h2>
            <p className="text-gray-700 mb-6">
              Запишитесь на бесплатную диагностику вашего бизнеса, и я покажу конкретные точки роста 
              для привлечения клиентов с карт и рекламы.
            </p>
            <Link
              href="/consultations"
              className="inline-block px-8 py-4 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-xl text-lg hover:bg-[#F7D03A] transition-colors shadow-md hover:shadow-lg"
            >
              Записаться на бесплатный аудит
            </Link>
            <p className="text-sm text-gray-600 mt-3">
              15-20 минут, без обязательств, только конкретные рекомендации
            </p>
          </div>
        </section>

        {/* Связанные услуги */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-8 text-center">
            Связанные услуги и страницы
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/geomarketing" className="block p-6 bg-white rounded-xl border border-gray-100 hover:border-[#E65C00] hover:shadow-md transition-all">
              <h3 className="text-xl font-medium text-[#1A3A2E] mb-2">Геомаркетинг</h3>
              <p className="text-gray-600 mb-3">Привлечение клиентов через Яндекс.Карты, Google Maps, 2ГИС</p>
              <span className="text-sm text-[#E65C00] font-medium flex items-center gap-1">
                Подробнее о геомаркетинге →
              </span>
            </Link>
            
            <Link href="/consultations" className="block p-6 bg-white rounded-xl border border-gray-100 hover:border-[#E65C00] hover:shadow-md transition-all">
              <h3 className="text-xl font-medium text-[#1A3A2E] mb-2">Консультации</h3>
              <p className="text-gray-600 mb-3">Бесплатная диагностика и платные консультации по вашему бизнесу</p>
              <span className="text-sm text-[#E65C00] font-medium flex items-center gap-1">
                Записаться на консультацию →
              </span>
            </Link>
            
            <Link href="/cases" className="block p-6 bg-white rounded-xl border border-gray-100 hover:border-[#E65C00] hover:shadow-md transition-all">
              <h3 className="text-xl font-medium text-[#1A3A2E] mb-2">Кейсы клиентов</h3>
              <p className="text-gray-600 mb-3">Реальные примеры работы с бизнесами в beauty, медицине и услугах</p>
              <span className="text-sm text-[#E65C00] font-medium flex items-center gap-1">
                Посмотреть кейсы →
              </span>
            </Link>
          </div>
        </section>

        {/* Финальный CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-6">
            Готов увеличить ваши клиенты уже сегодня
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