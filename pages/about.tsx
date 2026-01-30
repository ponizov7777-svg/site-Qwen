// pages/about.tsx
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumbs from '../components/Breadcrumbs';

const breadcrumbsData = [
  { label: 'Главная', href: '/' },
  { label: 'Обо мне', href: '/about' }
];

export default function AboutPage() {
  // Пресеты: единый визуальный стиль как на главной
  const container = "max-w-7xl mx-auto px-4";
  const section = "py-20 border-t border-gray-100";
  const sectionHead = "text-center mb-16";

  const h1 = "text-4xl md:text-5xl font-semibold leading-tight mb-6 text-[#1A3A2E]";
  const h2 = "text-3xl font-semibold mb-4 text-[#1A3A2E]";
  const h3 = "text-xl font-semibold mb-2 text-[#1A3A2E]";

  const lead = "text-lg text-gray-600 mb-8 max-w-2xl";
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

  const badgeWarm =
    "px-4 py-1 bg-[#F5C518]/20 text-[#1A3A2E] rounded-full font-medium inline-block";

  return (
    <>
      <Head>
        <title>Обо мне | Андрей Понизов — геомаркетинг для офлайн-бизнеса</title>
        <meta
          name="description"
          content="Андрей Понизов — геомаркетинг, трафик и понятная аналитика для локального бизнеса. Прозрачный подход, логика решений и измеримый результат."
        />
      </Head>

      <div className={`${container} py-12`}>
        {/* Хлебные крошки */}
        <Breadcrumbs items={breadcrumbsData} />

        {/* HERO */}
        <section className="py-16 md:py-20">
          <div className="max-w-3xl">
            <h1 className={h1}>
              Обо мне — коротко и по делу
            </h1>

            <p className={lead}>
              Я в предпринимательстве более 10 лет.
              Работаю с локальным бизнесом (beauty, медицина, косметология, HoReCa) и выстраиваю продвижение так,
              чтобы по цифрам было понятно: что работает и что делаем дальше.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link href="/consultations" className={btnPrimary}>
                Бесплатный аудит бизнеса
              </Link>
              <Link href="/services" className={btnSecondary}>
                Услуги и цены
              </Link>
            </div>

            <p className="mt-6 text-sm text-gray-600">
              Можешь просто скинуть ссылку на карточку, скрины статистики/рекламы — я скажу, где уходят клиенты и что сделать первым шагом.
            </p>
          </div>
        </section>

        {/* Фото + “коротко” + “как работаю” */}
        <section className="pb-20">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Левая колонка */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                {/* Фото: положи DSC00480.jpg в public/images/about.jpg */}
                <img
                  src="/images/about.jpg"
                  alt="Андрей Понизов"
                  className="w-full h-[420px] object-cover"
                  loading="lazy"
                />
              </div>

              <div className={card}>
                <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-6">
                  Что для меня важно в работе
                </h2>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-[#E65C00] mr-2 mt-1">•</span>
                    <span className={p}>
                      Прозрачность: по цифрам видно, что сделано и что это дало.
                    </span>
                  </div>

                  <div className="flex items-start">
                    <span className="text-[#E65C00] mr-2 mt-1">•</span>
                    <span className={p}>
                      Управляемость: сначала измеримость (цели/метки/KPI), потом масштабирование.
                    </span>
                  </div>

                  <div className="flex items-start">
                    <span className="text-[#E65C00] mr-2 mt-1">•</span>
                    <span className={p}>
                      Взрослый подход: без обещаний “100 клиентов за неделю”, только логика и тесты.
                    </span>
                  </div>

                  <div className="flex items-start">
                    <span className="text-[#E65C00] mr-2 mt-1">•</span>
                    <span className={p}>
                      Работа с теми, кто понимает цель и готов действовать заранее, а не тушить пожар.
                    </span>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {['Beauty', 'Медицина', 'Косметология', 'HoReCa', 'Локальный спрос'].map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-[#F5C518]/20 text-[#1A3A2E] text-sm rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Правая колонка */}
            <div className="space-y-8">
              <div className={card}>
                <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-4">
                  Как я думаю
                </h2>

                <p className={`${p} mb-4`}>
                  Я не “веду рекламу” ради отчёта.
                  Мне важно, чтобы бизнес видел цепочку: действие → цифра → вывод → следующий шаг.
                </p>

                <p className={p}>
                  Если что-то нельзя измерить — значит сначала наводим порядок: цели, метки, базовые KPI.
                  И только потом начинаем спорить, что “работает/не работает”.
                </p>
              </div>

              <div className={card}>
                <h2 className="text-2xl font-semibold text-[#1A3A2E] mb-4">
                  Как выглядит работа со мной
                </h2>

                <div className="grid gap-4">
                  <div className="p-6 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={badgeWarm}>Шаг 1</span>
                      <div className="font-semibold text-[#1A3A2E]">Смотрю текущую картину</div>
                    </div>
                    <div className={pMuted}>
                      Откуда идут обращения, что происходит в картах/на сайте/в рекламе, где теряются люди.
                    </div>
                  </div>

                  <div className="p-6 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={badgeWarm}>Шаг 2</span>
                      <div className="font-semibold text-[#1A3A2E]">Настраиваю измеримость</div>
                    </div>
                    <div className={pMuted}>
                      Метки, цели, простые KPI — чтобы любое решение было видно в статистике.
                    </div>
                  </div>

                  <div className="p-6 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={badgeWarm}>Шаг 3</span>
                      <div className="font-semibold text-[#1A3A2E]">Оптимизирую по цифрам</div>
                    </div>
                    <div className={pMuted}>
                      Что отключаем, что усиливаем, что масштабируем — без гаданий.
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-sm text-gray-600">
                  Меня можно спросить “как дела?” — и я покажу, что поменяли и что это дало.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* КОМПЕТЕНЦИИ */}
        <section className={section}>
          <div className={sectionHead}>
            <h2 className={h2}>Чем я закрываю задачу</h2>
            <p className={pMuted}>
              Карты, трафик и стратегия — как части одной системы, а не разрозненные услуги.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className={card}>
              <h3 className={h3}>Геомаркетинг</h3>
              <p className="text-gray-600 mb-6">
                Локальный спрос и карты: делаю так, чтобы вас чаще находили рядом — и это было видно в статистике.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Яндекс.Карты', 'Google Maps', '2ГИС', 'Локальный поиск'].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-[#F5C518]/20 text-[#1A3A2E] text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className={card}>
              <h3 className={h3}>Настройка трафика</h3>
              <p className="text-gray-600 mb-6">
                Реклама, где понятно, что покупаем и сколько стоит заявка. Сначала считаем, потом масштабируем.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Яндекс.Директ', 'Таргет VK', 'Аналитика', 'KPI'].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-[#F5C518]/20 text-[#1A3A2E] text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className={card}>
              <h3 className={h3}>Стратегия</h3>
              <p className="text-gray-600 mb-6">
                План работ и приоритеты: что даёт быстрый эффект, что даёт рост дальше, и как это контролируем.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Стратегия', 'Воронка', 'План работ', 'Приоритеты'].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-[#F5C518]/20 text-[#1A3A2E] text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ПРИНЦИПЫ */}
        <section className={section}>
          <div className={sectionHead}>
            <h2 className={h2}>Принципы</h2>
            <p className={pMuted}>Чтобы на старте было понятно, как я работаю и чего не обещаю.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-2xl border border-gray-100">
              <blockquote className="text-gray-700 italic border-l-4 border-[#E65C00] pl-4 py-2">
                Я не обещаю чудес. Я делаю так, чтобы у бизнеса был порядок в цифрах и понятный план действий.
              </blockquote>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-gray-100">
              <blockquote className="text-gray-700 italic border-l-4 border-[#E65C00] pl-4 py-2">
                Решения принимаем по цифрам. Если цифр нет — сначала делаем, чтобы они появились.
              </blockquote>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-gray-100 bg-gradient-to-r from-[#FFF9E6] to-[#FFF4D9] rounded-2xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6 text-[#1A3A2E]">
              Начать можно с простого
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Скиньте ссылку на карточку, скрины статистики/рекламы — я скажу, где уходят клиенты и что сделать первым шагом.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultations" className={btnPrimary}>
                Бесплатный аудит бизнеса
              </Link>
              <Link href="/contacts" className={btnSecondary}>
                Связаться со мной
              </Link>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Ответ в течение 24 часов. Без навязывания услуг — только измеримый результат.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
