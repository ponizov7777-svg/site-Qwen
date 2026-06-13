import article from "../../data/yandex-blog-articles/kak-otslezhivat-zvonki-i-obrashcheniya-iz-yandeks-kart.json";
import ImportedYandexBusinessArticle from "../../components/blog/ImportedYandexBusinessArticle";
import type { ArticleEntry } from "../../lib/yandexBusinessBlogTypes";

const data = article as ArticleEntry;

export default function Page() {
  return (
    <ImportedYandexBusinessArticle
      slug="kak-otslezhivat-zvonki-i-obrashcheniya-iz-yandeks-kart"
      title={data.title}
      description={data.description}
      bodyHtml={data.bodyHtml}
    />
  );
}
