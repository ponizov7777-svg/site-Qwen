// pages/blog/geomarketing-roi.tsx
'use client';
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';

const breadcrumbsData = [
  { label: 'Главная', href: '/' },
  { label: 'Аналитика и Разборы', href: '/blog' },
  { label: 'Окупаемость геомаркетинга', href: '/blog/geomarketing-roi' },
];

export default function GeomarketingROIArticle() {
  // ===== КОНТЕЙНЕРЫ =====
  const container = "max-w-7xl mx-auto px-4"
  // ===== ТИПОГРАФИКА =====
  const h1 = "text-[28px] md:text-[32px] font-semibold leading-tight mb-6 text-[#1A3A2E] drop-shadow-sm"
  const h2 = "text-3xl md:text-4xl font-semibold mb-6 text-[#1A3A2E]"
  const h3 = "text-xl font-semibold text-[#1A3A2E] mb-4 leading-tight"
  // ===== GLASSMORPHISM КАРТОЧКИ =====
  const glassCard = 
    "glass-card backdrop-blur-xl bg-white/70 border-white/50 shadow-xl hover:shadow-black/10 transition-all duration-300 p-8 rounded-2xl overflow-hidden"
  const glassCardWithButton = 
    "glass-card backdrop-blur-xl bg-white/70 border-white/50 shadow-xl hover:shadow-black/10 transition-all duration-300 p-8 rounded-2xl overflow-hidden flex flex-col h-full"
  const glassHero = 
    "backdrop-blur-xl bg-white/90 border border-white/60 rounded-3xl shadow-2xl p-12 md:p-16"
  const glassCTA = 
    "backdrop-blur-xl bg-gradient-to-r from-white/70 to-white/40 rounded-3xl p-12 border border-white/50 shadow-2xl border-t border-white/30"
  // ===== КЛАССЫ ДЛЯ СИММЕТРИЧНОГО РАСПОЛОЖЕНИЯ =====
  const cardContent = "flex-grow"  // Для контента внутри карточки
  const cardButtonContainer = "mt-auto pt-6" // Для блока с кнопкой
  const cardButton = "w-full text-center block" // Для кнопок в карточках
  // ===== БЕЙДЖИ =====
  const badgePrimary = 
    "px-3 py-1 bg-[#F5C518]/40 text-[#1A3A2E] text-sm font-medium rounded-full backdrop-blur-sm border border-white/60"
  // ===== КНОПКИ =====
  const btnPrimary = 
    "px-8 py-4 bg-[#F5C518]/90 text-[#1A3A2E] font-semibold rounded-2xl text-lg hover:bg-[#F7D03A]/90 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 backdrop-blur-md border border-white/50"
  const btnSecondary = 
    "px-8 py-4 bg-white/90 backdrop-blur-xl border-2 border-[#E65C00]/50 text-[#1A3A2E] font-semibold rounded-2xl hover:bg-white hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-0.5 transition-all duration-300"
  // ===== ССЫЛКИ =====
  const linkAccent = 
    "text-[#E65C00] font-semibold hover:text-[#D65A31] transition-all duration-300 inline-flex items-center gap-2 group-hover:translate-x-1"
  // ===== СПИСКИ =====
  const listItem = "flex items-start text-gray-700"
  const listBullet = "text-[#E65C00] mr-3 mt-1 text-xl font-bold shrink-0"

  return (
    <>
      <Head>
        <title>Окупаемость геомаркетинга | Андрей Понизов</title>
        <meta
          name="description"
          content="Подробный разбор, как считать ROI для геомаркетинга: от сбора данных до оценки эффективности и оптимизации."
        />
        <link rel="canonical" href="https://ponizov-marketing.ru/blog/geomarketing-roi" />
      </Head>

      <div className={container}>
        <Breadcrumbs items={breadcrumbsData} />

        <article className="py-20">

          {/* INTRO */}
          <section className="py-12 md:py-16">
            <div className={glassHero}>
              <h1 className={h1}>
                Как считать реальную окупаемость геомаркетинга
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Геомаркетинг — это не только «красивые показы на картах», а конкретный канал, который либо приносит деньги, либо сливает бюджет и время. Чтобы понимать, стоит ли вам продолжать вкладываться в карточки на картах, георекламу и работу с локациями, нужно считать не абстрактные показы, а реальный ROI — окупаемость инвестиций в геомаркетинг.
              </p>
            </div>
          </section>

          {/* SECTION 1 */}
          <section className="py-20">
            <h2 className={h2}>
              Что такое геомаркетинг и где он даёт деньги
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Геомаркетинг использует данные о геолокации человека или точки бизнеса, чтобы показать ему релевантное предложение «здесь и сейчас»: в навигаторе, картах, геотаргетированной рекламе, push-уведомлениях и т.п.. Для офлайн-бизнеса (салоны, кафе, клиники, магазины) это один из ключевых способов привести людей именно в физическую точку.
            </p>

            <div className={glassCard}>
              <p className="text-gray-700 leading-relaxed mb-6">
                Геомаркетинг может работать в трёх зонах:
              </p>

              <ul className="space-y-4 text-gray-700 mb-6">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Карточки на картах и навигаторах (Яндекс.Карты, Навигатор, 2ГИС): органический трафик из локальной выдачи и кнопки «проложить маршрут».</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Геотаргетированная реклама: баннеры, медийка, контекст с таргетом по координатам или радиусу вокруг точки.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Аналитика локаций: выбор места для новой точки, оценка потенциала района по трафику и аудитории.</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                Деньги вы зарабатываете не на кликах и показах, а на реальных посещениях и покупках. Поэтому подход к оценке должен быть приземлённым: сколько людей дошли, сколько купили, сколько вы на этом заработали.
              </p>
            </div>
          </section>

          {/* SECTION 2 */}
          <section className="py-20">
            <h2 className={h2}>
              Базовая формула ROI для геомаркетинга
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Для оценки окупаемости геомаркетинга используется стандартная формула ROI:
            </p>

            <div className={glassCard}>
              <p className="text-gray-700 leading-relaxed mb-6">
                ROI = (Доходы - Затраты) / Затраты × 100%
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Это тот же принцип, что и для любой рекламы: вы считаете, сколько денег принёс конкретный канал и сколько в него вложили.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Ключевые элементы:
              </p>

              <ul className="space-y-4 text-gray-700">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Затраты — всё, что вы тратите на геомаркетинг: платная реклама в картах/навигации, работы по оптимизации карточек, услуги подрядчиков, абонплата сервисов.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Доходы — выручка, которую генерируют клиенты, пришедшие по геоканалу (карты, навигатор, геореклама) за период.</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mt-6">
              Важно не путать ROI с ROAS: ROAS считается по выручке и показывает, сколько рублей выручки приносит 1 рубль рекламы (например, 500%), а ROI учитывает уже прибыль, если вы из доходов вычли себестоимость и операционные расходы.
            </p>
          </section>

          {/* SECTION 3 */}
          <section className="py-20">
            <h2 className={h2}>
              Как связать карты и реальные визиты: простой подход
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Главная сложность геомаркетинга — вы не видите «клик → заказ», как в интернет-магазине. Клиент увидел карточку, проложил маршрут, пришёл ногами, оплатил наличными — и всё это легко потерять в аналитике. Для оценки эффективности специалисты по геомаркетингу предлагают использовать прокси-метрики и обоснованные коэффициенты.
            </p>

            <div className={glassCard}>
              <p className="text-gray-700 leading-relaxed mb-6">
                Разумный упрощённый подход:
              </p>

              <ul className="space-y-4 text-gray-700 mb-6">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Считаете количество построенных маршрутов из карточек в картах/навигаторе за период (например, за месяц).</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Применяете коэффициент конверсии маршрута в покупку — консервативно 3% (оценка уровня минимальной конверсии, которую предлагает, в частности, Uberall и профильные эксперты).</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Умножаете количество предполагаемых покупок на средний чек, получаете доходы от геоканала.</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-6">
                Пример:
              </p>

              <div className="bg-white/30 backdrop-blur-sm border border-white/50 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed mb-2">
                  1000 маршрутов из Яндекс.Карт и Навигатора за месяц.
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Конверсия маршрута в покупку: 3%.
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Средний чек: 1500 ₽.
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Тогда:
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Покупок ≈ 1000 × 3% = 30.
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Доходы от геоканала ≈ 30 × 1500 ₽ = 45 000 ₽.
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Если ваши прямые затраты на геомаркетинг (реклама + работы) за месяц составили 15 000 ₽, то:
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  ROI = (45 000 - 15 000) / 15 000 × 100% = 200%
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Это означает, что каждый вложенный рубль принёс два рубля сверху.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 4 */}
          <section className="py-20">
            <h2 className={h2}>
              Шаг 1. Собираем исходные данные для расчёта
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Чтобы считать окупаемость не «на глаз», а по данным, нужно заранее договориться, какие показатели вы снимаете и откуда. В материалах по оценке эффективности геомаркетинга и digital-рекламы рекомендуют сочетать данные геосервисов и внутренней аналитики.
            </p>

            <div className={glassCard}>
              <p className="text-gray-700 leading-relaxed mb-6">
                Минимальный набор для офлайн-точки:
              </p>

              <ul className="space-y-4 text-gray-700 mb-6">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Количество построенных маршрутов из карточек (Яндекс.Карты, Навигатор, 2ГИС) за период.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Количество звонков и кликов по номеру телефона из карточки (если платформа это показывает).</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Средний чек по этой точке за тот же период (из CRM или кассы).</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Маржинальность (сколько прибыли остаётся с одного среднего чека, если хотите считать именно прибыльный ROI).</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Суммарные затраты на геомаркетинг (реклама в геосервисах, работа по оптимизации карточек, услуги подрядчиков).</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-6">
                Если вы используете геотаргетированную рекламу (баннеры, объявления по радиусу), дополнительно нужны:
              </p>

              <div className="bg-white/30 backdrop-blur-sm border border-white/50 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed mb-2">
                  Показатели кампании: показы, клики, CPM/CPC, конверсии (если ведёте на лендинг).
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Доля клиентов, пришедших по промокоду/опросу «где узнали», если вы используете такие механики офлайн.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 5 */}
          <section className="py-20">
            <h2 className={h2}>
              Шаг 2. Переводим маршруты и взаимодействия в количество покупателей
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Следующий шаг — понять, сколько реальных клиентов скрывается за цифрой «построено маршрутов» и «позвонили». В профильных материалах по геомаркетингу предлагают использовать усреднённые коэффициенты и по мере накопления данных уточнять их под свою нишу.
            </p>

            <div className={glassCard}>
              <p className="text-gray-700 leading-relaxed mb-6">
                Базовый подход:
              </p>

              <ul className="space-y-4 text-gray-700 mb-6">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Конверсия построенного маршрута в визит: 3–10% в зависимости от ниши и формата (3% — минимально консервативное значение, которое можно взять как стартовое).</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Конверсия звонка в визит: обычно выше маршрутов, например, 30–50%, но это уже зависит от качества обработки и ниши.</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-6">
                Для простоты можно взять:
              </p>

              <div className="bg-white/30 backdrop-blur-sm border border-white/50 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed mb-2">
                  Клиенты из маршрутов = маршруты × 3%.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Клиенты из звонков = звонки × (ваш коэффициент, хотя бы из выборки за неделю).
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Дальше вы складываете эти данные и получаете примерное количество клиентов, приведённых геомаркетингом.
              </p>
            </div>
          </section>

          {/* SECTION 6 */}
          <section className="py-20">
            <h2 className={h2}>
              Шаг 3. Считаем доходы и ROI
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Имея число клиентов и средний чек, легко посчитать доходы. В гайдах по ROI и ROMI рекомендуют именно так: сначала количество продаж, потом умножение на средний чек и маржинальность.
            </p>

            <div className={glassCard}>
              <p className="text-gray-700 leading-relaxed mb-6">
                Условный пример:
              </p>

              <ul className="space-y-4 text-gray-700 mb-6">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Маршруты: 800 в месяц.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Звонки из карточки: 50.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Конверсия маршрута в визит: 3%.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Конверсия звонка в визит: 40%.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Средний чек: 2000 ₽.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Маржинальность: 50%.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Затраты на геомаркетинг (реклама + работа): 20 000 ₽.</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-2">
                Тогда:
              </p>

              <p className="text-gray-700 leading-relaxed mb-2">
                Клиенты из маршрутов ≈ 800 × 3% = 24.
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                Клиенты из звонков ≈ 50 × 40% = 20.
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                Всего клиентов ≈ 44.
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                Выручка ≈ 44 × 2000 ₽ = 88 000 ₽.
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                Валовая прибыль (с маржой 50%) ≈ 44 000 ₽.
              </p>

              <p className="text-gray-700 leading-relaxed mb-2">
                Если считать по выручке (ROAS):
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                ROAS = 88 000 / 20 000 × 100% = 440%
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                Если считать по прибыли (ROI):
              </p>
              <p className="text-gray-700 leading-relaxed">
                ROI = (44 000 - 20 000) / 20 000 × 100% = 120%
              </p>
              <p className="text-gray-700 leading-relaxed">
                То есть геомаркетинг приносит больше, чем ест, и его имеет смысл масштабировать.
              </p>
            </div>
          </section>

          {/* SECTION 7 */}
          <section className="py-20">
            <h2 className={h2}>
              Какие ошибки и искажения убивают честный ROI
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Если считать ROI геомаркетинга «по ощущениям», почти всегда получаются либо слишком красивые цифры, либо убеждение, что «это не работает». Профильные эксперты по локальному SEO и аналитике выделяют несколько типичных ошибок:
            </p>

            <div className={glassCard}>
              <ul className="space-y-4 text-gray-700 mb-6">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Считать только показы или клики: показы на картах сами по себе не приносят деньги, важно оценивать маршруты и визиты.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Не учитывать средний чек и маржу: выручка без понимания прибыльности и структуры заказов может скрывать убыточные акции.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Смешивать каналы: записывать все визиты в «геомаркетинг», даже если клиент пришёл по рекомендации или из рекламы в соцсетях.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Не отслеживать период: сравнивать месяцы с разной seasonality и разными акциями, делая выводы по одному срезу.</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                Решение — заранее определиться, какие визиты и чеки вы относите к геоканалу, и стремиться хотя бы частично подтверждать это через данные (опрос «где узнали», промокоды, отдельные акции для пользователей карт).
              </p>
            </div>
          </section>

          {/* SECTION 8 */}
          <section className="py-20">
            <h2 className={h2}>
              Как улучшать окупаемость геомаркетинга по шагам
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Хороший ROI — это не разовый результат, а системная работа. В статьях про геомаркетинг и локальное SEO рекомендуют подходить к каналу так же, как к любой маркетинговой системе: тестировать, оптимизировать и масштабировать.
            </p>

            <div className={glassCard}>
              <p className="text-gray-700 leading-relaxed mb-6">
                Практический план:
              </p>

              <ul className="space-y-4 text-gray-700">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Привести в порядок карточки и локальное SEO, чтобы получать максимум органики с карт (полные данные, фото, отзывы).</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Запустить или оптимизировать платную георекламу: тестировать разные радиусы, форматы, креативы и ставку по гео.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Настроить учёт маршрутов, звонков и визитов из геоканалов.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Считать ROI отдельно по органике карт и по платному геомаркетингу, чтобы понимать, что даёт лучший возврат.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Регулярно пересматривать коэффициент конверсии маршрута в покупку, подстраивая его под вашу нишу по фактическим данным.</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mt-6">
              Если вы видите, что ROI стабильно выше 100–150% (по прибыли), геомаркетинг становится каналом, который можно масштабировать: увеличивать охват, расширять радиус, запускать дополнительные форматы в геосервисах. Если же показатель стабильно ниже нуля, это сигнал не «всё выключить», а пересмотреть: правильные ли точки вы выбрали, понятно ли оформлены карточки и не теряете ли вы клиентов на уровне сервиса.
            </p>
          </section>

          {/* FINAL CTA */}
          <section className="py-24">
            <div className={`${glassCTA} max-w-3xl mx-auto text-center`}>
              <h2 className={h2}>Хотите улучшить окупаемость геомаркетинга?</h2>
              <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl mx-auto">
                Если вам нужна помощь в оценке и оптимизации геомаркетинга, запишитесь на консультацию. Мы разберём ваши данные, найдем точки роста и создадим план действий для повышения ROI.
              </p>

              <Link
                href="/consultations"
                className={btnPrimary}
              >
                Записаться на консультацию
              </Link>
            </div>
          </section>

          {/* Кнопка "На главную" */}
          <div className="text-center mt-12 mb-8">
            <Link href="/" className={btnSecondary}>
              ← На главную
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}