import Head from 'next/head';
import Link from 'next/link';
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useEffect, useRef } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import CardLinkCTA from '../../components/CardLinkCTA';
import { maxUrlWithPrefilledText } from '../../constants/links';
import { trackMetrikaGoal, trackMAXClick, type PageType } from '../../lib/metrics';
import { initScrollDepthTracking, observeBlockDwell } from '../../lib/metrics-content';
import { CORE_TASKS, SERVICES, getServiceBySlug, type ServiceCatalogItem } from '../../lib/servicesCatalog';

const container = 'max-w-7xl mx-auto px-4';
const btnPrimary =
  'inline-flex items-center justify-center px-6 py-2.5 bg-[#F5C518] text-[#1A3A2E] font-medium rounded-lg text-sm md:text-base border border-[#E0B800] hover:bg-[#F7D03A] hover:border-[#F0C000] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C518]/60 focus-visible:ring-offset-2';
const btnSecondary =
  'inline-flex items-center justify-center px-6 py-2.5 bg-white text-[#1A3A2E] font-medium rounded-lg text-sm md:text-base border border-[#E5E7EB] hover:bg-gray-50 hover:border-[#D1D5DB] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E65C00]/40 focus-visible:ring-offset-2';
const listItem = 'flex items-start text-gray-700';
const listBullet = 'text-[#E65C00] mr-3 mt-1 text-xl font-bold shrink-0';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function ServiceDetailPage({ service }: Props) {
  const pageType: PageType = 'services';
  const detailRef = useRef<HTMLElement | null>(null);
  const pageSlug = `/uslugi/${service.slug}`;
  const telegramHref = maxUrlWithPrefilledText(service.maxText);

  const breadcrumbsData = [
    { label: 'Главная', href: '/' },
    { label: 'Услуги и цены', href: '/uslugi' },
    { label: service.title, href: pageSlug },
  ];

  useEffect(() => {
    if (!detailRef.current) return;
    observeBlockDwell(detailRef.current, {
      goalId: 'micro_content_service_detail_dwell_10s',
      dwellMs: 10000,
      params: {
        page_type: pageType,
        page_slug: pageSlug,
        block_id: 'service_detail',
        service_id: service.id,
      },
    });
  }, [pageType, pageSlug, service.id]);

  useEffect(() => {
    const cleanup = initScrollDepthTracking({
      page_type: pageType,
      page_slug: pageSlug,
    });
    return cleanup;
  }, [pageType, pageSlug]);

  const handleCtaClick = () => {
    trackMetrikaGoal('micro_interest_service_detail_click', {
      page_type: pageType,
      page_slug: pageSlug,
      block_id: 'service_detail',
      service_id: service.id,
    });
    trackMAXClick({
      page_type: pageType,
      page_slug: pageSlug,
      block_id: 'service_detail',
      service_id: service.id,
      element_id: `service_${service.id}_cta`,
    });
  };

  return (
    <>
      <Head>
        <title>{`${service.title} | Услуги и цены`}</title>
        <meta name="description" content={service.metaDescription} />
        <link rel="canonical" href={`https://ponizov-marketing.ru${pageSlug}`} />
      </Head>

      <div className={container}>
        <Breadcrumbs items={breadcrumbsData} />

        <section className="py-12" ref={detailRef}>
          <div className="rounded-3xl border border-[#F5C518]/35 bg-gradient-to-br from-[#FFFDF2] via-white to-[#FFF5CC] p-8 shadow-2xl md:p-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#B77900]">
              {service.kicker}
            </p>
            <h1 className="mb-6 text-2xl md:text-4xl font-semibold leading-tight text-[#1E2837]">
              {service.title}
            </h1>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">{service.detailText}</p>
            <p className="mb-8 leading-relaxed text-gray-700">{service.resultText}</p>

            <div className="mb-8 rounded-2xl border border-[#F5C518]/45 bg-white/75 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#B77900]">Стоимость</p>
              <div className="mt-2 flex items-end gap-3">
                <p className="text-3xl font-bold text-[#1A3A2E]">{service.price}</p>
                {service.oldPrice ? (
                  <span className="mb-1 text-sm text-gray-400 line-through">{service.oldPrice}</span>
                ) : null}
              </div>
              <p className="mt-1 text-sm text-gray-600">{service.priceNote}</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={telegramHref}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className={`${btnPrimary} w-full`}
                onClick={handleCtaClick}
              >
                {service.ctaLabel}
              </a>
              <Link href="/uslugi" className={`${btnSecondary} w-full`}>
                ← Все услуги
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="mb-6 text-2xl md:text-4xl font-semibold text-[#1E2837]">Что входит в услугу</h2>
          <div className="rounded-2xl border border-white/50 bg-white/70 p-8 shadow-xl">
            <ul className="space-y-3">
              {CORE_TASKS.map((task) => {
                const included = service.includedTasks.includes(task.id);
                return (
                  <li key={task.id} className={listItem}>
                    <span className={`${listBullet} ${included ? 'text-[#16A34A]' : 'text-gray-300'}`}>
                      {included ? '✓' : '•'}
                    </span>
                    <span className={included ? 'text-gray-800' : 'text-gray-400 line-through'}>
                      {task.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {service.monthlyTasks?.length ? (
          <section className="py-12">
            <h2 className="mb-6 text-2xl md:text-4xl font-semibold text-[#1E2837]">Что делаю каждый месяц</h2>
            <div className="rounded-2xl border border-white/50 bg-white/70 p-8 shadow-xl">
              <ul className="space-y-4">
                {service.monthlyTasks.map((task) => (
                  <li key={task} className={listItem}>
                    <span className={`${listBullet} text-[#16A34A]`}>✓</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        <section className="py-20">
          <CardLinkCTA
            pageType={pageType}
            pageSlug={pageSlug}
            blockId="card_link_cta_service"
            formId="card_link_cta_service"
          />
        </section>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: SERVICES.map((service) => ({ params: { slug: service.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ service: ServiceCatalogItem }> = async ({ params }) => {
  const slug = typeof params?.slug === 'string' ? params.slug : '';
  const service = getServiceBySlug(slug);

  if (!service) {
    return { notFound: true };
  }

  return {
    props: { service },
  };
};
