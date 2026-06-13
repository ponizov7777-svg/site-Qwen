import article from "../../data/yandex-blog-articles/mozhno-li-udalyat-ili-ispravlyat-otzyvy-v-yandeks-kartakh.json";
import ImportedYandexBusinessArticle from "../../components/blog/ImportedYandexBusinessArticle";
import type { ArticleEntry } from "../../lib/yandexBusinessBlogTypes";

const data = article as ArticleEntry;

export default function Page() {
  return (
    <ImportedYandexBusinessArticle
      slug="mozhno-li-udalyat-ili-ispravlyat-otzyvy-v-yandeks-kartakh"
      title={data.title}
      description={data.description}
      bodyHtml={data.bodyHtml}
    />
  );
}
