import article from "../../data/yandex-blog-articles/analiz-lokalnyh-konkurentov.json";
import ImportedYandexBusinessArticle from "../../components/blog/ImportedYandexBusinessArticle";
import type { ArticleEntry } from "../../lib/yandexBusinessBlogTypes";

const data = article as ArticleEntry;

export default function Page() {
  return (
    <ImportedYandexBusinessArticle
      slug="analiz-lokalnyh-konkurentov"
      title={data.title}
      description={data.description}
      bodyHtml={data.bodyHtml}
    />
  );
}
