// pages/blog/yandex-karty.tsx
'use client';
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';

const breadcrumbsData = [
  { label: 'Главная', href: '/' },
  { label: 'Аналитика и Разборы', href: '/blog' },
  { label: 'Яндекс.Карты', href: '/blog/yandex-karty' },
];

export default function YandexKartyArticle() {
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
        <title>Яндекс.Карты | Андрей Понизов</title>
        <meta
          name="description"
          content="Подробный разбор Яндекс.Карт как канала привлечения клиентов: ранжирование, конверсии, платное продвижение и ограничения."
        />
        <link rel="canonical" href="https://ponizov-marketing.ru/blog/yandex-karty" />
      </Head>

      <div className={container}>
        <Breadcrumbs items={breadcrumbsData} />

        <article className="py-20">

          {/* INTRO */}
          <section className="py-12 md:py-16">
            <div className={glassHero}>
              <h1 className={h1}>
                Как на самом деле работают Яндекс.Карты для привлечения клиентов
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Яндекс.Карты давно перестали быть просто навигатором: это витрина локального бизнеса, через которую к вам приходят люди, уже готовые покупать «здесь и сейчас». Каждый месяц сервисом пользуются десятки миллионов человек, и большая часть из них не только строит маршрут, но и выбирает, в какой салон, клинику или кафе пойти, сравнивая карточки организаций. Ниже — как на самом деле устроен этот канал, от чего зависят заявки и что нужно сделать, чтобы Яндекс.Карты начали приносить живых клиентов, а не только «показы».
              </p>
            </div>
          </section>

          {/* SECTION 1 */}
          <section className="py-20">
            <h2 className={h2}>
              Как клиент видит ваш бизнес в Яндекс.Картах
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Для клиента всё выглядит просто: он набирает «салон красоты рядом» или «маникюр у метро», видит список точек на карте и несколько карточек в выдаче, сравнивает рейтинг, фото, отзывы — и выбирает 1–2 варианта. На этом пути есть несколько ключевых шагов, от которых зависит, попадёте ли вы вообще в этот короткий шорт-лист.
            </p>

            <div className={glassCard}>
              <h3 className="text-2xl font-semibold mb-6 text-[#1A3A2E]">
                Типичный путь пользователя:
              </h3>

              <ol className="space-y-4 text-gray-700">
                <li className={listItem}>
                  <span className={listBullet}>1.</span>
                  <span>Поиск по запросу типа «[услуга] рядом» или «[услуга] + район/метро».</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>2.</span>
                  <span>Просмотр списка точек и нескольких карточек, сравнение рейтинга, фото и описаний.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>3.</span>
                  <span>Клик по карточке, где есть нужная услуга, понятный график работы, нормальные фото и отзывы.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>4.</span>
                  <span>Далее — звонок, запись через сайт/форму или сразу маршрут до точки.</span>
                </li>
              </ol>
            </div>

            <p className="text-gray-700 leading-relaxed mt-6">
              Исследования Яндекс.Бизнес показывают, что наличие фото, актуальной информации и понятного описания заметно увеличивает интерес пользователей — они чаще кликают на карточку и смотрят подробности. То есть карточка в Картах — это полноценная мини-лендинг-страница, а не формальность.
            </p>
          </section>

          {/* SECTION 2 */}
          <section className="py-20">
            <h2 className={h2}>
              Что влияет на позиции карточки в локальной выдаче
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              За тем, какие карточки показывать выше по запросам «рядом», стоит отдельный набор локальных факторов ранжирования Яндекса. Для бизнеса важно понимать, что это не «магия» и не только про платную рекламу — значительная часть зависит от качества и активности самой карточки.
            </p>

            <div className={glassCard}>
              <p className="text-gray-700 leading-relaxed mb-6">
                Согласно исследованиям по локальному SEO и анализу факторов ранжирования:
              </p>

              <ul className="space-y-4 text-gray-700">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Ключевую роль играют отзывы и работа с ними: по оценкам экспертов, влияние отзывов и рейтинга может достигать 25–40% в структуре локальных факторов.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Важны точность и полнота данных: корректное название, адрес, телефон, категория, график работы, ссылки на сайт.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Важны качество и количество медиа-контента: фото фасада, интерьера, команды и работ повышают кликабельность и доверие.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Важна активность: обновления карточки, ответы на отзывы, добавление новых фото — всё это сигнализирует алгоритму, что бизнес жив и актуален.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Важны внешние сигналы: упоминания бренда на других площадках и качество сайта компании также учитываются как часть локального профиля.</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mt-6">
              Проще говоря, чтобы попадать в топ по локальным запросам, нужно не только «однажды завести карточку», а системно вести её и поддерживать репутацию.
            </p>
          </section>

          {/* SECTION 3 */}
          <section className="py-20">
            <h2 className={h2}>
              Как Яндекс.Карты превращают просмотры в живых клиентов
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              С точки зрения бизнеса критичный вопрос — не только «как нас показывают», но и «как это превращается в деньги». Специалисты по локальному продвижению и сам Яндекс описывают несколько ключевых действий, через которые карточка приводит клиентов.
            </p>

            <div className={glassCard}>
              <h3 className="text-2xl font-semibold mb-6 text-[#1A3A2E]">
                Основные точки конверсии в карточке:
              </h3>

              <ul className="space-y-4 text-gray-700">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Просмотр контактов и клик по телефону — чаще всего ведёт к звонку и записи, особенно в сферах услуг.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Переход на сайт или в соцсети — если там есть онлайн-запись, чат или заявка, часть трафика конвертируется в брони и обращения.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Кнопка «Проложить маршрут» — самый прозрачный сигнал намерения прийти ногами: человек уже решил, что поедет именно к вам.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Использование новых целей вроде «Посещение организации» в рекламных продуктах Яндекса, когда система пытается связать показ рекламы и реальный визит.</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mt-6">
              Практика показывает, что хорошо оформленная карточка с актуальными данными и отзывами может стать стабильным каналом тёплых лидов без дополнительной оплаты за клик, особенно в высокочастотных категориях (салоны, кафе, сервисы).
            </p>
          </section>

          {/* SECTION 4 */}
          <section className="py-20">
            <h2 className={h2}>
              Роль платного продвижения и Яндекс.Бизнес
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Помимо органической выдачи, Яндекс продвигает отдельные инструменты рекламы в Картах через Яндекс.Бизнес: платные размещения, приоритетный показ, цели «посещения». Это не отменяет важности базовой оптимизации, но позволяет усилить эффект.
            </p>

            <div className={glassCard}>
              <p className="text-gray-700 leading-relaxed mb-6">
                Что дают платные форматы:
              </p>

              <ul className="space-y-4 text-gray-700">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Повышение видимости карточки по релевантным запросам и в нужном радиусе — вы чаще попадаете в первые позиции списка и на карте.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Возможность настраивать кампании под цель «Посещение организации», когда система оптимизирует показы под тех, кто с высокой вероятностью дойдёт до точки.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Дополнительную аналитику: сколько людей увидели объявление, сколько кликнули, сколько построили маршрут, а в некоторых случаях — оценку реальных посещений.</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mt-6">
              Эксперты подчёркивают, что платное продвижение эффективнее всего работает в связке с качественно оформленной карточкой: реклама может привести внимание, но если пользователь увидит пустой профиль с плохими фото и без отзывов, конверсии не будет.
            </p>
          </section>

          {/* SECTION 5 */}
          <section className="py-20">
            <h2 className={h2}>
              Чего Яндекс.Карты не делают сами по себе
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Важно трезво понимать ограничения: Яндекс.Карты не являются «волшебной кнопкой», которая сама наполняет салон клиентами.
            </p>

            <div className={glassCard}>
              <p className="text-gray-700 leading-relaxed mb-6">
                Чего ждать не стоит:
              </p>

              <ul className="space-y-4 text-gray-700">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Карты не компенсируют слабый сервис: если у вас низкое качество обслуживания и плохие отзывы, даже высокая видимость будет приводить к негативу и оттоку клиентов.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Карты не «продают» за вас сложный продукт, если карточка пустая или непонятная — пользователю нужно видеть, чем вы отличаетесь и что конкретно предлагаете.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Карты не заменяют сайт и другие каналы: локальное SEO и карты — часть комплексной воронки, а не единственный инструмент.</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mt-6">
              Задача владельца бизнеса — не перекладывать на геосервисы ответственность за продажи, а встроить их в общую систему маркетинга: сайт, контекстная реклама, соцсети, геомаркетинг — всё это должно работать в одной логике.
            </p>
          </section>

          {/* SECTION 6 */}
          <section className="py-20">
            <h2 className={h2}>
              Что нужно сделать, чтобы Яндекс.Карты реально привлекали клиентов
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Подводя итог, можно выделить несколько ключевых принципов работы с Яндекс.Картами, которые регулярно отмечают в профессиональных гайдах по локальному SEO и продвижению:
            </p>

            <div className={glassCard}>
              <ul className="space-y-4 text-gray-700">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Максимально полно и честно заполнить карточку: контакты, график, категории, описание, услуги, цены, ссылки.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Следить за актуальностью данных и обновлять их при любых изменениях (график, адрес, телефон, ассортимент).</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Работать с отзывами и рейтингом: стимулировать их появление, вежливо и содержательно отвечать, решать конфликты.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Регулярно обновлять медиа-контент: новые фото, короткие видео, витрина услуг — это повышает и кликабельность, и доверие.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>При необходимости подключать платное продвижение через Яндекс.Бизнес, но только после наведения порядка в карточке.</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mt-6">
              В таком формате Яндекс.Карты перестают быть «просто точкой на карте» и превращаются в стабильный канал привлечения локальных клиентов: человек ищет «рядом», видит понятную карточку, убеждается отзывами и фото — и доходит до вашей двери.
            </p>
          </section>

          {/* FINAL CTA */}
          <section className="py-24">
            <div className={`${glassCTA} max-w-3xl mx-auto text-center`}>
              <h2 className={h2}>Нужен разбор вашей карточки?</h2>
              <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl mx-auto">
                На 0 ₽м аудите я покажу, почему карточка не даёт заявок и что стоит исправить в первую очередь.
              </p>

              <Link
                href="/consultations"
                className={btnPrimary}
              >
                Записаться на бесплатный аудит
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