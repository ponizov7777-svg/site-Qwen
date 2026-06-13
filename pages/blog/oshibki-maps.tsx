import article from "../../data/yandex-blog-articles/oshibki-maps.json";
import ImportedYandexBusinessArticle from "../../components/blog/ImportedYandexBusinessArticle";
import type { ArticleEntry } from "../../lib/yandexBusinessBlogTypes";

const data = article as ArticleEntry;

export default function Page() {
  return (
    <ImportedYandexBusinessArticle
      slug="oshibki-maps"
      title={data.title}
      description={data.description}
      bodyHtml={data.bodyHtml}
    />
  );
}
