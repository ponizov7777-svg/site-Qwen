import article from "../../data/yandex-blog-articles/kak-vyvesti-kompaniyu-v-top-poiska-na-yandeks-kartah.json";
import ImportedYandexBusinessArticle from "../../components/blog/ImportedYandexBusinessArticle";
import type { ArticleEntry } from "../../lib/yandexBusinessBlogTypes";

const data = article as ArticleEntry;

export default function Page() {
  return (
    <ImportedYandexBusinessArticle
      slug="kak-vyvesti-kompaniyu-v-top-poiska-na-yandeks-kartah"
      title={data.title}
      description={data.description}
      bodyHtml={data.bodyHtml}
    />
  );
}
