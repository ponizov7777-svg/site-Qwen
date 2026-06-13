import article from "../../data/yandex-blog-articles/kak-reagirovat-na-negativnyye-otzyvy-v-yandeks-biznese.json";
import ImportedYandexBusinessArticle from "../../components/blog/ImportedYandexBusinessArticle";
import type { ArticleEntry } from "../../lib/yandexBusinessBlogTypes";

const data = article as ArticleEntry;

export default function Page() {
  return (
    <ImportedYandexBusinessArticle
      slug="kak-reagirovat-na-negativnyye-otzyvy-v-yandeks-biznese"
      title={data.title}
      description={data.description}
      bodyHtml={data.bodyHtml}
    />
  );
}
