import article from "../../data/yandex-blog-articles/kak-dobavit-neskolko-filialov-kompanii-v-yandeks-biznes.json";
import ImportedYandexBusinessArticle from "../../components/blog/ImportedYandexBusinessArticle";
import type { ArticleEntry } from "../../lib/yandexBusinessBlogTypes";

const data = article as ArticleEntry;

export default function Page() {
  return (
    <ImportedYandexBusinessArticle
      slug="kak-dobavit-neskolko-filialov-kompanii-v-yandeks-biznes"
      title={data.title}
      description={data.description}
      bodyHtml={data.bodyHtml}
    />
  );
}
