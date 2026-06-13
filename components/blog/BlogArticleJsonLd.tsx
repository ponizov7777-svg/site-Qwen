import { buildArticleJsonLd, type ArticleJsonLdOptions } from '../../lib/structured-data';

export default function BlogArticleJsonLd(props: ArticleJsonLdOptions) {
  const jsonLd = buildArticleJsonLd(props);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
