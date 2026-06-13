import article from "../../data/yandex-blog-articles/kak-pravilno-sozdat-i-oformit-kartochku-kompanii-v-yandekse.json";
import ImportedYandexBusinessArticle from "../../components/blog/ImportedYandexBusinessArticle";
import type { ArticleEntry } from "../../lib/yandexBusinessBlogTypes";

const data = article as ArticleEntry;

export default function Page() {
  return (
    <ImportedYandexBusinessArticle
      slug="kak-pravilno-sozdat-i-oformit-kartochku-kompanii-v-yandekse"
      title={data.title}
      description={data.description}
      bodyHtml={data.bodyHtml}
    />
  );
}
