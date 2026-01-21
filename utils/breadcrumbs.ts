// utils/breadcrumbs.ts
export type BreadcrumbItem = {
  label: string;
  href: string;
};

type PageConfig = {
  label: string;
};

const PAGE_CONFIG: { [key: string]: PageConfig } = {
  services: { label: 'Услуги и цены' },
  geomarketing: { label: 'Геомаркетинг' },
  cases: { label: 'Кейсы' },
  articles: { label: 'Полезные статьи' },
  consultations: { label: 'Консультации' },
  about: { label: 'Обо мне' },
  contacts: { label: 'Контакты' },
};

export function buildBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Главная', href: '/' },
  ];

  let currentPath = '';
  for (const segment of segments) {
    const page = PAGE_CONFIG[segment];
    if (!page) continue;
    currentPath += `/${segment}`;
    breadcrumbs.push({
      label: page.label,
      href: currentPath,
    });
  }

  return breadcrumbs;
}

export function createBreadcrumbJsonLd(
  breadcrumbs: BreadcrumbItem[],
  siteUrl: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: `${siteUrl}${crumb.href}`,
    })),
  };
}