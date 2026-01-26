// pages/contacts.tsx
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumbs from '../components/Breadcrumbs';

const breadcrumbsData = [
  { label: 'Главная', href: '/' },
  { label: 'Контакты', href: '/contacts' }
];

export default function ContactsPage() {
  return (
    <>
      <Head>
        <title>Контакты | Андрей Понизов — геомаркетинг для офлайн-бизнеса</title>
        <meta
          name="description"
          content="Свяжитесь со мной для консультации по геомаркетингу и привлечению клиентов. Контакты, соцсети и форма обратной связи."
        />
        <link rel="canonical" href="https://ponizov-marketing.ru/contacts" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Хлебные крошки */}
        <Breadcrumbs items={breadcrumbsData} />

        {/* Заголовок секции */}
        <section className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#1A3A2E] mb-4">
            Свяжитесь со мной
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Я отвечу на ваши вопросы и помогу выстроить стратегию привлечения клиентов для вашего бизнеса.
          </p>
        </section>

        {/* Основное содержимое */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Левая колонка: форма обратной связи */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-6">
                Напишите мне
              </h2>
              <form className="space-y-6">
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
                      placeholder="[[НУЖЕН ФАКТ: пример формата телефона]]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#1A3A2E] mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E65C00] focus:border-transparent"
                      placeholder="your@email.ru"
                    />
                  </div>
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
                    placeholder="Расскажите о вашем бизнесе и задачах..."
                  ></textarea>
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
                        Политикой конфиденциальности
                      </Link>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-lg text-lg hover:bg-[#F7D03A] transition-colors shadow-md"
                >
                  Отправить сообщение
                </button>
              </form>
            </div>

            {/* Контактная информация */}
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-[#1A3A2E] mb-4">
                Контактная информация
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#E65C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#1A3A2E]">Телефон</p>
                    <p className="text-gray-600">[[НУЖЕН ФАКТ: телефон]]</p>
                    <p className="text-sm text-gray-500 mt-1">[[НУЖЕН ФАКТ: часы доступности и часовой пояс]]</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#E65C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#1A3A2E]">Email</p>
                    <p className="text-gray-600">[[НУЖЕН ФАКТ: email]]</p>
                    <p className="text-sm text-gray-500 mt-1">Отвечаю в течение 24 часов</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#E65C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#1A3A2E]">Адрес</p>
                    <p className="text-gray-600">[[НУЖЕН ФАКТ: город/локация]]</p>
                    <p className="text-sm text-gray-500 mt-1">Встречи провожу онлайн или в удобном для вас месте</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Правая колонка: социальные сети и карта */}
          <div className="space-y-8">
            {/* Социальные сети */}
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-6">
                Социальные сети
              </h2>
              <div className="space-y-4">
                <a
                  href="https://t.me/ponizovandrey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg hover:border-[#E65C00] hover:bg-[#FFF9E6] transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-[#E65C00]/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-[#E65C00]">TG</span>
                  </div>
                  <div>
                    <p className="font-medium text-[#1A3A2E]">Telegram</p>
                    <p className="text-gray-600">@ponizovandrey</p>
                  </div>
                </a>

                <a
                  href="https://vk.com/andrey_anatolyevich_marketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg hover:border-[#E65C00] hover:bg-[#FFF9E6] transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-[#E65C00]/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-[#E65C00]">VK</span>
                  </div>
                  <div>
                    <p className="font-medium text-[#1A3A2E]">VK</p>
                    <p className="text-gray-600">andrey_anatolyevich_marketing</p>
                  </div>
                </a>

                <a
                  href="https://rutube.ru/channel/73592687/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg hover:border-[#E65C00] hover:bg-[#FFF9E6] transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-[#E65C00]/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-[#E65C00]">RT</span>
                  </div>
                  <div>
                    <p className="font-medium text-[#1A3A2E]">RuTube</p>
                    <p className="text-gray-600">ponizov-marketing</p>
                  </div>
                </a>

                <a
                  href="https://max.ru/u/f9LHodD0cOKv94u0uUQGsTH7c9Cibtp9qAEtmFpgYQ-QfGsVeYNyc7M34aU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg hover:border-[#E65C00] hover:bg-[#FFF9E6] transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-[#E65C00]/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-[#E65C00]">MAX</span>
                  </div>
                  <div>
                    <p className="font-medium text-[#1A3A2E]">MAX</p>
                    <p className="text-gray-600">ponizovandrey</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Карта */}
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <h2 className="text-xl font-semibold text-[#1A3A2E] p-6 pb-4">
                География работы
              </h2>
              <div className="h-64 bg-gray-100 border-2 border-dashed rounded-lg flex items-center justify-center text-[#1A3A2E]/50">
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-[#E65C00] mb-2">[[НУЖЕН ФАКТ: количество городов]]</div>
                  <div className="text-lg font-medium text-[#1A3A2E] mb-1">городов России</div>
                  <div className="text-gray-600">Я работаю с клиентами из разных регионов</div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  [[НУЖЕН ФАКТ: основной фокус по городам/населению]] [[НУЖЕН ФАКТ: города с наибольшим опытом]]
                </p>
                <p className="text-gray-600">
                  [[НУЖЕН ФАКТ: кейсы/опыт в малых городах]] 
                </p>
              </div>
            </div>

            {/* Время работы */}
            <div className="bg-gradient-to-r from-[#FFF9E6] to-[#FFF4D9] rounded-xl border border-[#E65C00]/20 p-6">
              <h2 className="text-xl font-semibold text-[#1A3A2E] mb-4">
                Рабочее время
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Пн–Пт:</span>
                  <span className="font-medium text-[#1A3A2E]">[[НУЖЕН ФАКТ: часы Пн–Пт]]</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Сб:</span>
                  <span className="font-medium text-[#1A3A2E]">[[НУЖЕН ФАКТ: часы Сб]]</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Вс:</span>
                  <span className="font-medium text-[#1A3A2E]">[[НУЖЕН ФАКТ: часы Вс]]</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                [[НУЖЕН ФАКТ: условия связи в выходные/экстренные случаи]]
              </p>
            </div>
          </div>
        </div>

        {/* Призыв к действию */}
        <section className="bg-gradient-to-r from-[#FFF9E6] to-[#FFF4D9] rounded-2xl p-8 mb-16 border border-[#E65C00]/20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-4">
              Я готов начать работу над вашим проектом
            </h2>
            <p className="text-gray-700 mb-6">
              Запишитесь на бесплатную консультацию, и я помогу определить точки роста для вашего бизнеса.
            </p>
            <Link
              href="/consultations"
              className="inline-block px-8 py-4 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-xl text-lg hover:bg-[#F7D03A] transition-colors shadow-md hover:shadow-lg"
            >
              Записаться на бесплатный аудит
            </Link>
          </div>
        </section>

        {/* Часто задаваемые вопросы */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-8 text-center">
            Часто задаваемые вопросы
          </h2>

          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="border border-gray-100 rounded-xl overflow-hidden">
              <button className="w-full text-left p-5 bg-white hover:bg-[#FFF9E6] transition-colors">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-[#1A3A2E]">Сколько длится консультация?</span>
                  <span className="text-[#E65C00]">+</span>
                </div>
              </button>
            </div>

            <div className="border border-gray-100 rounded-xl overflow-hidden">
              <button className="w-full text-left p-5 bg-white hover:bg-[#FFF9E6] transition-colors">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-[#1A3A2E]">Как подготовиться к консультации?</span>
                  <span className="text-[#E65C00]">+</span>
                </div>
              </button>
            </div>

            <div className="border border-gray-100 rounded-xl overflow-hidden">
              <button className="w-full text-left p-5 bg-white hover:bg-[#FFF9E6] transition-colors">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-[#1A3A2E]">Работаю ли я с бизнесом из вашего региона?</span>
                  <span className="text-[#E65C00]">+</span>
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* Финальный CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-6">
            Остались вопросы?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Свяжитесь со мной любым удобным способом, и я отвечу в ближайшее время.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:[[НУЖЕН ФАКТ: tel:]]"
              className="px-8 py-4 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-xl text-lg hover:bg-[#F7D03A] transition-colors shadow-md"
            >
              Позвонить мне
            </Link>
            <Link
              href="mailto:[[НУЖЕН ФАКТ: mailto:]]"
              className="px-8 py-4 border-2 border-[#E65C00] text-[#1A3A2E] font-medium rounded-xl text-lg hover:bg-[#FFF5E1] transition-colors"
            >
              Написать email
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
