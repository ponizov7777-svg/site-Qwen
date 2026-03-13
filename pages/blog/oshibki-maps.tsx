// pages/blog/oshibki-maps.tsx
'use client';
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';

const breadcrumbsData = [
  { label: 'Главная', href: '/' },
  { label: 'Аналитика и Разборы', href: '/blog' },
  { label: 'Типовые ошибки в картах', href: '/blog/yandex-maps-errors' },
];

export default function YandexMapsErrorsArticle() {
  // ===== КОНТЕЙНЕРЫ =====
  const container = "max-w-7xl mx-auto px-4"
  // ===== ТИПОГРАФИКА =====
  const h1 = "text-[28px] md:text-[32px] font-semibold leading-tight mb-6 text-[#1A3A2E] drop-shadow-sm"
  const h2 = "text-3xl md:text-4xl font-semibold mb-6 text-[#1A3A2E]"
  const h3 = "text-xl font-semibold text-[#1A3A2E] mb-4 leading-tight"
  // ===== GLASSMORPHISM КАРТОЧКИ =====
  const glassCard = 
    "glass-card backdrop-blur-xl bg-white/70 border-white/50 shadow-xl hover:shadow-black/10 transition-all duration-300 p-8 rounded-2xl overflow-hidden"
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
        <title>Ошибки в картах | Андрей Понизов</title>
        <meta
          name="description"
          content="Разбор типовых ошибок в Яндекс.Картах и 2ГИС, которые мешают бизнесу получать заявки и клиентов из локальных карт."
        />
        <link rel="canonical" href="https://ponizov-marketing.ru/blog/oshibki-maps" />
      </Head>

      <div className={container}>
        <Breadcrumbs items={breadcrumbsData} />

        <article className="py-20">

          {/* INTRO */}
          <section className="py-12 md:py-16">
            <div className={glassHero}>
              <h1 className={h1}>
                Типовые ошибки в Yandex Maps и 2Gis, которые стоят бизнесу денег
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Локальные карты — один из главных источников горячих клиентов для офлайн-бизнеса: пользователи набирают «салон рядом», «стоматология у метро» и выбирают по первым 3–5 карточкам на Яндекс.Картах и в 2ГИС. По данным специалистов по локальному SEO, пустые и неправильно оформленные профили на картах могут забирать до половины потенциальных обращений, даже если у вас хороший сайт и настроена реклама. Ниже — типовые ошибки в карточках на Yandex Maps и 2ГИС, из-за которых бизнес теряет деньги, и что с ними сделать.
              </p>
            </div>
          </section>

          {/* SECTION 1 */}
          <section className="py-20">
            <h2 className={h2}>
              Ошибка 1. Карточка не заполнена или заполнена «для галочки»
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Самая базовая и самая дорогая ошибка — карточка либо вообще не заведена, либо в ней указаны только название и адрес без времени работы, телефона, сайта и описания. В результате бизнес хуже ранжируется в картах, не попадает в блоки «рядом со мной» и выглядит подозрительно для клиентов.
            </p>

            <div className={glassCard}>
              <p className="text-gray-700 leading-relaxed mb-6">
                Что тут не так:
              </p>

              <ul className="space-y-4 text-gray-700 mb-6">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Неполные профили получают меньше показов и кликов, а в некоторых сервисах не получают статус «подтверждённая организация».</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Клиент не видит время работы, способы связи и услуги, переключается на конкурента с нормально оформленной карточкой.</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-6">
                Что сделать:
              </p>

              <ul className="space-y-4 text-gray-700">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Заполнить профиль минимум на 90–100%: название, адрес, телефон, сайт, время работы, категории, описание, услуги, фото.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Дублировать основные данные с сайта, чтобы не было противоречий (об этом ниже).</span>
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 2 */}
          <section className="py-20">
            <h2 className={h2}>
              Ошибка 2. Неправильная или слишком общая категория
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Категория определяет, по каким запросам вас показывать. Если вы выбрали слишком широкую или нерелевантную категорию, то не будете появляться по узким и «денежным» запросам. Например, кофейня, отмеченная как «кафе», будет проигрывать запросы «кофейня рядом», где конкуренты указаны точнее.
            </p>

            <div className={glassCard}>
              <p className="text-gray-700 leading-relaxed mb-6">
                Что тут не так:
              </p>

              <ul className="space-y-4 text-gray-700 mb-6">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Неверная категория снижает релевантность к ключевым запросам и уменьшает количество показов по «горячим» интентам.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Слишком общая категория мешает поиску понять, чем вы реально занимаетесь.</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-6">
                Что сделать:
              </p>

              <ul className="space-y-4 text-gray-700">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Выбирать максимально точные и узкие категории, доступные в Яндекс.Бизнес и 2ГИС, ориентируясь на топовые карточки конкурентов вашей ниши.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Добавлять дополнительные релевантные рубрики, если это предусмотрено платформой (например, «салон красоты», «парикмахерская», «маникюрный салон»).</span>
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 3 */}
          <section className="py-20">
            <h2 className={h2}>
              Ошибка 3. Несовпадение данных на картах, сайте и в других каталогах
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Одна из самых критичных ошибок локального SEO — разные названия, адреса, телефоны и график работы на сайте, Яндекс.Картах, 2ГИС и других площадках. Для поисковиков это сигнал недоверия, а для клиентов — путаница и риск приехать в закрытую точку.
            </p>

            <div className={glassCard}>
              <p className="text-gray-700 leading-relaxed mb-6">
                Что тут не так:
              </p>

              <ul className="space-y-4 text-gray-700 mb-6">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Несовпадение NAP-данных (Name, Address, Phone) ухудшает доверие алгоритмов и может снижать видимость в локальной выдаче.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Клиент не понимает, какой адрес или телефон правильный, и часто просто выбирает другой бизнес.</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-6">
                Что сделать:
              </p>

              <ul className="space-y-4 text-gray-700">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Провести ревизию данных: название, адрес с деталями (дом, литер, корп.), телефоны, график должны совпадать на сайте и во всех профилях (Яндекс, 2ГИС, Google, каталоги).</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>При смене адреса или телефона обновлять данные одновременно на всех площадках.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 4 */}
          <section className="py-20">
            <h2 className={h2}>
              Ошибка 4. Пустой профиль без фото, работ и атмосферы
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Профиль «без жизни» — без фото интерьера, команды, примеров работ — выглядит неактуальным и небезопасным, особенно для ниш вроде медицины, красоты, детских услуг. Многие пользователи принимают решение именно по визуалу, сравнивая 2–3 карточки в выдаче.
            </p>

            <div className={glassCard}>
              <p className="text-gray-700 leading-relaxed mb-6">
                Что тут не так:
              </p>

              <ul className="space-y-4 text-gray-700 mb-6">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Отсутствие фото и медиа уменьшает доверие и CTR карточки: пользователи чаще кликают на профили с качественными изображениями.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Сервисы локального SEO относят «пустые профили» к одной из ключевых причин отсутствия обращений с карт.</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-6">
                Что сделать:
              </p>

              <ul className="space-y-4 text-gray-700">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Загрузить 10–15 качественных фото: фасад, вход, интерьер, рабочие зоны, примеры работ, команда, логотип.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Регулярно обновлять галерею (обновления — сигнал активности для платформ и пользователей).</span>
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 5 */}
          <section className="py-20">
            <h2 className={h2}>
              Ошибка 5. Заброшенные отзывы или полное игнорирование обратной связи
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Отзывы — один из ключевых факторов выбора для пользователей и один из важных сигналов для карт и локального SEO. Ошибка — не просить клиентов оставлять отзывы, игнорировать уже оставленные или отвечать агрессивно.
            </p>

            <div className={glassCard}>
              <p className="text-gray-700 leading-relaxed mb-6">
                Что тут не так:
              </p>

              <ul className="space-y-4 text-gray-700 mb-6">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Небольшое количество отзывов и отсутствие ответа на них уменьшают доверие и снижают рейтинг, даже если обслуживание хорошее.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Негатив без реакции формирует образ «безразличного» бизнеса, из-за чего клиенты уходят к конкурентам.</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-6">
                Что сделать:
              </p>

              <ul className="space-y-4 text-gray-700">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Встроить просьбу о отзыве в процесс: после визита отправлять ссылку, давать QR-код, мотивировать постоянных клиентов.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Отвечать на каждый отзыв (и положительный, и негативный) корректно и по делу, показывая, что вы слышите обратную связь.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 6 */}
          <section className="py-20">
            <h2 className={h2}>
              Ошибка 6. Неправильный адрес и зона обслуживания
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Неверно указанный адрес, отсутствие уточнения по входу или конфликт между адресом и зоной обслуживания — частая причина путаницы и жалоб. В локальных гайдах отдельно предупреждают, что нельзя одновременно указывать и физический адрес, и некорректную «территорию обслуживания».
            </p>

            <div className={glassCard}>
              <p className="text-gray-700 leading-relaxed mb-6">
                Что тут не так:
              </p>

              <ul className="space-y-4 text-gray-700 mb-6">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Клиенты не могут найти вход, путают корпус или подъезд, тратят время и оставляют негативные отзывы.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Поисковик может считать данные недостоверными, что влияет на видимость.</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-6">
                Что сделать:
              </p>

              <ul className="space-y-4 text-gray-700">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Точно указать адрес по формату платформы (индекс, город, улица, дом, корпус) и при необходимости добавить пояснение по входу в описании.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Корректно настроить зону обслуживания, если вы выездной сервис, не смешивая её с адресом точки.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 7 */}
          <section className="py-20">
            <h2 className={h2}>
              Ошибка 7. Игнорирование ключевых слов и особенностей в описании
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Во многих карточках описание состоит из одной общей фразы «Мы оказываем качественные услуги по доступным ценам». Это не даёт поиску понять, по каким запросам вас показывать, и не объясняет клиенту, почему выбрать именно вас.
            </p>

            <div className={glassCard}>
              <p className="text-gray-700 leading-relaxed mb-6">
                Что тут не так:
              </p>

              <ul className="space-y-4 text-gray-700 mb-6">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Без ключевых слов и конкретики по услугам вы упускаете показы по точным локальным запросам («женская стрижка у метро…», «детский стоматолог рядом»).</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Не отражены ваши реальные особенности: формат, преимущества, условия.</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-6">
                Что сделать:
              </p>

              <ul className="space-y-4 text-gray-700">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>В описании упомянуть основные услуги, гео и особенности: район, станция метро, формат, дополнительные опции (например, парковка, работа до позднего вечера).</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Использовать естественные ключевые фразы с геопривязкой, не превращая описание в список «ключей».</span>
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 8 */}
          <section className="py-20">
            <h2 className={h2}>
              Ошибка 8. Один раз заполнили — и забыли
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Ещё одна типичная ошибка — воспринимать карточку как что-то статичное: однажды заполнить, а затем годами не обновлять информацию. За это время меняются график работы, услуги, акции, фото, но на картах остается «музей».
            </p>

            <div className={glassCard}>
              <p className="text-gray-700 leading-relaxed mb-6">
                Что тут не так:
              </p>

              <ul className="space-y-4 text-gray-700 mb-6">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Неактуальная информация (старый график, устаревший телефон) приводит к срывам визитов и негативу в отзывах.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Отсутствие активности (новых фото, ответов, обновлений) неблагоприятно влияет на ранжирование и вовлечённость.</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-6">
                Что сделать:
              </p>

              <ul className="space-y-4 text-gray-700">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Ввести регулярную проверку карточки: раз в 1–3 месяца обновлять график, услуги, фото, акции.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Следить за изменениями, которые иногда вносят сами пользователи или модераторы, и оперативно корректировать.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 9 */}
          <section className="py-20">
            <h2 className={h2}>
              Ошибка 9. Игнорирование других платформ и цитирований
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Часть бизнеса ограничивается одной площадкой (например, только Яндекс.Карты), игнорируя 2ГИС, Google Maps и локальные каталоги. В материалах по локальному SEO отмечается, что присутствие только на одной платформе уменьшает общее количество точек входа для клиентов и число «цитирований» бренда.
            </p>

            <div className={glassCard}>
              <p className="text-gray-700 leading-relaxed mb-6">
                Что тут не так:
              </p>

              <ul className="space-y-4 text-gray-700 mb-6">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Вы теряете аудиторию, которая пользуется другим приложением (часть людей открывает сразу 2ГИС или Google Maps).</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Меньше упоминаний и ссылок на бизнес в сети — слабее общий локальный профиль.</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-6">
                Что сделать:
              </p>

              <ul className="space-y-4 text-gray-700">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Завести и заполнить карточки на всех релевантных площадках: Яндекс, 2ГИС, Google, отраслевые каталоги.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Следить за единообразием данных на всех этих площадках (см. ошибку про NAP).</span>
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 10 */}
          <section className="py-20">
            <h2 className={h2}>
              Ошибка 10. Неиспользование «витрины» и дополнительных возможностей
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Многие компании ограничиваются базовыми полями и не используют возможности витрины: список услуг, цены, меню, товары, записи, видео. Между тем в профессиональных гайдах это называют одной из главных зон роста по конверсии из просмотра в обращение.
            </p>

            <div className={glassCard}>
              <p className="text-gray-700 leading-relaxed mb-6">
                Что тут не так:
              </p>

              <ul className="space-y-4 text-gray-700 mb-6">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Клиент видит только общую информацию и должен идти на сайт или звонить, чтобы узнать детали.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Продвинутые конкуренты показывают услуги и цены прямо в карточке и собирают больше целевых обращений.</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-6">
                Что сделать:
              </p>

              <ul className="space-y-4 text-gray-700">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Заполнить разделы услуг/товаров с ценами и кратким описанием, если это доступно в Яндекс.Бизнес и 2ГИС.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Добавить короткие видео или галереи работ, если платформа это поддерживает, чтобы усилить доверие и «продать» до клика.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 11 */}
          <section className="py-20">
            <h2 className={h2}>
              Что делать дальше: быстрая ревизия карт, чтобы перестать терять деньги
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Чтобы не терять клиентов из-за ошибок в карточках, полезно пройти простой чек-лист:
            </p>

            <div className={glassCard}>
              <ul className="space-y-4 text-gray-700">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Проверить наличие и полноту карточек на Яндекс.Картах и в 2ГИС.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Убедиться, что категория максимально точная и совпадает с нишей.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Сравнить название, адрес, телефон и график на сайте и во всех профилях.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Заполнить описание с явными услугами, гео и особенностями.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Загрузить качественные фото и медиа, регулярно их обновлять.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Настроить сбор отзывов и постоянно отвечать на них.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Регулярно обновлять карточки и использовать дополнительные блоки (услуги, цены, витрина).</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mt-6">
              Локальные карты часто дают самых горячих клиентов — тех, кто уже ищет «рядом» и готов покупать. Исправив типовые ошибки в Yandex Maps и 2ГИС, вы можете заметно увеличить количество звонков и визитов без роста рекламного бюджета — просто за счёт того, что вас наконец-то станет удобно найти и выбрать.
            </p>
          </section>

          {/* FINAL CTA */}
          <section className="py-24">
            <div className={`${glassCTA} max-w-3xl mx-auto text-center`}>
              <h2 className={h2}>Готовы исправить ошибки и начать получать больше клиентов из карт?</h2>
              <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl mx-auto">
                Если вам нужна помощь в исправлении ошибок в Яндекс.Картах и 2ГИС, запишитесь на консультацию. Мы разберём ваши карточки, найдем слабые места и создадим план действий для роста вашего бизнеса.
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