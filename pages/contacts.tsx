// pages/contacts.tsx
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumbs from '../components/Breadcrumbs';

const breadcrumbsData = [
  { label: 'Главная', href: '/' },
  { label: 'Контакты', href: '/contacts' },
];

export default function ContactsPage() {
  const container = "max-w-7xl mx-auto px-4";
  const section = "py-20 border-t border-gray-100";
  const sectionHead = "text-center mb-16";

  const h1 = "text-3xl md:text-4xl font-semibold text-[#1A3A2E] mb-4";
  const h2 = "text-3xl font-semibold mb-4 text-[#1A3A2E]";
  const h3 = "text-xl font-semibold mb-2 text-[#1A3A2E]";

  const lead = "text-lg text-gray-600 max-w-3xl";
  const p = "text-gray-700";
  const pMuted = "text-gray-600";

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

  const socials = [
    {
      title: "Telegram",
      subtitle: "@ponizovandrey",
      href: "https://t.me/ponizovandrey",
      badge: "TG",
    },
    {
      title: "VK",
      subtitle: "andrey_anatolyevich_marketing",
      href: "https://vk.com/andrey_anatolyevich_marketing",
      badge: "VK",
    },
    {
      title: "RuTube",
      subtitle: "ponizov-marketing",
      href: "https://rutube.ru/channel/73592687/",
      badge: "RT",
    },
    {
      title: "MAX",
      subtitle: "ponizovandrey",
      href: "https://max.ru/u/f9LHodD0cOKv94u0uUQGsTH7c9Cibtp9qAEtmFpgYQ-QfGsVeYNyc7M34aU",
      badge: "MAX",
    },
  ];

  const faq = [
    {
      q: "Куда лучше писать, чтобы быстрее стартануть?",
      a: "В Telegram. Идеально — скинуть скрин карточки/статистики/рекламы и одной строкой написать: ниша + город + что не нравится (мало заявок/дорого/нестабильно).",
    },
    {
      q: "Можно без созвона, просто вопросом в переписке?",
      a: "Да. Если вопрос точечный — отвечу так. Если вижу, что нужна “сборка системы”, предложу короткий аудит/разбор — но решение за тобой.",
    },
    {
      q: "Что писать в первом сообщении, если я не знаю, “как правильно”?",
      a: "Вообще не нужно “правильно”. Напиши как есть: что продаёшь, где работаешь и какая цель. Если есть — добавь ссылку на карточку в Яндекс Картах или сайт.",
    },
  ];

  return (
    <>
      <Head>
        <title>Контакты | Андрей Понизов</title>
        <meta
          name="description"
          content="Контакты: Telegram и соцсети, плюс форма для заявки. Напишите, что за бизнес и какая задача — подскажу, с чего начать."
        />
        <link rel="canonical" href="https://ponizov-marketing.ru/contacts" />
      </Head>

      <div className={`${container} py-12`}>
        <Breadcrumbs items={breadcrumbsData} />

        {/* HERO */}
        <section className="py-12 md:py-16">
          <h1 className={h1}>Контакты</h1>
          <p className={lead}>
            Проще всего — написать в Telegram и скинуть скрин. Я скажу, где затык и что сделать первым шагом.
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
            <Link href="/consultations" className={btnSecondary}>
              Консультации
            </Link>
          </div>

          <p className="mt-6 text-sm text-gray-600">
            Telegram:
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

        {/* Основное */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Левая: форма + подсказка */}
          <div className="space-y-8">
            <div className={card} id="form">
              <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-4">Написать через форму</h2>
              <p className="text-gray-600 mb-6">
                Если удобнее не в мессенджере — оставь заявку здесь. Я отвечу и уточню пару деталей.
              </p>

              <form className="space-y-5">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-[#1A3A2E] mb-1">
                      Как удобнее связаться
                    </label>
                    <select
                      id="contact"
                      name="contact"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E65C00] focus:border-transparent"
                      defaultValue="telegram"
                    >
                      <option value="telegram">Telegram</option>
                      <option value="call">Звонок</option>
                      <option value="sms">SMS</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1A3A2E] mb-1">
                    Email (необязательно)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E65C00] focus:border-transparent"
                    placeholder="your@email.ru"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1A3A2E] mb-1">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E65C00] focus:border-transparent"
                    placeholder="Ниша + город + что сейчас не нравится + цель (если кратко)"
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
                  Отправить сообщение
                </button>

                <p className="text-sm text-gray-600">
                  Быстрее всего — написать в Telegram и приложить скрин:
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

            <div className={card}>
              <h2 className="text-xl font-semibold text-[#1A3A2E] mb-4">Что прислать, чтобы я быстро понял задачу</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-[#1A3A2E]/40 mr-2 mt-1">•</span>Ниша + город.</li>
                <li className="flex items-start"><span className="text-[#1A3A2E]/40 mr-2 mt-1">•</span>Ссылка на карточку в Яндекс Картах (или скрин статистики).</li>
                <li className="flex items-start"><span className="text-[#1A3A2E]/40 mr-2 mt-1">•</span>Что не нравится сейчас: мало заявок / дорого / нестабильно / “не те” клиенты.</li>
              </ul>
            </div>
          </div>

          {/* Правая: соцсети + FAQ */}
          <div className="space-y-8">
            <div className={card}>
              <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-6">Где меня найти</h2>

              <div className="space-y-4">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg hover:border-[#E65C00] hover:bg-[#FFF9E6] transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#E65C00]/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-[#E65C00]">{s.badge}</span>
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-[#1A3A2E]">{s.title}</p>
                      <p className="text-gray-600 truncate">{s.subtitle}</p>
                    </div>
                    <span className="ml-auto text-[#E65C00] font-medium">→</span>
                  </a>
                ))}
              </div>
            </div>

            <div className={card}>
              <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-6">Вопросы</h2>
              <div className="space-y-4">
                {faq.map((item, i) => (
                  <div key={i} className="border border-gray-100 rounded-xl p-5">
                    <div className="font-semibold text-[#1A3A2E] mb-2">{item.q}</div>
                    <div className="text-gray-600">{item.a}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Link href="/consultations" className={linkAccent}>
                  Посмотреть форматы консультаций →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <section className="py-20 border-t border-gray-100 bg-gradient-to-r from-[#FFF9E6] to-[#FFF4D9] rounded-2xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={h2}>Начать можно с простого</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Скинь скрин карточки/статистики/рекламы — я скажу, где затык и что сделать первым шагом.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://t.me/ponizovandrey" target="_blank" rel="noreferrer" className={btnPrimary}>
                Написать в Telegram
              </a>
              <Link href="/services" className={btnSecondary}>
                Услуги и цены
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
