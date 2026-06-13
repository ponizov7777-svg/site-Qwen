import article from "../../data/yandex-blog-articles/context-offline.json";
import ImportedYandexBusinessArticle from "../../components/blog/ImportedYandexBusinessArticle";
import type { ArticleEntry } from "../../lib/yandexBusinessBlogTypes";

const data = article as ArticleEntry;

export default function Page() {
  return (
    <ImportedYandexBusinessArticle
      slug="context-offline"
      title={data.title}
      description={data.description}
      bodyHtml={data.bodyHtml}
    />
  );
}
