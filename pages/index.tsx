// pages/index.tsx
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumbs from '../components/Breadcrumbs'; // Импортируем компонент хлебных крошек

export default function HomePage() {
  // Формируем данные для хлебных крошек на главной странице
  // Даже для главной можно показать "Главная", или вообще не показывать (в Breadcrumbs.tsx это обрабатывается)
  // Здесь передаём массив с одним элементом "Главная".
  const breadcrumbsData = [
    { label: 'Главная', href: '/' },
  ];

  return (
    <>
      <Head>
        <title>Геомаркетинг и привлечение клиентов для офлайн-бизнеса</title>
        <meta
          name="description"
          content="Помогаю офлайн-бизнесу стабильно привлекать клиентов через карты, рекламу и маркетинговые системы."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Убедитесь, что canonical URL не имеет лишних пробелов */}
        <link rel="canonical" href="https://ponizov-marketing.ru/" />
        <meta property="og:title" content="Геомаркетинг и привлечение клиентов для офлайн-бизнеса" />
        <meta
          property="og:description"
          content="Помогаю офлайн-бизнесу стабильно привлекать клиентов через карты, рекламу и маркетинговые системы."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ponizov-marketing.ru/" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Передаём данные в компонент Breadcrumbs */}
      <Breadcrumbs items={breadcrumbsData} />

      {/* Основной контент страницы */}
      <main>
        {/* Первый экран */}
        <section
          id="hero"
          className="py-24 grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-4"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Геомаркетинг и привлечение клиентов
              <br />
              для офлайн-бизнеса
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Помогаю бьюти, медицине и сервисным компаниям
              стабильно привлекать клиентов через карты,
              рекламу и системный маркетинг.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/consultations"
                className="px-6 py-3 bg-black text-white rounded-xl"
              >
                Бесплатный аудит бизнеса
              </Link>
              <Link
                href="/services"
                className="px-6 py-3 border rounded-xl"
              >
                Услуги и цены
              </Link>
            </div>
          </div>
          {/* Исправленный класс высоты */}
          <div className="relative h-90 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500">
            Фото будет добавлено
          </div>
        </section>

        {/* Чем помогаю */}
        <section className="py-20 border-t max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-10">С чем я помогаю</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="font-semibold mb-2">Геосервисы</h3>
              <p className="text-gray-600">
                Яндекс Карты, Google Maps, 2ГИС — рост показов и заявок.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="font-semibold mb-2">Реклама</h3>
              <p className="text-gray-600">
                Контекстная и таргетированная реклама.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <h3 className="font-semibold mb-2">Система</h3>
              <p className="text-gray-600">
                Стратегия, воронка, точки роста и масштабирование.
              </p>
            </div>
          </div>
        </section>

        {/* Формат работы */}
        <section className="py-20 border-t max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-10">Формат работы</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Бесплатный аудит</h3>
              <p className="text-gray-600 mb-6">
                15–20 минут. Разберём текущую ситуацию и выявим основные точки роста.
              </p>
              <Link href="/consultations" className="underline">
                Подробнее →
              </Link>
            </div>
            <div className="p-8 bg-black text-white rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Платная консультация</h3>
              <p className="text-gray-300 mb-6">
                Глубокий разбор, стратегия и конкретный план действий под ваш бизнес.
              </p>
              <Link href="/consultations" className="underline">
                Подробнее →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}