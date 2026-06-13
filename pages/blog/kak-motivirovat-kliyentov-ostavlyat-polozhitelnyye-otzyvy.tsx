import article from "../../data/yandex-blog-articles/kak-motivirovat-kliyentov-ostavlyat-polozhitelnyye-otzyvy.json";
import ImportedYandexBusinessArticle from "../../components/blog/ImportedYandexBusinessArticle";
import type { ArticleEntry } from "../../lib/yandexBusinessBlogTypes";

const data = article as ArticleEntry;

export default function Page() {
  return (
    <ImportedYandexBusinessArticle
      slug="kak-motivirovat-kliyentov-ostavlyat-polozhitelnyye-otzyvy"
      title={data.title}
      description={data.description}
      bodyHtml={data.bodyHtml}
    />
  );
}
