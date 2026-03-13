// pages/yridicheskie/privacy-policy.tsx
import Head from 'next/head';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';

const breadcrumbsData = [
  { label: 'Главная', href: '/' },
  { label: 'Политика конфиденциальности', href: '/privacy-policy' },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Политика конфиденциальности для ponizov-marketing.ru | Андрей Понизов</title>
        <meta
          name="description"
          content="Политика в отношении обработки персональных данных для сайта ponizov-marketing.ru."
        />
        <link rel="canonical" href="https://ponizov-marketing.ru/privacy-policy" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs items={breadcrumbsData} />

        <article className="max-w-3xl mx-auto">

          {/* INTRO */}
          <section className="py-12 md:py-20">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6 text-[#1A3A2E] lc-styled-text__text lc-styled-text__text_align_left">
              Политика конфиденциальности для ponizov-marketing.ru
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Политика в отношении обработки персональных данных (Политика конфиденциальности)
            </p>

            <p className="text-gray-700 leading-relaxed">
              Редакция от: 07.02.2026
            </p>

            <p className="text-gray-700 leading-relaxed">
              Оператор: Плательщик НПД Понизов Андрей Анатольевич
            </p>

            <p className="text-gray-700 leading-relaxed">
              Сайт: https://ponizov-marketing.ru
            </p>

            <p className="text-gray-700 leading-relaxed">
              Город: Санкт-Петербург
            </p>

            <p className="text-gray-700 leading-relaxed">
              Эл. почта для обращений субъектов ПДн: andrey-ponizovv@yandex.ru
            </p>
          </section>

          {/* SECTION 1 */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#1A3A2E] lc-styled-text__text lc-styled-text__text_align_left">
              1. Назначение и область действия
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Настоящая Политика описывает, как обрабатываются персональные данные посетителей сайта https://ponizov-marketing.ru и связанных с ним страниц и форм (далее — «Сайт»). Политика является общедоступным документом и применяется ко всем случаям получения персональных данных через Сайт.
            </p>
          </section>

          {/* SECTION 2 */}
          <section className="space-y-6 mt-16">
            <h2 className="text-2xl font-semibold text-[#1A3A2E] lc-styled-text__text lc-styled-text__text_align_left">
              2. Термины и правовые основания
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Термины используются в значениях, определённых Законом № 152-ФЗ «О персональных данных» и иными применимыми актами законодательства Российской Федерации.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Правовые основания обработки: Закон № 152-ФЗ и иные НПА РФ; действия, направленные на заключение и исполнение договоров с субъектами; согласие субъекта персональных данных — где это требуется; законные интересы Оператора при соблюдении прав субъектов.
            </p>
          </section>

          {/* SECTION 3 */}
          <section className="space-y-6 mt-16">
            <h2 className="text-2xl font-semibold text-[#1A3A2E] lc-styled-text__text lc-styled-text__text_align_left">
              3. Принципы обработки и локализация
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Обработка персональных данных ведётся законно, справедливо и соразмерно заявленным целям. Запись, систематизация, накопление, хранение, уточнение и извлечение персональных данных граждан РФ при сборе через Интернет осуществляются с использованием баз данных на территории Российской Федерации (локализация).
            </p>
          </section>

          {/* SECTION 4 */}
          <section className="space-y-6 mt-16">
            <h2 className="text-2xl font-semibold text-[#1A3A2E] lc-styled-text__text lc-styled-text__text_align_left">
              4. Категории субъектов и обрабатываемые данные
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Субъектами персональных данных являются:
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>посетители Сайта;</li>
              <li>лица, заполняющие формы обратной связи, заявки на консультацию и иные формы на Сайте.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              Оператор обрабатывает следующие категории данных:
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>данные, которые вы добровольно указываете в формах на Сайте: имя; контактный телефон (при его указании); адрес электронной почты (e-mail) (при его указании); содержание обращения или комментария; иные сведения, которые вы сообщаете по своему усмотрению;</li>
              <li>технические идентификаторы и события: IP-адрес, тип/версия/язык браузера, сведения об устройстве и операционной системе, реферер (адрес предыдущей страницы), дата и время доступа, маршруты перемещения по страницам;</li>
              <li>файлы cookie и иные идентификаторы (технические/обязательные, аналитические; маркетинговые — при их использовании и наличии согласия).</li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              Специальные категории персональных данных и биометрические персональные данные через Сайт не запрашиваются и не обрабатываются, если иное прямо не следует из ваших действий и отдельного информирования.
            </p>
          </section>

          {/* SECTION 5 */}
          <section className="space-y-6 mt-16">
            <h2 className="text-2xl font-semibold text-[#1A3A2E] lc-styled-text__text lc-styled-text__text_align_left">
              5. Цели обработки и правовые основания
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Персональные данные обрабатываются для следующих целей:
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>обратная связь по вашим обращениям, ответ на вопросы, уточнение деталей запроса — законный интерес Оператора обеспечить коммуникацию и качество сервиса; при необходимости — действия до заключения договора;</li>
              <li>подготовка и проведение консультаций, маркетингового аудита, обсуждение и оказание услуг в области маркетинга и продвижения — законный интерес и/или исполнение договора;</li>
              <li>информирование о работе Сайта и услугах, направление материалов по тематике маркетинга и продвижения — при наличии вашего согласия, которое может быть отозвано в любой момент;</li>
              <li>веб-аналитика, улучшение работы Сайта, удобства использования и безопасность (в том числе с использованием сервисов веб-аналитики, таких как Яндекс.Метрика и Google Analytics) — законный интерес Оператора обеспечить работоспособность и защиту Сайта; для аналитических/маркетинговых cookie — согласие;</li>
              <li>исполнение требований законодательства РФ, защита прав и законных интересов Оператора (включая досудебное и судебное урегулирование).</li>
            </ul>
          </section>

          {/* SECTION 6 */}
          <section className="space-y-6 mt-16">
            <h2 className="text-2xl font-semibold text-[#1A3A2E] lc-styled-text__text lc-styled-text__text_align_left">
              6. Файлы cookie и аналогичные технологии
            </h2>

            <p className="text-gray-700 leading-relaxed">
              На Сайте применяются файлы cookie и аналогичные технологии для обеспечения технической работы Сайта, сохранения пользовательских настроек и проведения веб-аналитики.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Необязательные (аналитические и, при их использовании, маркетинговые) cookie применяются при наличии вашего согласия, которое может быть получено через соответствующий интерфейс или настройки браузера.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Вы можете ограничить или удалить cookie в настройках браузера; в этом случае часть функций Сайта может работать некорректно.
            </p>
          </section>

          {/* SECTION 7 */}
          <section className="space-y-6 mt-16">
            <h2 className="text-2xl font-semibold text-[#1A3A2E] lc-styled-text__text lc-styled-text__text_align_left">
              7. Источники данных и способы обработки
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Персональные данные предоставляются вами при заполнении форм на Сайте, переписке, телефонном общении, а также формируются автоматически при использовании Сайта (журналы событий, cookie, инструменты веб-аналитики).
            </p>

            <p className="text-gray-700 leading-relaxed">
              Обработка ведётся смешанным способом: с использованием средств автоматизации и без их использования.
            </p>
          </section>

          {/* SECTION 8 */}
          <section className="space-y-6 mt-16">
            <h2 className="text-2xl font-semibold text-[#1A3A2E] lc-styled-text__text lc-styled-text__text_align_left">
              8. Передача третьим лицам и порученная обработка
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Передача персональных данных третьим лицам возможна при наличии правового основания и только в объёме, необходимом для достижения указанных целей.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Персональные данные могут передаваться:
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>хостинг-провайдеру и иным лицам, обеспечивающим размещение и функционирование Сайта;</li>
              <li>сервисам веб-аналитики (в том числе Яндекс.Метрика, Google Analytics), которые обрабатывают обезличенные и/или персональные данные в рамках своих политик конфиденциальности;</li>
              <li>сервисам, используемым для обработки обращений и задач (Task Manager и аналогичные сервисы);</li>
              <li>мессенджерам и платформам (например, Telegram), через которые вы самостоятельно вступаете в контакт с Оператором, в пределах функционала таких сервисов.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              При поручении обработки персональных данных третьим лицам Оператор обеспечивает заключение необходимых договоров и требует соблюдения конфиденциальности и защиты персональных данных.
            </p>
          </section>

          {/* SECTION 9 */}
          <section className="space-y-6 mt-16">
            <h2 className="text-2xl font-semibold text-[#1A3A2E] lc-styled-text__text lc-styled-text__text_align_left">
              9. Трансграничная передача
            </h2>

            <p className="text-gray-700 leading-relaxed">
              На дату настоящей редакции Оператор не осуществляет трансграничную передачу персональных данных в смысле ст. 12 Закона № 152-ФЗ. В случае изменения данного подхода Политика будет обновлена, а требования законодательства — соблюдены.
            </p>
          </section>

          {/* SECTION 10 */}
          <section className="space-y-6 mt-16">
            <h2 className="text-2xl font-semibold text-[#1A3A2E] lc-styled-text__text lc-styled-text__text_align_left">
              10. Права субъектов и порядок реализации
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Вы вправе:
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>получать информацию об обработке ваших персональных данных;</li>
              <li>требовать уточнения, блокирования или уничтожения персональных данных при наличии оснований;</li>
              <li>отозвать ранее данное согласие на обработку персональных данных;</li>
              <li>обжаловать действия или бездействие Оператора в Роскомнадзор или суд;</li>
              <li>реализовывать иные права, предусмотренные законодательством Российской Федерации.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              Срок реакции на обращения по персональным данным составляет, как правило, до 10 рабочих дней с возможным продлением не более чем на 5 рабочих дней при направлении мотивированного уведомления. Уничтожение или блокировка персональных данных при достижении целей обработки или отзыве согласия осуществляется, как правило, в срок до 30 дней, если иные сроки не установлены законом или договором.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Обращения по вопросам обработки персональных данных можно направить:
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>по e-mail: andrey-ponizovv@yandex.ru;</li>
              <li>через форму обратной связи на Сайте;</li>
              <li>через мессенджер Telegram: https://t.me/ponizovandrey.</li>
            </ul>
          </section>

          {/* SECTION 11 */}
          <section className="space-y-6 mt-16">
            <h2 className="text-2xl font-semibold text-[#1A3A2E] lc-styled-text__text lc-styled-text__text_align_left">
              11. Хранение и защита персональных данных
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Персональные данные хранятся на электронных носителях с ограничением доступа. Оператор принимает организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий.
            </p>
          </section>

          {/* SECTION 12 */}
          <section className="space-y-6 mt-16">
            <h2 className="text-2xl font-semibold text-[#1A3A2E] lc-styled-text__text lc-styled-text__text_align_left">
              12. Изменение Политики
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Политика вступает в силу с момента её размещения на Сайте и действует до замены новой редакцией. Актуальная версия Политики всегда доступна по адресу: https://ponizov-marketing.ru/yridicheskie/privacy-policy
            </p>
          </section>

          {/* SECTION 13 */}
          <section className="space-y-6 mt-16">
            <h2 className="text-2xl font-semibold text-[#1A3A2E]">
              Согласие на обработку персональных данных для форм на сайте
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Согласие на обработку персональных данных
            </p>

            <p className="text-gray-700 leading-relaxed">
              Настоящим я, заполняя формы на сайте https://ponizov-marketing.ru и/или направляя обращение иным способом, свободно, своей волей и в своём интересе выражаю согласие самозанятому Понизову Андрею Анатольевичу (г. Санкт-Петербург, e-mail: andrey-ponizovv@yandex.ru) на обработку моих персональных данных на условиях, указанных ниже.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Цели обработки:
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>обратная связь по моему запросу;</li>
              <li>ведение переписки и уточнение деталей обращения;</li>
              <li>подготовка и проведение консультаций, маркетингового аудита и иных услуг;</li>
              <li>обеспечение функционирования и безопасности Сайта, а также анализ его работы с использованием сервисов веб-аналитики.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              Перечень данных:
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>ФИО (имя), указанные в форме;</li>
              <li>контактные данные (e-mail, номер телефона — при их указании);</li>
              <li>содержание моего обращения;</li>
              <li>технические идентификаторы (IP-адрес, сведения о браузере и устройстве, файлы cookie) — при взаимодействии с Сайтом.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              Действия с персональными данными:
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>сбор, запись, систематизация, накопление, хранение, уточнение (обновление, изменение), использование, передача (в том числе поручение обработки третьим лицам на основании договора), блокирование, удаление, уничтожение;</li>
              <li>обработка с использованием средств автоматизации и без их использования.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              Срок обработки:
            </p>

            <p className="text-gray-700 leading-relaxed">
              до достижения целей обработки или до отзыва мной согласия, если иные сроки не установлены законодательством Российской Федерации.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Отзыв согласия:
            </p>

            <p className="text-gray-700 leading-relaxed">
              Я вправе отозвать своё согласие в любой момент, направив заявление на e-mail: andrey-ponizovv@yandex.ru или через форму обратной связи на сайте https://ponizov-marketing.ru/. При отзыве согласия обработка моих персональных данных прекращается, а данные уничтожаются в срок до 30 календарных дней при отсутствии иных правовых оснований для обработки.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Мне разъяснены права субъекта персональных данных, предусмотренные Законом № 152-ФЗ.
            </p>

            <p className="text-gray-700 leading-relaxed">
              С содержанием Политики в отношении обработки персональных данных, размещённой на странице https://ponizov-marketing.ru/privacy-policy, я ознакомлен(а).
            </p>
          </section>

        </article>
      </main>
    </>
  );
}