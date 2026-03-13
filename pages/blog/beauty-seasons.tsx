// pages/blog/beauty-seasons.tsx
'use client';
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';

const breadcrumbsData = [
  { label: 'Главная', href: '/' },
  { label: 'Аналитика и Разборы', href: '/blog' },
  { label: 'Сезонные стратегии для beauty-бизнеса', href: '/blog/beauty-seasons' },
];

export default function BeautySeasonsArticle() {
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
        <title>Сезонные стратегии beauty | Андрей Понизов</title>
        <meta
          name="description"
          content="Разбор сезонных стратегий для beauty-бизнеса: как зарабатывать круглый год, подстраиваясь под спрос весной, летом, осенью и зимой."
        />
        <link rel="canonical" href="https://ponizov-marketing.ru/blog/beauty-seasons" />
      </Head>

      <div className={container}>
        <Breadcrumbs items={breadcrumbsData} />

        <article className="py-20">

          {/* INTRO */}
          <section className="py-12 md:py-16">
            <div className={glassHero}>
              <h1 className={h1}>
                Сезонные стратегии для beauty-бизнеса: где зарабатываются деньги
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Бьюти-бизнес живёт по сезонам: весной все готовятся к лету, летом «проседают» сложные процедуры, осенью восстанавливаются после солнца, а зимой выстреливают праздничные образы и подарочные сертификаты. Деньги зарабатываются не там, где вы просто плывёте по волне спроса, а там, где заранее подстраиваете услуги, цены и маркетинг под сезонные пики и провалы.
              </p>
            </div>
          </section>

          {/* SECTION 1 */}
          <section className="py-20">
            <h2 className={h2}>
              Как устроена сезонность в beauty-бизнесе
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Спрос на услуги салонов красоты и эстетической медицины меняется в течение года из-за погоды, праздников, отпусков и доходов клиентов. Если смотреть на статистику салонов и косметологических кабинетов, видны разные пики и провалы по сезонам.
            </p>

            <div className={glassCard}>
              <p className="text-gray-700 leading-relaxed mb-6">
                Типичные паттерны:
              </p>

              <ul className="space-y-4 text-gray-700 mb-6">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Весна: рост спроса на подготовку к лету — эпиляция, коррекция фигуры, уход за кожей и волосами.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Лето: часть клиентов уезжает, падает спрос на агрессивные процедуры, но растёт интерес к экспресс-услугам и уходу после солнца.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Осень: «восстановительный» сезон — курсы омоложения, работа с гиперпигментацией, длительные уходы.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Зима: высокий спрос вокруг праздников, новогодних корпоративов и 14.02/8.03 — укладки, макияж, подарочные сертификаты.</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                Главная задача владельца — не просто фиксировать эти волны, а заранее под них перестраивать расписание, прайс и промо, превращая сезонность в прогнозируемый денежный поток.
              </p>
            </div>
          </section>

          {/* SECTION 2 */}
          <section className="py-20">
            <h2 className={h2}>
              Весна: подготовка к лету и разогрев выручки
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Весна — это старт высокого сезона: люди начинают готовиться к отпуску и открытой одежде, что делает весенние месяцы ключевыми для роста выручки.
            </p>

            <div className={glassCard}>
              <p className="text-gray-700 leading-relaxed mb-6">
                Где зарабатываются деньги весной:
              </p>

              <ul className="space-y-4 text-gray-700 mb-6">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Интенсивные программы подготовки к лету: курсы эпиляции, антицеллюлитные программы, комплексные уходы за кожей.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Комплексные пакеты: «подготовка к отпуску за 4–6 недель» с фиксированной стоимостью и расписанием визитов.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Индивидуальные предложения для спящих клиентов: подбор процедур под состояние кожи/волос с персональными скидками.</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-6">
                Что делать салону:
              </p>

              <ul className="space-y-4 text-gray-700 mb-6">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Проанализировать прошлогодний спрос по месяцам и выделить услуги, которые весной растут быстрее всего.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Сформировать весенние комплексы с лёгким апсейлом (добавить уход к базовой процедуре) и продвигать их отдельно.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Запускать активности в соцсетях: конкурсы «лучшая кожа к лету», челленджи и таргетированную рекламу на женщин 25–45 лет.</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                Так вы усиливаете естественный спрос и увеличиваете средний чек ещё до наступления пикового летнего сезона.
              </p>
            </div>
          </section>

          {/* SECTION 3 */}
          <section className="py-20">
            <h2 className={h2}>
              Лето: экспресс-услуги и работа с оттоком
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Летом часть клиентов уезжает, и многие салоны воспринимают этот период как «провал», хотя при правильной стратегии он может стать временем для стабильной выручки и работы с новыми аудиториями.
            </p>

            <div className={glassCard}>
              <p className="text-gray-700 leading-relaxed mb-6">
                Где зарабатываются деньги летом:
              </p>

              <ul className="space-y-4 text-gray-700 mb-6">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Экспресс-услуги перед отпуском и после него: быстрые уходы, экспресс-укладки, восстановление волос/кожи после солнца.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Услуги для туристов и «летней» аудитории, если салон в курортной или центральной зоне: экспресс-маникюр, укладка, уход после солнца.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Гибкие тарифы в непиковые часы: скидки на дневные записи, специальные предложения в «тихие» дни недели.</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-6">
                Что делать салону:
              </p>

              <ul className="space-y-4 text-gray-700 mb-6">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Скорректировать прайс: снизить цены на длительные процедуры, которые мало востребованы летом, и вынести в акцент летние форматы ухода.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Использовать геомаркетинг и геотаргетинг: реклама на туристов и людей поблизости («экспресс-уход в 10 минутах от вас»).</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Продвигать экспресс-программы через соцсети и карты, делая акцент на скорости и удобстве.</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                Летом важно не пытаться продавать то, что «продаётся зимой», а подстроиться под более мобильное и спонтанное поведение клиентов.
              </p>
            </div>
          </section>

          {/* SECTION 4 */}
          <section className="py-20">
            <h2 className={h2}>
              Осень: восстановление и курсы, а не разовые визиты
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Осень — «реабилитационный» сезон: после солнца, моря и отпусков клиенты готовы инвестировать в длительные курсы и глубокие процедуры. Это один из самых прибыльных периодов, если сместить фокус с разовых посещений на курсовые программы.
            </p>

            <div className={glassCard}>
              <p className="text-gray-700 leading-relaxed mb-6">
                Где зарабатываются деньги осенью:
              </p>

              <ul className="space-y-4 text-gray-700 mb-6">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Курсы омоложения и восстановления кожи: пилинги, аппаратные процедуры, работы с пигментацией.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Длительные программы ухода за волосами после солнца и моря.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Абонементы и пакеты на 3–6 месяцев, которые обеспечивают стабильную загрузку и выручку.</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-6">
                Что делать салону:
              </p>

              <ul className="space-y-4 text-gray-700 mb-6">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Запустить «осенние программы восстановления» с понятными сроками, эффектом и ценой — это выстраивает ожидания и даёт прогнозируемый доход.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Активно использовать email-рассылки и мессенджеры, напоминая клиентам о последствиях солнца и предлагая персональные схемы ухода.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Закладывать в осенние курсы апсейл: дополнительные процедуры, домашний уход, консультации — это увеличивает чек без агрессивных продаж.</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                Осень — время, когда клиенты готовы к системному уходу, и именно здесь заложен большой объём годовой выручки.
              </p>
            </div>
          </section>

          {/* SECTION 5 */}
          <section className="py-20">
            <h2 className={h2}>
              Зима и праздники: высокие чеки и подарочные форматы
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Зима, особенно период от конца ноября до начала марта, — это череда поводов для красоты: корпоративы, Новый год, 14 февраля, 23 февраля, 8 марта. Здесь важна правильная упаковка и готовность принимать повышенный поток клиентов.
            </p>

            <div className={glassCard}>
              <p className="text-gray-700 leading-relaxed mb-6">
                Где зарабатываются деньги зимой:
              </p>

              <ul className="space-y-4 text-gray-700 mb-6">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Праздничные пакеты: укладка + макияж, маникюр + дизайн, экспресс-уход перед мероприятием.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Подарочные сертификаты и наборы: удобный подарок, который часто приводит новых клиентов и повторные визиты.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Премиальные форматы: сложный макияж, сложные окрашивания, спецобразы — высокий чек и высокая загрузка мастеров.</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-6">
                Что делать салону:
              </p>

              <ul className="space-y-4 text-gray-700 mb-6">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Заранее (за 1–2 месяца) составить маркетинговый календарь акций и расписания: когда запускаются новогодние предложения, когда — акции ко Дню святого Валентина и 8 марта.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Продвигать сертификаты и наборы как универсальный подарок, используя сайт, соцсети и рассылки.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Вводить сезонные бонусы за раннюю запись, чтобы равномернее распределять поток и избегать перегрузки в последние дни.</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                Зимой легко увеличить оборот, но важно не ограничиваться «пару постов в декабре», а заранее выстроить линейку предложений и коммуникаций.
              </p>
            </div>
          </section>

          {/* SECTION 6 */}
          <section className="py-20">
            <h2 className={h2}>
              Стратегии, которые помогают зарабатывать круглый год
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Сезонность — не приговор, а инструмент, если строить стратегию на год, а не закрывать дыры по факту. В материалах по управлению сезонностью в салонах выделяют несколько универсальных подходов.
            </p>

            <div className={glassCard}>
              <p className="text-gray-700 leading-relaxed mb-6">
                Рабочие стратегии:
              </p>

              <ul className="space-y-4 text-gray-700 mb-6">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Диверсификация услуг: расширение списка процедур в соответствии с сезонными потребностями (летний уход, осеннее восстановление, зимние праздничные пакеты).</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Сезонные акции и пакеты: комплексы по сниженной цене, спецпредложения в низкий сезон, бонусы за повторные визиты.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Программы лояльности: накопительные баллы, скидки за регулярные посещения, клубные карты — помогают удерживать клиентов между пиками.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Маркетинговый календарь: расписанный по месяцам план акций, активностей в соцсетях, рассылок и офлайн-мероприятий.</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                Главная идея — не бороться с сезонностью, а заранее встраивать её в план: вы понимаете, какие месяцы несут максимальную выручку, какие — требуют поддержки, и какие форматы услуг нужны в каждый период.
              </p>
            </div>
          </section>

          {/* SECTION 7 */}
          <section className="py-20">
            <h2 className={h2}>
              Как начать: короткий план действий для владельца салона
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Чтобы перевести сезонные стратегии из «идей» в реальные цифры, нужен понятный план:
            </p>

            <div className={glassCard}>
              <ul className="space-y-4 text-gray-700 mb-6">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Проанализировать свою статистику за прошлый год: выручку и загрузку по месяцам, ТОП-услуги по сезонам.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>На основе этого выделить сезонные «якоря»: весенние/летние/осенние/зимние хиты.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Составить годовой маркетинговый календарь с акциями и пакетами под каждый сезон.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Подготовить чек-листы и скрипты для команды: какие предложения озвучивать в какое время года.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Регулярно пересматривать план (раз в квартал) и корректировать его по реальной статистике.</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                Так вы перестаёте жить от праздника до праздника и начинаете управлять сезонностью: поднимать средний чек в пиковые месяцы и удерживать стабильный поток клиентов в периоды, которые раньше считались «провальными».
              </p>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="py-24">
            <div className={`${glassCTA} max-w-3xl mx-auto text-center`}>
              <h2 className={h2}>Хотите внедрить сезонные стратегии в свой салон?</h2>
              <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl mx-auto">
                Если вам нужна помощь в разработке сезонных стратегий и маркетингового плана для вашего салона, запишитесь на консультацию. Мы разберём вашу статистику, выделим сезонные точки роста и создадим план действий для увеличения выручки.
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