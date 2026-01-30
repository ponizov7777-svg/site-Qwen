// pages/services.tsx
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumbs from '../components/Breadcrumbs';

const breadcrumbsData = [
  { label: 'Главная', href: '/' },
  { label: 'Услуги и цены', href: '/services' },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Ponizov Marketing",
  "address": { "@type": "PostalAddress", "addressLocality": "СПб" },
  "telephone": "+79841955227",
  "description": "Маркетинговые услуги для локального бизнеса",
};

export default function ServicesPage() {
  // Пресеты (как на главной)
  const container = "max-w-7xl mx-auto px-4";
  const section = "py-20 border-t border-gray-100";
  const sectionHead = "text-center mb-16";

  const h1 = "text-3xl md:text-4xl font-semibold text-[#1A3A2E] mb-4";
  const h2 = "text-3xl font-semibold mb-4 text-[#1A3A2E]";

  const lead = "text-lg text-gray-600 max-w-3xl";
  const p = "text-gray-700";

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

  // Услуги + цены (ровно по твоим вводным)
  const services = [
    {
      id: 1,
      title: "Яндекс Карты (геомаркетинг)",
      description:
        "Упаковка и продвижение карточки так, чтобы вас находили рядом и оставляли заявки. По ходу работы всегда видно: что сделали → что изменилось по цифрам.",
      details: [
        "Приведение карточки в порядок (категории, услуги, фото, атрибуты, тексты).",
        "Работа с отзывами: как просить, что отвечать, как не убить доверие шаблонами.",
        "Повышение релевантности под локальный спрос (без “магии”, только логика).",
        "Контроль изменений: что поменяли и что это дало.",
      ],
      price: "Стоимость — после коротких вводных",
      priceDetails: "Подбираю объём под задачу. Можно стартовать с небольшого формата.",
      href: "/geomarketing",
      anchor: "maps",
    },
    {
      id: 2,
      title: "Контекст (Яндекс Директ)",
      description:
        "Запуск и ведение Директа с фокусом на заявки. Сначала измеримость, потом оптимизация по цифрам.",
      details: [
        "Гео‑логика (районы/радиусы) и запросы с реальным спросом.",
        "Отслеживание заявок: цели, метки, базовые KPI.",
        "Оптимизация по цифрам: что отключили, что усилили, что тестируем.",
        "Проверка посадочной/обработки: где теряются заявки.",
      ],
      price: "Стоимость — после коротких вводных",
      priceDetails: "Формат зависит от объёма и задач. Тестовый бюджет обсуждаем отдельно.",
      href: "/services#kontekst",
      anchor: "kontekst",
    },
    {
      id: 3,
      title: "Стратегия",
      description:
        "План действий и приоритеты на 1–3 месяца, чтобы дальше не метаться и не сливать время/бюджет.",
      details: [
        "Разбор текущей ситуации: карты, трафик, сайт, обработка.",
        "Приоритеты: что даёт быстрый эффект, что строит рост.",
        "План работ на 1–3 месяца + как измеряем (без воды).",
        "Список гипотез: что тестируем и по каким критериям принимаем решение.",
      ],
      price: "80 000 ₽",
      priceDetails: "Фиксированная стоимость.",
      href: "/consultations",
      anchor: "strategiya",
    },
    {
      id: 4,
      title: "Аудит (бесплатный)",
      description:
        "Быстрый ориентир: где точка роста и что делать первым шагом. Без “продаж по скрипту”.",
      details: [
        "Смотрю текущую картину и называю 2–3 приоритета.",
        "Поясняю простыми словами, почему это влияет на заявки.",
        "Даже если не начнём — у тебя останется понятный список первых шагов.",
      ],
      price: "0 ₽",
      priceDetails: "15–20 минут.",
      href: "/consultations",
      anchor: "audit-free",
    },
    {
      id: 5,
      title: "Аудит (платный разбор)",
      description:
        "Глубокий разбор по цифрам: что происходит в каналах и что делать дальше, в каком порядке.",
      details: [
        "Разбираем цифры и логику: где теряются заявки и почему.",
        "Фиксируем план: что делаем в каком порядке.",
        "Договоримся о KPI/контроле, чтобы дальше не было “ощущений”.",
      ],
      price: "10 000 ₽",
      priceDetails: "1,5 часа.",
      href: "/consultations",
      anchor: "audit-paid",
    },
  ];

  const faq = [
    {
      question: "С чего лучше начать: карты или Директ?",
      answer:
        "Если коротко: зависит от текущей точки. Иногда карты дают самый дешёвый первый рост, иногда “съедает” обработка или сайт, и тогда реклама просто ускорит потери. Я обычно прошу один скрин и за 2–5 минут говорю, где узкое место.",
    },
    {
      question: "Почему по картам и Директу нет одной цифры на сайте?",
      answer:
        "Потому что объём бывает разный: одна точка или сеть, новый профиль или уже “потрёпанный”, один район или весь город. Я сначала смотрю вводные, потом называю стоимость — так честнее, чем писать “от …” без понимания задач.",
    },
    {
      question: "Чем платный аудит отличается от бесплатного?",
      answer:
        "Бесплатный — это быстрый ориентир: где уходят клиенты и 2–3 первых шага. Платный (1,5 часа) — это разбор до уровня конкретного плана: что делаем, в каком порядке и какие цифры смотрим, чтобы не гадать и не сливать тестовый бюджет.",
    },
    {
      question: "Какие материалы нужны, чтобы ты мог быстро сказать “почему тишина”?",
      answer:
        "Ссылка на карточку в Яндекс Картах (или скрин), город, что продаёте и примерный чек, и как сейчас приходят заявки (звонки/формы/мессенджеры). Этого достаточно для первого нормального разговора.",
    },
  ];

  return (
    <>
      <Head>
        <title>Услуги и цены | Андрей Понизов — геомаркетинг для офлайн-бизнеса</title>
        <meta
          name="description"
          content="Услуги: Яндекс Карты (геомаркетинг), Яндекс Директ (контекст), стратегия, аудит. Платный аудит 1,5 часа — 10 000 ₽. Стратегия — 80 000 ₽."
        />
        <link rel="canonical" href="https://ponizov-marketing.ru/services" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <div className={`${container} py-12`}>
        <Breadcrumbs items={breadcrumbsData} />

        {/* Заголовок */}
        <section className="mb-12">
          <h1 className={h1}>Услуги и цены</h1>
          <p className={lead}>
            Я работаю так, чтобы бизнес видел цепочку: действие → цифра → вывод → следующий шаг.
            Если хочешь — начнём со ссылки, я скажу, где уходят клиенты.
          </p>
          <p className="mt-4 text-sm text-gray-600">
            Написать в Telegram:
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

        {/* Услуги + CTA */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Левая: услуги */}
          <div className="space-y-6">
            {services.map((service) => (
              <article
                key={service.id}
                id={service.anchor}
                className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-3 gap-6">
                  <h3 className="text-xl font-semibold text-[#1A3A2E]">{service.title}</h3>
                  <Link
                    href={service.href}
                    className="text-[#E65C00] text-sm font-medium hover:text-[#D65A31] transition-colors whitespace-nowrap"
                    aria-label={`Подробнее/запросить услугу ${service.title}`}
                  >
                    {service.id <= 2 ? "Уточнить формат →" : "Подробнее →"}
                  </Link>
                </div>

                <p className="text-gray-600 mb-4">{service.description}</p>

                <ul className="space-y-2 mb-4">
                  {service.details.map((detail, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="text-[#1A3A2E]/40 mr-2 mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-gray-100">
                  <div className="font-semibold text-[#1A3A2E]">{service.price}</div>
                  <div className="text-sm text-gray-500">{service.priceDetails}</div>
                </div>
              </article>
            ))}
          </div>

          {/* Правая: общий CTA + что нужно */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-[#FFF9E6] to-[#FFF4D9] rounded-2xl p-8 border border-gray-100">
              <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-4">Начать можно с простого</h2>
              <p className="text-gray-700 mb-6">
                Скиньте ссылку на карточку/статистику/рекламу — я скажу, где отдаете клиентов конкурентам и что сделать первым шагом.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="https://t.me/ponizovandrey"
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-block text-center ${btnPrimary}`}
                >
                  Написать в Telegram
                </a>
                <Link href="/consultations" className={btnSecondary}>
                  Консультации
                </Link>
              </div>

              <p className="text-sm text-gray-600 mt-4">Ответ обычно в течение 24 часов.</p>
            </div>

            <div className={card}>
              <h2 className="text-xl font-semibold text-[#1A3A2E] mb-4">Что нужно от вас на старте</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#1A3A2E]/40 mr-2 mt-1">•</span>
                  <span>Ссылка на карточку в Яндекс Картах (или скрин).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1A3A2E]/40 mr-2 mt-1">•</span>
                  <span>Город + что продаёте + примерный чек.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1A3A2E]/40 mr-2 mt-1">•</span>
                  <span>Как сейчас приходят заявки и что “не нравится” (дорого, мало, нестабильно, не те клиенты).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ (с ответами) */}
        <section className="mb-20">
          <div className={sectionHead}>
            <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-3">Вопросы и ответы</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Коротко, по делу.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faq.map((item, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-100 p-6">
                <div className="font-semibold text-[#1A3A2E] mb-2">{item.question}</div>
                <div className="text-gray-600">{item.answer}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Финальный CTA */}
        <section className="py-20 border-t border-gray-100 bg-gradient-to-r from-[#FFF9E6] to-[#FFF4D9] rounded-2xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={h2}>Начать можно с простого</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Скиньте ссылку на карточку/статистику/рекламу — я скажу, где отдаете клиентов конкурентам и что сделать первым шагом.
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
