// components/BreadcrumbsJsonLd.tsx
import { useRouter } from 'next/router';
import { buildBreadcrumbs, createBreadcrumbJsonLd } from '../utils/breadcrumbs';

const SITE_URL = 'https://ponizov-marketing.ru'; 

export default function BreadcrumbsJsonLd() {
  const router = useRouter();
  const breadcrumbs = buildBreadcrumbs(router.pathname);

  if (breadcrumbs.length <= 1) return null;

  const jsonLd = createBreadcrumbJsonLd(breadcrumbs, SITE_URL);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}