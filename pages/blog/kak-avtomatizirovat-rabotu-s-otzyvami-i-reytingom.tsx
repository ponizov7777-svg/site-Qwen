import article from "../../data/yandex-blog-articles/kak-avtomatizirovat-rabotu-s-otzyvami-i-reytingom.json";
import ImportedYandexBusinessArticle from "../../components/blog/ImportedYandexBusinessArticle";
import type { ArticleEntry } from "../../lib/yandexBusinessBlogTypes";

const data = article as ArticleEntry;

export default function Page() {
  return (
    <ImportedYandexBusinessArticle
      slug="kak-avtomatizirovat-rabotu-s-otzyvami-i-reytingom"
      title={data.title}
      description={data.description}
      bodyHtml={data.bodyHtml}
    />
  );
}
