// pages/geomarketing.tsx
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumbs from '../components/Breadcrumbs';

const breadcrumbsData = [
  { label: 'Главная', href: '/' },
  { label: 'Геомаркетинг', href: '/geomarketing' },
];

export default function GeomarketingPage() {
  const container = "max-w-7xl mx-auto px-4";
  const section = "py-20 border-t border-gray-100";
  const sectionHead = "text-center mb-16";

  const h1 = "text-3xl md:text-4xl font-semibold text-[#1A3A2E] mb-4";
  const h2 = "text-3xl font-semibold mb-4 text-[#1A3A2E]";
  const h3 = "text-xl font-semibold mb-2 text-[#1A3A2E]";

  const p = "text-gray-700";
  const pMuted = "text-gray-600";
  const lead = "text-lg text-gray-600 max-w-3xl";

  const btnPrimary =
    "px-8 py-4 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-xl hover:bg-[#F7D03A] transition-colors shadow-md " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E65C00] focus-visible:ring-offset-2";

  const btnSecondary =
    "px-8 py-4 border-2 border-[#E65C00] text-[#1A3A2E] font-medium rounded-xl hover:bg-[#FFF5E1] transition-colors " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E65C00] focus-visible:ring-offset-2";

  const card =
    "bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-md transition-shadow";

  const linkAccent =
    "text-[#E65C00] font-medium hover:text-[#D65A31] transition-colors inline-flex items-center gap-1";

  const blocks = [
    {
      title: 'Яндекс Карты',
      description:
        'Карточка организации, услуги, фото, отзывы и структура — чтобы вас находили в локальном поиске и доверяли.',
      num: '01',
    },
    {
      title: 'Google Maps',
      description:
        'Профиль и репутация в Google. Подходит не всем нишам, но когда нужно — подключаем и приводим в порядок.',
      num: '02',
    },
    {
      title: '2ГИС',
      description:
        'Карточка и контакты, аккуратная упаковка и контроль качества — как отдельный источник обращений.',
      num: '03',
    },
    {
      title: 'Локальный спрос',
      description:
        'Собираем “где вас ищут” и “за что выбирают”, чтобы карточка и сайт отвечали на реальный запрос.',
      num: '04',
    },
  ];

  // Только подтверждённые кейсы (Keisy.xlsx)
  const cases = [
    {
      title: 'Beauty, Санкт‑Петербург',
      result: '2–3 → 15–20 клиентов/мес',
      description:
        'Яндекс Бизнес: упаковка профиля, система запроса отзывов, рекламная подписка. Период: 2018–2026.',
      href: '/cases',
    },
    {
      title: 'Медицина, Санкт‑Петербург',
      result: 'Окупаемость 358%',
      description:
        'Пересборка сайта и кампаний. До этого тратили 300 000 ₽/мес без окупаемости (по кейсу). Период: сен 2024 – апр 2025.',
      href: '/cases',
    },
    {
      title: 'HoReCa, Кострома',
      result: '1300 подписчиков ВК',
      description:
        'Запуск: стратегия, исследование ЦА и конкурентов, сообщество ВК, профили в Картах и 2ГИС. Период: авг 2025 – дек 2025.',
      href: '/cases',
    },
  ];

  const faq = [
    {
      q: 'Это “настроить карточку” и забыть?',
      a: 'Нет. Настройка — это база. Дальше важны отзывы, актуальность информации, фото/услуги, и регулярные выводы по цифрам: что сработало, что нет.',
    },
    {
      q: 'Через сколько будет эффект?',
      a: 'Зависит от исходной точки. Иногда быстрые правки дают движение за 1–2 недели, но устойчивый результат обычно появляется, когда всё измеримо и вы не пропускаете базу: карточка, отзывы, обработка заявок.',
    },
    {
      q: 'Можно без рекламы, только карты?',
      a: 'Да. Часто так и стартуем. Если нужно ускорение — подключаем трафик, но только когда понятно, что именно усиливаем и как это меряем.',
    },
    {
      q: 'Что тебе нужно, чтобы сказать “почему тишина”?',
      a: 'Скиньте ссылку на карточку/статистику/рекламу — я скажу, где отдаете клиентов конкурентам и что сделать первым шагом.',
    },
  ];

  return (
    <>
      <Head>
        <title>Геомаркетинг для офлайн-бизнеса | Андрей Понизов</title>
        <meta
          name="description"
          content="Геомаркетинг: заявки из карт и локального поиска. Упаковка карточки, отзывы, видимость и понятная аналитика — без тумана, по цифрам."
        />
        <link rel="canonical" href="https://ponizov-marketing.ru/geomarketing" />
      </Head>

      <div className={`${container} py-12`}>
        <Breadcrumbs items={breadcrumbsData} />

        {/* HERO */}
        <section className="py-12 md:py-16">
          <h1 className={h1}>Геомаркетинг для офлайн‑бизнеса</h1>
          <p className={lead}>
            Я помогаю получать заявки из карт и локального поиска. Без “магии”: привожу карточку в порядок,
            настраиваю измеримость и дальше веду работу так, чтобы по цифрам было видно — что меняем и что это даёт.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="https://t.me/ponizovandrey"
              target="_blank"
              rel="noreferrer"
              className={btnPrimary}
            >
              Скинуть скрин в Telegram
            </a>
            <Link href="/services" className={btnSecondary}>
              Услуги и цены
            </Link>
          </div>

          <p className="mt-6 text-sm text-gray-600">
            Можно просто скинуть ссылку на карточку, статистику — я скажу, где вы теряете заявки и что подкрутить в первую очередь.
          </p>
        </section>

        {/* Что такое и зачем */}
        <section className={section}>
          <div className={sectionHead}>
            <h2 className={h2}>Что я называю геомаркетингом</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Это не “сделать карточку и забыть”. Это система, которая соединяет спрос рядом, вашу упаковку и измеримость результата.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className={card}>
              <h3 className={h3}>Проблема, которую вижу чаще всего</h3>
              <p className={`${pMuted} mt-2`}>
                Карточка вроде есть, но она “пустая”: слабые фото, неясные услуги, нет отзывов или на негатив никто не отвечает.
                В итоге рядом вас видят, но не выбирают.
              </p>
            </div>

            <div className={card}>
              <h3 className={h3}>Как я подхожу</h3>
              <p className={`${pMuted} mt-2`}>
                Сначала смотрю, как вас находят (и за что выбирают), потом навожу порядок в карточке и в измеримости,
                и только после этого усиливаю то, что работает.
              </p>
            </div>
          </div>
        </section>

        {/* Что делаю */}
        <section className={section}>
          <div className={sectionHead}>
            <h2 className={h2}>Что входит в работу</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Блоки ниже — это не “всё для всех”, а набор инструментов. Подбираю то, что реально нужно в вашей ситуации.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blocks.map((b, i) => (
              <div key={i} className="p-6 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-sm font-semibold tracking-widest text-[#1A3A2E]/60 mb-4">
                  {b.num}
                </div>
                <h3 className="text-xl font-semibold text-[#1A3A2E] mb-3">{b.title}</h3>
                <p className="text-gray-600 mb-4">{b.description}</p>
                <Link href="/consultations" className={linkAccent}>
                  Обсудить задачу →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Процесс */}
        <section className={section}>
          <div className={sectionHead}>
            <h2 className={h2}>Как выглядит работа</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Я не делаю “просто отчёты”. Важно, чтобы было понятно, что делаем и почему.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className={card}>
              <div className="text-sm font-semibold tracking-widest text-[#1A3A2E]/60 mb-3">01</div>
              <h3 className={h3}>Смотрю текущую картину</h3>
              <p className={pMuted}>
                Видимость, карточка, отзывы, конкуренты рядом, обработка заявок — где узкое место.
              </p>
            </div>

            <div className={card}>
              <div className="text-sm font-semibold tracking-widest text-[#1A3A2E]/60 mb-3">02</div>
              <h3 className={h3}>Навожу порядок</h3>
              <p className={pMuted}>
                Карточка, структура услуг/офферов, базовая измеримость — чтобы решения можно было проверять.
              </p>
            </div>

            <div className={card}>
              <div className="text-sm font-semibold tracking-widest text-[#1A3A2E]/60 mb-3">03</div>
              <h3 className={h3}>Делаю тесты и выводы</h3>
              <p className={pMuted}>
                Проверяем гипотезы, смотрим цифры, отключаем лишнее, усиливаем рабочее.
              </p>
            </div>

            <div className={card}>
              <div className="text-sm font-semibold tracking-widest text-[#1A3A2E]/60 mb-3">04</div>
              <h3 className={h3}>Масштабирую</h3>
              <p className={pMuted}>
                Когда видно, что работает — аккуратно наращиваем объём и защищаем качество (репутация/контент/контроль).
              </p>
            </div>
          </div>
        </section>

        {/* Кейсы */}
        <section className={section}>
          <div className={sectionHead}>
            <h2 className={h2}>Кейсы</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Реальные примеры, где видно “было → стало”.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((c, i) => (
              <article key={i} className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-[#E65C00] mb-2">{c.result}</div>
                <h3 className="text-xl font-semibold text-[#1A3A2E] mb-2">{c.title}</h3>
                <p className="text-gray-600 mb-4">{c.description}</p>
                <Link href={c.href} className={linkAccent}>
                  Посмотреть кейсы →
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className={section}>
          <div className={sectionHead}>
            <h2 className={h2}>Вопросы</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Коротко и по делу.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faq.map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-6">
                <div className="font-semibold text-[#1A3A2E] mb-2">{item.q}</div>
                <div className="text-gray-600">{item.a}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-gray-100 bg-gradient-to-r from-[#FFF9E6] to-[#FFF4D9] rounded-2xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={h2}>Начать можно с простого</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Скиньте ссылку на карточку, статистики — я скажу, где теряются заявки и что сделать первым шагом.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://t.me/ponizovandrey" target="_blank" rel="noreferrer" className={btnPrimary}>
                Написать в Telegram
              </a>
              <Link href="/consultations" className={btnSecondary}>
                Консультации
              </Link>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Ответ в течение 24 часов. Без навязывания услуг — только по делу.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
