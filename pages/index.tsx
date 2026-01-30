// pages/index.tsx
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumbs from '../components/Breadcrumbs';

const breadcrumbsData = [{ label: 'Главная', href: '/' }];

export default function HomePage() {
  // Кейсы — только подтверждённые (Keisy.xlsx)
  const cases = [
    {
      title: 'Beauty, Санкт‑Петербург',
      result: '2–3 → 15–20 клиентов/мес',
      description:
        'Яндекс Бизнес: упаковка профиля, система запроса отзывов, рекламная подписка. Период: 2018–2026.',
    },
    {
      title: 'Медицина, Санкт‑Петербург',
      result: 'Окупаемость 358%',
      description:
        'Пересборка сайта и кампаний. До этого тратили 300 000 ₽/мес без окупаемости (по кейсу). Период: сен 2024 – апр 2025.',
    },
    {
      title: 'HoReCa, Кострома',
      result: '1300 подписчиков ВК',
      description:
        'Запуск: стратегия, исследование ЦА и конкурентов, сообщество ВК, профили в Картах и 2ГИС. Период: авг 2025 – дек 2025.',
    },
  ];

  const advantages = [
    {
      title: 'Прозрачность в цифрах',
      description:
        'Можно в любой момент спросить “как дела?” — и я покажу, что сделано, что это дало и что делаем дальше.',
    },
    {
      title: 'Сначала измеримость',
      description:
        'Если цифр нет — наводим порядок (цели/метки/аналитика), и только потом масштабируем трафик.',
    },
    {
      title: 'Взрослый отбор проектов',
      description:
        'Не берусь за задачи “давайте просто запустим рекламу”. Работаю там, где есть локальный спрос и понятная экономика.',
    },
  ];

  const btnPrimary =
    'px-8 py-4 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-xl hover:bg-[#F7D03A] transition-colors shadow-md ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E65C00] focus-visible:ring-offset-2';

  const btnSecondary =
    'px-8 py-4 border-2 border-[#E65C00] text-[#1A3A2E] font-medium rounded-xl hover:bg-[#FFF5E1] transition-colors ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E65C00] focus-visible:ring-offset-2';

  const linkAccent =
    'text-[#E65C00] font-medium hover:text-[#D65A31] transition-colors inline-flex items-center gap-1';

  const card =
    'p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow';

  return (
    <>
      <Head>
        <title>Геомаркетинг и заявки из карт | Андрей Понизов</title>
        <meta
          name="description"
          content="Помогаю локальному бизнесу получать заявки из карт и рекламы. Работаю по цифрам: измеримость, понятный план действий и прозрачная логика решений."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ponizov-marketing.ru/" />
      </Head>

      {/* <Breadcrumbs items={breadcrumbsData} /> */}

      <main className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <section id="hero" className="py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6 text-[#1A3A2E]">
              Привожу клиентов в офлайн‑бизнес через карты и трафик
              <br />
              так, чтобы по цифрам было понятно, что работает
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Я в предпринимательстве более 10 лет. Работаю с beauty, медициной, косметологией и HoReCa.
              Без “магии” и обещаний — только измеримость, логика и план работ.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link href="/consultations" className={btnPrimary}>
                Разбор по цифрам (консультация)
              </Link>

              <Link href="/services" className={btnSecondary}>
                Услуги и цены
              </Link>
            </div>

            <p className="mt-6 text-sm text-gray-600">
              Можно начать с простого: скинь ссылку на карточку, скрины статистики/рекламы — я скажу, где уходят клиенты и что сделать первым шагом.
              шагом.
              <a
                className="ml-2 text-[#E65C00] hover:text-[#D65A31] transition-colors"
                href="https://t.me/ponizovandrey"
                target="_blank"
                rel="noreferrer"
              >
                https://t.me/ponizovandrey
              </a>
            </p>
          </div>

          {/* Визуальный блок (без неподтверждённых обещаний) */}
          <div className="relative h-[360px] md:h-[480px] bg-gray-100 border border-gray-200 rounded-2xl flex items-center justify-center">
            <div className="text-center p-6 max-w-sm">
              <div className="text-5xl md:text-6xl font-bold text-[#E65C00] mb-3">По цифрам</div>
              <div className="text-xl md:text-2xl font-semibold text-[#1A3A2E] mb-2">
                что сделано → что изменилось
              </div>
              <div className="text-gray-600">
                Без тумана и “мы работаем над улучшением”. Понятная схема: гипотеза → тест → вывод.
              </div>
            </div>
          </div>
        </section>

        {/* Чем помогаю */}
        <section className="py-20 border-t border-gray-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4 text-[#1A3A2E]">С чем я помогаю</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Карты, трафик и стратегия — как части одной системы.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className={card}>
              <div className="text-sm font-semibold tracking-widest text-[#1A3A2E]/60 mb-4">
                01
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#1A3A2E]">Геомаркетинг</h3>
              <p className="text-gray-600 mb-4">
                Упаковка и продвижение в картах: чтобы вас находили в локальном спросе и оставляли заявки.
              </p>
              <Link href="/geomarketing" className={linkAccent}>
                Подробнее →
              </Link>
            </div>

            <div className={card}>
              <div className="text-sm font-semibold tracking-widest text-[#1A3A2E]/60 mb-4">
                02
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#1A3A2E]">Трафик и заявки</h3>
              <p className="text-gray-600 mb-4">
                Контекст и локальная реклама с контролем по понятным метрикам (не по “охватам”).
              </p>
              <Link href="/services#kontekstnaya-reklama" className={linkAccent}>
                Подробнее →
              </Link>
            </div>

            <div className={card}>
              <div className="text-sm font-semibold tracking-widest text-[#1A3A2E]/60 mb-4">
                03
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#1A3A2E]">Стратегия</h3>
              <p className="text-gray-600 mb-4">
                План работ и приоритеты: что даёт быстрый эффект, что строит рост, как контролируем результат.
              </p>
              <Link href="/services#strategiya" className={linkAccent}>
                Подробнее →
              </Link>
            </div>
          </div>
        </section>

        {/* Кейсы */}
        <section className="py-20 border-t border-gray-100 bg-gradient-to-b from-[#FFF9E6] to-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4 text-[#1A3A2E]">Результаты клиентов</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Только реальные кейсы: “было → стало” и контекст, без украшательства.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {cases.map((item, index) => (
              <article
                key={index}
                className="bg-white rounded-xl border border-gray-100 p-6 hover:border-[#E65C00] transition-colors"
              >
                <div className="text-3xl font-bold text-[#E65C00] mb-2">
                  {item.result}
                </div>
                <h3 className="text-xl font-semibold text-[#1A3A2E] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link href="/cases" className={btnSecondary}>
              Все кейсы
            </Link>
          </div>
        </section>

        {/* Почему выбирают */}
        <section className="py-20 border-t border-gray-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4 text-[#1A3A2E]">Почему со мной спокойно</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Я не усложняю — делаю так, чтобы бизнес понимал, что происходит.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-xl font-semibold text-[#1A3A2E] mb-3">{item.title}</div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Формат работы */}
        <section className="py-20 border-t border-gray-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4 text-[#1A3A2E]">Формат старта</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Можно начать с короткого ориентира или сразу сделать глубокий разбор.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
              <span className="px-4 py-1 bg-[#F5C518]/20 text-[#1A3A2E] rounded-full font-medium mb-4 inline-block">
                15–20 минут
              </span>

              <h3 className="text-2xl font-semibold mb-4 text-[#1A3A2E]">Бесплатный аудит</h3>

              <p className="text-gray-700 mb-6">
                Быстро смотрю текущую ситуацию и называю 2–3 приоритета: что мешает заявкам прямо сейчас.
              </p>

              <ul className="space-y-3 mb-8 text-gray-600">
                <li className="flex items-start"><span className="text-[#E65C00] mr-2 mt-1">•</span>Карты/видимость/карточка.</li>
                <li className="flex items-start"><span className="text-[#E65C00] mr-2 mt-1">•</span>Реклама: где “съедает” бюджет.</li>
                <li className="flex items-start"><span className="text-[#E65C00] mr-2 mt-1">•</span>Сайт/обработка: где теряются заявки.</li>
              </ul>

              <Link
                href="/consultations"
                className="inline-block px-6 py-3 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-lg hover:bg-[#F7D03A] transition-colors shadow-md"
              >
                Записаться на аудит
              </Link>
            </div>

            <div className="p-8 bg-gradient-to-r from-[#1A3A2E] to-[#255A40] text-white rounded-2xl">
              <span className="px-4 py-1 bg-[#E65C00]/20 text-white rounded-full font-medium mb-4 inline-block">
                1,5–2 часа
              </span>

              <h3 className="text-2xl font-semibold mb-4">Платная консультация</h3>

              <p className="text-gray-100 mb-6">
                Глубокий разбор по цифрам: экономика, спрос, воронка, точки роста.
                На выходе — понятный план действий и приоритеты.
              </p>

              <ul className="space-y-3 mb-8 text-gray-200">
                <li className="flex items-start"><span className="text-[#F5C518] mr-2 mt-1">•</span>Что менять в первую очередь (быстрый эффект).</li>
                <li className="flex items-start"><span className="text-[#F5C518] mr-2 mt-1">•</span>Какие гипотезы тестировать и как мерить.</li>
                <li className="flex items-start"><span className="text-[#F5C518] mr-2 mt-1">•</span>План на 1–3 месяца (без воды).</li>
              </ul>

              <Link
                href="/consultations"
                className="inline-block px-6 py-3 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-lg hover:bg-[#F7D03A] transition-colors"
              >
                Записаться на консультацию
              </Link>

              <p className="text-sm text-gray-200 mt-4">
                Если сомневаешься — напиши в Telegram и пришли скрин:
                <a className="ml-2 text-[#F5C518] hover:underline" href="https://t.me/ponizovandrey" target="_blank" rel="noreferrer">
                  t.me/ponizovandrey
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Финальный CTA */}
        <section className="py-20 border-t border-gray-100 bg-gradient-to-r from-[#FFF9E6] to-[#FFF4D9] rounded-2xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6 text-[#1A3A2E]">
              Начать можно с простого
            </h2>

            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Скиньте ссылку на карточку, скрины статистики/рекламы — я скажу, где уходят клиенты и что сделать первым шагом.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/ponizovandrey"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-xl text-lg hover:bg-[#F7D03A] transition-colors shadow-md"
              >
                Написать в Telegram
              </a>

              <Link
                href="/services"
                className="px-8 py-4 border-2 border-[#1A3A2E] text-[#1A3A2E] font-medium rounded-xl text-lg hover:bg-white transition-colors"
              >
                Посмотреть услуги
              </Link>
            </div>

            <p className="text-sm text-gray-600 mt-4">
              Ответ в течение 24 часов. Без “продаж по скрипту” — только по делу.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
