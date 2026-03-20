/**
 * Общая структурированная разметка для Яндекса/Google:
 * Organization, навигация (быстрые ссылки / понимание структуры), FAQPage.
 */
import { NAV_LINKS, SITE_CONFIG, SOCIAL_LINKS } from '../constants/siteConfig';

const ORG_PHONE = '+79841955227';

function siteBase(): string {
  return SITE_CONFIG.url.replace(/\/$/, '');
}

/** Organization — глобально в _document; совпадает с @id на главной */
export function getOrganizationJsonLd(): Record<string, unknown> {
  const base = siteBase();
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${base}/#organization`,
    name: 'Понизов Маркетинг',
    url: `${base}/`,
    logo: `${base}/images/logo.png`,
    sameAs: SOCIAL_LINKS.map((s) => s.href),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: ORG_PHONE,
        contactType: 'customer service',
        areaServed: 'RU',
        availableLanguage: ['Russian'],
      },
    ],
  };
}

/** ItemList + SiteNavigationElement — помогает поиску понять основные разделы */
export function getSiteNavigationJsonLd(): Record<string, unknown> {
  const base = siteBase();
  const links = [{ href: '/', label: 'Главная' }, ...NAV_LINKS];
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Основная навигация',
    numberOfItems: links.length,
    itemListElement: links.map((link, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'SiteNavigationElement',
        name: link.label,
        url: `${base}${link.href}`,
      },
    })),
  };
}

export type FaqLdItem = { q: string; a: string | string[] };

function faqAnswerToText(a: string | string[]): string {
  return Array.isArray(a) ? a.join(' ') : a;
}

/** FAQPage — для блоков вопрос–ответ (быстрый ответ / расширенные сниппеты при релевантности) */
export function buildFaqPageJsonLd(items: FaqLdItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faqAnswerToText(item.a),
      },
    })),
  };
}
