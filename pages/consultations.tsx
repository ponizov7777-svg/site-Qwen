// pages/consultations.tsx
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumbs from '../components/Breadcrumbs';

const breadcrumbsData = [
  { label: 'Главная', href: '/' },
  { label: 'Консультации', href: '/consultations' },
];

export default function ConsultationsPage() {
  const container = "max-w-7xl mx-auto px-4";
  const section = "py-20 border-t border-gray-100";

  const h1 = "text-3xl md:text-4xl font-semibold text-[#1A3A2E] mb-4";
  const h2 = "text-2xl font-semibold text-[#1A3A2E] mb-4";

  const btnPrimary =
    "px-8 py-4 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-xl hover:bg-[#F7D03A] transition-colors shadow-md " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E65C00] focus-visible:ring-offset-2";

  const btnSecondary =
    "px-8 py-4 border-2 border-[#E65C00] text-[#1A3A2E] font-medium rounded-xl hover:bg-[#FFF5E1] transition-colors " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E65C00] focus-visible:ring-offset-2";

  const card = "bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-md transition-shadow";

  const steps = [
    {
      num: "01",
      title: "Смотрим текущую картину",
      text: "Карты, реклама, сайт/воронка, обработка заявок. Я ищу узкое место, из‑за которого “не едет”.",
    },
    {
      num: "02",
      title: "Фиксируем, что меряем",
      text: "Чтобы не гадать: какие цифры считаем, где смотрим, что считаем результатом на ближайшие 2–4 недели.",
    },
    {
      num: "03",
      title: "Делаем план",
      text: "Что делаем первым шагом, что вторым, какие гипотезы тестируем и что будет считаться “сработало/не сработало”.",
    },
  ];

  const faq = [
    {
      q: "Чем бесплатный аудит отличается от платного разбора?",
      a: "Бесплатный — это 15–20 минут, чтобы понять, где затык и какие 2–3 шага дадут самый быстрый эффект. Платный — 1,5 часа, глубокий разбор с планом действий и логикой по цифрам.",
    },
    {
      q: "Можно ли просто прислать скрин, без созвона?",
      a: "Да. Скинь скрин карточки/статистики/рекламы — я скажу, куда смотреть в первую очередь и что обычно чинится быстро.",
    },
    {
      q: "Что подготовить к платному разбору?",
      a: "Ссылку на карточку, сайт (если есть), доступ/скрины по рекламе (если есть), и базу: город, услуга, примерный чек, маржа (если знаешь) и как сейчас приходят заявки.",
    },
    {
      q: "После консультации ты берёшь в работу проект?",
      a: "Если есть мэтч по задачам, бюджету и ожиданиям — да, можно идти в сопровождение. Если нет — я честно скажу и оставлю тебе план, который можно внедрять своими силами или с командой.",
    },
  ];

  return (
    <>
      <Head>
        <title>Консультации | Андрей Понизов</title>
        <meta
          name="description"
          content="Форматы: бесплатный аудит 15–20 минут и платный разбор 1,5 часа за 10 000 ₽. Скиньте скрин карточки/статистики/рекламы — скажу, где затык."
        />
        <link rel="canonical" href="https://ponizov-marketing.ru/consultations" />
      </Head>

      <div className={`${container} py-12`}>
        <Breadcrumbs items={breadcrumbsData} />

        {/* HERO */}
        <section className="py-12 md:py-16">
          <h1 className={h1}>Консультации</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Два формата: быстрый бесплатный аудит и платный разбор по цифрам.
            Без “мотивационных” созвонов — только конкретика и понятный план действий.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="https://t.me/ponizovandrey"
              target="_blank"
              rel="noreferrer"
              className={btnPrimary}
            >
              Написать в Telegram
            </a>
            <Link href="#formats" className={btnSecondary}>
              Выбрать формат
            </Link>
          </div>

          <p className="mt-6 text-sm text-gray-600">
            Можно просто скинуть скрин карточки/статистики/рекламы — я скажу, где затык и что подкрутить в первую очередь:
            <a
              className="ml-2 text-[#E65C00] hover:text-[#D65A31] transition-colors"
              href="https://t.me/ponizovandrey"
              target="_blank"
              rel="noreferrer"
            >
              https://t.me/ponizovandrey
            </a>
          </p>
        </section>

        {/* Форматы */}
        <section id="formats" className={section}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#1A3A2E] mb-4">Форматы</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Выбирай по задаче: “быстро понять” или “разобрать глубоко и сделать план”.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Бесплатный */}
            <div className={card}>
              <div className="flex items-start justify-between gap-6 mb-4">
                <h3 className="text-2xl font-semibold text-[#1A3A2E]">Бесплатный аудит</h3>
                <span className="px-3 py-1 bg-[#F5C518]/20 text-[#1A3A2E] rounded-full font-medium whitespace-nowrap">
                  15–20 минут
                </span>
              </div>

              <p className="text-gray-700 mb-6">
                Быстро смотрю текущую ситуацию и называю 2–3 приоритета: что мешает заявкам прямо сейчас.
              </p>

              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-start"><span className="text-[#1A3A2E]/40 mr-2 mt-1">•</span>Карты/видимость/карточка.</li>
                <li className="flex items-start"><span className="text-[#1A3A2E]/40 mr-2 mt-1">•</span>Реклама: где “съедает” бюджет (если она есть).</li>
                <li className="flex items-start"><span className="text-[#1A3A2E]/40 mr-2 mt-1">•</span>Сайт/обработка: где теряются заявки.</li>
              </ul>

              <div className="flex flex-col gap-3">
                <a
                  href="https://t.me/ponizovandrey"
                  target="_blank"
                  rel="noreferrer"
                  className={btnPrimary}
                >
                  Скинуть скрин в Telegram
                </a>
                <p className="text-sm text-gray-600">
                  Напиши 1 строку: ниша + город + что не нравится (“мало заявок”, “дорого”, “не те клиенты”).
                </p>
              </div>
            </div>

            {/* Платный */}
            <div className="bg-gradient-to-r from-[#FFF9E6] to-[#FFF4D9] rounded-2xl p-8 border border-gray-100">
              <div className="flex items-start justify-between gap-6 mb-4">
                <h3 className="text-2xl font-semibold text-[#1A3A2E]">Платный разбор</h3>
                <span className="px-3 py-1 bg-[#1A3A2E] text-white rounded-full font-medium whitespace-nowrap">
                  10 000 ₽
                </span>
              </div>

              <p className="text-gray-700 mb-2">
                Глубокая консультация 1,5 часа: разбираем цифры и логику, собираем понятный план действий.
              </p>
              <p className="text-sm text-gray-600 mb-6">Длительность: 1,5 часа.</p>

              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-start"><span className="text-[#1A3A2E]/40 mr-2 mt-1">•</span>Где теряются заявки и почему.</li>
                <li className="flex items-start"><span className="text-[#1A3A2E]/40 mr-2 mt-1">•</span>Что делать в каком порядке (приоритеты).</li>
                <li className="flex items-start"><span className="text-[#1A3A2E]/40 mr-2 mt-1">•</span>Что меряем, чтобы не гадать.</li>
              </ul>

              <div className="flex flex-col gap-3">
                <Link href="#form" className="inline-block px-8 py-4 bg-[#1A3A2E] text-white font-medium rounded-xl hover:bg-[#224D3C] transition-colors shadow-md text-center">
                  Оставить заявку на разбор
                </Link>
                <a
                  href="https://t.me/ponizovandrey"
                  target="_blank"
                  rel="noreferrer"
                  className={btnSecondary}
                >
                  Уточнить перед оплатой
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Как проходит */}
        <section className={section}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#1A3A2E] mb-4">Как проходит разбор</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Без воды. Я люблю, когда всё измеримо и понятно.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={i} className={card}>
                <div className="text-sm font-semibold tracking-widest text-[#1A3A2E]/60 mb-4">{s.num}</div>
                <div className="text-xl font-semibold text-[#1A3A2E] mb-2">{s.title}</div>
                <div className="text-gray-600">{s.text}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ с ответами */}
        <section className={section}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#1A3A2E] mb-4">Вопросы</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Коротко и по делу.</p>
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

        {/* Форма (без “кнопок-заглушек”) */}
        <section id="form" className="py-20 border-t border-gray-100 bg-gradient-to-r from-[#FFF9E6] to-[#FFF4D9] rounded-2xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6 text-[#1A3A2E]">Записаться</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Если удобнее — напиши в Telegram. Если нужно через форму — заполни ниже.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a href="https://t.me/ponizovandrey" target="_blank" rel="noreferrer" className={btnPrimary}>
                Написать в Telegram
              </a>
              <Link href="/services" className={btnSecondary}>
                Посмотреть услуги
              </Link>
            </div>

            <div className="text-left bg-white p-6 rounded-xl border border-gray-100">
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
                  <label htmlFor="format" className="block text-sm font-medium text-[#1A3A2E] mb-1">
                    Формат
                  </label>
                  <select
                    id="format"
                    name="format"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E65C00] focus:border-transparent"
                    defaultValue="free"
                  >
                    <option value="free">Бесплатный аудит (15–20 минут)</option>
                    <option value="paid">Платный разбор (1,5 часа / 10 000 ₽)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-[#1A3A2E] mb-1">
                    Бизнес и город
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E65C00] focus:border-transparent"
                    placeholder="Например: косметология, Санкт‑Петербург"
                  />
                </div>

                <div>
                  <label htmlFor="goals" className="block text-sm font-medium text-[#1A3A2E] mb-1">
                    Что сейчас не нравится / что хотите улучшить
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    rows={3}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E65C00] focus:border-transparent"
                    placeholder="Например: мало заявок из карт; реклама дорогая; не понимаем, что работает."
                  />
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
                        политикой конфиденциальности
                      </Link>
                      .
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-lg text-lg hover:bg-[#F7D03A] transition-colors shadow-md"
                >
                  Отправить заявку
                </button>

                <p className="text-sm text-gray-600">
                  Если хочешь быстрее — лучше сразу написать в Telegram и приложить скрин.
                  <a
                    className="ml-2 text-[#E65C00] hover:text-[#D65A31] transition-colors"
                    href="https://t.me/ponizovandrey"
                    target="_blank"
                    rel="noreferrer"
                  >
                    t.me/ponizovandrey
                  </a>
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
