import Link from "next/link";
import {
  BLOG_MOBILE_SERVICE_SLUGS,
  SERVICES,
  type ServiceCatalogItem,
} from "../../lib/servicesCatalog";

function ServiceSidebarCard({ service }: { service: ServiceCatalogItem }) {
  return (
    <Link
      href={`/uslugi/${service.slug}`}
      className={`group block rounded-xl border p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
        service.featured
          ? "border-[#F5C518]/45 bg-gradient-to-br from-[#FFFDF2] to-[#FFF5CC] shadow-md ring-1 ring-[#F5C518]/25"
          : "border-white/60 bg-white/80 shadow-sm hover:border-[#E65C00]/25"
      }`}
    >
      <div className="mb-2 flex items-start justify-between gap-2">
        <p
          className={`text-[0.65rem] font-semibold uppercase tracking-[0.12em] ${
            service.featured ? "text-[#B77900]" : "text-[#E65C00]"
          }`}
        >
          {service.kicker}
        </p>
        {service.priceBadge ? (
          <span className="shrink-0 rounded-full border border-[#F0C000] bg-[#F5C518] px-2 py-0.5 text-[0.65rem] font-semibold text-[#1A3A2E]">
            {service.priceBadge}
          </span>
        ) : null}
      </div>
      <h3 className="text-sm font-semibold leading-snug text-[#1A3A2E] group-hover:text-[#E65C00]">
        {service.title}
      </h3>
      <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
        {service.oldPrice ? (
          <span className="whitespace-nowrap text-xs text-gray-400 line-through tabular-nums">
            {service.oldPrice}
          </span>
        ) : null}
        <span className="whitespace-nowrap text-sm font-bold text-[#1A3A2E] tabular-nums">
          {service.price}
        </span>
        <span className="text-xs text-gray-500">{service.priceNote}</span>
      </div>
    </Link>
  );
}

export function BlogArticleServicesSidebar() {
  return (
    <aside
      className="hidden lg:block lg:sticky lg:top-20 lg:self-start"
      aria-labelledby="blog-services-sidebar-heading"
    >
      <div className="glass-card overflow-hidden rounded-2xl border-white/50 bg-white/70 p-5 shadow-xl backdrop-blur-xl">
        <h2
          id="blog-services-sidebar-heading"
          className="mb-1 text-lg font-semibold text-[#1A3A2E]"
        >
          Услуги
        </h2>
        <p className="mb-4 text-sm text-gray-600">
          Продвижение в Яндекс Картах под вашу задачу
        </p>
        <div className="space-y-3">
          {SERVICES.map((service) => (
            <ServiceSidebarCard key={service.slug} service={service} />
          ))}
        </div>
        <Link
          href="/uslugi"
          className="mt-4 block text-center text-sm font-medium text-[#E65C00] hover:underline"
        >
          Все услуги и цены →
        </Link>
      </div>
    </aside>
  );
}

function MobileServiceChip({ service }: { service: ServiceCatalogItem }) {
  return (
    <Link
      href={`/uslugi/${service.slug}`}
      className={`flex min-w-0 flex-1 flex-col rounded-lg border px-2.5 py-2 transition-colors ${
        service.featured
          ? "border-[#F5C518]/50 bg-[#FFF8DC]"
          : "border-white/70 bg-white/90"
      }`}
    >
      <span className="truncate text-[0.65rem] font-semibold uppercase tracking-wide text-[#E65C00]">
        {service.kicker}
      </span>
      <span className="mt-0.5 whitespace-nowrap text-xs font-semibold text-[#1A3A2E] tabular-nums">
        {service.price}
      </span>
    </Link>
  );
}

export function BlogArticleServicesMobileBar() {
  const mobileServices = BLOG_MOBILE_SERVICE_SLUGS.map((slug) =>
    SERVICES.find((service) => service.slug === slug)
  ).filter((service): service is ServiceCatalogItem => Boolean(service));

  if (mobileServices.length === 0) return null;

  return (
    <aside
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/60 bg-white/95 px-3 py-2.5 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] backdrop-blur-xl pb-[max(0.625rem,env(safe-area-inset-bottom))] lg:hidden"
      aria-label="Услуги"
    >
      <div className="mx-auto flex max-w-7xl gap-2">
        {mobileServices.map((service) => (
          <MobileServiceChip key={service.slug} service={service} />
        ))}
        <Link
          href="/uslugi"
          className="flex shrink-0 items-center justify-center rounded-lg border border-[#E65C00]/30 bg-[#FFF5EB] px-3 text-xs font-semibold text-[#E65C00]"
        >
          Все
        </Link>
      </div>
    </aside>
  );
}
