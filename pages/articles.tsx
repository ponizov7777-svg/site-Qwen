// pages/articles.tsx
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumbs from '../components/Breadcrumbs';

const breadcrumbsData = [
  { label: 'Главная', href: '/' },
  { label: 'Аналитика и разборы', href: '/articles' }
];

export default function ArticlesPage() {
  const articles = [
    {
      id: 1,
      title: 'Как на самом деле работают Яндекс.Карты для привлечения клиентов',
      excerpt: 'Разбор логики ранжирования, факторов видимости и ошибок, из-за которых бизнес не получает заявки.',
      date: '2026',
      href: '/articles/yandex-karty-nastroika',
      category: 'Геомаркетинг'
    },
    {
      id: 2,
      title: 'Контекстная реклама для офлайн-бизнеса: что масштабировать, а что отключать',
      excerpt: 'Стратегия работы с рекламой, если важны заявки, а не отчёты и клики.',
      date: '2026',
      href: '/articles/kontekstnaya-reklama-offline',
      category: 'Реклама'
    },
    {
      id: 3,
      title: 'Как анализировать локальных конкурентов и находить точки роста',
      excerpt: 'Практический подход к анализу спроса, а не копированию чужих решений.',
      date: '2026',
      href: '/articles/analiz-konkurentov-lokalnyy',
      category: 'Стратегия'
    },
    {
      id: 4,
      title: 'Типовые ошибки в Google Maps, которые стоят бизнесу денег',
      excerpt: 'Почему карточка есть, а заявок нет — и как это исправлять системно.',
      date: '2026',
      href: '/articles/oshibki-google-maps',
      category: 'Геомаркетинг'
    },
    {
      id: 5,
      title: 'Как считать реальную окупаемость геомаркетинга',
      excerpt: 'Методика оценки ROI для офлайн-бизнеса без самообмана.',
      date: '2026',
      href: '/articles/roi-geomarketing',
      category: 'Аналитика'
    },
    {
      id: 6,
      title: 'Сезонные стратегии для beauty-бизнеса: где зарабатываются деньги',
      excerpt: 'Как планировать маркетинг, а не реагировать на спад постфактум.',
      date: '2026',
      href: '/articles/seasonnye-strategii-beauty',
      category: 'Beauty'
    }
  ];

  return (
    <>
      <Head>
        <title>Аналитика и разборы по привлечению клиентов | Андрей Понизов</title>
        <meta
          name="description"
          content="Разборы, аналитика и стратегии привлечения клиентов для локального бизнеса. Без воды, шаблонов и теории ради теории."
        />
        <link rel="canonical" href="https://ponizov-marketing.ru/articles" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs items={breadcrumbsData} />

        {/* INTRO */}
        <section className="mb-14 max-w-4xl">
          <h1 className="text-4xl font-semibold text-[#1A3A2E] mb-6 leading-tight">
            Аналитика, разборы и логика
            <br />
            привлечения клиентов для офлайн-бизнеса
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Здесь я разбираю не инструменты, а решения.
            Почему одни бизнесы получают стабильный поток заявок из карт и рекламы,
            а другие — нет, несмотря на бюджеты.
          </p>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="mb-16 max-w-3xl border-l-4 border-[#E65C00] pl-6">
          <p className="text-gray-700 leading-relaxed">
            Материалы будут полезны владельцам бизнеса и руководителям,
            которые готовы разбираться в цифрах, ограничениях и экономике.
            Если вы ищете «быстрые фишки» — эта библиотека не для вас.
          </p>
        </section>

        {/* FILTERS */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-[#F5C518]/20 text-[#1A3A2E] rounded-full font-medium">
              Все материалы
            </span>
            {['Геомаркетинг', 'Реклама', 'Стратегия', 'Аналитика', 'Beauty'].map(item => (
              <span
                key={item}
                className="px-4 py-2 text-[#1A3A2E]/70 rounded-full hover:bg-gray-100 cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ARTICLES */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {articles.map(article => (
            <article
              key={article.id}
              className="bg-white rounded-xl border border-gray-100 p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[#F5C518]/20 text-sm rounded-full">
                  {article.category}
                </span>
                <span className="text-sm text-gray-400">{article.date}</span>
              </div>

              <h2 className="text-xl font-semibold text-[#1A3A2E] mb-4 leading-snug">
                <Link href={article.href} className="hover:text-[#E65C00] transition-colors">
                  {article.title}
                </Link>
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                {article.excerpt}
              </p>

              <Link
                href={article.href}
                className="text-[#E65C00] font-medium"
              >
                Читать разбор →
              </Link>
            </article>
          ))}
        </div>

        {/* CTA */}
        <section className="py-20 border-t border-gray-100 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#1A3A2E] mb-6">
            Если вам близка такая логика мышления
          </h2>
          <p className="text-gray-700 leading-relaxed mb-10">
            На бесплатном аудите я разберу,
            есть ли у вашего бизнеса потенциал для роста через карты и рекламу
            и имеет ли смысл работать дальше.
          </p>
          <Link
            href="/consultations"
            className="inline-block px-8 py-4 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-xl text-lg hover:bg-[#F7D03A] transition shadow-md"
          >
            Записаться на бесплатный аудит
          </Link>
        </section>
      </div>
    </>
  );
}
