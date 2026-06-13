import article from "../../data/yandex-blog-articles/kak-ispolzovat-geometki-i-heshtegi-dlya-rosta-trafika.json";
import ImportedYandexBusinessArticle from "../../components/blog/ImportedYandexBusinessArticle";
import type { ArticleEntry } from "../../lib/yandexBusinessBlogTypes";

const data = article as ArticleEntry;

export default function Page() {
  return (
    <ImportedYandexBusinessArticle
      slug="kak-ispolzovat-geometki-i-heshtegi-dlya-rosta-trafika"
      title={data.title}
      description={data.description}
      bodyHtml={data.bodyHtml}
    />
  );
}
