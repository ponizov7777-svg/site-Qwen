// components/Breadcrumbs.tsx
import Head from 'next/head'; // Для вставки JSON-LD
import Link from 'next/link';
import { Fragment } from 'react';

interface BreadcrumbItem {
  label: string;
  href: string; // href обязателен для всех элементов, кроме последнего
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]; // Массив передается извне (например, из getInitialProps страницы)
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Фильтруем пустые элементы и ограничиваем глубину (опционально, можно и на уровне передачи данных)
  const filteredItems = items.filter(item => item.label && item.href).slice(0, 4);

  // Если только главная или вообще пусто
  if (filteredItems.length < 1) {
    return null;
  }

  // Генерация JSON-LD
  const generateJsonLd = () => {
    // Предполагаем, что сайт находится на https://ponizov-marketing.ru/
    // Это можно вынести в конфиг, если домен может меняться
    const siteUrl = 'https://ponizov-marketing.ru';

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: filteredItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        item: `${siteUrl}${item.href}`, // Важно: полный URL
      })),
    };

    return JSON.stringify(jsonLd);
  };

  return (
    <>
      {/* Вставка JSON-LD в <head> */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateJsonLd() }}
        />
      </Head>

      <nav
        aria-label="Хлебные крошки"
        className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8" // Оставляем отступы, но можно адаптировать
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[#1A3A2E]/80"> {/* Цвета из нового кода */}
          {filteredItems.map((item, index) => {
            const isLast = index === filteredItems.length - 1;
            const position = index + 1;

            return (
              <Fragment key={`${item.href}-${index}`}> {/* Лучше использовать href в ключе */}
                <li
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                  className="flex items-center"
                >
                  {isLast ? (
                    // Последний элемент не должен быть ссылкой
                    <span
                      itemProp="name"
                      className="font-medium text-[#1A3A2E] truncate max-w-50 md:max-w-none" // Цвет из нового кода
                    >
                      {item.label}
                    </span>
                  ) : (
                    // Все остальные - ссылки
                    <Link
                      href={item.href}
                      itemProp="item" // itemProp="item" для ссылки на страницу
                      className="hover:text-[#E65C00] transition-colors duration-200 truncate max-w-50 md:max-w-none" // Цвет из нового кода
                      aria-label={`Перейти к странице ${item.label}`}
                    >
                      <span itemProp="name">{item.label}</span> {/* Имя внутри ссылки */}
                    </Link>
                  )}
                  {/* Позиция элемента */}
                  <meta itemProp="position" content={String(position)} />
                </li>

                {/* Разделитель (иконка стрелочки), если не последний элемент */}
                {!isLast && (
                  <li>
                    <svg
                      className="w-4 h-4 text-[#E65C00]" // Цвет из нового кода
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </li>
                )}
              </Fragment>
            );
          })}
        </ol>

        {/* Скрытое описание для скринридеров */}
        <div className="sr-only" aria-live="polite">
          Вы находитесь на странице: {filteredItems[filteredItems.length - 1]?.label || ''}
        </div>
      </nav>
    </>
  );
}