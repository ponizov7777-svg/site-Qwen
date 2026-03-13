// pages/yuridicheskie/consent.tsx
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';

const breadcrumbsData = [
  { label: 'Главная', href: '/' },
  { label: 'Юридические', href: '/yuridicheskie' },
  { label: 'Согласие на обработку персональных данных', href: '/yuridicheskie/consent' },
];

export default function ConsentPage() {
  return (
    <>
      <Head>
        <title>Согласие на обработку персональных данных | Андрей Понизов</title>
        <meta
          name="description"
          content="Согласие на обработку персональных данных для сайта ponizov-marketing.ru."
        />
        <link rel="canonical" href="https://ponizov-marketing.ru/yuridicheskie/consent" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs items={breadcrumbsData} />

        <article className="max-w-3xl mx-auto">

          {/* INTRO */}
          <section className="py-12 md:py-20">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6 text-[#1A3A2E] lc-styled-text__text lc-styled-text__text_align_left">
              Согласие на обработку персональных данных
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Настоящим я, заполняя формы на сайте https://ponizov-marketing.ru и/или направляя обращение иным способом, свободно, своей волей и в своём интересе выражаю согласие самозанятому Понизову Андрею Анатольевичу (г. Санкт-Петербург, e-mail: [твой e-mail]) на обработку моих персональных данных на условиях, указанных ниже.
            </p>
          </section>

          {/* SECTION 1 */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#1A3A2E] lc-styled-text__text lc-styled-text__text_align_left">
              Цели обработки:
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>обратная связь по моему запросу;</li>
              <li>ведение переписки и уточнение деталей обращения;</li>
              <li>подготовка и проведение консультаций, маркетингового аудита и иных услуг;</li>
              <li>обеспечение функционирования и безопасности Сайта, а также анализ его работы с использованием сервисов веб-аналитики.</li>
            </ul>
          </section>

          {/* SECTION 2 */}
          <section className="space-y-6 mt-16">
            <h2 className="text-2xl font-semibold text-[#1A3A2E] lc-styled-text__text lc-styled-text__text_align_left">
              Перечень данных:
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>ФИО (имя), указанные в форме;</li>
              <li>контактные данные (e-mail, номер телефона — при их указании);</li>
              <li>содержание моего обращения;</li>
              <li>технические идентификаторы (IP-адрес, сведения о браузере и устройстве, файлы cookie) — при взаимодействии с Сайтом.</li>
            </ul>
          </section>

          {/* SECTION 3 */}
          <section className="space-y-6 mt-16">
            <h2 className="text-2xl font-semibold text-[#1A3A2E] lc-styled-text__text lc-styled-text__text_align_left">
              Действия с персональными данными:
            </h2>

            <p className="text-gray-700 leading-relaxed">
              сбор, запись, систематизация, накопление, хранение, уточнение (обновление, изменение), использование, передача (в том числе поручение обработки третьим лицам на основании договора), блокирование, удаление, уничтожение; обработка с использованием средств автоматизации и без их использования.
            </p>
          </section>

          {/* SECTION 4 */}
          <section className="space-y-6 mt-16">
            <h2 className="text-2xl font-semibold text-[#1A3A2E] lc-styled-text__text lc-styled-text__text_align_left">
              Срок обработки:
            </h2>

            <p className="text-gray-700 leading-relaxed">
              до достижения целей обработки или до отзыва мной согласия, если иные сроки не установлены законодательством Российской Федерации.
            </p>
          </section>

          {/* SECTION 5 */}
          <section className="space-y-6 mt-16">
            <h2 className="text-2xl font-semibold text-[#1A3A2E] lc-styled-text__text lc-styled-text__text_align_left">
              Отзыв согласия:
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Я вправе отозвать своё согласие в любой момент, направив заявление на e-mail: [твой e-mail] или через форму обратной связи на сайте https://ponizov-marketing.ru/. При отзыве согласия обработка моих персональных данных прекращается, а данные уничтожаются в срок до 30 календарных дней при отсутствии иных правовых оснований для обработки.
            </p>
          </section>

          {/* SECTION 6 */}
          <section className="space-y-6 mt-16">
            <h2 className="text-2xl font-semibold text-[#1A3A2E] lc-styled-text__text lc-styled-text__text_align_left">
              Права субъекта персональных данных:
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Мне разъяснены права субъекта персональных данных, предусмотренные Законом № 152-ФЗ.
            </p>
          </section>

          {/* SECTION 7 */}
          <section className="space-y-6 mt-16">
            <h2 className="text-2xl font-semibold text-[#1A3A2E]">
              Ознакомление с Политикой:
            </h2>

            <p className="text-gray-700 leading-relaxed">
              С содержанием Политики в отношении обработки персональных данных, размещённой на странице https://ponizov-marketing.ru/privacy-policy, я ознакомлен(а).
            </p>
          </section>

        </article>
      </main>
    </>
  );
}