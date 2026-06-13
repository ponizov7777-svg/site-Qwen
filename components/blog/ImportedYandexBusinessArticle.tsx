import Head from "next/head";
import Link from "next/link";
import Breadcrumbs from "../Breadcrumbs";
import BlogArticleScrollTracker from "../BlogArticleScrollTracker";
import { getYandexBusinessBlogListItems } from "../../lib/yandexBusinessBlog";
import type { ArticleEntry } from "../../lib/yandexBusinessBlogTypes";
import BlogPostCard from "./BlogPostCard";
import BlogArticleJsonLd from "./BlogArticleJsonLd";

const container = "max-w-7xl mx-auto px-4";
const glassCard =
  "glass-card backdrop-blur-xl bg-white/70 border-white/50 shadow-xl p-6 md:p-10 rounded-2xl overflow-hidden";
const btnSecondary =
  "inline-flex px-8 py-4 bg-white/90 backdrop-blur-xl border-2 border-[#E65C00]/50 text-[#1A3A2E] font-semibold rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-black/10 hover:-translate-y-0.5 transition-all duration-300";

function shortBreadcrumbLabel(title: string) {
  const t = title.split(/[—–|]/)[0]?.trim() ?? title;
  return t.length > 48 ? `${t.slice(0, 45)}…` : t;
}

export type ImportedYandexBusinessArticleProps = ArticleEntry & {
  slug: string;
};

export default function ImportedYandexBusinessArticle({
  slug,
  title,
  description,
  bodyHtml,
}: ImportedYandexBusinessArticleProps) {
  const instagramLegalNoteText =
    "Платформа принадлежит компании Meta Platforms Inc., которая признана экстремистской и запрещена на территории Российской Федерации.";
  const hasInstagramMention = /(?:Instagram|Инстаграм)\*?/i.test(bodyHtml);
  const shouldAddInstagramFootnote = hasInstagramMention;
  const renderedBodyHtml = shouldAddInstagramFootnote
    ? bodyHtml.replace(
        /((?:Instagram|Инстаграм)\*?)/gi,
        '$1<sup class="instagram-footnote-mark" aria-hidden="true">†</sup>'
      )
    : bodyHtml;

  const canonical = `https://ponizov-marketing.ru/blog/${slug}`;
  const breadcrumbLabel = shortBreadcrumbLabel(title);
  const relatedPosts = getYandexBusinessBlogListItems()
    .filter((a) => a.href !== `/blog/${slug}`)
    .slice(0, 6);

  const breadcrumbsData = [
    { label: "Главная", href: "/" },
    { label: "Статьи", href: "/blog" },
    { label: breadcrumbLabel, href: `/blog/${slug}` },
  ];

  return (
    <>
      <Head>
        <title>{`${title} | Андрей Понизов`}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <BlogArticleJsonLd
          slug={slug}
          headline={title}
          description={description}
          datePublished="2026-04-16"
        />
      </Head>

      <BlogArticleScrollTracker pageType="blog" pageSlug={`/blog/${slug}`} />

      <div className={container}>
        <Breadcrumbs items={breadcrumbsData} />

        <article className="pb-12 pt-4">
          <div className="overflow-x-auto">
            <div className={glassCard}>
              <div
                className="blog-imported-html max-w-4xl mx-auto"
                dangerouslySetInnerHTML={{ __html: renderedBodyHtml }}
              />
              {shouldAddInstagramFootnote && (
                <p className="instagram-legal-note max-w-4xl mx-auto mt-5">
                  <span className="instagram-footnote-mark">†</span>{" "}
                  {instagramLegalNoteText}
                </p>
              )}
            </div>
          </div>

          {relatedPosts.length > 0 && (
            <section className="mt-12 md:mt-16" aria-labelledby="related-posts-heading">
              <h2
                id="related-posts-heading"
                className="text-2xl md:text-3xl font-semibold text-[#1A3A2E] mb-8 text-center md:text-left"
              >
                Другие материалы
              </h2>
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {relatedPosts.map((article) => (
                  <BlogPostCard
                    key={article.id}
                    title={article.title}
                    excerpt={article.excerpt}
                    href={article.href}
                    date={article.date}
                    category={article.category}
                  />
                ))}
              </div>
            </section>
          )}

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/" className={btnSecondary}>
              На главную
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
