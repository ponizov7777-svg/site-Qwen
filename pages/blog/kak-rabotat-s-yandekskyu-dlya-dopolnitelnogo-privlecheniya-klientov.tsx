import article from "../../data/yandex-blog-articles/kak-rabotat-s-yandekskyu-dlya-dopolnitelnogo-privlecheniya-klientov.json";
import ImportedYandexBusinessArticle from "../../components/blog/ImportedYandexBusinessArticle";
import type { ArticleEntry } from "../../lib/yandexBusinessBlogTypes";

const data = article as ArticleEntry;

export default function Page() {
  return (
    <ImportedYandexBusinessArticle
      slug="kak-rabotat-s-yandekskyu-dlya-dopolnitelnogo-privlecheniya-klientov"
      title={data.title}
      description={data.description}
      bodyHtml={data.bodyHtml}
    />
  );
}
