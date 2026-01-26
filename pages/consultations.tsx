// pages/consultations.tsx
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumbs from '../components/Breadcrumbs';

const breadcrumbsData = [
  { label: 'Главная', href: '/' },
  { label: 'Консультации', href: '/consultations' }
];

export default function ConsultationsPage() {
  return (
    <>
      <Head>
        <title>Консультации | Андрей Понизов — геомаркетинг для офлайн-бизнеса</title>
        <meta
          name="description"
          content="Форматы консультаций: бесплатная диагностика (15–20 минут) и платная консультация (10 000 ₽). Запишитесь на разбор вашего бизнеса и получите конкретные рекомендации."
        />
        <link rel="canonical" href="https://ponizov-marketing.ru/consultations" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Хлебные крошки */}
        <Breadcrumbs items={breadcrumbsData} />

        {/* Заголовок секции */}
        <section className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#1A3A2E] mb-4">
            Консультации для вашего бизнеса
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Индивидуальный подход к каждому проекту: от бесплатной диагностики до глубокого разбора
            с готовым планом действий. Я помогу выбрать формат под ваш запрос.
          </p>
        </section>

        {/* Основное содержимое */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Левая колонка: форматы консультаций */}
          <div className="space-y-8">
            {/* Бесплатная диагностика */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-[#1A3A2E]">Бесплатная диагностика</h2>
                <span className="px-3 py-1 bg-[#F5C518]/20 text-[#1A3A2E] rounded-full font-medium">
                  15–20 минут
                </span>
              </div>
              <p className="text-gray-700 mb-6">
                Быстрый разбор текущей ситуации и выявление точек роста.
                Я покажу, где вы теряете клиентов и какие первые шаги дадут эффект быстрее всего.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span>Анализ текущего маркетинга и присутствия в картах</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span>Выявление основных узких мест и точек роста</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span>Рекомендации по первым шагам для улучшения ситуации</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span>Оценка потенциала роста для вашего бизнеса</span>
                </li>
              </ul>
              <div className="text-center">
                <Link
                  href="#form"
                  className="inline-block px-6 py-3 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-lg text-lg hover:bg-[#F7D03A] transition-colors shadow-md"
                >
                  Записаться на бесплатную диагностику
                </Link>
                <p className="text-sm text-gray-500 mt-2">
                  Я свяжусь с вами в течение 24 часов.
                </p>
              </div>
            </div>

            {/* Платная консультация */}
            <div className="bg-gradient-to-r from-[#FFF9E6] to-[#FFF4D9] rounded-xl border border-[#E65C00]/30 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-[#1A3A2E]">Платная консультация</h2>
                <span className="px-3 py-1 bg-[#1A3A2E] text-white rounded-full font-medium">
                  10 000 ₽
                </span>
              </div>
              <p className="text-gray-700 mb-6">
                Глубокий разбор бизнеса с формированием стратегии привлечения клиентов.
                По итогам у вас будет понятный план действий с приоритетами, сроками и метриками.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span>Детальный анализ текущей ситуации и конкурентов</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span>Разработка индивидуальной маркетинговой стратегии</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span>Пошаговый план внедрения с приоритетами</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span>Расчёт бюджета и ожидаемой эффективности</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span>Поддержка на старте внедрения (ответы на вопросы после созвона)</span>
                </li>
              </ul>
              <div className="text-center">
                <Link
                  href="#form"
                  className="inline-block px-6 py-3 bg-[#1A3A2E] text-white font-medium rounded-lg text-lg hover:bg-[#224D3C] transition-colors shadow-md"
                >
                  Записаться на платную консультацию
                </Link>
              </div>
            </div>
          </div>

          {/* Правая колонка: процесс и преимущества */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-4">
                Как проходит консультация
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F5C518] flex items-center justify-center text-[#1A3A2E] font-semibold">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1A3A2E] mb-1">Подготовка</h3>
                    <p className="text-gray-700">
                      Я заранее отправляю вопросы для подготовки, чтобы созвон прошёл максимально эффективно.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F5C518] flex items-center justify-center text-[#1A3A2E] font-semibold">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1A3A2E] mb-1">Разбор</h3>
                    <p className="text-gray-700">
                      Онлайн-встреча в Zoom или Telegram: разбираю ваш бизнес, цели и текущие вызовы, даю конкретные рекомендации.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F5C518] flex items-center justify-center text-[#1A3A2E] font-semibold">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1A3A2E] mb-1">Результаты</h3>
                    <p className="text-gray-700">
                      После консультации вы получаете материалы/структуру плана действий, чтобы можно было внедрять без «воды».
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-4">
                Почему выбирают мои консультации
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span>
                    <span className="font-medium">Практический опыт:</span> 8+ лет работы с офлайн-бизнесом, кол-во проектов
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span>
                    <span className="font-medium">Конкретика вместо теории:</span> только проверенные решения и реальные кейсы
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span>
                    <span className="font-medium">Индивидуальный подход:</span> без шаблонов, только под ваш бизнес
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span>
                    <span className="font-medium">Фокус на результатах:</span> рост клиентов и прибыли, а не «красивые отчёты»
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E65C00] mr-2 mt-1">•</span>
                  <span>
                    <span className="font-medium">Поддержка после консультации:</span> отвечаю на вопросы при внедрении плана
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-[#1A3A2E] mb-4">
                Часто задаваемые вопросы
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-[#1A3A2E]">Нужно ли готовиться к консультации?</p>
                  <p className="text-gray-600">
                    Да. Я пришлю вопросы за день до встречи — так мы используем время максимально продуктивно.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-[#1A3A2E]">
                    Чем отличается бесплатная диагностика от платной консультации?
                  </p>
                  <p className="text-gray-600">
                    Бесплатная диагностика — быстрый обзор и первые шаги. Платная консультация — глубокий разбор, стратегия и подробный план.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-[#1A3A2E]">Что если после консультации я захочу продолжить работу?</p>
                  <p className="text-gray-600">
                    Я предложу формат под вашу задачу: разовые разборы, сопровождение или комплексное ведение.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Кейсы клиентов после консультаций */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-8 text-center">
            Результаты клиентов после консультаций
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-[#E65C00] mb-2">результат</div>
              <p className="font-medium text-[#1A3A2E] mb-2">в цифрах</p>
              <p className="text-gray-600 mb-3">
                В какой нише
              </p>
              <Link
                href="/cases/salon-krasoty-ekb"
                className="text-[#E65C00] font-medium hover:text-[#D65A31] transition-colors"
              >
                Читать кейс →
              </Link>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-[#E65C00] mb-2">результат </div>
              <p className="font-medium text-[#1A3A2E] mb-2">в цифрах</p>
              <p className="text-gray-600 mb-3">
                В какой нише
              </p>
              <Link
                href="/cases/stomatologiya-network"
                className="text-[#E65C00] font-medium hover:text-[#D65A31] transition-colors"
              >
                Читать кейс →
              </Link>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-[#E65C00] mb-2">результат</div>
              <p className="font-medium text-[#1A3A2E] mb-2">в цифрах</p>
              <p className="text-gray-600 mb-3">
                В какой нише
              </p>
              <Link
                href="/cases/avtoservice-crisis"
                className="text-[#E65C00] font-medium hover:text-[#D65A31] transition-colors"
              >
                Читать кейс →
              </Link>
            </div>
          </div>
        </section>

        {/* Форма записи */}
        <section
          id="form"
          className="bg-gradient-to-r from-[#FFF9E6] to-[#FFF4D9] rounded-2xl p-8 mb-20 border border-[#E65C00]/20"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-4">
              Запишитесь на консультацию
            </h2>
            <p className="text-gray-700 mb-6">
              Выберите формат и оставьте заявку — я свяжусь с вами в течение 24 часов для согласования деталей.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl border border-[#E65C00]/30">
                <h3 className="text-xl font-semibold text-[#1A3A2E] mb-2">Бесплатная диагностика</h3>
                <p className="text-gray-700 mb-4">15–20 минут, онлайн, без обязательств</p>
                <button className="w-full px-4 py-3 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-lg hover:bg-[#F7D03A] transition-colors">
                  Записаться на бесплатную диагностику
                </button>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#1A3A2E]/30">
                <h3 className="text-xl font-semibold text-[#1A3A2E] mb-2">Платная консультация</h3>
                <p className="text-gray-700 mb-4">1,5 - 2 часа, полный разбор, стратегия и план</p>
                <button className="w-full px-4 py-3 bg-[#1A3A2E] text-white font-medium rounded-lg hover:bg-[#224D3C] transition-colors">
                  Записаться на платную консультацию
                </button>
              </div>
            </div>

            <div className="text-left bg-white p-6 rounded-xl">
              <h3 className="text-lg font-medium text-[#1A3A2E] mb-4">
                Или оставьте заявку ниже:
              </h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#1A3A2E] mb-1">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E65C00] focus:border-transparent"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#1A3A2E] mb-1">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E65C00] focus:border-transparent"
                      placeholder="+7 (999) 999-99-99"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-[#1A3A2E] mb-1">
                    Ваш бизнес
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E65C00] focus:border-transparent"
                    placeholder="Сфера деятельности и город"
                  />
                </div>

                <div>
                  <label htmlFor="goals" className="block text-sm font-medium text-[#1A3A2E] mb-1">
                    Какие цели вы хотите обсудить?
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    rows={3}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E65C00] focus:border-transparent"
                    placeholder="Например: увеличить поток клиентов с карт, снизить стоимость привлечения, выстроить систему маркетинга"
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      required
                      className="h-4 w-4 text-[#E65C00] focus:ring-[#E65C00] border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="consent" className="text-gray-600">
                      Согласен на обработку персональных данных в соответствии с{' '}
                      <Link href="/policy" className="text-[#E65C00] hover:underline">
                        Политикой конфиденциальности
                      </Link>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-lg text-lg hover:bg-[#F7D03A] transition-colors shadow-md"
                >
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Преимущества */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-8 text-center">
            Почему стоит записаться именно сейчас
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl border border-gray-100">
              <div className="text-5xl font-bold text-[#E65C00] mb-2">3</div>
              <h3 className="text-xl font-medium text-[#1A3A2E] mb-2">дня</h3>
              <p className="text-gray-600">Среднее время ожидания консультации</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl border border-gray-100">
              <div className="text-5xl font-bold text-[#E65C00] mb-2">92%</div>
              <h3 className="text-xl font-medium text-[#1A3A2E] mb-2">клиентов</h3>
              <p className="text-gray-600">Возвращаются за дальнейшей помощью после первой консультации</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl border border-gray-100">
              <div className="text-5xl font-bold text-[#E65C00] mb-2">5–7</div>
              <h3 className="text-xl font-medium text-[#1A3A2E] mb-2">дней</h3>
              <p className="text-gray-600">Средний срок до первых результатов после внедрения рекомендаций</p>
            </div>
          </div>
        </section>

        {/* Связанные услуги */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-8 text-center">
            Другие услуги, которые могут вам подойти
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/services"
              className="block p-6 bg-white rounded-xl border border-gray-100 hover:border-[#E65C00] hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-medium text-[#1A3A2E] mb-2">Все услуги и цены</h3>
              <p className="text-gray-600 mb-3">
                Комплексное продвижение: геомаркетинг, реклама, стратегия
              </p>
              <span className="text-sm text-[#E65C00] font-medium flex items-center gap-1">
                Подробнее →
              </span>
            </Link>

            <Link
              href="/geomarketing"
              className="block p-6 bg-white rounded-xl border border-gray-100 hover:border-[#E65C00] hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-medium text-[#1A3A2E] mb-2">Геомаркетинг</h3>
              <p className="text-gray-600 mb-3">
                Привлечение клиентов через карты и локальный поиск
              </p>
              <span className="text-sm text-[#E65C00] font-medium flex items-center gap-1">
                Подробнее →
              </span>
            </Link>

            <Link
              href="/cases"
              className="block p-6 bg-white rounded-xl border border-gray-100 hover:border-[#E65C00] hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-medium text-[#1A3A2E] mb-2">Кейсы клиентов</h3>
              <p className="text-gray-600 mb-3">
                Реальные примеры результатов работы
              </p>
              <span className="text-sm text-[#E65C00] font-medium flex items-center gap-1">
                Посмотреть кейсы →
              </span>
            </Link>
          </div>
        </section>

        {/* Финальный CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-6">
            Готов помочь вашему бизнесу расти
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Напишите мне в Telegram или оставьте заявку — я подскажу, какой формат консультации даст максимум пользы именно вам.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://t.me/ponizovandrey"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#1A3A2E] text-white font-medium rounded-xl text-lg hover:bg-[#224D3C] transition-colors shadow-md"
            >
              Написать в Telegram
            </a>
            <Link
              href="#form"
              className="px-8 py-4 border-2 border-[#E65C00] text-[#1A3A2E] font-medium rounded-xl text-lg hover:bg-[#FFF5E1] transition-colors"
            >
              Заполнить форму заявки
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
