// pages/blog/analiz-lokalnyh-konkurentov.tsx
'use client';
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';

const breadcrumbsData = [
  { label: 'Главная', href: '/' },
  { label: 'Статьи', href: '/blog' },
  { label: 'Анализ конкурентов', href: '/blog/analiz-lokalnyh-konkurentov' }
];

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

export default function LocalCompetitorsAnalysis() {
  return (
    <>
      <Head>
        <title>Анализ конкурентов | Андрей Понизов</title>
        <meta
          name="description"
          content="Практический разбор анализа локальных конкурентов: как найти точки роста и не копировать чужие решения."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Как анализировать локальных конкурентов и находить точки роста" />
        <meta
          property="og:description"
          content="Пошаговый план анализа локальных конкурентов: онлайн, офлайн и поиск реальных точек роста."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ponizov-marketing.ru/blog/analiz-lokalnyh-konkurentov" />
        <link rel="canonical" href="https://ponizov-marketing.ru/blog/analiz-lokalnyh-konkurentov" />
      </Head>

      <div className={container}>
        <Breadcrumbs items={breadcrumbsData} />

        <article className="py-20">

          {/* Hero */}
          <section className="py-12 md:py-16">
            <div className={glassHero}>
              <h1 className={h1}>
                Как анализировать локальных конкурентов и находить точки роста
              </h1>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Открываете салон, студию или мастерскую в районе, вокруг уже пять похожих точек, а у вас — редкие записи и пустой календарь.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Почти всегда причина не в «плохой рекламе», а в том, что вы выходите на рынок, не понимая, как устроены конкуренты: какие цены они держат, чем берут клиентов, где они объективно сильнее, а где — пустые зоны, в которые можно зайти вам.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Анализ конкурентов — это не теория из учебника, а инструмент, который помогает найти реальные точки роста: что добавить в услуги, где скорректировать цены, какие каналы продвижения подключить и как занять своё место в локальной выдаче и на карте.
              </p>
            </div>
          </section>

          {/* Зачем анализ */}
          <section className="py-20">
            <h2 className={h2}>
              Зачем локальному бизнесу анализ конкурентов
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Цель конкурентного анализа — собрать данные о состоянии рынка в вашем районе, понять сильные и слабые стороны конкурентов и на основе этого скорректировать своё предложение, а не копировать чужие акции «на глаз».
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Для локального бизнеса это особенно важно: вы делите один и тот же трафик, улицу, поток людей и бюджеты на рекламу.
            </p>

            <div className={glassCard}>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Оценить уровень конкуренции в радиусе: сколько сильных игроков, какие форматы и ценовые сегменты уже заняты.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Выявить свободные ниши: какие услуги, форматы или сегменты ЦА недообслужены.</span>
                </li>
                <li className={listItem}>
                  <span className={listBullet}>•</span>
                  <span>Понять позиционирование конкурентов и возможности отстройки.</span>
                </li>
              </ul>

              <div className="border border-white/50 rounded-xl overflow-hidden">
                <table className="w-full text-sm md:text-base">
                  <thead className="bg-white/50">
                    <tr>
                      <th className="p-3 text-left text-[#1A3A2E]">Ситуация</th>
                      <th className="p-3 text-left text-[#1A3A2E]">Без анализа</th>
                      <th className="p-3 text-left text-[#1A3A2E]">С анализом</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-white/50">
                      <td className="p-3 text-gray-700">Цены</td>
                      <td className="p-3 text-gray-700">Ставите «как у всех»</td>
                      <td className="p-3 text-gray-700">Осознанный вход выше или ниже с ценностью</td>
                    </tr>
                    <tr className="border-t border-white/50">
                      <td className="p-3 text-gray-700">Услуги</td>
                      <td className="p-3 text-gray-700">Копируете перечень</td>
                      <td className="p-3 text-gray-700">Добавляете формат, которого нет у остальных</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24">
            <div className={`${glassCTA} max-w-3xl mx-auto text-center`}>
              <h2 className={h2}>Нужен конкурентный анализ под ваш район?</h2>
              <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl mx-auto">
                Можно делегировать сбор данных и получить готовую карту рынка с точками роста, позиционированием, ценами и рекомендациями по каналам.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://t.me/ponizov_marketing"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className={btnPrimary}
                >
                  Написать в Telegram
                </a>
                <Link
                  href="/consultations"
                  className={btnSecondary}
                >
                  Посмотреть консультации
                </Link>
              </div>
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