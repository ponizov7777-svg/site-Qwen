// pages/blog/context-offline.tsx
'use client';
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';

const breadcrumbsData = [
  { label: 'Главная', href: '/' },
  { label: 'Аналитика и Разборы', href: '/blog' },
  { label: 'Контекстная реклама для офлайн-бизнеса', href: '/blog/context-advertising' },
];

export default function ContextAdvertisingArticle() {
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
        <title>Контекст для офлайн-бизнеса | Андрей Понизов</title>
        <meta
          name="description"
          content="Разбор типичных ошибок и пошаговый план оптимизации контекстной рекламы для офлайн-бизнеса: как масштабировать кампании и повысить ROI."
        />
        <link rel="canonical" href="https://ponizov-marketing.ru/blog/context-offline" />
      </Head>

      <div className={container}>
        <Breadcrumbs items={breadcrumbsData} />

        <article className="py-20">

          {/* INTRO */}
          <section className="py-12 md:py-16">
            <div className={glassHero}>
              <h1 className={h1}>
                Контекстная реклама для офлайн-бизнеса: что масштабировать, а что отключать
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Тратите 50–100 тысяч рублей в месяц на Яндекс.Директ, а клиентов приходит 2–3 в неделю? Это типичная картина для 80% офлайн-бизнесов — парикмахерских, автосервисов, салонов красоты в СПб и регионах. Проблема не в бюджете, а в хаосе: слив на информационные запросы вроде "как настроить рекламу" и игнор гео-привязки. В этой статье — пошаговый план чистки кампаний, масштаба и отключения, чтобы поднять ROI в 2–3 раза без риска для SEO.
              </p>
            </div>
          </section>

          {/* SECTION 1 */}
          <section className="py-20">
            <h2 className={h2}>
              Почему контекст для офлайна не работает
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Большинство владельцев малого бизнеса запускают Директ "на автомате", копируя ключи из Wordstat без анализа. Результат: 35% бюджета уходит на нецелевые клики, конверсия ниже 2%, а CPC растет до 100+ рубля. Вот топ-5 ошибок.
            </p>

            <div className={glassCard}>
              <ul className="space-y-4 text-gray-700 mb-6">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Широкие ключи без минус-слов: "услуги" вместо "[услуга] рядом" — ловит инфо-трафик вроде "как выбрать салон".</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Игнор геотаргетинга: реклама по всей России для локального бизнеса в СПб.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Работа с информационными запросами: "почему реклама не приносит клиентов" или "подбор ключевых слов" — 0% конверсий, но 20–30% кликов.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Отсутствие анализа Метрики: не видят, какие группы объявлений сливают бюджет.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Нет фокуса на офлайн-интент: запросы без "цена/записаться/рядом" не ведут в дверь.</span>
                </li>
              </ul>

              <div className="border border-white/50 rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead className="bg-white/50">
                    <tr>
                      <th className="p-3 text-left text-[#1A3A2E]">Ошибка</th>
                      <th className="p-3 text-left text-[#1A3A2E]">Последствие</th>
                      <th className="p-3 text-left text-[#1A3A2E]">Решение</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-white/50">
                      <td className="p-3 text-gray-700">Инфо-ключи ("как настроить рекламу на район")</td>
                      <td className="p-3 text-gray-700">Холодный трафик, CPC +50%</td>
                      <td className="p-3 text-gray-700">Минус-слова + коммерческие шаблоны</td>
                    </tr>
                    <tr className="border-t border-white/50">
                      <td className="p-3 text-gray-700">Нет гео</td>
                      <td className="p-3 text-gray-700">Нецелевые регионы</td>
                      <td className="p-3 text-gray-700">Радиус 5–10 км от точки</td>
                    </tr>
                    <tr className="border-t border-white/50">
                      <td className="p-3 text-gray-700">Без аналитики</td>
                      <td className="p-3 text-gray-700">Слив 30% бюджета</td>
                      <td className="p-3 text-gray-700">Еженедельный отчет по конверсиям</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* SECTION 2 */}
          <section className="py-20">
            <h2 className={h2}>
              Пошаговый план оптимизации
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Шаг 1. Анализ текущих кампаний
            </p>

            <div className={glassCard}>
              <ul className="space-y-4 text-gray-700 mb-6">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Подключите Яндекс.Метрику и соберите данные за 30 дней: смотрите CPC, конверсию, ROI по группам ключей. Формула: ROI = (Выручка от лидов / Адкост) × 100%. Если ниже 150% — группа под нож.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Экспортируйте отчет "Поисковые запросы".</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Выделите топ-20% ключей с конверсией более 5%.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Отметьте инфо-запросы: "семантическое ядро для контекстной рекламы", "группировка ключевых слов" — они тянут трафик, но не продажи.</span>
                </li>
              </ul>

              <div className="border border-white/50 rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead className="bg-white/50">
                    <tr>
                      <th className="p-3 text-left text-[#1A3A2E]">Группа ключей</th>
                      <th className="p-3 text-left text-[#1A3A2E]">Клики</th>
                      <th className="p-3 text-left text-[#1A3A2E]">Конверсия</th>
                      <th className="p-3 text-left text-[#1A3A2E]">CPC, руб</th>
                      <th className="p-3 text-left text-[#1A3A2E]">ROI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-white/50">
                      <td className="p-3 text-gray-700">Шиномонтаж рядом</td>
                      <td className="p-3 text-gray-700">250</td>
                      <td className="p-3 text-gray-700">8%</td>
                      <td className="p-3 text-gray-700">45</td>
                      <td className="p-3 text-gray-700">280%</td>
                    </tr>
                    <tr className="border-t border-white/50">
                      <td className="p-3 text-gray-700">Как выбрать шиномонтаж</td>
                      <td className="p-3 text-gray-700">180</td>
                      <td className="p-3 text-gray-700">1%</td>
                      <td className="p-3 text-gray-700">60</td>
                      <td className="p-3 text-gray-700">40%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* SECTION 3 */}
          <section className="py-20">
            <h2 className={h2}>
              Шаг 2. Что масштабировать
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Усиливайте то, что конвертит: коммерческие ключи с гео и длинный хвост. В 2024 Яндекс.Директ взял 35% рынка МСБ — используйте это.
            </p>

            <div className={glassCard}>
              <ul className="space-y-4 text-gray-700 mb-6">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Расширьте семантику: добавьте 50–100 низкочастотных фраз вроде "[услуга] у метро [станция]", "[услуга] цена СПб".</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Увеличьте бюджет на победителей: если ROI более 200%, поднимайте ставки на 20–30%.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Гео + "рядом": запросы "рядом со мной" дают +47% записей в офлайне.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Длиннохвостовые: "[стрижка бороды цена в Невском районе]" — низкий CPC, высокая конверсия.</span>
                </li>
              </ul>

              <div className="border border-white/50 rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead className="bg-white/50">
                    <tr>
                      <th className="p-3 text-left text-[#1A3A2E]">Категория</th>
                      <th className="p-3 text-left text-[#1A3A2E]">Примеры ключей</th>
                      <th className="p-3 text-left text-[#1A3A2E]">Почему масштабировать</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-white/50">
                      <td className="p-3 text-gray-700">Коммерция</td>
                      <td className="p-3 text-gray-700">Записаться, цена, рядом</td>
                      <td className="p-3 text-gray-700">Конверсия 7–12%</td>
                    </tr>
                    <tr className="border-t border-white/50">
                      <td className="p-3 text-gray-700">Гео</td>
                      <td className="p-3 text-gray-700">У метро, в центре СПб</td>
                      <td className="p-3 text-gray-700">Локальные лиды ×2</td>
                    </tr>
                    <tr className="border-t border-white/50">
                      <td className="p-3 text-gray-700">Длинный хвост</td>
                      <td className="p-3 text-gray-700">[Услуга] + район + время работы</td>
                      <td className="p-3 text-gray-700">CPC менее 30 руб</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* SECTION 4 */}
          <section className="py-20">
            <h2 className={h2}>
              Шаг 3. Что отключать
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Режьте без жалости: инфо-запросы и нецелевые. Это сэкономит 25–40% бюджета.
            </p>

            <div className={glassCard}>
              <ul className="space-y-4 text-gray-700 mb-6">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Неэффективные ключи: конверсия менее 2%, ROI менее 100% — пауза.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Информационные: "как подобрать ключевые слова для рекламы", "типы соответствия ключевых слов", "почему реклама не приносит клиентов офлайн", "как убрать мусорный трафик" — минусуйте целиком.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Универсальные минус-слова: 0 ₽, своими руками, отзывы, скачать, оптом (если не B2B).</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                После чистки CPC падает на 30–42%, лиды растут.
              </p>
            </div>
          </section>

          {/* SECTION 5 */}
          <section className="py-20">
            <h2 className={h2}>
              Что делать дальше
            </h2>

            <div className={glassCard}>
              <ul className="space-y-4 text-gray-700">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Соберите отчет по запросам в Метрике (сегодня).</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Минусуйте инфо-ключи.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Масштабируйте топ-20% групп.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Настройте гео-радиус 5–10 км.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Тестируйте 7 дней, корректируйте ставки.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Добавьте UTM для трекинга.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Проверьте минус-слова еженедельно.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Измерьте ROI через 14 дней.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Запишитесь на бесплатный аудит Директа — разберем вашу семантику и сэкономим 30% бюджета.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="py-24">
            <div className={`${glassCTA} max-w-3xl mx-auto text-center`}>
              <h2 className={h2}>Хотите оптимизировать контекстную рекламу?</h2>
              <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl mx-auto">
                Запишитесь на бесплатный аудит Директа — разберем вашу семантику и сэкономим 30% бюджета.
              </p>

              <Link
                href="/consultations"
                className={btnPrimary}
              >
                Записаться на аудит
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